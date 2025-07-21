import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Users, Star, Zap, Shield, Globe, ChevronRight, Search, Menu, X } from 'lucide-react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [guests, setGuests] = useState("2 Guests");
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);


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
      width: '90%',
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
      margin: '0 auto 63px'
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

  // Scroll to Features section
  const handleScrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Scroll to About section
  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Scroll to Contact section
  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.container}>
      {/* Overlay for blur and darken effect */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        background: 'rgba(15, 23, 42, 0.55)',
        backdropFilter: 'blur(6px)',
        pointerEvents: 'none',
      }} />
      <style>{keyframes}</style>

      {/* Header */}
      <header style={{...styles.header, zIndex: 2}}>
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
            <a href="#features" style={styles.navLink} className="nav-link" onClick={e => { e.preventDefault(); handleScrollToFeatures(); }}>Features</a>
            <a href="#about" style={styles.navLink} className="nav-link" onClick={e => { e.preventDefault(); handleScrollToAbout(); }}>About</a>
            <a href="#contact" style={styles.navLink} className="nav-link" onClick={e => { e.preventDefault(); handleScrollToContact(); }}>Contact</a>
          </nav>

          {/* Auth Buttons */}
          <div style={styles.authButtons} className="auth-buttons">
            <button
              style={styles.signupBtn}
              className="signup-btn"
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
              <a href="#features" style={styles.navLink} className="nav-link" onClick={e => { e.preventDefault(); setIsMenuOpen(false); handleScrollToFeatures(); }}>Features</a>
              <a href="#about" style={styles.navLink} className="nav-link" onClick={e => { e.preventDefault(); setIsMenuOpen(false); handleScrollToAbout(); }}>About</a>
              <a href="#contact" style={styles.navLink} className="nav-link" onClick={e => { e.preventDefault(); setIsMenuOpen(false); handleScrollToContact(); }}>Contact</a>
              <div style={styles.mobileAuthButtons}>
                <button style={styles.signupBtn} className="signup-btn">
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
      <section style={{...styles.heroSection, zIndex: 1, position: 'relative'}}>
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
                  <label style={{ color: '#cbd5e1', marginBottom: 4, display: 'block', fontSize: 14, fontWeight: 500 }}>
                    Location
                  </label>
                  <div style={styles.inputGroup}>
                  <MapPin style={styles.inputIcon} />
                  <input
                    type="text"
                    placeholder="Where to?"
                    style={styles.input}
                    className="input"
                  />
                  </div>
                   <label style={{ color: '#cbd5e1', marginBottom: 4, display: 'block', fontSize: 14, fontWeight: 500 }}>
                    Check-in Date
                  </label>
                  <div style={styles.inputGroup}>
                  <Calendar style={styles.inputIcon} />
                  <input
                    type="date"
                    style={styles.input}
                    className="input"
                  />
                  </div>

                   <label style={{ color: '#cbd5e1', marginBottom: 4, display: 'block', fontSize: 14, fontWeight: 500 }}>
                    Check-out Date
                  </label>
                  <div style={styles.inputGroup}>
                  <Calendar style={styles.inputIcon} />
                  <input
                    type="date"
                    style={styles.input}
                    className="input"
                  />
                  </div>

                   <label style={{ color: '#cbd5e1', marginBottom: 4, display: 'block', fontSize: 14, fontWeight: 500 }}>
                    Guests
                  </label>
                  <div style={styles.inputGroup}>
                  <Users style={styles.inputIcon} />
                  <input
                    type="text"
                    placeholder="Guests"
                    style={styles.input}
                    className="input"
                    value={guests}
                    readOnly
                  />
                  <select
                    style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer'
                    }}
                    onChange={(e) => setGuests(e.target.value)}
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
            <button
              style={styles.primaryBtn}
              className="primary-btn"
              onClick={() => history.push('/register')}
            >
              <span>Get Started</span>
              <ChevronRight style={{ width: '20px', height: '20px' }} />
            </button>
            <button style={styles.secondaryBtn} className="secondary-btn">
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        style={{
          padding: '80px 24px',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px', background: 'linear-gradient(45deg, #c084fc, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            About HotelSmart
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.2rem', lineHeight: 1.7, marginBottom: '32px' }}>
            HotelSmart is your intelligent companion for discovering and booking the perfect stay. Our platform leverages advanced AI to match you with accommodations tailored to your preferences, ensuring a seamless and secure booking experience. Whether you’re traveling for business or leisure, we connect you to a global network of properties, personalized recommendations, and 24/7 support. Experience the future of hotel booking—smarter, faster, and more personal than ever before.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{...styles.statsSection, zIndex: 1, position: 'relative'}}>
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
      <section ref={featuresRef} id="features" style={{...styles.featuresSection, zIndex: 1, position: 'relative'}}>
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

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        style={{
          padding: '80px 24px',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 1,
          position: 'relative'
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '48px 32px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
          {/* Contact Info */}
          <div style={{ flex: '1 1 260px', minWidth: 260 }}>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: 16,
                background: 'linear-gradient(45deg, #c084fc, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Contact Us
            </h2>
            <div style={{ color: '#cbd5e1', fontSize: 16, marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span role="img" aria-label="Phone" style={{ color: '#60a5fa', fontSize: 20 }}>📞</span>
                <span>+1 (800) 555-2025</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span role="img" aria-label="Mail" style={{ color: '#a855f7', fontSize: 20 }}>✉️</span>
                <span>support@hotelsmart.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <Globe style={{ width: 20, height: 20, color: '#3b82f6' }} />
                <a
                  href="https://hotelsmart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#60a5fa', textDecoration: 'underline' }}
                >
                  www.hotelsmart.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <MapPin style={{ width: 20, height: 20, color: '#c084fc' }} />
                <span>123 AI Avenue, Silicon City, USA</span>
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <span style={{ color: '#cbd5e1', fontWeight: 500 }}>Follow us:</span>
              <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
                <a
                  href="https://twitter.com/hotelsmart"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#60a5fa' }}
                >
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 5.924c-.793.352-1.646.59-2.542.697a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.638 4.086A12.72 12.72 0 0 1 3.11 4.89a4.48 4.48 0 0 0 1.388 5.976 4.44 4.44 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.593 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.185 3.114A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.018c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.13 9.13 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.697z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/hotelsmart"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#3b82f6' }}
                >
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/hotelsmart"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#a855f7' }}
                >
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form
            style={{
              flex: '2 1 340px',
              minWidth: 280,
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: 32,
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: 20,
                color: '#fff'
              }}
            >
              Send us a message
            </h3>
            <div style={{ marginBottom: 16 }}>
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  width: '90%',
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(255,255,255,0.12)',
                  color: '#fff',
                  fontSize: 15,
                  marginBottom: 10,
                  outline: 'none'
                }}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  width: '90%',
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(255,255,255,0.12)',
                  color: '#fff',
                  fontSize: 15,
                  marginBottom: 10,
                  outline: 'none'
                }}
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                style={{
                  width: '90%',
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(255,255,255,0.12)',
                  color: '#fff',
                  fontSize: 15,
                  marginBottom: 10,
                  outline: 'none',
                  resize: 'vertical'
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: 10,
                border: 'none',
                background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

        {/* Footer */}
      <footer style={{...styles.footer, zIndex: 2, position: 'relative'}}>
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