class Recommendation {
    constructor(userId, providerId, roomId, rating, comments) {
        this.userId = userId;
        this.providerId = providerId;
        this.roomId = roomId;
        this.rating = rating;
        this.comments = comments;
        this.createdAt = new Date();
    }

    static validate(recommendation) {
        if (!recommendation.userId || !recommendation.providerId || !recommendation.roomId) {
            throw new Error('User ID, Provider ID, and Room ID are required.');
        }
        if (recommendation.rating < 1 || recommendation.rating > 5) {
            throw new Error('Rating must be between 1 and 5.');
        }
    }
}

module.exports = Recommendation;