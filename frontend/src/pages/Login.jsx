import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, AlertCircle, Menu, X } from 'lucide-react';

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'Guest'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL.replace(/\/$/, '')}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          })
        });
        if (response.ok) {
          const data = await response.json();
          // Decode JWT to get role_id (or fetch user info if needed)
          const token = data.token;
          // Save token if needed: localStorage.setItem('token', token);
          // Decode token to get role_id
          const payload = JSON.parse(atob(token.split('.')[1]));
          const roleId = payload.role_id;
          // Map role_id to role name
          let role = 'Guest';
          if (roleId === 1) role = 'Provider';
          else if (roleId === 2) role = 'Guest';
          else if (roleId === 3) role = 'Admin';
          // Redirect based on role
          if (role === 'Admin') history.push('/admin');
          else if (role === 'Provider') history.push('/provider');
          else history.push('/home');
        } else {
          const data = await response.json();
          alert(data.error || 'Login failed');
        }
      } catch (err) {
        alert('Network error. Please try again.');
      }
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
      background: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) no-repeat center center fixed',
      backgroundSize: 'cover',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    formContainer: {
      width: '100%',
      maxWidth: '400px',
      background: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(8px)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '40px',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      fontWeight: 'bold'
    },
    logoText: {
      fontSize: '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #60a5fa, #c084fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    authButtons: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    signupBtn: {
      padding: '8px 24px',
      background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
      border: 'none',
      borderRadius: '24px',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    menuBtn: {
      background: 'transparent',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      display: 'none',
      '@media (max-width: 768px)': {
        display: 'block'
      }
    },
    mobileMenu: {
      marginTop: '16px',
      paddingBottom: '16px',
      borderTop: '1px solid rgba(148, 163, 184, 0.3)',
      display: 'none',
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'block' : 'none'
      }
    },
    mobileNav: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginTop: '16px'
    },
    mobileAuthButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      paddingTop: '16px'
    },
    formHeader: {
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
    inputContainer: {
      position: 'relative',
      width: '100%'
    },
    input: {
      width: '100%',
      padding: '16px 16px 16px 48px',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      fontSize: '16px',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease',
      '&:focus': {
        background: 'rgba(255, 255, 255, 0.25)',
        borderColor: '#a855f7',
        outline: 'none'
      }
    },
    select: {
      width: '100%',
      padding: '16px 16px 16px 48px',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      fontSize: '16px',
      appearance: 'none',
      cursor: 'pointer',
      boxSizing: 'border-box'
    },
    inputIcon: {
      position: 'absolute',
      left: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    eyeIcon: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    submitBtn: {
      width: '100%',
      padding: '16px',
      background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
      border: 'none',
      borderRadius: '12px',
      color: 'white',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '8px',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
      }
    },
    link: {
      color: '#c084fc',
      cursor: 'pointer',
      textAlign: 'center',
      display: 'block',
      marginTop: '20px',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#a855f7'
      }
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

  const keyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.4; }
    }

    .signup-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .link:hover {
      color: #a855f7 !important;
    }

    .input:focus {
      border-color: #a855f7 !important;
    }

    @media (max-width: 768px) {
      .nav {
        display: none !important;
      }

      .auth-buttons {
        display: none !important;
      }

      .menu-btn {
        display: block !important;
      }

      .mobile-menu {
        display: ${isMenuOpen ? 'block' : 'none'} !important;
      }
    }
  `;

  if (showForgotPassword) {
    return (
      <>
        <style>{keyframes}</style>
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                <span>H</span>
              </div>
              <span style={styles.logoText}>
                HotelSmart
              </span>
            </div>

            <nav style={styles.nav} className="nav">
              {/* Navigation links would go here */}
            </nav>

            <div style={styles.authButtons} className="auth-buttons">
              <button 
                style={styles.signupBtn}
                className="signup-btn"
                onClick={() => window.location.href = '/register'}
              >
                Sign Up
              </button>
            </div>

            <button
              style={styles.menuBtn}
              className="menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div style={styles.mobileMenu} className="mobile-menu">
              <nav style={styles.mobileNav}>
                {/* Mobile navigation links would go here */}
                <div style={styles.mobileAuthButtons}>
                  <button 
                    style={styles.signupBtn} 
                    className="signup-btn"
                    onClick={() => window.location.href = '/register'}
                  >
                    Sign Up
                  </button>
                </div>
              </nav>
            </div>
          )}
        </header>
        <div style={styles.container}>
          <div style={styles.formContainer}>
            <button 
              onClick={() => setShowForgotPassword(false)} 
              style={{ 
                color: '#c084fc', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px'
              }}
            >
              <ArrowLeft size={16} style={{ marginRight: '8px' }} />
              Back to Login
            </button>

            <div style={styles.formHeader}>
              <h2 style={styles.title}>Reset Password</h2>
              <p style={{ color: '#cbd5e1' }}>Enter your email to receive a reset link</p>
            </div>

            <form onSubmit={handleForgotPassword}>
              <div style={styles.inputGroup}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Email Address</label>
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

              <button type="submit" style={styles.submitBtn}>
                Send Reset Link
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{keyframes}</style>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <span>H</span>
            </div>
            <span style={styles.logoText}>
              HotelSmart
            </span>
          </div>

          <nav style={styles.nav} className="nav">
            {/* Navigation links would go here */}
          </nav>

          <div style={styles.authButtons} className="auth-buttons">
            <button 
              style={styles.signupBtn}
              className="signup-btn"
              onClick={() => window.location.href = '/register'}
            >
              Sign Up
            </button>
          </div>

          <button
            style={styles.menuBtn}
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div style={styles.mobileMenu} className="mobile-menu">
            <nav style={styles.mobileNav}>
              {/* Mobile navigation links would go here */}
              <div style={styles.mobileAuthButtons}>
                <button 
                  style={styles.signupBtn} 
                  className="signup-btn"
                  onClick={() => window.location.href = '/register'}
                >
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <div style={styles.formHeader}>
            <h2 style={styles.title}>Welcome Back</h2>
            <p style={{ color: '#cbd5e1' }}>Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="role-select" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Role</label>
              <div style={styles.inputContainer}>
                <svg
                  style={styles.inputIcon}
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <select
                  id="role-select"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="Guest">Guest</option>
                  <option value="Provider">Provider</option>
                  <option value="Guest">Admin</option>
                </select>
                <svg
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="email-input" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Email Address</label>
              <div style={styles.inputContainer}>
                <Mail size={20} style={styles.inputIcon} />
                <input
                  id="email-input"
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

            <div style={styles.inputGroup}>
              <label htmlFor="password-input" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Password</label>
              <div style={styles.inputContainer}>
                <Lock size={20} style={styles.inputIcon} />
                <input
                  id="password-input"
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
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setShowPassword(!showPassword); }}
                  aria-label="Toggle password visibility"
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

            <button type="submit" style={styles.submitBtn}>
              Sign In
            </button>
          </form>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <span
              style={styles.link}
              onClick={() => setShowForgotPassword(true)}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setShowForgotPassword(true); }}
              aria-label="Forgot Password"
            >
              Forgot Password?
            </span>
            <span
              style={styles.link}
              onClick={() => window.location.href = '/register'}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.location.href = '/register'; }}
              aria-label="Don't have an account? Sign up"
            >
              Don&apos;t have an account? Sign up
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;