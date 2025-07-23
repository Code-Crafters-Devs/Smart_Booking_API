const express = require('express');
const router = express.Router();
const authorizeRole = require('../middleware/authorizeRole');

// Guest routes
router.get('/guest/profile', 
  authorizeRole('guest'), 
  guestController.getGuestProfile
);

router.put('/guest/profile', 
  authorizeRole('guest'), 
  guestController.updateGuestProfile
);

// Admin routes
router.get('/admin/users', 
  authorizeRole('admin'), 
  adminController.getAllUsers
);

router.put('/admin/users/:id', 
  authorizeRole('admin'), 
  adminController.manageUser
);

// Provider routes would go here...

module.exports = router;