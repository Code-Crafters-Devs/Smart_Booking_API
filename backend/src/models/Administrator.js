class Administrator {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Method to update administrator details
    updateDetails(name, email) {
        this.name = name;
        this.email = email;
    }

    // Method to validate administrator credentials
    validateCredentials(inputPassword) {
        return this.password === inputPassword;
    }

    // Method to reset password
    resetPassword(newPassword) {
        this.password = newPassword;
    }
}

module.exports = Administrator;