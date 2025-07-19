import React, { useState } from 'react';
import '../assets/styles/ProviderHome.css';

const ProviderHome = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="dashboard-section">
            <div className="header">
              <h2>July 19, 2025</h2>
              <p>Welcome back</p>
            </div>

            <div className="stats-grid">
              <div className="card">
                <p>New Bookings</p>
                <h3>21</h3>
                <span className="trend positive">+12%</span>
              </div>
              <div className="card">
                <p>New Customers</p>
                <h3>47</h3>
                <span className="trend positive">+18%</span>
              </div>
              <div className="card">
                <p>Revenue This Month</p>
                <h3>R15,000</h3>
                <span className="trend positive">+22%</span>
              </div>
            </div>

            <div className="chart-grid">
              <div className="chart-card">Guest Summary Chart</div>
              <div className="chart-card">Revenue Summary Chart</div>
              <div className="chart-card">Visits by Device Chart</div>
            </div>
          </div>
        );

      case 'reservations':
        return (
          <div className="table-section">
            <h3>Today's Reservations</h3>
            <table>
              <thead>
                <tr>
                  <th>Guest</th>
                  <th>Room</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Christina Masalane</td>
                  <td>87</td>
                  <td>2025-07-19</td>
                  <td>2025-07-21</td>
                  <td><span className="status confirmed">Confirmed</span></td>
                </tr>
                <tr>
                  <td>Mike Smith</td>
                  <td>102</td>
                  <td>2025-07-19</td>
                  <td>2025-07-20</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case 'rooms':
        return (
          <div className="manage-rooms">
            <h3>Manage Rooms</h3>
            <button>Add New Room</button>
            <button>Edit Room Info</button>
            <button>Remove Room</button>
          </div>
        );

      case 'reports':
        return (
          <div className="reports-section">
            <h3>Reports</h3>
            <p>Monthly revenue, occupancy, and performance charts will be here.</p>
          </div>
        );

      case 'settings':
        return (
          <div className="settings-section">
            <h3>Settings</h3>
            <button>Edit Profile</button>
            <button>Change Password</button>
          </div>
        );

      default:
        return <div>Invalid section</div>;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">MY HOTEL 365</div>
        <nav>
          <ul>
            <li onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>Dashboard</li>
            <li onClick={() => setActiveTab('reservations')} className={activeTab === 'reservations' ? 'active' : ''}>Reservations</li>
            <li onClick={() => setActiveTab('rooms')} className={activeTab === 'rooms' ? 'active' : ''}>Manage Rooms</li>
            <li onClick={() => setActiveTab('reports')} className={activeTab === 'reports' ? 'active' : ''}>Reports</li>
            <li onClick={() => setActiveTab('settings')} className={activeTab === 'settings' ? 'active' : ''}>Settings</li>
            <li onClick={() => console.log('Logout clicked')} className="logout-button">Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`main-content ${activeTab  === 'dashboard' ? 'dashboard-bg' : ''}`}>
  {renderContent()}
</main>
    </div>
  );
};

export default ProviderHome;
