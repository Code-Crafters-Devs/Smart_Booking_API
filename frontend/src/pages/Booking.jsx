import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { MapPin, Calendar, Users, Star, ChevronLeft, ChevronRight, CreditCard, Shield, Check, X, Heart, Share2 } from 'lucide-react';

const BookingPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [guests, setGuests] = useState(2);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Sample hotel data - in a real app this would come from API/state
  const hotel = {
    id: 1,
    name: 'Grand Luxury Hotel',
    location: 'New York, USA',
    rating: 4.9,
    reviews: 1248,
    description: 'Experience unparalleled luxury in the heart of the city. Our award-winning hotel offers stunning views, world-class amenities, and exceptional service.',
    price: 1500,
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ],
    amenities: [
      'Free WiFi', 'Swimming Pool', 'Spa', 'Fitness Center', 
      'Restaurant', 'Room Service', 'Air Conditioning', 'Parking'
    ]
  };

  // Parse query params for booking details
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setCheckInDate(searchParams.get('checkIn') || '');
    setCheckOutDate(searchParams.get('checkOut') || '');
    setGuests(parseInt(searchParams.get('guests')) || 2);
  }, [location]);

  const handlePrevImage = () => {
    setActiveImageIndex(prev => 
      prev === 0 ? hotel.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex(prev => 
      prev === hotel.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setBookingSuccess(true);
    }, 2000);
  };

  const calculateTotal = () => {
    if (!checkInDate || !checkOutDate) return hotel.price;
    
    const nights = Math.ceil(
      (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
    );
    return (hotel.price * nights).toFixed(2);
  };

  // Handler for image dot clicks with keyboard support
  const handleImageDotClick = (index) => {
    setActiveImageIndex(index);
  };

  const handleImageDotKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveImageIndex(index);
    }
  };

  // Ref for amenities section
  const amenitiesRef = React.useRef(null);

  const handleAmenitiesClick = (e) => {
    e.preventDefault();
    if (amenitiesRef.current) {
      amenitiesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'rgba(15, 23, 42, 0.95)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      paddingTop: '80px'
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'transparent',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px'
    },
    logo: {
      fontSize: '20px',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #60a5fa, #c084fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 400px',
      gap: '40px'
    },
    hotelImages: {
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      height: '500px'
    },
    mainImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'opacity 0.3s ease'
    },
    imageNav: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
      color: 'white',
      border: 'none',
      zIndex: 2
    },
    prevButton: {
      left: 0
    },
    nextButton: {
      right: 0
    },
    imageDots: {
      position: 'absolute',
      bottom: '20px',
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      zIndex: 2
    },
    imageDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
      border: 'none',
      padding: 0
    },
    activeDot: {
      background: 'white'
    },
    hotelInfo: {
      marginTop: '24px'
    },
    hotelHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },
    hotelName: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    hotelLocation: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#cbd5e1',
      marginBottom: '16px'
    },
    hotelRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '6px 12px',
      borderRadius: '20px'
    },
    hotelDescription: {
      color: '#cbd5e1',
      lineHeight: 1.6,
      marginBottom: '24px'
    },
    amenitiesTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '12px'
    },
    amenitiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: '12px',
      marginBottom: '32px'
    },
    amenityItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px'
    },
    bookingForm: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'sticky',
      top: '100px'
    },
    formTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    priceDisplay: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '16px',
      background: 'linear-gradient(45deg, #60a5fa, #c084fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    priceNote: {
      color: '#cbd5e1',
      fontSize: '14px',
      marginBottom: '24px'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    inputLabel: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '14px',
      fontWeight: '500'
    },
    dateInput: {
      display: 'flex',
      gap: '12px'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      fontSize: '14px',
      outline: 'none',
      transition: 'border-color 0.3s ease'
    },
    guestInput: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    guestButton: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '16px'
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      fontSize: '14px',
      outline: 'none',
      minHeight: '100px',
      resize: 'vertical'
    },
    paymentMethods: {
      marginBottom: '20px'
    },
    paymentOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '12px',
      cursor: 'pointer'
    },
    paymentInput: {
      marginRight: '8px'
    },
    cardForm: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '8px',
      padding: '16px',
      marginTop: '12px'
    },
    cardInput: {
      width: '100%',
      padding: '12px 16px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      fontSize: '14px',
      outline: 'none',
      marginBottom: '12px'
    },
    cardRow: {
      display: 'flex',
      gap: '12px'
    },
    submitButton: {
      width: '100%',
      padding: '16px',
      background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '16px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    successMessage: {
      background: 'rgba(74, 222, 128, 0.1)',
      border: '1px solid rgba(74, 222, 128, 0.3)',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      marginBottom: '20px'
    },
    successIcon: {
      color: '#4ade80',
      marginBottom: '16px'
    },
    successTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    successText: {
      color: '#cbd5e1',
      marginBottom: '16px'
    },
    actionButtons: {
      display: 'flex',
      gap: '12px',
      marginTop: '24px'
    },
    actionButton: {
      flex: 1,
      padding: '12px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '500'
    },
    secondaryButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white'
    },
    primaryButton: {
      background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
      color: 'white'
    }
  };

  const keyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.4; }
    }

    .submit-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .input:focus {
      border-color: #c084fc;
    }

    .guest-button:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .image-nav:hover {
      background: rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
      .content {
        padding: 24px 16px !important;
        gap: 24px !important;
      }
      
      .hotel-images {
        height: 300px !important;
      }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>
      
      {/* Header */}
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
          <button 
            style={styles.backButton} 
            onClick={() => history.goBack()}
            className="back-button"
          >
            <ChevronLeft size={20} />
            Back
          </button>
          <div style={styles.logo}>HotelSmart</div>
        </div>
        <nav style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#rooms" style={{ color: 'white', textDecoration: 'none', fontWeight: 500, fontSize: 16 }}>Rooms</a>
          <a 
            href="#amenities" 
            style={{ color: 'white', textDecoration: 'none', fontWeight: 500, fontSize: 16 }}
            onClick={handleAmenitiesClick}
          >
            Amenities
          </a>
        </nav>
        <div style={{ width: '100px' }}></div> {/* Spacer */}
      </header>

      {/* Main Content */}
      <div style={styles.content} className="content">
        {/* Hotel Details */}
        <div>
          {/* Image Gallery */}
          <div style={styles.hotelImages} className="hotel-images">
            <img 
              src={hotel.images[activeImageIndex]} 
              alt={hotel.name} 
              style={styles.mainImage}
            />
            <button 
              style={{ ...styles.imageNav, ...styles.prevButton }}
              onClick={handlePrevImage}
              className="image-nav"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              style={{ ...styles.imageNav, ...styles.nextButton }}
              onClick={handleNextImage}
              className="image-nav"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <div style={styles.imageDots}>
              {hotel.images.map((_, index) => (
                <button 
                  key={index}
                  style={{
                    ...styles.imageDot,
                    ...(index === activeImageIndex ? styles.activeDot : {})
                  }}
                  onClick={() => handleImageDotClick(index)}
                  onKeyDown={(e) => handleImageDotKeyDown(e, index)}
                  className="image-dot"
                  aria-label={`Go to image ${index + 1}`}
                  tabIndex={0}
                />
              ))}
            </div>
          </div>

          {/* Hotel Info */}
          <div style={styles.hotelInfo}>
            <div style={styles.hotelHeader}>
              <div>
                <h1 style={styles.hotelName}>{hotel.name}</h1>
                <div style={styles.hotelLocation}>
                  <MapPin size={16} />
                  <span>{hotel.location}</span>
                </div>
              </div>
              <div style={styles.hotelRating}>
                <Star size={16} fill="currentColor" />
                <span>{hotel.rating}</span>
                <span>({hotel.reviews} reviews)</span>
              </div>
            </div>

            <p style={styles.hotelDescription}>{hotel.description}</p>

            <h3 style={styles.amenitiesTitle} ref={amenitiesRef}>Amenities</h3>
            <div style={styles.amenitiesGrid}>
              {hotel.amenities.map((amenity, index) => (
                <div key={index} style={styles.amenityItem}>
                  <Check size={16} />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div style={styles.bookingForm}>
          {bookingSuccess ? (
            <div style={styles.successMessage}>
              <Check size={48} style={styles.successIcon} />
              <h3 style={styles.successTitle}>Booking Confirmed!</h3>
              <p style={styles.successText}>
                Your reservation at {hotel.name} has been confirmed. 
                We&apos;ve sent the details to your email.
              </p>
              <div style={styles.actionButtons}>
                <button 
                  style={{ ...styles.actionButton, ...styles.secondaryButton }}
                  onClick={() => history.push('/')}
                >
                  <ChevronLeft size={16} />
                  Back Home
                </button>
                <button 
                  style={{ ...styles.actionButton, ...styles.primaryButton }}
                  onClick={() => history.push('/my-bookings')}
                >
                  View Bookings
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 style={styles.formTitle}>
                <Calendar size={20} />
                Book Your Stay
              </h2>
              
              <div style={styles.priceDisplay}>R{calculateTotal()}</div>
              <div style={styles.priceNote}>R{hotel.price} per night • Free cancellation</div>

              <form onSubmit={handleSubmitBooking}>
                <div style={styles.inputGroup}>
                  <span style={styles.inputLabel}>Dates</span>
                  <div style={styles.dateInput}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="checkin-date" style={{ display: 'none' }}>
                        Check-in date
                      </label>
                      <input
                        id="checkin-date"
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        style={styles.input}
                        className="input"
                        required
                        aria-label="Check-in date"
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="checkout-date" style={{ display: 'none' }}>
                        Check-out date
                      </label>
                      <input
                        id="checkout-date"
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        style={styles.input}
                        className="input"
                        required
                        aria-label="Check-out date"
                      />
                    </div>
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <span style={styles.inputLabel} id="guests-label">Guests</span>
                  <div style={styles.guestInput} role="group" aria-labelledby="guests-label">
                    <button 
                      type="button"
                      style={styles.guestButton}
                      onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                      className="guest-button"
                      aria-label="Decrease number of guests"
                    >
                      -
                    </button>
                    <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                    <button 
                      type="button"
                      style={styles.guestButton}
                      onClick={() => setGuests(prev => prev + 1)}
                      className="guest-button"
                      aria-label="Increase number of guests"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label htmlFor="special-requests" style={styles.inputLabel}>
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="special-requests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    style={styles.textarea}
                    placeholder="Any special requirements or preferences..."
                  />
                </div>

                <fieldset style={styles.paymentMethods}>
                  <legend style={styles.inputLabel}>Payment Method</legend>
                  <div style={styles.paymentOption}>
                    <input
                      type="radio"
                      id="credit"
                      name="payment"
                      value="credit"
                      checked={paymentMethod === 'credit'}
                      onChange={() => setPaymentMethod('credit')}
                      style={styles.paymentInput}
                    />
                    <label htmlFor="credit">Credit Card</label>
                  </div>
                  <div style={styles.paymentOption}>
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      style={styles.paymentInput}
                    />
                    <label htmlFor="paypal">PayPal</label>
                  </div>
                  <div style={styles.paymentOption}>
                    <input
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={() => setPaymentMethod('cash')}
                      style={styles.paymentInput}
                    />
                    <label htmlFor="cash">Cash</label>
                  </div>
                </fieldset>

                {paymentMethod === 'credit' && (
                  <div style={styles.cardForm}>
                    <label htmlFor="card-number" style={{ display: 'none' }}>
                      Card Number
                    </label>
                    <input
                      id="card-number"
                      type="text"
                      name="number"
                      value={cardDetails.number}
                      onChange={handleCardChange}
                      placeholder="Card Number"
                      style={styles.cardInput}
                      required
                    />
                    <label htmlFor="card-name" style={{ display: 'none' }}>
                      Name on Card
                    </label>
                    <input
                      id="card-name"
                      type="text"
                      name="name"
                      value={cardDetails.name}
                      onChange={handleCardChange}
                      placeholder="Name on Card"
                      style={styles.cardInput}
                      required
                    />
                    <div style={styles.cardRow}>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="card-expiry" style={{ display: 'none' }}>
                          Expiry Date
                        </label>
                        <input
                          id="card-expiry"
                          type="text"
                          name="expiry"
                          value={cardDetails.expiry}
                          onChange={handleCardChange}
                          placeholder="MM/YY"
                          style={styles.cardInput}
                          required
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="card-cvv" style={{ display: 'none' }}>
                          CVV
                        </label>
                        <input
                          id="card-cvv"
                          type="text"
                          name="cvv"
                          value={cardDetails.cvv}
                          onChange={handleCardChange}
                          placeholder="CVV"
                          style={styles.cardInput}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button 
                  type="submit" 
                  style={styles.submitButton}
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    'Processing...'
                  ) : (
                    <>
                      <CreditCard size={18} />
                      Confirm Booking
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;