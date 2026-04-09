import { useState } from "react";
import { 
  Car, DollarSign, TrendingUp, Package, Plus, Eye, Edit, Trash2,
  Calendar, MapPin, Star, Clock, CheckCircle, XCircle, AlertCircle,
  BarChart3, Users, Download, Filter, Search, Settings, Upload
} from "lucide-react";
import { Link } from "react-router";

export function VendorDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'vehicles' | 'bookings' | 'earnings'>('overview');

  const stats = [
    {
      label: "Total Earnings",
      value: "₹3.2M",
      change: "+18.2%",
      trend: "up",
      icon: <DollarSign className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600",
      description: "This month"
    },
    {
      label: "Active Vehicles",
      value: "12",
      change: "+2",
      trend: "up",
      icon: <Car className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
      description: "Listed & approved"
    },
    {
      label: "Active Bookings",
      value: "28",
      change: "+5",
      trend: "up",
      icon: <Package className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-600",
      description: "Ongoing rentals"
    },
    {
      label: "Customer Rating",
      value: "4.9",
      change: "+0.2",
      trend: "up",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-600",
      description: "From 145 reviews"
    }
  ];

  const vehicles = [
    { 
      id: 1, 
      name: "Mercedes S-Class", 
      category: "Luxury Sedan", 
      price: "₹2,500", 
      status: "Active", 
      bookings: 45, 
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1768360612035-8bf84c9fbc0a?w=300",
      earnings: "₹112,500"
    },
    { 
      id: 2, 
      name: "BMW X5", 
      category: "SUV", 
      price: "₹3,500", 
      status: "Active", 
      bookings: 32, 
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=300",
      earnings: "₹112,000"
    },
    { 
      id: 3, 
      name: "Honda Activa 6G", 
      category: "Scooter", 
      price: "₹500", 
      status: "Active", 
      bookings: 78, 
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1758545854748-6c74c566cf24?w=300",
      earnings: "₹39,000"
    },
    { 
      id: 4, 
      name: "Audi A6", 
      category: "Luxury Sedan", 
      price: "₹3,000", 
      status: "Maintenance", 
      bookings: 28, 
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1610768764270-790fbec18178?w=300",
      earnings: "₹84,000"
    }
  ];

  const recentBookings = [
    { 
      id: "BK-10234", 
      customer: "Arjun Mehta", 
      vehicle: "Mercedes S-Class", 
      startDate: "2026-04-08",
      endDate: "2026-04-11",
      amount: "₹7,500", 
      status: "Active",
      customerRating: 4.8
    },
    { 
      id: "BK-10228", 
      customer: "Kavya Iyer", 
      vehicle: "Honda Activa 6G", 
      startDate: "2026-04-07",
      endDate: "2026-04-10",
      amount: "₹1,500", 
      status: "Active",
      customerRating: 5.0
    },
    { 
      id: "BK-10220", 
      customer: "Rohan Das", 
      vehicle: "BMW X5", 
      startDate: "2026-04-01",
      endDate: "2026-04-05",
      amount: "₹14,000", 
      status: "Completed",
      customerRating: 4.9
    },
    { 
      id: "BK-10215", 
      customer: "Ananya Shah", 
      vehicle: "Audi A6", 
      startDate: "2026-03-28",
      endDate: "2026-04-02",
      amount: "₹15,000", 
      status: "Completed",
      customerRating: 4.7
    }
  ];

  const monthlyEarnings = [
    { month: "Oct", amount: 245000 },
    { month: "Nov", amount: 280000 },
    { month: "Dec", amount: 310000 },
    { month: "Jan", amount: 295000 },
    { month: "Feb", amount: 320000 },
    { month: "Mar", amount: 340000 },
    { month: "Apr", amount: 180000 }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Vendor Dashboard</h1>
              <p className="text-slate-600 mt-1">Manage your vehicles and earnings</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button className="flex items-center px-4 py-2.5 bg-white border-2 border-slate-200 text-slate-700 rounded-xl hover:border-emerald-500 hover:text-emerald-600 transition-all font-medium">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </button>
              <Link 
                to="/vendor/add-vehicle"
                className="flex items-center px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 shadow-md transition-all font-medium"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Vehicle
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mt-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-emerald-50 text-emerald-600 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('vehicles')}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'vehicles'
                  ? 'bg-emerald-50 text-emerald-600 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              My Vehicles
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'bookings'
                  ? 'bg-emerald-50 text-emerald-600 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Bookings
            </button>
            <button
              onClick={() => setActiveTab('earnings')}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'earnings'
                  ? 'bg-emerald-50 text-emerald-600 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Earnings
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md`}>
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                  <p className="text-slate-600 text-sm font-medium mb-1">{stat.label}</p>
                  <p className="text-slate-500 text-xs">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* Performance Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Monthly Earnings</h3>
                    <p className="text-sm text-slate-600">Last 7 months performance</p>
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">View Details</button>
                </div>
                <div className="h-80 flex items-end justify-between space-x-2">
                  {monthlyEarnings.map((item, index) => {
                    const maxAmount = Math.max(...monthlyEarnings.map(e => e.amount));
                    const height = (item.amount / maxAmount) * 100;
                    return (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="w-full relative group">
                          <div 
                            className="w-full bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-lg transition-all duration-300 hover:from-emerald-600 hover:to-teal-500"
                            style={{ height: `${height}%` }}
                          >
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              ₹{(item.amount / 1000).toFixed(0)}k
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-slate-600 mt-2 font-medium">{item.month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-lg text-white">
                  <h3 className="text-lg font-bold mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-emerald-100">Booking Rate</span>
                        <span className="font-bold">89%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-emerald-100">Customer Satisfaction</span>
                        <span className="font-bold">96%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2" style={{ width: '96%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-emerald-100">Vehicle Availability</span>
                        <span className="font-bold">92%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Top Performer</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <Star className="w-6 h-6 text-white fill-current" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900">Mercedes S-Class</p>
                        <p className="text-sm text-slate-600">₹112,500 earned</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600">45 bookings</span>
                        <span className="text-emerald-600 font-semibold">4.9★</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Bookings Preview */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Recent Bookings</h3>
                <button 
                  onClick={() => setActiveTab('bookings')}
                  className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                >
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentBookings.slice(0, 3).map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          booking.status === 'Active' ? 'bg-blue-100' : 'bg-emerald-100'
                        }`}>
                          {booking.status === 'Active' ? (
                            <Clock className="w-5 h-5 text-blue-600" />
                          ) : (
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{booking.customer}</p>
                          <p className="text-sm text-slate-600">{booking.vehicle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{booking.amount}</p>
                      <p className="text-sm text-slate-600">{booking.startDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Vehicles Tab */}
        {activeTab === 'vehicles' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search your vehicles..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border-0 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="flex space-x-3">
                  <select className="px-4 py-3 bg-slate-50 border-0 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500 font-medium">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Maintenance</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Vehicles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="relative h-48">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-4 py-2 rounded-full text-xs font-semibold ${
                        vehicle.status === 'Active' 
                          ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                          : 'bg-amber-100 text-amber-700 border border-amber-200'
                      }`}>
                        {vehicle.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{vehicle.name}</h3>
                        <p className="text-sm text-slate-600">{vehicle.category}</p>
                      </div>
                      <div className="flex items-center space-x-1 bg-amber-50 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="font-semibold text-slate-900">{vehicle.rating}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50 rounded-xl">
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Price/Day</p>
                        <p className="font-bold text-slate-900">{vehicle.price}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Bookings</p>
                        <p className="font-bold text-slate-900">{vehicle.bookings}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Earned</p>
                        <p className="font-bold text-emerald-600">{vehicle.earnings}</p>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 flex items-center justify-center px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all font-medium">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </button>
                      <button className="flex-1 flex items-center justify-center px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all font-medium">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border-0 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="flex space-x-3">
                  <select className="px-4 py-3 bg-slate-50 border-0 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500 font-medium">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Bookings List */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Booking ID</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Vehicle</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Period</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-sm font-semibold text-slate-900">{booking.id}</td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold text-slate-900">{booking.customer}</p>
                            <div className="flex items-center mt-1">
                              <Star className="w-3 h-3 text-amber-500 fill-current mr-1" />
                              <span className="text-xs text-slate-600">{booking.customerRating}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-900">{booking.vehicle}</td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          <div>
                            <p>{booking.startDate}</p>
                            <p className="text-xs text-slate-500">to {booking.endDate}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-slate-900">{booking.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'Active' ? 'bg-blue-100 text-blue-700' :
                            booking.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {booking.status === 'Active' && <Clock className="w-3 h-3 mr-1" />}
                            {booking.status === 'Completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Earnings Tab */}
        {activeTab === 'earnings' && (
          <div className="space-y-6">
            {/* Earnings Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-lg text-white">
                <p className="text-emerald-100 text-sm mb-2">Total Lifetime Earnings</p>
                <h3 className="text-4xl font-bold mb-4">₹12.5M</h3>
                <p className="text-sm text-emerald-100">Since joining platform</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <p className="text-slate-600 text-sm mb-2">This Month</p>
                <h3 className="text-4xl font-bold text-slate-900 mb-4">₹3.2M</h3>
                <p className="text-sm text-emerald-600 font-semibold">+18.2% from last month</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <p className="text-slate-600 text-sm mb-2">Pending Payout</p>
                <h3 className="text-4xl font-bold text-slate-900 mb-4">₹45,000</h3>
                <p className="text-sm text-slate-600">Available on Apr 15</p>
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Transaction History</h3>
                <button className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Statement
                </button>
              </div>
              <div className="space-y-3">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        booking.status === 'Completed' ? 'bg-emerald-100' : 'bg-blue-100'
                      }`}>
                        <DollarSign className={`w-6 h-6 ${
                          booking.status === 'Completed' ? 'text-emerald-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{booking.vehicle}</p>
                        <p className="text-sm text-slate-600">{booking.customer} • {booking.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-emerald-600">{booking.amount}</p>
                      <p className="text-sm text-slate-600">{booking.startDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
