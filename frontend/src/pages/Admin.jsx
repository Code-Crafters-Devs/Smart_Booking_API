import React, { useState, useEffect } from 'react';
import '../assets/styles/Admin.css';
import UserManagement from '../components/admin/UserManagement';
import Reports from '../components/admin/Reports';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Admin = () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [dashboardData, setDashboardData] = useState({
        totalUsers: 0,
        totalProviders: 0,
        todaysBookings: 0,
        pendingApprovals: 0,
        systemHealth: 'good',
        recentActivity: [],
        bookingTrends: [],
        systemLogs: []
    });

    // Mock data loading - replace with actual API calls
    useEffect(() => {
        // Simulate loading dashboard data
        setDashboardData({
            totalUsers: 1248,
            totalProviders: 87,
            todaysBookings: 23,
            pendingApprovals: 5,
            systemHealth: 'good',
            recentActivity: [
                { id: 1, type: 'registration', message: 'New user registered: john@example.com', time: '2 mins ago' },
                { id: 2, type: 'booking', message: 'Booking confirmed: Room 107', time: '5 mins ago' },
                { id: 3, type: 'provider', message: 'Provider application: Hotel ABC', time: '10 mins ago' },
                { id: 4, type: 'system', message: 'API response time: 120ms', time: '15 mins ago' }
            ],
            bookingTrends: [
                { day: 'Mon', bookings: 15 },
                { day: 'Tue', bookings: 22 },
                { day: 'Wed', bookings: 18 },
                { day: 'Thu', bookings: 25 },
                { day: 'Fri', bookings: 30 },
                { day: 'Sat', bookings: 35 },
                { day: 'Sun', bookings: 28 }
            ],
            systemLogs: [
                { id: 1, level: 'info', message: 'User login successful', timestamp: '2025-07-21 14:30:22' },
                { id: 2, level: 'warning', message: 'High API usage detected', timestamp: '2025-07-21 14:25:15' },
                { id: 3, level: 'error', message: 'Database connection timeout', timestamp: '2025-07-21 14:20:08' }
            ]
        });
    }, []);

    const handleQuickAction = (action) => {
        switch(action) {
            case 'approve-providers':
                setActiveSection('providers');
                break;
            case 'resolve-conflicts':
                setActiveSection('bookings');
                break;
            case 'view-alerts':
                setActiveSection('system');
                break;
            case 'generate-reports':
                setActiveSection('reports');
                break;
            default:
                break;
        }
    };

    const renderDashboard = () => (
        <div className="dashboard-content">
            {/* Metrics Cards */}
            <div className="metrics-grid">
                <div className="metric-card">
                    <div className="metric-icon">👥</div>
                    <div className="metric-details">
                        <h3>Total Users</h3>
                        <div className="metric-value">{dashboardData.totalUsers}</div>
                        <div className="metric-change positive">+12% from last month</div>
                    </div>
                </div>

                <div className="metric-card">
                    <div className="metric-icon">🏨</div>
                    <div className="metric-details">
                        <h3>Active Providers</h3>
                        <div className="metric-value">{dashboardData.totalProviders}</div>
                        <div className="metric-badge">{dashboardData.pendingApprovals} pending</div>
                    </div>
                </div>

                <div className="metric-card">
                    <div className="metric-icon">📅</div>
                    <div className="metric-details">
                        <h3>Today's Bookings</h3>
                        <div className="metric-value">{dashboardData.todaysBookings}</div>
                        <div className="metric-change positive">+5 from yesterday</div>
                    </div>
                </div>

                <div className="metric-card">
                    <div className="metric-icon">🟢</div>
                    <div className="metric-details">
                        <h3>System Health</h3>
                        <div className="metric-value">Operational</div>
                        <div className="metric-status good">All systems running</div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
                <h2>Quick Actions</h2>
                <div className="action-buttons">
                    <button 
                        className="action-btn primary" 
                        onClick={() => handleQuickAction('approve-providers')}
                    >
                        Approve Providers ({dashboardData.pendingApprovals})
                    </button>
                    <button 
                        className="action-btn secondary" 
                        onClick={() => handleQuickAction('resolve-conflicts')}
                    >
                        Resolve Booking Conflicts
                    </button>
                    <button 
                        className="action-btn tertiary" 
                        onClick={() => handleQuickAction('view-alerts')}
                    >
                        View System Alerts
                    </button>
                    <button 
                        className="action-btn quaternary" 
                        onClick={() => handleQuickAction('generate-reports')}
                    >
                        Generate Reports
                    </button>
                </div>
            </div>

            {/* Charts and Activity */}
            <div className="dashboard-grid">
                <div className="chart-section">
                    <h2>Booking Trends (Last 7 Days)</h2>
                    <div className="simple-chart">
                        {dashboardData.bookingTrends.map((item, index) => (
                            <div key={index} className="chart-bar">
                                <div className="bar" style={{ height: `${item.bookings * 3}px` }}></div>
                                <span className="bar-label">{item.day}</span>
                                <span className="bar-value">{item.bookings}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="activity-section">
                    <h2>Recent Activity</h2>
                    <div className="activity-list">
                        {dashboardData.recentActivity.map((activity) => (
                            <div key={activity.id} className={`activity-item ${activity.type}`}>
                                <div className="activity-content">
                                    <div className="activity-message">{activity.message}</div>
                                    <div className="activity-time">{activity.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Tables */}
            <div className="tables-section">
                <div className="table-container">
                    <h2>System Logs</h2>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>Message</th>
                                <th>Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dashboardData.systemLogs.map((log) => (
                                <tr key={log.id}>
                                    <td>
                                        <span className={`log-level ${log.level}`}>{log.level}</span>
                                    </td>
                                    <td>{log.message}</td>
                                    <td>{log.timestamp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderProviderManagement = () => (
        <div className="provider-management">
            <h2>Provider Management</h2>
            <div className="management-actions">
                <button className="btn primary">Approve Pending</button>
                <button className="btn secondary">View All Providers</button>
                <button className="btn tertiary">Add New Provider</button>
            </div>
            <div className="provider-stats">
                <div className="stat-item">
                    <span className="stat-label">Active Providers:</span>
                    <span className="stat-value">87</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Pending Approval:</span>
                    <span className="stat-value">5</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Suspended:</span>
                    <span className="stat-value">2</span>
                </div>
            </div>
        </div>
    );

    const renderBookingManagement = () => (
        <div className="booking-management">
            <h2>Booking Management</h2>
            <div className="booking-filters">
                <select className="filter-select">
                    <option>All Statuses</option>
                    <option>Confirmed</option>
                    <option>Pending</option>
                    <option>Cancelled</option>
                </select>
                <input type="date" className="filter-date" />
                <button className="btn primary">Apply Filters</button>
            </div>
            <div className="booking-summary">
                <div className="summary-item">
                    <span className="summary-label">Total Bookings Today:</span>
                    <span className="summary-value">23</span>
                </div>
                <div className="summary-item">
                    <span className="summary-label">Conflicts to Resolve:</span>
                    <span className="summary-value conflict">3</span>
                </div>
            </div>
        </div>
    );

    const renderAvailabilityManagement = () => (
        <div className="availability-management">
            <h2>Availability Management</h2>
            <div className="availability-overview">
                <div className="overview-item">
                    <span className="overview-label">Total Time Slots:</span>
                    <span className="overview-value">1,245</span>
                </div>
                <div className="overview-item">
                    <span className="overview-label">Available Now:</span>
                    <span className="overview-value">834</span>
                </div>
                <div className="overview-item">
                    <span className="overview-label">Conflicts Detected:</span>
                    <span className="overview-value conflict">12</span>
                </div>
            </div>
        </div>
    );

    const renderAPIManagement = () => (
        <div className="api-management">
            <h2>API Management</h2>
            <div className="api-stats">
                <div className="api-stat">
                    <span className="api-label">Response Time:</span>
                    <span className="api-value good">120ms</span>
                </div>
                <div className="api-stat">
                    <span className="api-label">Active Sessions:</span>
                    <span className="api-value">245</span>
                </div>
                <div className="api-stat">
                    <span className="api-label">Failed Requests:</span>
                    <span className="api-value warning">3</span>
                </div>
            </div>
        </div>
    );

    const renderSystemSettings = () => (
        <div className="system-settings">
            <h2>System Settings</h2>
            <div className="settings-grid">
                <div className="setting-group">
                    <h3>Authentication</h3>
                    <label>
                        <input type="checkbox" defaultChecked />
                        Enable JWT Token Validation
                    </label>
                    <label>
                        <input type="checkbox" defaultChecked />
                        Require Email Verification
                    </label>
                </div>
                <div className="setting-group">
                    <h3>Booking Rules</h3>
                    <label>
                        <input type="checkbox" defaultChecked />
                        Prevent Double Booking
                    </label>
                    <label>
                        <input type="checkbox" />
                        Allow Overbooking
                    </label>
                </div>
            </div>
        </div>
    );

    const renderUserManagement = () => (
        <div className="user-management">
            <h2>User Management</h2>
            
            {/* User Statistics */}
            <div className="user-stats-grid">
                <div className="user-stat-card">
                    <div className="stat-icon">👥</div>
                    <div className="stat-info">
                        <h3>Total Users</h3>
                        <div className="stat-number">1,248</div>
                        <div className="stat-change positive">+12% this month</div>
                    </div>
                </div>
                <div className="user-stat-card">
                    <div className="stat-icon">🆕</div>
                    <div className="stat-info">
                        <h3>New Users Today</h3>
                        <div className="stat-number">23</div>
                        <div className="stat-change positive">+8 from yesterday</div>
                    </div>
                </div>
                <div className="user-stat-card">
                    <div className="stat-icon">✅</div>
                    <div className="stat-info">
                        <h3>Verified Users</h3>
                        <div className="stat-number">1,156</div>
                        <div className="stat-progress">92.6% verified</div>
                    </div>
                </div>
                <div className="user-stat-card">
                    <div className="stat-icon">⚠️</div>
                    <div className="stat-info">
                        <h3>Suspended Users</h3>
                        <div className="stat-number">8</div>
                        <div className="stat-change negative">3 pending review</div>
                    </div>
                </div>
            </div>

            {/* User Management Actions */}
            <div className="user-actions">
                <div className="action-group">
                    <button className="btn primary">Add New User</button>
                    <button className="btn secondary">Export User Data</button>
                    <button className="btn tertiary">Bulk Actions</button>
                </div>
                <div className="user-filters">
                    <select className="filter-select">
                        <option>All Roles</option>
                        <option>Customer</option>
                        <option>Provider</option>
                        <option>Admin</option>
                    </select>
                    <select className="filter-select">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Suspended</option>
                        <option>Pending Verification</option>
                    </select>
                    <input 
                        type="text" 
                        placeholder="Search users..." 
                        className="search-input"
                    />
                </div>
            </div>

            {/* Users Table */}
            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Registration Date</th>
                            <th>Last Login</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="user-info">
                                    <div className="user-avatar">JD</div>
                                    <div>
                                        <div className="user-name">John Doe</div>
                                        <div className="user-id">#1007</div>
                                    </div>
                                </div>
                            </td>
                            <td>john.doe@email.com</td>
                            <td><span className="role-badge customer">Customer</span></td>
                            <td><span className="status-badge active">Active</span></td>
                            <td>2025-07-15</td>
                            <td>2025-07-21 09:30</td>
                            <td>
                                <div className="action-buttons-small">
                                    <button className="btn-small primary">Edit</button>
                                    <button className="btn-small secondary">View</button>
                                    <button className="btn-small danger">Suspend</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-info">
                                    <div className="user-avatar">SA</div>
                                    <div>
                                        <div className="user-name">Sarah Adams</div>
                                        <div className="user-id">#1002</div>
                                    </div>
                                </div>
                            </td>
                            <td>sarah.adams@email.com</td>
                            <td><span className="role-badge provider">Provider</span></td>
                            <td><span className="status-badge pending">Pending</span></td>
                            <td>2025-07-20</td>
                            <td>2025-07-21 08:15</td>
                            <td>
                                <div className="action-buttons-small">
                                    <button className="btn-small primary">Edit</button>
                                    <button className="btn-small secondary">View</button>
                                    <button className="btn-small success">Approve</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-info">
                                    <div className="user-avatar">MB</div>
                                    <div>
                                        <div className="user-name">Mike Brown</div>
                                        <div className="user-id">#1003</div>
                                    </div>
                                </div>
                            </td>
                            <td>mike.brown@email.com</td>
                            <td><span className="role-badge customer">Customer</span></td>
                            <td><span className="status-badge active">Active</span></td>
                            <td>2025-07-18</td>
                            <td>2025-07-20 16:45</td>
                            <td>
                                <div className="action-buttons-small">
                                    <button className="btn-small primary">Edit</button>
                                    <button className="btn-small secondary">View</button>
                                    <button className="btn-small danger">Suspend</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-info">
                                    <div className="user-avatar">LW</div>
                                    <div>
                                        <div className="user-name">Lisa Wang</div>
                                        <div className="user-id">#1004</div>
                                    </div>
                                </div>
                            </td>
                            <td>lisa.wang@email.com</td>
                            <td><span className="role-badge admin">Admin</span></td>
                            <td><span className="status-badge active">Active</span></td>
                            <td>2025-07-10</td>
                            <td>2025-07-21 07:22</td>
                            <td>
                                <div className="action-buttons-small">
                                    <button className="btn-small primary">Edit</button>
                                    <button className="btn-small secondary">View</button>
                                    <button className="btn-small warning">Permissions</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-info">
                                    <div className="user-avatar">RT</div>
                                    <div>
                                        <div className="user-name">Robert Taylor</div>
                                        <div className="user-id">#1005</div>
                                    </div>
                                </div>
                            </td>
                            <td>robert.taylor@email.com</td>
                            <td><span className="role-badge customer">Customer</span></td>
                            <td><span className="status-badge suspended">Suspended</span></td>
                            <td>2025-07-12</td>
                            <td>2025-07-19 14:20</td>
                            <td>
                                <div className="action-buttons-small">
                                    <button className="btn-small primary">Edit</button>
                                    <button className="btn-small secondary">View</button>
                                    <button className="btn-small success">Reactivate</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="pagination-container">
                <div className="pagination-info">
                    Showing 1-5 of 1,248 users
                </div>
                <div className="pagination-controls">
                    <button className="pagination-btn" disabled>Previous</button>
                    <button className="pagination-btn active">1</button>
                    <button className="pagination-btn">2</button>
                    <button className="pagination-btn">3</button>
                    <button className="pagination-btn">...</button>
                    <button className="pagination-btn">250</button>
                    <button className="pagination-btn">Next</button>
                </div>
            </div>

            {/* Recent User Activities */}
            <div className="recent-user-activities">
                <h3>Recent User Activities</h3>
                <div className="activity-timeline">
                    <div className="timeline-item">
                        <div className="timeline-marker registration"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <span className="timeline-user">emma.wilson@email.com</span>
                                <span className="timeline-time">5 minutes ago</span>
                            </div>
                            <div className="timeline-description">New user registered with customer role</div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-marker login"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <span className="timeline-user">john.doe@email.com</span>
                                <span className="timeline-time">12 minutes ago</span>
                            </div>
                            <div className="timeline-description">User logged in successfully</div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-marker update"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <span className="timeline-user">sarah.adams@email.com</span>
                                <span className="timeline-time">18 minutes ago</span>
                            </div>
                            <div className="timeline-description">Profile information updated</div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-marker suspension"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <span className="timeline-user">spam.user@email.com</span>
                                <span className="timeline-time">25 minutes ago</span>
                            </div>
                            <div className="timeline-description">User account suspended by admin</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch(activeSection) {
            case 'dashboard':
                return renderDashboard();
            case 'users':
                return renderUserManagement();
            case 'providers':
                return renderProviderManagement();
            case 'bookings':
                return renderBookingManagement();
            case 'availability':
                return renderAvailabilityManagement();
            case 'api':
                return renderAPIManagement();
            case 'reports':
                return <Reports />;
            case 'settings':
                return renderSystemSettings();
            default:
                return renderDashboard();
        }
    };

    return (
        <div className="admin-container">
            <Header />
            
            {/* Admin Navigation */}
            <div className="admin-nav">
                <div className="admin-profile">
                    <div className="profile-avatar">A</div>
                    <div className="profile-info">
                        <div className="profile-name">Admin User</div>
                        <div className="profile-role">System Administrator</div>
                    </div>
                </div>
                
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search users, bookings, providers..."
                        className="global-search"
                    />
                </div>
                
                <div className="nav-notifications">
                    <div className="notification-icon">
                        🔔
                        <span className="notification-badge">5</span>
                    </div>
                </div>
            </div>

            <div className="admin-layout">
                {/* Sidebar */}
                <aside className="admin-sidebar">
                    <nav className="sidebar-nav">
                        <button 
                            className={`nav-item ${activeSection === 'dashboard' ? 'active' : ''}`}
                            onClick={() => setActiveSection('dashboard')}
                        >
                            📊 Dashboard
                        </button>
                        <button 
                            className={`nav-item ${activeSection === 'users' ? 'active' : ''}`}
                            onClick={() => setActiveSection('users')}
                        >
                            👥 User Management
                        </button>
                        <button 
                            className={`nav-item ${activeSection === 'providers' ? 'active' : ''}`}
                            onClick={() => setActiveSection('providers')}
                        >
                            🏨 Provider Management
                            {dashboardData.pendingApprovals > 0 && (
                                <span className="nav-badge">{dashboardData.pendingApprovals}</span>
                            )}
                        </button>
                        <button 
                            className={`nav-item ${activeSection === 'bookings' ? 'active' : ''}`}
                            onClick={() => setActiveSection('bookings')}
                        >
                            📅 Booking Management
                        </button>
                        <button 
                            className={`nav-item ${activeSection === 'availability' ? 'active' : ''}`}
                            onClick={() => setActiveSection('availability')}
                        >
                            ⏰ Availability Management
                        </button>
                        <button 
                            className={`nav-item ${activeSection === 'api' ? 'active' : ''}`}
                            onClick={() => setActiveSection('api')}
                        >
                            🔧 API Management
                        </button>
                        <button 
                            className={`nav-item ${activeSection === 'reports' ? 'active' : ''}`}
                            onClick={() => setActiveSection('reports')}
                        >
                            📈 Reports & Analytics
                        </button>
                        <button 
                            className={`nav-item ${activeSection === 'settings' ? 'active' : ''}`}
                            onClick={() => setActiveSection('settings')}
                        >
                            ⚙️ System Settings
                        </button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="admin-main">
                    <div className="main-header">
                        <h1>Admin Dashboard</h1>
                        <div className="header-actions">
                            <button className="btn secondary">Export Data</button>
                            <button className="btn primary">System Backup</button>
                        </div>
                    </div>
                    
                    <div className="main-content">
                        {renderContent()}
                    </div>
                </main>
            </div>
            
            <Footer />
        </div>
    );
};

export default Admin;