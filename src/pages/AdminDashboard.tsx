import { useState } from "react";
import { 
  Users, Car, TrendingUp, DollarSign, Shield, AlertCircle, 
  Search, Filter, MoreVertical, CheckCircle, XCircle, Clock,
  Eye, Edit, Trash2, Download, Calendar, MapPin, Star,
  ArrowUpRight, ArrowDownRight, Activity, Package, UserCheck
} from "lucide-react";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'vehicles' | 'bookings'>('overview');

  const stats = [
    {
      label: "Total Revenue",
      value: "₹45.2M",
      change: "+12.5%",
      trend: "up",
      icon: <DollarSign className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50"
    },
    {
      label: "Active Users",
      value: "52,450",
      change: "+8.3%",
      trend: "up",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      label: "Total Vehicles",
      value: "10,234",
      change: "+15.2%",
      trend: "up",
      icon: <Car className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    },
    {
      label: "Active Bookings",
      value: "1,842",
      change: "-2.4%",
      trend: "down",
      icon: <Activity className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50"
    }
  ];

  const recentUsers = [
    { id: 1, name: "Rajesh Kumar", email: "rajesh.k@email.com", role: "Vendor", status: "Active", joined: "2026-04-01", verified: true },
    { id: 2, name: "Priya Sharma", email: "priya.s@email.com", role: "Customer", status: "Active", joined: "2026-04-02", verified: true },
    { id: 3, name: "Amit Patel", email: "amit.p@email.com", role: "Vendor", status: "Pending", joined: "2026-04-03", verified: false },
    { id: 4, name: "Sneha Reddy", email: "sneha.r@email.com", role: "Customer", status: "Active", joined: "2026-04-05", verified: true },
    { id: 5, name: "Vikram Singh", email: "vikram.s@email.com", role: "Vendor", status: "Suspended", joined: "2026-03-28", verified: true }
  ];

  const recentVehicles = [
    { id: 1, name: "Mercedes S-Class", vendor: "Luxury Rentals Co", category: "Luxury Sedan", price: "₹2,500", status: "Approved", location: "Mumbai" },
    { id: 2, name: "Honda Activa 6G", vendor: "City Wheels", category: "Scooter", price: "₹500", status: "Pending", location: "Bangalore" },
    { id: 3, name: "BMW X5", vendor: "Premium Motors", category: "SUV", price: "₹3,500", status: "Approved", location: "Delhi" },
    { id: 4, name: "Hero Splendor", vendor: "Quick Ride", category: "Bike", price: "₹400", status: "Rejected", location: "Pune" },
    { id: 5, name: "Tesla Model 3", vendor: "EV Rentals", category: "Electric Car", price: "₹4,000", status: "Approved", location: "Hyderabad" }
  ];

  const recentBookings = [
    { id: "BK-10234", customer: "Arjun Mehta", vehicle: "Mercedes S-Class", vendor: "Luxury Rentals", amount: "₹7,500", status: "Active", date: "2026-04-06" },
    { id: "BK-10233", customer: "Kavya Iyer", vehicle: "Honda Activa 6G", vendor: "City Wheels", amount: "₹1,500", status: "Completed", date: "2026-04-05" },
    { id: "BK-10232", customer: "Rohan Das", vehicle: "BMW X5", vendor: "Premium Motors", amount: "₹10,500", status: "Active", date: "2026-04-05" },
    { id: "BK-10231", customer: "Ananya Shah", vehicle: "Tesla Model 3", vendor: "EV Rentals", amount: "₹12,000", status: "Active", date: "2026-04-04" },
    { id: "BK-10230", customer: "Karthik Nair", vehicle: "Hero Splendor", vendor: "Quick Ride", amount: "₹1,200", status: "Cancelled", date: "2026-04-03" }
  ];

  const platformActivity = [
    { action: "New vehicle listed", user: "Luxury Rentals Co", time: "2 minutes ago", type: "vehicle" },
    { action: "User verified", user: "Priya Sharma", time: "15 minutes ago", type: "user" },
    { action: "Booking completed", user: "Arjun Mehta", time: "1 hour ago", type: "booking" },
    { action: "Payment received", user: "Premium Motors", time: "2 hours ago", type: "payment" },
    { action: "New vendor registered", user: "EV Rentals", time: "3 hours ago", type: "vendor" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
              <p className="text-slate-600 mt-1">Manage and monitor your platform</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button className="flex items-center px-4 py-2.5 bg-white border-2 border-slate-200 text-slate-700 rounded-xl hover:border-emerald-500 hover:text-emerald-600 transition-all font-medium">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
              <button className="flex items-center px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 shadow-md transition-all font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                View Reports
              </button>
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
              onClick={() => setActiveTab('users')}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'users'
                  ? 'bg-emerald-50 text-emerald-600 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab('vehicles')}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'vehicles'
                  ? 'bg-emerald-50 text-emerald-600 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Vehicles
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
                    <span className={`flex items-center text-sm font-semibold ${
                      stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Recent Activity</h3>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">View All</button>
                </div>
                <div className="space-y-4">
                  {platformActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.type === 'vehicle' ? 'bg-purple-100' :
                        activity.type === 'user' ? 'bg-blue-100' :
                        activity.type === 'booking' ? 'bg-emerald-100' :
                        activity.type === 'payment' ? 'bg-amber-100' :
                        'bg-slate-100'
                      }`}>
                        {activity.type === 'vehicle' && <Car className="w-5 h-5 text-purple-600" />}
                        {activity.type === 'user' && <UserCheck className="w-5 h-5 text-blue-600" />}
                        {activity.type === 'booking' && <Package className="w-5 h-5 text-emerald-600" />}
                        {activity.type === 'payment' && <DollarSign className="w-5 h-5 text-amber-600" />}
                        {activity.type === 'vendor' && <Users className="w-5 h-5 text-slate-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">{activity.action}</p>
                        <p className="text-sm text-slate-600">{activity.user}</p>
                      </div>
                      <span className="text-sm text-slate-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-lg text-white">
                <h3 className="text-lg font-bold mb-6">Platform Health</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-emerald-100">User Satisfaction</span>
                      <span className="font-bold">98.5%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2" style={{ width: '98.5%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-emerald-100">Verified Vendors</span>
                      <span className="font-bold">95.2%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2" style={{ width: '95.2%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-emerald-100">Active Listings</span>
                      <span className="font-bold">92.8%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2" style={{ width: '92.8%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-emerald-100">Booking Success</span>
                      <span className="font-bold">96.3%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2" style={{ width: '96.3%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search users by name, email..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border-0 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="flex space-x-3">
                  <select className="px-4 py-3 bg-slate-50 border-0 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500 font-medium">
                    <option>All Roles</option>
                    <option>Vendor</option>
                    <option>Customer</option>
                  </select>
                  <select className="px-4 py-3 bg-slate-50 border-0 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500 font-medium">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Pending</option>
                    <option>Suspended</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">User</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Joined</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Verified</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-semibold text-slate-900">{user.name}</div>
                            <div className="text-sm text-slate-600">{user.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                            user.role === 'Vendor' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                            user.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {user.status === 'Active' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {user.status === 'Pending' && <Clock className="w-3 h-3 mr-1" />}
                            {user.status === 'Suspended' && <XCircle className="w-3 h-3 mr-1" />}
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">{user.joined}</td>
                        <td className="px-6 py-4">
                          {user.verified ? (
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-slate-400" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-slate-600">
                            <MoreVertical className="w-5 h-5" />
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
                    placeholder="Search vehicles..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border-0 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="flex space-x-3">
                  <select className="px-4 py-3 bg-slate-50 border-0 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500 font-medium">
                    <option>All Categories</option>
                    <option>Luxury Sedan</option>
                    <option>SUV</option>
                    <option>Scooter</option>
                  </select>
                  <select className="px-4 py-3 bg-slate-50 border-0 rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500 font-medium">
                    <option>All Status</option>
                    <option>Approved</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Vehicles Table */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Vehicle</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Vendor</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Price/Day</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {recentVehicles.map((vehicle) => (
                      <tr key={vehicle.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-semibold text-slate-900">{vehicle.name}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">{vehicle.vendor}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
                            {vehicle.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-sm text-slate-600">
                            <MapPin className="w-4 h-4 mr-1" />
                            {vehicle.location}
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-slate-900">{vehicle.price}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            vehicle.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                            vehicle.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {vehicle.status === 'Approved' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {vehicle.status === 'Pending' && <Clock className="w-3 h-3 mr-1" />}
                            {vehicle.status === 'Rejected' && <XCircle className="w-3 h-3 mr-1" />}
                            {vehicle.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-slate-600">
                            <MoreVertical className="w-5 h-5" />
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

            {/* Bookings Table */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Booking ID</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Vehicle</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Vendor</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-sm font-semibold text-slate-900">{booking.id}</td>
                        <td className="px-6 py-4 text-sm text-slate-900">{booking.customer}</td>
                        <td className="px-6 py-4 text-sm text-slate-900">{booking.vehicle}</td>
                        <td className="px-6 py-4 text-sm text-slate-600">{booking.vendor}</td>
                        <td className="px-6 py-4 font-semibold text-slate-900">{booking.amount}</td>
                        <td className="px-6 py-4 text-sm text-slate-600">{booking.date}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'Active' ? 'bg-blue-100 text-blue-700' :
                            booking.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-slate-600">
                            <MoreVertical className="w-5 h-5" />
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
      </div>
    </div>
  );
}
