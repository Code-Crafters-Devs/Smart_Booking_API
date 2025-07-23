const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { User } = req.app.get('models');
  const { first_name, last_name, email, password, role_id } = req.body;
  console.log('Register request body:', req.body); // Debug log
  try {
    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ 
      first_name, 
      last_name, 
      email, 
      password_hash: hash, 
      role_id 
    });
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, role } = req.body;
  // Always return a successful login, no validation
  const token = 'dummy-token';
  const userProfile = {
    id: 1,
    first_name: 'Demo',
    last_name: 'User',
    email: email || 'demo@example.com',
    role: role || 'Guest'
  };
  res.json({ token, user: userProfile });
});

module.exports = router;

// Client-side code example (not to be included in the final file)
// const data = await response.json();
// const token = data.token;
// const user = data.user; // user profile object