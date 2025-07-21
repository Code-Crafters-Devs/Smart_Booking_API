import React, { useState, useEffect } from 'react';
import { Star, MapPin, Wifi, Car, Dumbbell, Coffee, Heart, Filter, Search, Calendar, Users } from 'lucide-react';

const HotelBookingDashboard = () => { 
  const [selectedHotel, setSelectedHotel] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [priceRange, setPriceRange] = useState([0, 1000]); 
  const [sortBy, setSortBy] = useState('price'); 
  const [favoriteHotels, setFavoriteHotels] = useState(new Set()); 
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        // Mock API call - replace with real API in production
        const mockHotels = [
          { 
            id: 1, 
            name: "Luxe Urban Retreat", 
            location: "Downtown Manhattan, NYC", 
            price: 440, 
            rating: 4.9, 
            reviews: 1249, 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop", 
            amenities: ['wifi', 'gym', 'parking', 'coffee'], 
            description: "A sophisticated urban oasis with panoramic city views and world-class amenities.", 
            highlights: ["Rooftop infinity pool", "Michelin-starred restaurant", "24/7 concierge"] 
          },
          // Add more hotels as needed
        ];
        
        setTimeout(() => {
          setHotels(mockHotels);
          setLoading(false);
        }, 1000); // Simulate network delay
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const amenityIcons = { 
    wifi: <Wifi className="amenity-icon" />, 
    gym: <Dumbbell className="amenity-icon" />, 
    parking: <Car className="amenity-icon" />, 
    coffee: <Coffee className="amenity-icon" /> 
  }; 

  const filteredHotels = hotels 
    .filter(hotel =>  
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase()) 
    ) 
    .filter(hotel => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]) 
    .sort((a, b) => { 
      if (sortBy === 'price') return a.price - b.price; 
      if (sortBy === 'rating') return b.rating - a.rating; 
      if (sortBy === 'reviews') return b.reviews - a.reviews; 
      return 0; 
    }); 

  const toggleFavorite = (hotelId) => { 
    const newFavorites = new Set(favoriteHotels); 
    if (newFavorites.has(hotelId)) { 
      newFavorites.delete(hotelId); 
    } else { 
      newFavorites.add(hotelId); 
    } 
    setFavoriteHotels(newFavorites); 
  }; 

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading hotels...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2>Error Loading Data</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
        }
        
        .app-container {
          min-height: 100vh;
        }
        
        /* Header Styles */
        .app-header {
          background-color: white;
          border-bottom: 1px solid #e0e0e0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          padding: 16px 0;
        }
        
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .logo-icon {
          width: 40px;
          height: 40px;
          background-color: #3b82f6;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 18px;
        }
        
        .app-title {
          font-size: 24px;
          font-weight: bold;
          color: #1f2937;
        }
        
        .user-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .welcome-text {
          font-size: 14px;
          color: #6b7280;
        }
        
        .welcome-text span {
          color: #3b82f6;
          font-weight: 500;
        }
        
        .profile-button {
          width: 32px;
          height: 32px;
          background-color: #3b82f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
        }
        
        /* Loading Styles */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        
        .loading-spinner {
          width: 64px;
          height: 64px;
          border: 4px solid #3b82f6;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Error Styles */
        .error-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
        
        .error-content {
          background-color: white;
          border-radius: 8px;
          padding: 23px;
          text-align: center;
          max-width: 400px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .error-content h2 {
          color: #dc2626;
          font-size: 20px;
          margin-bottom: 8px;
        }
        
        .error-content p {
          color: #6b7280;
          margin-bottom: 16px;
        }
        
        .error-content button {
          background-color: #3b82f6;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }
        
        .error-content button:hover {
          background-color: #2563eb;
        }
        
        /* Main Content */
        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 24px;
        }
        
        /* Search Section */
        .search-section {
          margin-bottom: 32px;
        }
        
        .search-title {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .search-title h2 {
          font-size: 32px;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 8px;
        }
        
        .search-title p {
          font-size: 18px;
          color: #6b7280;
        }
        
        .search-filters {
          background-color: white;
          border-radius: 12px;
          padding: 23px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          border: 1px solid #e5e7eb;
        }
        
        .filter-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .filter-group {
          position: relative;
        }
        
        .filter-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          width: 16px;
          height: 16px;
        }
        
        .search-input {
          width: 70%;
          padding: 12px 16px 12px 40px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }
        
        select {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
          background-color: white;
        }
        
        /* Price Range */
        .price-range {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 16px;
        }
        
        .price-range span {
          font-size: 14px;
          font-weight: 500;
          color: #4b5563;
        }
        
        .price-range input[type="range"] {
          flex: 1;
          height: 6px;
          background: #e5e7eb;
          border-radius: 3px;
          -webkit-appearance: none;
        }
        
        .price-range input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          background: #3b82f6;
          border-radius: 50%;
          cursor: pointer;
        }
        
        /* Results Count */
        .results-count {
          margin-bottom: 24px;
          font-size: 14px;
          color: #6b7280;
        }
        
        .results-count span {
          font-weight: 600;
          color: #1f2937;
        }
        
        /* Hotel Grid */
        .hotel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        
        .hotel-card {
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .hotel-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .hotel-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .hotel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        
        .hotel-card:hover .hotel-image {
          transform: scale(1.05);
        }
        
        .favorite-button {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          cursor: pointer;
          border: none;
        }
        
        .price-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background-color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .hotel-details {
          padding: 20px;
        }
        
        .hotel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        
        .hotel-name {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }
        
        .hotel-rating {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .hotel-location {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #6b7280;
          font-size: 14px;
          margin-bottom: 12px;
        }
        
        .hotel-description {
          color: #6b7280;
          font-size: 14px;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .amenities-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        
        .amenity-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background-color: #f3f4f6;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          color: #4b5563;
        }
        
        .amenity-icon {
          width: 14px;
          height: 14px;
        }
        
        .hotel-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .reviews-count {
          font-size: 14px;
          color: #9ca3af;
        }
        
        .view-details-button {
          background-color: #3b82f6;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
        }
        
        .view-details-button:hover {
          background-color: #2563eb;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .hotel-modal {
          background-color: white;
          border-radius: 12px;
          max-width: 800px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .modal-image-container {
          position: relative;
          height: 300px;
        }
        
        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .close-modal-button {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          font-size: 20px;
          color: #6b7280;
        }
        
        .modal-content {
          padding: 32px;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        
        .modal-hotel-name {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
        
        .modal-price {
          text-align: right;
        }
        
        .modal-price-amount {
          font-size: 24px;
          font-weight: 700;
          color: #3b82f6;
        }
        
        .modal-price-text {
          font-size: 14px;
          color: #6b7280;
        }
        
        .modal-info-row {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 24px;
        }
        
        .modal-rating {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .modal-location {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #6b7280;
        }
        
        .modal-description {
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .highlights-section h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
        }
        
        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
          color: #4b5563;
        }
        
        .highlight-bullet {
          width: 8px;
          height: 8px;
          background-color: #3b82f6;
          border-radius: 50%;
        }
        
        .modal-buttons {
          display: flex;
          gap: 16px;
          margin-top: 32px;
        }
        
        .modal-button {
          flex: 1;
          padding: 12px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
        }
        
        .close-button {
          background-color: #f3f4f6;
          color: #4b5563;
          border: none;
        }
        
        .close-button:hover {
          background-color: #e5e7eb;
        }
        
        .book-button {
          background-color: #3b82f6;
          color: white;
          border: none;
        }
        
        .book-button:hover {
          background-color: #2563eb;
        }
      `}</style>

      <div className="app-container">
        <header className="app-header">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">H</div>
              <h1 className="app-title">HotelLux</h1>
            </div>
            <div className="user-section">
              <div className="welcome-text">
                Welcome back, <span>Sarah</span>
              </div>
              <button
                className="signout-btn"
                style={{
                  marginLeft: '8px',
                  padding: '6px 18px',
                  border: '1.5px solid #44b9efff',
                  background: 'white',
                  color: '#44bfefff',
                  borderRadius: '6px',
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s, border 0.2s'
                }}
                onMouseOver={e => {
                  e.target.style.background = 'rgba(68, 185, 239, 1)';
                  e.target.style.color = 'white';
                }}
                onMouseOut={e => {
                  e.target.style.background = 'white';
                  e.target.style.color = 'rgba(68, 185, 239, 1)';
                }}
                onClick={() => alert('Signed out!')}
              >
                Sign Out
              </button>
            </div>
          </div>
        </header>

        <div className="main-content">
          <div className="search-section">
            <div className="search-title">
              <h2>Find Your Perfect Stay</h2>
              <p>Discover luxury accommodations worldwide</p>
            </div>
            
            <div className="search-filters">
              <div className="filter-grid">
                <div className="filter-group">
                  <Search className="filter-icon" />
                  <input
                    type="text"
                    placeholder="Search hotels or destinations..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="filter-group">
                  <Calendar className="filter-icon" />
                  <input
                    type="date"
                    className="search-input"
                    style={{ paddingLeft: '40px' }}
                  />
                </div>
                
                <div className="filter-group">
                  <Users className="filter-icon" />
                  <select className="search-input" style={{ paddingLeft: '40px' }}>
                    <option>2 Guests</option>
                    <option>1 Guest</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
                
                <div className="filter-group">
                  <Filter className="filter-icon" />
                  <select
                    className="search-input"
                    style={{ paddingLeft: '40px' }}
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="reviews">Sort by Reviews</option>
                  </select>
                </div>
              </div>
              
              <div className="price-range">
                <span>Price Range:</span>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                />
                <span>R{priceRange[0]} - R{priceRange[1]}</span>
              </div>
            </div>
          </div>
          
          <div className="results-count">
            <span>{filteredHotels.length}</span> hotels found
          </div>
          
          <div className="hotel-grid">
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <div key={hotel.id} className="hotel-card">
                  <div className="hotel-image-container">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="hotel-image"
                    />
                    <button
                      onClick={() => toggleFavorite(hotel.id)}
                      className="favorite-button"
                    >
                      <Heart
                        style={{
                          color: favoriteHotels.has(hotel.id) ? 'red' : '#6b7280',
                          fill: favoriteHotels.has(hotel.id) ? 'red' : 'none'
                        }}
                      />
                    </button>
                    <div className="price-badge">${hotel.price}/night</div>
                  </div>
                  
                  <div className="hotel-details">
                    <div className="hotel-header">
                      <h3 className="hotel-name">{hotel.name}</h3>
                      <div className="hotel-rating">
                        <Star style={{ fill: '#f59e0b', color: '#f59e0b' }} />
                        <span>{hotel.rating}</span>
                      </div>
                    </div>
                    
                    <div className="hotel-location">
                      <MapPin size={16} />
                      <span>{hotel.location}</span>
                    </div>
                    
                    <p className="hotel-description">{hotel.description}</p>
                    
                    <div className="amenities-container">
                      {hotel.amenities.map((amenity) => (
                        <div key={amenity} className="amenity-badge">
                          {amenityIcons[amenity]}
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="hotel-footer">
                      <div className="reviews-count">{hotel.reviews} reviews</div>
                      <button
                        onClick={() => setSelectedHotel(hotel)}
                        className="view-details-button"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                <h3>No hotels found</h3>
                <p>Try adjusting your search filters</p>
              </div>
            )}
          </div>
        </div>
        
        {selectedHotel && (
          <div className="modal-overlay">
            <div className="hotel-modal">
              <div className="modal-image-container">
                <img
                  src={selectedHotel.image}
                  alt={selectedHotel.name}
                  className="modal-image"
                />
                <button
                  onClick={() => setSelectedHotel(null)}
                  className="close-modal-button"
                >
                  ×
                </button>
              </div>
              
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-hotel-name">{selectedHotel.name}</h2>
                  <div className="modal-price">
                    <div className="modal-price-amount">${selectedHotel.price}</div>
                    <div className="modal-price-text">per night</div>
                  </div>
                </div>
                
                <div className="modal-info-row">
                  <div className="modal-rating">
                    <Star style={{ fill: '#f59e0b', color: '#f59e0b' }} />
                    <span>{selectedHotel.rating}</span>
                  </div>
                  
                  <div className="modal-location">
                    <MapPin size={16} />
                    <span>{selectedHotel.location}</span>
                  </div>
                  
                  <div className="reviews-count">{selectedHotel.reviews} reviews</div>
                </div>
                
                <p className="modal-description">{selectedHotel.description}</p>
                
                <div className="highlights-section">
                  <h3>Highlights</h3>
                  <ul className="highlights-list">
                    {selectedHotel.highlights.map((highlight, index) => (
                      <li key={index} className="highlight-item">
                        <div className="highlight-bullet"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-buttons">
                  <button
                    onClick={() => setSelectedHotel(null)}
                    className="modal-button close-button"
                  >
                    Close
                  </button>
                  <button className="modal-button book-button">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HotelBookingDashboard;