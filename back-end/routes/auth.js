const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { User } = req.app.get('models');
  const { first_name, last_name, email, password, role_id } = req.body;
  
  try {
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
  const { User } = req.app.get('models');
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { id: user.id, role_id: user.role_id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1d' }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;