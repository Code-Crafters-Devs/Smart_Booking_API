class Guest {
    constructor(name, email, phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    // Method to get guest details
    getDetails() {
        return {
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
        };
    }

    // Method to update guest details
    updateDetails(newDetails) {
        this.name = newDetails.name || this.name;
        this.email = newDetails.email || this.email;
        this.phoneNumber = newDetails.phoneNumber || this.phoneNumber;
    }
}

module.exports = Guest;