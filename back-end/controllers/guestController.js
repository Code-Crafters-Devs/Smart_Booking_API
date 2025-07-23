const { User, Guest, Booking } = require('../models');

exports.getGuestProfile = async (req, res, next) => {
  try {
    const guest = await Guest.findByPk(req.user.guest.id, {
      include: [{
        model: User,
        as: 'user',
        attributes: ['first_name', 'last_name', 'email']
      }]
    });
    
    if (!guest) throw new Error('Guest not found');
    res.json(guest);
  } catch (err) {
    next(err);
  }
};

exports.updateGuestProfile = async (req, res, next) => {
  try {
    const guest = await Guest.findByPk(req.user.guest.id);
    if (!guest) throw new Error('Guest not found');
    
    await guest.update(req.body);
    res.json(guest);
  } catch (err) {
    next(err);
  }
};

exports.getGuestBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.findAll({
      where: { guest_id: req.user.guest.id },
      include: ['room']
    });
    res.json(bookings);
  } catch (err) {
    next(err);
  }
};