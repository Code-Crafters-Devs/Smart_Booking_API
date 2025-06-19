import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

export const register = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    const newUser = new User({
        ...userData,
        password: hashedPassword,
    });
    return await newUser.save();
};

export const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });
    return { token, user };
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, jwtSecret);
    } catch (error) {
        throw new Error('Invalid token');
    }
};