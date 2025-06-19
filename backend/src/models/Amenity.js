class Amenity {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    static validate(amenity) {
        if (!amenity.name || typeof amenity.name !== 'string') {
            throw new Error('Invalid amenity name');
        }
        if (!amenity.description || typeof amenity.description !== 'string') {
            throw new Error('Invalid amenity description');
        }
    }
}

module.exports = Amenity;