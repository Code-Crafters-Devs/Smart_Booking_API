import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Shield, AlertCircle } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Guest' // default role
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Confirm password validation (only for sign up)
    if (isSignUp) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      alert(isSignUp ? 'Account created successfully!' : 'Login successful!');
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
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    backgroundElements: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    },
    bgCircle1: {
      position: 'absolute',
      top: '-160px',
      right: '-160px',
      width: '384px',
      height: '384px',
      background: 'rgba(168, 85, 247, 0.2)',
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'pulse 2s ease-in-out infinite'
    },
    bgCircle2: {
      position: 'absolute',
      bottom: '-160px',
      left: '-160px',
      width: '384px',
      height: '384px',
      background: 'rgba(59, 130, 246, 0.2)',
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'pulse 2s ease-in-out infinite 1s'
    },
    formContainer: {
      position: 'relative',
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
    logo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginBottom: '24px'
    },
    logoIcon: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(45deg, #a855f7, #3b82f6)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    logoText: {
      fontSize: '28px',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #c084fc, #60a5fa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px',
      textAlign: 'center'
    },
    subtitle: {
      color: '#cbd5e1',
      textAlign: 'center',
      fontSize: '14px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    inputGroup: {
      position: 'relative'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#e2e8f0'
    },
    inputContainer: {
      position: 'relative'
    },
    inputIcon: {
      position: 'absolute',
      left: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#94a3b8',
      width: '20px',
      height: '20px'
    },
    input: {
      width: '100%',
      padding: '16px 16px 16px 48px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    },
    inputError: {
      borderColor: '#ef4444'
    },
    eyeIcon: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#94a3b8',
      width: '20px',
      height: '20px',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    errorMessage: {
      color: '#ef4444',
      fontSize: '12px',
      marginTop: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
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
      transition: 'all 0.3s ease',
      marginTop: '8px'
    },
    linkContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      marginTop: '20px',
      flexWrap: 'wrap'
    },
    link: {
      color: '#c084fc',
      textDecoration: 'none',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      margin: '24px 0',
      color: '#64748b',
      fontSize: '14px'
    },
    dividerLine: {
      flex: 1,
      height: '1px',
      background: 'rgba(255, 255, 255, 0.2)'
    },
    dividerText: {
      padding: '0 16px'
    },
    backBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#c084fc',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      marginBottom: '16px',
      transition: 'color 0.3s ease'
    },
    forgotPasswordForm: {
      textAlign: 'center'
    },
    forgotPasswordText: {
      color: '#cbd5e1',
      fontSize: '14px',
      marginBottom: '20px',
      lineHeight: 1.5
    }
  };

  const keyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.4; }
    }

    .submit-btn:hover {
      background: linear-gradient(45deg, #9333ea, #2563eb) !important;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(168, 85, 247, 0.3);
    }

    .link:hover {
      color: #a855f7 !important;
    }

    .input:focus {
      border-color: #c084fc !important;
      box-shadow: 0 0 0 3px rgba(192, 132, 252, 0.1);
    }

    .eye-icon:hover {
      color: #c084fc !important;
    }

    .back-btn:hover {
      color: #a855f7 !important;
    }

    @media (max-width: 480px) {
      .form-container {
        padding: 24px !important;
        margin: 10px !important;
      }
      
      .logo-text {
        font-size: 24px !important;
      }
      
      .title {
        font-size: 20px !important;
      }
      
      .link-container {
        flex-direction: column !important;
        gap: 8px !important;
      }
    }
  `;

  if (showForgotPassword) {
    return (
      <div style={styles.container}>
        <style>{keyframes}</style>
        
        <div style={styles.backgroundElements}>
          <div style={styles.bgCircle1}></div>
          <div style={styles.bgCircle2}></div>
        </div>

        <div style={styles.formContainer} className="form-container">
          <button 
            style={styles.backBtn} 
            className="back-btn"
            onClick={() => setShowForgotPassword(false)}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            Back to Login
          </button>

          <div style={styles.header}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                <span>H</span>
              </div>
              <span style={styles.logoText} className="logo-text">HotelSmart</span>
            </div>
            <h2 style={styles.title}>Reset Password</h2>
            <p style={styles.subtitle}>Enter your email to receive a reset link</p>
          </div>

          <div style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <div style={styles.inputContainer}>
                <Mail style={styles.inputIcon} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  style={{
                    ...styles.input,
                    ...(errors.email ? styles.inputError : {})
                  }}
                  className="input"
                />
              </div>
              {errors.email && (
                <div style={styles.errorMessage}>
                  <AlertCircle style={{ width: '12px', height: '12px' }} />
                  {errors.email}
                </div>
              )}
            </div>

            <button onClick={handleForgotPassword} style={styles.submitBtn} className="submit-btn">
              Send Reset Link
            </button>
          </div>

          <div style={styles.forgotPasswordForm}>
            <p style={styles.forgotPasswordText}>
              Remember your password?{' '}
              <span 
                style={styles.link} 
                className="link"
                onClick={() => setShowForgotPassword(false)}
              >
                Sign in here
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      ...styles.container,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
    }}>
      <style>{keyframes}</style>
      <div style={styles.backgroundElements}>
        <div style={styles.bgCircle1}></div>
        <div style={styles.bgCircle2}></div>
      </div>
      {/* Role Explanation Section */}
      <div
        style={{
          minWidth: 0,
          maxWidth: '320px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '20px',
          padding: '32px 24px',
          marginRight: '100px', // increased from '0' to '32px'
          color: '#e0e7ef',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          fontSize: '15px',
          fontFamily: 'inherit',
          border: '1px solid rgba(255,255,255,0.13)',
          backdropFilter: 'blur(10px)',
          marginBottom: '20px',
        }}
        className="role-explanation"
      >
        <h3 style={{fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#c084fc'}}>Which Role Should I Choose?</h3>
        <div>
          <strong style={{color: '#60a5fa'}}>Guest:</strong>
          <div style={{marginLeft: '8px', marginTop: '4px'}}>Book hotels, manage your reservations, and enjoy personalized recommendations. Choose this if you are looking to book a stay.</div>
        </div>
        <div>
          <strong style={{color: '#a855f7'}}>Provider:</strong>
          <div style={{marginLeft: '8px', marginTop: '4px'}}>List and manage your properties, view bookings, and connect with guests. Choose this if you own or manage a hotel/property.</div>
        </div>
      </div>
      {/* Form Container */}
      <div style={styles.formContainer} className="form-container">
        <div style={styles.header}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <span>H</span>
            </div>
            <span style={styles.logoText} className="logo-text">HotelSmart</span>
          </div>
          <h2 style={styles.title}>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
          <p style={styles.subtitle}>
            {isSignUp ? 'Sign up to start your journey' : 'Sign in to your account'}
          </p>
        </div>

        <div style={styles.form}>
          {/* Role Dropdown */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Role</label>
            <div style={styles.inputContainer}>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                style={{
                  ...styles.input,
                  paddingLeft: '16px',
                  appearance: 'none',
                  color: 'white',
                  background: 'rgba(255,255,255,0.1)'
                }}
                className="input"
              >
                <option value="Guest">Guest</option>
                <option value="Provider">Provider</option>
              </select>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={styles.inputContainer}>
              <Mail style={styles.inputIcon} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={{
                  ...styles.input,
                  ...(errors.email ? styles.inputError : {})
                }}
                className="input"
              />
            </div>
            {errors.email && (
              <div style={styles.errorMessage}>
                <AlertCircle style={{ width: '12px', height: '12px' }} />
                {errors.email}
              </div>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputContainer}>
              <Lock style={styles.inputIcon} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                style={{
                  ...styles.input,
                  ...(errors.password ? styles.inputError : {})
                }}
                className="input"
              />
              <div
                style={styles.eyeIcon}
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </div>
            </div>
            {errors.password && (
              <div style={styles.errorMessage}>
                <AlertCircle style={{ width: '12px', height: '12px' }} />
                {errors.password}
              </div>
            )}
          </div>

          {isSignUp && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Confirm Password</label>
              <div style={styles.inputContainer}>
                <Shield style={styles.inputIcon} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  style={{
                    ...styles.input,
                    ...(errors.confirmPassword ? styles.inputError : {})
                  }}
                  className="input"
                />
                <div
                  style={styles.eyeIcon}
                  className="eye-icon"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </div>
              </div>
              {errors.confirmPassword && (
                <div style={styles.errorMessage}>
                  <AlertCircle style={{ width: '12px', height: '12px' }} />
                  {errors.confirmPassword}
                </div>
              )}
            </div>
          )}

          <button onClick={handleSubmit} style={styles.submitBtn} className="submit-btn">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </div>

        <div style={styles.linkContainer} className="link-container">
          {!isSignUp && (
            <span 
              style={styles.link} 
              className="link"
              onClick={() => setShowForgotPassword(true)}
            >
              Forgot Password?
            </span>
          )}
          <span 
            style={styles.link} 
            className="link"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
