const express = require('express');
const roomController = require('../controllers/roomController');
const { auth } = require('../middleware/auth');
const { validateRoom } = require('../middleware/validation');

const router = express.Router();

router.get('/', roomController.getAllRooms);
router.get('/:id', roomController.getRoomById);
router.post('/', auth, validateRoom, roomController.createRoom);
router.put('/:id', auth, validateRoom, roomController.updateRoom);
router.delete('/:id', auth, roomController.deleteRoom);

module.exports = router;