const Room = require('../models/Room');

// Get all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving rooms', error });
    }
};

// Get room by ID
exports.getRoomById = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await Room.findById(id);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving room', error });
    }
};

// Create a new room
exports.createRoom = async (req, res) => {
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        res.status(201).json(savedRoom);
    } catch (error) {
        res.status(400).json({ message: 'Error creating room', error });
    }
};

// Update room by ID
exports.updateRoom = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedRoom = await Room.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRoom) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(400).json({ message: 'Error updating room', error });
    }
};

// Delete room by ID
exports.deleteRoom = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRoom = await Room.findByIdAndDelete(id);
        if (!deletedRoom) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting room', error });
    }
};