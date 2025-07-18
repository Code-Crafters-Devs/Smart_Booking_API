import React, { useState } from 'react';
import { 
  Home, 
  Calendar, 
  Users, 
  DollarSign, 
  Bell, 
  Settings, 
  Plus, 
  Eye, 
  MessageCircle, 
  Download,
  CheckCircle,
  XCircle,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

const ProviderHome = () => {
  // --- Summary Data ---
  const [summary, setSummary] = useState({
    totalBookings: 86,
    totalRevenue: 48500,
    pendingApprovals: 4,
    availableRooms: 12,
  });

  // --- Mock Data ---
  const [bookings, setBookings] = useState([
    { id: 1, guest: 'Thandi M.', room: 'Deluxe Room', date: '2025-07-20', status: 'Pending' },
    { id: 2, guest: 'Sipho K.', room: 'Suite', date: '2025-07-21', status: 'Confirmed' },
  ]);

  const [rooms, setRooms] = useState([
    { id: 101, name: 'Executive Suite', status: 'Available', price: 1500 },
    { id: 102, name: 'Standard Room', status: 'Unavailable', price: 950 },
  ]);

  const [availability, setAvailability] = useState([
    { date: '2025-07-19', status: 'Fully Booked' },
    { date: '2025-07-20', status: 'Rooms Available' },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New booking received for Deluxe Room.' },
    { id: 2, text: 'Guest review received: 4.8 stars.' },
  ]);

  const [profile, setProfile] = useState({
    name: 'Sunset Hotel',
    email: 'info@sunsethotel.com',
    businessHours: '24/7',
  });

  // --- Handlers ---
  const approveBooking = (id) => {
    setBookings(prev =>
      prev.map(b => b.id === id ? { ...b, status: 'Confirmed' } : b)
    );
  };

  const rejectBooking = (id) => {
    setBookings(prev =>
      prev.map(b => b.id === id ? { ...b, status: 'Rejected' } : b)
    );
  };

  const updateRoomStatus = (id, newStatus) => {
    setRooms(prev =>
      prev.map(r => r.id === id ? { ...r, status: newStatus } : r)
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Unavailable': return 'bg-red-100 text-red-800';
      case 'Maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'Confirmed': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-orange-100 text-orange-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Home className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">🏨 Provider Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">SH</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{profile.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 1️⃣ Overview Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-3xl font-bold text-gray-900">{summary.totalBookings}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">R{summary.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                  <p className="text-3xl font-bold text-gray-900">{summary.pendingApprovals}</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Available Rooms</p>
                  <p className="text-3xl font-bold text-gray-900">{summary.availableRooms}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Home className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2️⃣ Quick Actions */}
        <section className="bg-white rounded-lg shadow-sm border mb-8">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-5 w-5" />
                <span>Add New Room</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors">
                <Calendar className="h-5 w-5" />
                <span>Manage Availability</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                <Eye className="h-5 w-5" />
                <span>View All Bookings</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span>Check Messages</span>
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* 3️⃣ Availability Calendar */}
            <section className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Availability Calendar</h2>
                <div className="space-y-3">
                  {availability.map((entry, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">{entry.date}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        entry.status === 'Fully Booked' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {entry.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4️⃣ Room Management */}
            <section className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Room Management</h2>
                <div className="space-y-4">
                  {rooms.map(room => (
                    <div key={room.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-gray-900">{room.name}</h3>
                          <p className="text-sm text-gray-600">R{room.price} per night</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(room.status)}`}>
                          {room.status}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => updateRoomStatus(room.id, 'Available')}
                          className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-lg hover:bg-green-200 transition-colors"
                        >
                          Mark Available
                        </button>
                        <button 
                          onClick={() => updateRoomStatus(room.id, 'Maintenance')}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-lg hover:bg-yellow-200 transition-colors"
                        >
                          Mark Maintenance
                        </button>
                        <button 
                          onClick={() => updateRoomStatus(room.id, 'Unavailable')}
                          className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-lg hover:bg-red-200 transition-colors"
                        >
                          Mark Unavailable
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5️⃣ Booking Management */}
            <section className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Booking Management</h2>
                <div className="space-y-4">
                  {bookings.map(booking => (
                    <div key={booking.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-gray-900">#{booking.id} - {booking.guest}</h3>
                          <p className="text-sm text-gray-600">{booking.room} • {booking.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>
                      {booking.status === 'Pending' && (
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => approveBooking(booking.id)}
                            className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <CheckCircle className="h-4 w-4" />
                            <span>Approve</span>
                          </button>
                          <button 
                            onClick={() => rejectBooking(booking.id)}
                            className="flex items-center space-x-1 px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                          >
                            <XCircle className="h-4 w-4" />
                            <span>Reject</span>
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* 6️⃣ Guest Information */}
            <section className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Guest Information</h2>
                <div className="space-y-3">
                  {bookings.map(booking => (
                    <div key={booking.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{booking.guest}</p>
                        <p className="text-sm text-gray-600">Room: {booking.room}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7️⃣ Revenue Tracking */}
            <section className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue & Payments</h2>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-gray-900">R{summary.totalRevenue.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                </div>
                <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Download Monthly Report</span>
                </button>
              </div>
            </section>

            {/* 8️⃣ Messages & Notifications */}
            <section className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Messages & Notifications</h2>
                <div className="space-y-3">
                  {notifications.map(note => (
                    <div key={note.id} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Bell className="h-5 w-5 text-blue-600 mt-0.5" />
                      <p className="text-sm text-gray-700">{note.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 9️⃣ Profile Settings */}
            <section className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Settings</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Hotel Name</p>
                    <p className="font-medium text-gray-900">{profile.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-900">{profile.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Business Hours</p>
                    <p className="font-medium text-gray-900">{profile.businessHours}</p>
                  </div>
                </div>
                <button className="w-full mt-4 flex items-center justify-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  <Settings className="h-4 w-4" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </section>

            {/* 🔟 Support & Help */}
            <section className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Support & Help</h2>
                <div className="space-y-3">
                  <a href="#" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <HelpCircle className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">FAQs</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <MessageCircle className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">Contact Support</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <AlertCircle className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">Report a Problem</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderHome;