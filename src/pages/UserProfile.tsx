import { useState } from "react";
import { User, MapPin, Phone, Mail, Calendar, Car, CreditCard, Bell, Shield, Edit } from "lucide-react";

export function UserProfile() {
  const [activeTab, setActiveTab] = useState<'profile' | 'bookings' | 'payments' | 'settings'>('profile');

  const userInfo = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    memberSince: "January 2025",
    verified: true
  };

  const bookings = [
    {
      id: 1,
      vehicle: "Mercedes S-Class",
      vendor: "Premium Rentals",
      startDate: "2026-04-10",
      endDate: "2026-04-15",
      status: "Upcoming",
      amount: "₹12,500"
    },
    {
      id: 2,
      vehicle: "Honda Activa",
      vendor: "City Rides",
      startDate: "2026-03-15",
      endDate: "2026-03-17",
      status: "Completed",
      amount: "₹1,000"
    },
    {
      id: 3,
      vehicle: "Toyota Fortuner",
      vendor: "Adventure Motors",
      startDate: "2026-02-20",
      endDate: "2026-02-25",
      status: "Completed",
      amount: "₹17,500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {userInfo.name[0]}
                </div>
                <h2 className="text-xl font-bold text-gray-900">{userInfo.name}</h2>
                <p className="text-sm text-gray-600">{userInfo.email}</p>
                {userInfo.verified && (
                  <div className="mt-3 inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    <Shield className="w-4 h-4 mr-1" />
                    Verified
                  </div>
                )}
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${
                    activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User className="w-5 h-5 mr-3" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${
                    activeTab === 'bookings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Car className="w-5 h-5 mr-3" />
                  My Bookings
                </button>
                <button
                  onClick={() => setActiveTab('payments')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${
                    activeTab === 'payments' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <CreditCard className="w-5 h-5 mr-3" />
                  Payments
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${
                    activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Bell className="w-5 h-5 mr-3" />
                  Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <div className="px-4 py-3 bg-gray-50 rounded-lg">
                        <p className="text-gray-900">{userInfo.name}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="px-4 py-3 bg-gray-50 rounded-lg flex items-center">
                        <Mail className="w-4 h-4 text-gray-400 mr-2" />
                        <p className="text-gray-900">{userInfo.email}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="px-4 py-3 bg-gray-50 rounded-lg flex items-center">
                        <Phone className="w-4 h-4 text-gray-400 mr-2" />
                        <p className="text-gray-900">{userInfo.phone}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <div className="px-4 py-3 bg-gray-50 rounded-lg flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                        <p className="text-gray-900">{userInfo.location}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                      <div className="px-4 py-3 bg-gray-50 rounded-lg flex items-center">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <p className="text-gray-900">{userInfo.memberSince}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Verification Status</label>
                      <div className="px-4 py-3 bg-green-50 rounded-lg flex items-center">
                        <Shield className="w-4 h-4 text-green-600 mr-2" />
                        <p className="text-green-600 font-medium">Verified User</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Account Statistics</h3>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600">8</p>
                        <p className="text-sm text-gray-600">Total Bookings</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600">₹45,000</p>
                        <p className="text-sm text-gray-600">Total Spent</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600">4.9</p>
                        <p className="text-sm text-gray-600">Avg Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bookings Tab */}
              {activeTab === 'bookings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h2>
                  
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{booking.vehicle}</h3>
                              <span className={`ml-3 px-3 py-1 rounded-full text-xs font-semibold ${
                                booking.status === 'Upcoming' 
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-green-100 text-green-700'
                              }`}>
                                {booking.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{booking.vendor}</p>
                            <div className="flex items-center text-sm text-gray-600 space-x-4">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {booking.startDate}
                              </div>
                              <span>to</span>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {booking.endDate}
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end justify-between">
                            <p className="text-2xl font-bold text-gray-900">{booking.amount}</p>
                            <button className="mt-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Payments Tab */}
              {activeTab === 'payments' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Methods</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="border-2 border-blue-600 rounded-lg p-6 bg-blue-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center mb-2">
                            <CreditCard className="w-6 h-6 text-blue-600 mr-2" />
                            <span className="font-semibold text-gray-900">•••• •••• •••• 4242</span>
                            <span className="ml-3 px-2 py-1 bg-blue-600 text-white rounded text-xs font-semibold">
                              Default
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">Expires 12/2028</p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center mb-2">
                            <CreditCard className="w-6 h-6 text-gray-600 mr-2" />
                            <span className="font-semibold text-gray-900">•••• •••• •••• 8888</span>
                          </div>
                          <p className="text-sm text-gray-600">Expires 06/2027</p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                      </div>
                    </div>
                  </div>

                  <button className="w-full border-2 border-dashed border-gray-300 rounded-lg py-4 text-blue-600 font-semibold hover:border-blue-600 hover:bg-blue-50">
                    + Add New Payment Method
                  </button>

                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Transaction History</h3>
                    <div className="space-y-3">
                      {bookings.filter(b => b.status === 'Completed').map((booking) => (
                        <div key={booking.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{booking.vehicle}</p>
                            <p className="text-sm text-gray-600">{booking.startDate}</p>
                          </div>
                          <span className="text-lg font-semibold text-gray-900">{booking.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings & Preferences</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Notifications</h3>
                      <div className="space-y-3">
                        {[
                          { label: 'Email Notifications', description: 'Receive booking confirmations and updates via email' },
                          { label: 'SMS Notifications', description: 'Get instant alerts about your bookings via SMS' },
                          { label: 'Push Notifications', description: 'Receive push notifications in your browser' },
                          { label: 'Marketing Emails', description: 'Get updates about new features and promotions' }
                        ].map((item, idx) => (
                          <label key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{item.label}</p>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                            <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="font-semibold text-gray-900 mb-4">Privacy & Security</h3>
                      <div className="space-y-3">
                        <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 font-medium text-gray-900">
                          Change Password
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 font-medium text-gray-900">
                          Two-Factor Authentication
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 font-medium text-gray-900">
                          Privacy Settings
                        </button>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <button className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
