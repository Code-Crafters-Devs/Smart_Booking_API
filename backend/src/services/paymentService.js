const Payment = require('../models/Payment');

class PaymentService {
    async createPayment(paymentData) {
        try {
            const payment = new Payment(paymentData);
            await payment.save();
            return payment;
        } catch (error) {
            throw new Error('Error creating payment: ' + error.message);
        }
    }

    async getPaymentById(paymentId) {
        try {
            const payment = await Payment.findById(paymentId);
            if (!payment) {
                throw new Error('Payment not found');
            }
            return payment;
        } catch (error) {
            throw new Error('Error retrieving payment: ' + error.message);
        }
    }

    async updatePayment(paymentId, updateData) {
        try {
            const payment = await Payment.findByIdAndUpdate(paymentId, updateData, { new: true });
            if (!payment) {
                throw new Error('Payment not found');
            }
            return payment;
        } catch (error) {
            throw new Error('Error updating payment: ' + error.message);
        }
    }

    async deletePayment(paymentId) {
        try {
            const payment = await Payment.findByIdAndDelete(paymentId);
            if (!payment) {
                throw new Error('Payment not found');
            }
            return payment;
        } catch (error) {
            throw new Error('Error deleting payment: ' + error.message);
        }
    }
}

module.exports = new PaymentService();