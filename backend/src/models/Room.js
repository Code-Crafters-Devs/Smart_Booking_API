class Room {
    constructor(id, type, price, availability, amenities) {
        this.id = id;
        this.type = type;
        this.price = price;
        this.availability = availability;
        this.amenities = amenities;
    }

    isAvailable() {
        return this.availability > 0;
    }

    bookRoom() {
        if (this.isAvailable()) {
            this.availability -= 1;
            return true;
        }
        return false;
    }

    releaseRoom() {
        this.availability += 1;
    }
}

module.exports = Room;