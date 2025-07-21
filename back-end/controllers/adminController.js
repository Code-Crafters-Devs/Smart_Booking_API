const { User, Booking, Guest, Provider } = require('../models');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [
        { model: Guest, as: 'guest' },
        { model: Provider, as: 'provider' },
        { model: Administrator, as: 'administrator' }
      ]
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.manageUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) throw new Error('User not found');
    
    // Admin can update any user's status
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.getSystemStats = async (req, res, next) => {
  try {
    const stats = {
      totalUsers: await User.count(),
      totalBookings: await Booking.count(),
      activeProviders: await Provider.count({
        include: [{
          model: User,
          where: { is_active: true }
        }]
      })
    };
    res.json(stats);
  } catch (err) {
    next(err);
  }
};