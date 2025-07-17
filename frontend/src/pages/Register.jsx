import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Shield, AlertCircle, ChevronDown } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Guest'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Registration submitted:', formData);
      alert('Account created successfully!');
    }
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
    inputGroup: {
      marginBottom: '20px',
      width: '100%'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '14px',
      fontWeight: '500'
    },
    inputContainer: {
      position: 'relative',
      width: '100%'
    },
    input: {
      width: '100%',
      padding: '16px 16px 16px 48px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      fontSize: '16px',
      boxSizing: 'border-box'
    },
    select: {
      width: '100%',
      padding: '16px 48px',
      background: 'rgba(21, 12, 52, 0)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      color: 'white',
      fontSize: '16px',
      appearance: 'none',
      cursor: 'pointer',
      boxSizing: 'border-box',
      '&:focus': {
        outline: 'none',
        borderColor: '#a855f7'
      }
    },
    inputIcon: {
      position: 'absolute',
      left: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    },
    selectIcon: {
      position: 'absolute',
      left: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    },
    dropdownArrow: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    },
    eyeIcon: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer'
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
      cursor: 'pointer',
      textAlign: 'center',
      display: 'block',
      marginTop: '20px'
    },
    error: {
      color: '#ef4444',
      fontSize: '12px',
      marginTop: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  };

  return (


    
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <div style={styles.header}>
          <h2 style={styles.title}>Create an Account</h2>
          <p style={{ color: '#cbd5e1' }}>Sign up to start your journey</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Role Dropdown */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Role</label>
            <div style={styles.inputContainer}>
              <Shield size={20} style={styles.selectIcon} />
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                style={styles.select}
              >
                <option value="Guest">Guest</option>
                <option value="Provider">Provider</option>
                <option value="Admin">Admin</option>
                
              </select>
              <ChevronDown size={20} style={styles.dropdownArrow} />
            </div>
          </div>

          {/* Email Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={styles.inputContainer}>
              <Mail size={20} style={styles.inputIcon} />
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
              <div style={styles.error}>
                <AlertCircle size={12} />
                {errors.email}
              </div>
            )}
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputContainer}>
              <Lock size={20} style={styles.inputIcon} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                style={styles.input}
              />
              <div 
                onClick={() => setShowPassword(!showPassword)} 
                style={styles.eyeIcon}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
            {errors.password && (
              <div style={styles.error}>
                <AlertCircle size={12} />
                {errors.password}
              </div>
            )}
          </div>

          {/* Confirm Password Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <div style={styles.inputContainer}>
              <Shield size={20} style={styles.inputIcon} />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                style={styles.input}
              />
              <div 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                style={styles.eyeIcon}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
            {errors.confirmPassword && (
              <div style={styles.error}>
                <AlertCircle size={12} />
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <button type="submit" style={styles.submitBtn}>
            Create Account
          </button>
        </form>

        <span style={styles.link} onClick={() => window.location.href = '/login'}>
          Already have an account? Sign in
        </span>
      </div>
    </div>
  );
};

export default Register;