import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Star, Zap, Shield, Globe, ChevronRight, Search, Menu, X } from 'lucide-react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Zap style={{ width: '32px', height: '32px' }} />,
      title: "Instant Booking",
      description: "Book your perfect stay in seconds with our AI-powered recommendation engine"
    },
    {
      icon: <Shield style={{ width: '32px', height: '32px' }} />,
      title: "Secure & Safe",
      description: "Your data and payments are protected with enterprise-grade security"
    },
    {
      icon: <Globe style={{ width: '32px', height: '32px' }} />,
      title: "Global Network",
      description: "Access millions of properties worldwide with real-time availability"
    }
  ];

  const stats = [
    { number: "2M+", label: "Properties" },
    { number: "50K+", label: "Cities" },
    { number: "15M+", label: "Happy Guests" },
    { number: "4.9", label: "Average Rating" }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) no-repeat center center fixed',
      backgroundSize: 'cover',
      color: 'white',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrollY > 50 ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
      backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
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
      gap: '32px'
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
      gap: '16px'
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
      display: 'none'
    },
    mobileMenu: {
      marginTop: '16px',
      paddingBottom: '16px',
      borderTop: '1px solid rgba(148, 163, 184, 0.3)',
      display: 'none'
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
    heroSection: {
      position: 'relative',
      paddingTop: '160px',
      paddingBottom: '80px',
      textAlign: 'center'
    },
    heroContent: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 20px'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      background: 'linear-gradient(45deg, white, #e2e8f0, #cbd5e1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: 1.2
    },
    heroTitleAccent: {
      background: 'linear-gradient(45deg, #c084fc, #60a5fa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#cbd5e1',
      marginBottom: '32px',
      lineHeight: 1.5
    },
    searchContainer: {
      maxWidth: '600px',
      margin: '0 auto 48px'
    },
    searchBox: {
      background: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    inputGroup: {
      position: 'relative',
      marginBottom: '16px'
    },
    inputIcon: {
      position: 'absolute',
      left: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    input: {
      width: '100%',
      padding: '16px 16px 16px 48px',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    searchBtn: {
      width: '100%',
      background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
      border: 'none',
      padding: '16px',
      borderRadius: '12px',
      color: 'white',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    ctaButtons: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '32px'
    },
    primaryBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '16px 32px',
      background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
      border: 'none',
      borderRadius: '24px',
      color: 'white',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    secondaryBtn: {
      padding: '16px 32px',
      background: 'transparent',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '24px',
      color: 'white',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    statsSection: {
      padding: '80px 24px',
      background: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(10px)'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '32px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #c084fc, #60a5fa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '8px'
    },
    statLabel: {
      color: '#cbd5e1',
      fontSize: '16px'
    },
    featuresSection: {
      padding: '80px 24px',
      background: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(10px)'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '64px',
      maxWidth: '1200px',
      margin: '0 auto 64px'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '24px',
      background: 'linear-gradient(45deg, white, #cbd5e1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    sectionSubtitle: {
      fontSize: '18px',
      color: '#cbd5e1',
      maxWidth: '600px',
      margin: '0 auto'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    featureCard: {
      padding: '32px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    featureIcon: {
      color: '#c084fc',
      marginBottom: '16px',
      transition: 'transform 0.3s ease'
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '16px'
    },
    featureDescription: {
      color: '#cbd5e1',
      lineHeight: 1.6
    },
    footer: {
      padding: '48px 24px',
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(148, 163, 184, 0.3)',
      textAlign: 'center'
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginBottom: '16px'
    },
    footerLogoIcon: {
      width: '32px',
      height: '32px',
      background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 'bold'
    },
    footerText: {
      color: '#94a3b8'
    }
  };

  const keyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.4; }
    }

    .search-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .primary-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .secondary-btn:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }

    .signup-btn:hover {
      transform: scale(1.05);
    }

    .login-btn:hover {
      color: #c084fc !important;
    }

    .nav-link:hover {
      color: #c084fc !important;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.2) !important;
    }

    .feature-card:hover .feature-icon {
      transform: scale(1.1);
    }

    .input:focus {
      border-color: #c084fc !important;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2rem !important;
      }

      .hero-subtitle {
        font-size: 1rem !important;
      }

      .section-title {
        font-size: 2rem !important;
      }

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
        display: block !important;
      }

      .cta-buttons {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          {/* Logo */}
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <span>H</span>
            </div>
            <span style={styles.logoText}>
              HotelSmart
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav style={styles.nav} className="nav">
            <a href="#" style={styles.navLink} className="nav-link">Features</a>
            <a href="#" style={styles.navLink} className="nav-link">About</a>
            <a href="#" style={styles.navLink} className="nav-link">Contact</a>
          </nav>

          {/* Auth Buttons */}
          <div style={styles.authButtons} className="auth-buttons">
            <button
              style={styles.loginBtn}
              className="login-btn"
              onClick={() => history.push('/login')}
            >
              Login
            </button>
            <button 
              style={styles.signupBtn}
              className="signup-btn"
              onClick={() => history.push('/register')}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={styles.menuBtn}
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={styles.mobileMenu} className="mobile-menu">
            <nav style={styles.mobileNav}>
              <a href="#" style={styles.navLink} className="nav-link">Features</a>
              <a href="#" style={styles.navLink} className="nav-link">About</a>
              <a href="#" style={styles.navLink} className="nav-link">Contact</a>
              <div style={styles.mobileAuthButtons}>
                <button style={styles.loginBtn} className="login-btn">
                  Login
                </button>
                <button style={styles.signupBtn} className="signup-btn">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle} className="hero-title">
            Smart Hotel Booking
            <br />
            <span style={styles.heroTitleAccent}>
              Reimagined
            </span>
          </h1>
          <p style={styles.heroSubtitle} className="hero-subtitle">
            Discover, book, and enjoy extraordinary stays with our AI-powered platform.
            From boutique hotels to luxury resorts, find your perfect match instantly.
          </p>

          {/* Search Box */}
          <div style={styles.searchContainer}>
            <div style={styles.searchBox}>
              <div style={styles.inputGroup}>
                <MapPin style={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="Where to?"
                  style={styles.input}
                  className="input"
                />
              </div>
              <div style={styles.inputGroup}>
                <Calendar style={styles.inputIcon} />
                <input
                  type="date"
                  style={styles.input}
                  className="input"
                />
              </div>
              <div style={styles.inputGroup}>
                <Calendar style={styles.inputIcon} />
                <input
                  type="date"
                  style={styles.input}
                  className="input"
                />
              </div>
              <div style={styles.inputGroup}>
                <Users style={styles.inputIcon} />
                <select
                  style={styles.input}
                  className="input"
                >
                  <option>2 Guests</option>
                  <option>1 Guest</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
              <button style={styles.searchBtn} className="search-btn">
                <Search style={{ width: '20px', height: '20px' }} />
                Search Hotels
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={styles.ctaButtons} className="cta-buttons">
            <button style={styles.primaryBtn} className="primary-btn">
              <span>Get Started</span>
              <ChevronRight style={{ width: '20px', height: '20px' }} />
            </button>
            <button style={styles.secondaryBtn} className="secondary-btn">
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statItem}>
              <div style={styles.statNumber}>
                {stat.number}
              </div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle} className="section-title">
            Why Choose HotelSmart?
          </h2>
          <p style={styles.sectionSubtitle}>
            Experience the future of hotel booking with cutting-edge technology and personalized service
          </p>
        </div>

        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard} className="feature-card">
              <div style={styles.featureIcon} className="feature-icon">
                {feature.icon}
              </div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLogo}>
          <div style={styles.footerLogoIcon}>
            <span>H</span>
          </div>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>HotelSmart</span>
        </div>
        <p style={styles.footerText}>
          © 2025 HotelSmart. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;