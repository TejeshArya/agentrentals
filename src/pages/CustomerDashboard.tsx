import { useState } from "react";
import { Link } from "react-router";
import { 
  Car, Calendar, Heart, Clock, MapPin, Star, ChevronRight,
  Package, CreditCard, Settings, Bell, Shield, Award,
  Download, FileText, User, Mail, Phone, Edit
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'favorites' | 'profile'>('bookings');

  const stats = [
    {
      label: "Total Trips",
      value: "24",
      icon: <Car className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      label: "Active Bookings",
      value: "2",
      icon: <Clock className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      label: "Saved Vehicles",
      value: "8",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      label: "Rewards Points",
      value: "1,250",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const activeBookings = [
    {
      id: "BK-10234",
      vehicle: "Mercedes S-Class",
      vendor: "Luxury Rentals Co",
      image: "https://images.unsplash.com/photo-1768360612035-8bf84c9fbc0a?w=300",
      startDate: "2026-04-08",
      endDate: "2026-04-11",
      location: "Mumbai, India",
      price: "₹7,500",
      status: "Active",
      pickupTime: "10:00 AM"
    },
    {
      id: "BK-10235",
      vehicle: "Honda Activa 6G",
      vendor: "City Wheels",
      image: "https://images.unsplash.com/photo-1758545854748-6c74c566cf24?w=300",
      startDate: "2026-04-09",
      endDate: "2026-04-12",
      location: "Bangalore, India",
      price: "₹1,500",
      status: "Confirmed",
      pickupTime: "2:00 PM"
    }
  ];

  const pastBookings = [
    {
      id: "BK-10220",
      vehicle: "BMW X5",
      vendor: "Premium Motors",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=300",
      startDate: "2026-03-28",
      endDate: "2026-04-02",
      location: "Delhi, India",
      price: "₹17,500",
      status: "Completed",
      rating: 5
    },
    {
      id: "BK-10210",
      vehicle: "Tesla Model 3",
      vendor: "EV Rentals",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=300",
      startDate: "2026-03-15",
      endDate: "2026-03-20",
      location: "Hyderabad, India",
      price: "₹20,000",
      status: "Completed",
      rating: 5
    },
    {
      id: "BK-10195",
      vehicle: "Audi A6",
      vendor: "Luxury Drive",
      image: "https://images.unsplash.com/photo-1610768764270-790fbec18178?w=300",
      startDate: "2026-02-20",
      endDate: "2026-02-25",
      location: "Pune, India",
      price: "₹15,000",
      status: "Completed",
      rating: 4
    }
  ];

  const favoriteVehicles = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      category: "Luxury Sedan",
      image: "https://images.unsplash.com/photo-1768360612035-8bf84c9fbc0a?w=300",
      price: "₹2,500",
      location: "Mumbai, India",
      rating: 4.9,
      reviews: 125,
      available: true
    },
    {
      id: 2,
      name: "BMW M5",
      category: "Sports Sedan",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300",
      price: "₹3,200",
      location: "Delhi, India",
      rating: 4.8,
      reviews: 98,
      available: true
    },
    {
      id: 3,
      name: "Range Rover Sport",
      category: "Luxury SUV",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300",
      price: "₹4,000",
      location: "Bangalore, India",
      rating: 4.9,
      reviews: 156,
      available: false
    }
  ];

  const userProfile = {
    name: "Arjun Mehta",
    email: "arjun.mehta@email.com",
    phone: "+91 98765 43210",
    joinDate: "January 2025",
    verified: true,
    membershipTier: "Gold Member"
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">My Dashboard</h1>
              <p className="text-slate-600 mt-1">Welcome back, {userProfile.name}!</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button className="flex items-center px-4 py-2.5 bg-white border-2 border-slate-200 text-slate-700 rounded-xl hover:border-emerald-500 hover:text-emerald-600 transition-all font-medium">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </button>
              <Link 
                to="/search"
                className="flex items-center px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 shadow-md transition-all font-medium"
              >
                <Car className="w-4 h-4 mr-2" />
                Browse Vehicles
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mt-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'bookings'
                  ? 'bg-emerald-50 text-emerald-600 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              My Bookings
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'favorites'
                  ? 'bg-emerald-50 text-emerald-600 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Favorites
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'profile'
                  ? 'bg-emerald-50 text-emerald-600 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Profile & Settings
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md mb-3 md:mb-4`}>
                <div className="text-white">{stat.icon}</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-slate-600 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-8">
            {/* Active Bookings */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Active Bookings</h2>
                <span className="text-sm text-slate-600">{activeBookings.length} active</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeBookings.map((booking) => (
                  <div key={booking.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                    <div className="relative h-56">
                      <ImageWithFallback 
                        src={booking.image}
                        alt={booking.vehicle}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm ${
                          booking.status === 'Active' 
                            ? 'bg-blue-100/90 text-blue-700 border border-blue-200' 
                            : 'bg-emerald-100/90 text-emerald-700 border border-emerald-200'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{booking.vehicle}</h3>
                        <p className="text-sm text-slate-600">{booking.vendor}</p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-slate-600">
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{booking.location}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{booking.startDate} to {booking.endDate}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">Pickup at {booking.pickupTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div>
                          <p className="text-sm text-slate-600 mb-1">Total Amount</p>
                          <p className="text-2xl font-bold text-slate-900">{booking.price}</p>
                        </div>
                        <Link 
                          to={`/booking/${booking.id}`}
                          className="flex items-center px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all font-medium"
                        >
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Bookings */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Past Bookings</h2>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">View All</button>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="divide-y divide-slate-100">
                  {pastBookings.map((booking) => (
                    <div key={booking.id} className="p-6 hover:bg-slate-50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={booking.image}
                            alt={booking.vehicle}
                            className="w-20 h-20 rounded-xl object-cover"
                          />
                          <div>
                            <h3 className="font-bold text-slate-900 mb-1">{booking.vehicle}</h3>
                            <p className="text-sm text-slate-600 mb-2">{booking.vendor}</p>
                            <div className="flex items-center space-x-4 text-xs text-slate-500">
                              <span className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {booking.startDate}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {booking.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <p className="text-sm text-slate-600 mb-1">Total Paid</p>
                            <p className="text-xl font-bold text-slate-900">{booking.price}</p>
                          </div>
                          {booking.rating && (
                            <div className="flex items-center space-x-1 bg-amber-50 px-4 py-2 rounded-xl">
                              <Star className="w-5 h-5 text-amber-500 fill-current" />
                              <span className="font-bold text-slate-900">{booking.rating}</span>
                            </div>
                          )}
                          <button className="flex items-center text-slate-400 hover:text-slate-600">
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Saved Vehicles</h2>
              <p className="text-slate-600">{favoriteVehicles.length} vehicles saved</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {favoriteVehicles.map((vehicle) => (
                <Link 
                  key={vehicle.id}
                  to={`/vehicle/${vehicle.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback 
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Heart className="w-5 h-5 text-red-500 fill-current" />
                    </button>
                    {!vehicle.available && (
                      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Currently Unavailable</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold mb-3">
                      {vehicle.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{vehicle.name}</h3>
                    <div className="flex items-center text-slate-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{vehicle.location}</span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="font-bold text-slate-900">{vehicle.rating}</span>
                        <span className="text-slate-600 text-sm">({vehicle.reviews})</span>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-slate-900">{vehicle.price}</span>
                        <span className="text-slate-600 text-sm">/day</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Card */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 shadow-lg text-white text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <User className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{userProfile.name}</h2>
                  {userProfile.verified && (
                    <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold mb-4">
                      <Shield className="w-4 h-4 mr-1" />
                      Verified Member
                    </div>
                  )}
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 mt-6">
                    <p className="text-emerald-100 text-sm mb-1">Membership Tier</p>
                    <p className="text-xl font-bold">{userProfile.membershipTier}</p>
                  </div>
                  <p className="text-emerald-100 text-sm mt-4">Member since {userProfile.joinDate}</p>
                </div>
              </div>

              {/* Profile Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Personal Information</h3>
                    <button className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <User className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-600">Full Name</p>
                        <p className="font-semibold text-slate-900">{userProfile.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-600">Email Address</p>
                        <p className="font-semibold text-slate-900">{userProfile.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-600">Phone Number</p>
                        <p className="font-semibold text-slate-900">{userProfile.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rewards & Benefits */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Rewards & Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-amber-700">Points Balance</p>
                          <p className="text-2xl font-bold text-amber-900">1,250</p>
                        </div>
                      </div>
                      <p className="text-xs text-amber-700">Redeem for discounts on future bookings</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-emerald-700">Wallet Balance</p>
                          <p className="text-2xl font-bold text-emerald-900">₹500</p>
                        </div>
                      </div>
                      <p className="text-xs text-emerald-700">Available for instant checkout</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center space-x-2 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
                      <FileText className="w-5 h-5 text-slate-600" />
                      <span className="font-medium text-slate-900">Download Invoices</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
                      <Settings className="w-5 h-5 text-slate-600" />
                      <span className="font-medium text-slate-900">Settings</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
                      <Shield className="w-5 h-5 text-slate-600" />
                      <span className="font-medium text-slate-900">Privacy & Security</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
                      <Bell className="w-5 h-5 text-slate-600" />
                      <span className="font-medium text-slate-900">Notifications</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
