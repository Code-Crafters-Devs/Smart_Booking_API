class RoomType {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    // Method to get room type details
    getDetails() {
        return {
            name: this.name,
            description: this.description
        };
    }
}

module.exports = RoomType;