const { Booking, Room, User } = require('../models');
const Joi = require('joi');
const moment = require('moment');

const bookingSchema = Joi.object({
  room_id: Joi.number().integer().required(),
  check_in: Joi.date().iso().required(),
  check_out: Joi.date().iso().greater(Joi.ref('check_in')).required(),
  guest_count: Joi.number().integer().min(1).required(),
  amenities: Joi.array().items(Joi.number().integer()).default([])
});

exports.createBooking = async (req, res, next) => {
  try {
    if (req.user.role !== 'guest') {
      return res.status(403).json({ error: 'Only guests can create bookings' });
    }

    const { error, value } = bookingSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Check room availability
    const existingBooking = await Booking.findOne({
      where: {
        room_id: value.room_id,
        [Op.or]: [
          {
            check_in: { [Op.between]: [value.check_in, value.check_out] }
          },
          {
            check_out: { [Op.between]: [value.check_in, value.check_out] }
          },
          {
            [Op.and]: [
              { check_in: { [Op.lte]: value.check_in } },
              { check_out: { [Op.gte]: value.check_out } }
            ]
          }
        ],
        status: { [Op.notIn]: ['cancelled', 'checked_out'] }
      }
    });

    if (existingBooking) {
      return res.status(409).json({ error: 'Room not available for selected dates' });
    }

    const room = await Room.findByPk(value.room_id, {
      include: ['amenities']
    });

    if (!room || room.status !== 'active') {
      return res.status(404).json({ error: 'Room not available' });
    }

    if (value.guest_count > room.capacity) {
      return res.status(400).json({ error: 'Guest count exceeds room capacity' });
    }

    // Calculate total price
    const duration = moment(value.check_out).diff(moment(value.check_in), 'days');
    let total_price = room.base_price * duration;

    // Add amenities cost
    const selectedAmenities = room.amenities.filter(amenity => 
      value.amenities.includes(amenity.id)
    );
    selectedAmenities.forEach(amenity => {
      total_price += amenity.price;
    });

    // Create booking
    const booking = await Booking.create({
      room_id: value.room_id,
      guest_id: req.user.id,
      check_in: value.check_in,
      check_out: value.check_out,
      guest_count: value.guest_count,
      base_price: room.base_price,
      amenities_price: total_price - (room.base_price * duration),
      total_price,
      status: 'pending'
    });

    // In production, you would integrate with a payment gateway here
    // For MVP, we'll simulate payment success
    await booking.update({ status: 'confirmed' });

    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
};

exports.getUserBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.findAll({
      where: { guest_id: req.user.id },
      include: [
        { 
          model: Room,
          include: ['room_type', 'provider']
        }
      ],
      order: [['check_in', 'DESC']]
    });

    res.json(bookings);
  } catch (err) {
    next(err);
  }
};