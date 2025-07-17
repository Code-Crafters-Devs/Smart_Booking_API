import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, AlertCircle } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login submitted:', formData);
      alert('Login successful!');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrors({ email: 'Please enter your email address' });
      return;
    }
    alert('Password reset link sent to your email!');
    setShowForgotPassword(false);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    formContainer: {
      width: '100%',
      maxWidth: '400px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '40px',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    input: {
      width: '90%',
      padding: '16px 16px 16px 48px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      fontSize: '16px'
    },
    submitBtn: {
      width: '100%',
      padding: '16px',
      background: 'linear-gradient(45deg, #a855f7, #3b82f6)',
      border: 'none',
      borderRadius: '12px',
      color: 'white',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '8px'
    },
    link: {
      color: '#c084fc',
      cursor: 'pointer'
    }
  };

  if (showForgotPassword) {
    return (
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <button onClick={() => setShowForgotPassword(false)} style={{ color: '#c084fc', background: 'none', border: 'none', cursor: 'pointer' }}>
            <ArrowLeft size={16} style={{ marginRight: '8px' }} />
            Back to Login
          </button>

          <div style={styles.header}>
            <h2 style={styles.title}>Reset Password</h2>
            <p style={{ color: '#cbd5e1' }}>Enter your email to receive a reset link</p>
          </div>

          <form onSubmit={handleForgotPassword}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={20} style={{ position: 'absolute', left: '16px', top: '16px' }} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  style={styles.input}
                />
              </div>
              {errors.email && (
                <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>
                  <AlertCircle size={12} style={{ marginRight: '4px' }} />
                  {errors.email}
                </div>
              )}
            </div>

            <button type="submit" style={styles.submitBtn}>
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome Back</h2>
          <p style={{ color: '#cbd5e1' }}>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>Role</label>
            <div style={{ position: 'relative' }}>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px 8px 8px 32px',
                  background: 'rgba(48, 2, 86, 0.2)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  appearance: 'none',
                  boxSizing: 'border-box',
                }}
                className="input"
              >
                <option value="Guest">Guest</option>
                <option value="Provider">Provider</option>
              </select>
              {/* Dropdown icon */}
              <svg style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                width: 18,
                height: 18,
                fill: 'none',
                stroke: '#fafafaff',
                strokeWidth: 2
              }} viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={20} style={{ position: 'absolute', left: '16px', top: '16px' }} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={styles.input}
              />
            </div>
            {errors.email && (
              <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>
                <AlertCircle size={12} style={{ marginRight: '4px' }} />
                {errors.email}
              </div>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={20} style={{ position: 'absolute', left: '16px', top: '16px' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                style={styles.input}
              />
              <div onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '16px', top: '16px', cursor: 'pointer' }}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
            {errors.password && (
              <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>
                <AlertCircle size={12} style={{ marginRight: '4px' }} />
                {errors.password}
              </div>
            )}
          </div>

          <button type="submit" style={styles.submitBtn}>
            Sign In
          </button>
        </form>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <span style={styles.link} onClick={() => setShowForgotPassword(true)}>
            Forgot Password?
          </span>
          <span style={styles.link} onClick={() => window.location.href = '/register'}>
            Don't have an account? Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;