import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;