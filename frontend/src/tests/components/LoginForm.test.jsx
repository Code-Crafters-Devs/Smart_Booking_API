import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../../../components/auth/LoginForm';

describe('LoginForm', () => {
    test('renders LoginForm component', () => {
        render(<LoginForm />);
        const loginHeading = screen.getByText(/login/i);
        expect(loginHeading).toBeInTheDocument();
    });

    test('allows user to input email and password', () => {
        render(<LoginForm />);
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput.value).toBe('password123');
    });

    test('submits the form with correct data', () => {
        const handleSubmit = jest.fn();
        render(<LoginForm onSubmit={handleSubmit} />);
        
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(handleSubmit).toHaveBeenCalledWith({
            email: 'test@example.com',
            password: 'password123',
        });
    });
});