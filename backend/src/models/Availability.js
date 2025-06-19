class Availability {
    constructor(roomId, date, isAvailable) {
        this.roomId = roomId; // ID of the room
        this.date = date; // Date for availability
        this.isAvailable = isAvailable; // Availability status
    }

    // Method to check availability
    static checkAvailability(roomId, date) {
        // Logic to check availability in the database
    }

    // Method to update availability
    static updateAvailability(roomId, date, isAvailable) {
        // Logic to update availability in the database
    }
}

module.exports = Availability;