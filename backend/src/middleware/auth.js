const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token is not valid.' });
        }

        req.user = decoded;
        next();
    });
};

const isAdmin = (req, res, next) => {
    User.findById(req.user.id)
        .then(user => {
            if (user && user.role === 'admin') {
                next();
            } else {
                return res.status(403).json({ message: 'Access denied, admin only.' });
            }
        })
        .catch(err => res.status(500).json({ message: 'Server error.' }));
};

module.exports = {
    authMiddleware,
    isAdmin
};