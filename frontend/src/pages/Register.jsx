import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Shield, AlertCircle, ChevronDown, Menu, X, User } from 'lucide-react';

const Register = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Guest'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Map role string to role_id
      const roleMap = { Guest: 2, Provider: 1, Admin: 3 };
      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        role_id: roleMap[formData.role] || 2
      };
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL.replace(/\/$/, '')}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (response.ok) {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: 'Guest'
          });
          alert('Account created successfully!');
          history.push('/login');
        } else {
          const data = await response.json();
          alert(data.error || 'Registration failed');
        }
      } catch (err) {
        alert('Network error. Please try again.');
      }
    }
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
    loginBtn: {
      padding: '8px 24px',
      color: 'white',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s ease'
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
    nameContainer: {
      display: 'flex',
      gap: '12px',
      width: '100%'
    },
    nameInputGroup: {
      flex: 1,
      marginBottom: '20px'
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
      padding: '16px 48px',
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
    selectIcon: {
      position: 'absolute',
      left: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    dropdownArrow: {
      position: 'absolute',
      right: '16px',
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

    .login-btn:hover {
      color: #c084fc !important;
    }

    .nav-link:hover {
      color: #c084fc !important;
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

  return (
    <>
      <style>{keyframes}</style>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div
            style={styles.logo}
            onClick={() => history.push('/')}
            role="button"
            tabIndex={0}
            aria-label="Go to landing page"
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') history.push('/'); }}
          >
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
              onClick={() => history.push('/login')}
            >
              Sign In
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
                <button style={styles.signupBtn} className="signup-btn">
                  Login
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <div style={styles.formHeader}>
            <h2 style={styles.title}>Create an Account</h2>
            <p style={{ color: '#cbd5e1' }}>Sign up to start your journey</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={styles.nameContainer}>
              <div style={styles.nameInputGroup}>
                <label htmlFor="firstName-input" style={styles.label}>First Name</label>
                <div style={styles.inputContainer}>
                  <User size={20} style={styles.inputIcon} />
                  <input
                    id="firstName-input"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    style={styles.input}
                  />
                </div>
                {errors.firstName && (
                  <div style={styles.error}>
                    <AlertCircle size={12} />
                    {errors.firstName}
                  </div>
                )}
              </div>

              <div style={styles.nameInputGroup}>
                <label htmlFor="lastName-input" style={styles.label}>Last Name</label>
                <div style={styles.inputContainer}>
                  <User size={20} style={styles.inputIcon} />
                  <input
                    id="lastName-input"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    style={styles.input}
                  />
                </div>
                {errors.lastName && (
                  <div style={styles.error}>
                    <AlertCircle size={12} />
                    {errors.lastName}
                  </div>
                )}
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="role-select" style={styles.label}>Role</label>
              <div style={styles.inputContainer}>
                <Shield size={20} style={styles.selectIcon} />
                <select
                  id="role-select"
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

            <div style={styles.inputGroup}>
              <label htmlFor="email-input" style={styles.label}>Email Address</label>
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
              <label htmlFor="password-input" style={styles.label}>Password</label>
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
                  aria-label="Toggle password visibility"
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setShowPassword(!showPassword); }}
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

            <div style={styles.inputGroup}>
              <label htmlFor="confirmPassword-input" style={styles.label}>Confirm Password</label>
              <div style={styles.inputContainer}>
                <Shield size={20} style={styles.inputIcon} />
                <input
                  id="confirmPassword-input"
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
                  role="button"
                  tabIndex={0}
                  aria-label="Toggle confirm password visibility"
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setShowConfirmPassword(!showConfirmPassword); }}
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

          <span
            style={styles.link}
            onClick={() => window.location.href = '/login'}
            role="button"
            tabIndex={0}
            aria-label="Already have an account? Sign in"
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.location.href = '/login'; }}
          >
            Already have an account? Sign in
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;