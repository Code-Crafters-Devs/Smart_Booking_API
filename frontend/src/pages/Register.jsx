import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;