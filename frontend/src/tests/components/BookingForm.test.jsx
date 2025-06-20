import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from '../../components/booking/BookingForm';

describe('BookingForm', () => {
    test('renders BookingForm component', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText(/create a new booking/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('has a submit button', () => {
        render(<BookingForm />);
        const buttonElement = screen.getByRole('button', { name: /submit/i });
        expect(buttonElement).toBeInTheDocument();
    });

    // Add more tests as needed
});