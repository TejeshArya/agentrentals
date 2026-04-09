import { Link } from "react-router";
import { Search, Car, Shield, Clock, TrendingUp, MapPin, Calendar, DollarSign, Star, Zap, Award, Users, UserCog } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const vehicleTypes = [
    { name: "Premium Cars", icon: "🚗", count: "500+", gradient: "from-[#dcc296] to-[#cba36b]" },
    { name: "Scooters", icon: "🛵", count: "300+", gradient: "from-slate-300 to-slate-400" },
    { name: "Bikes", icon: "🚲", count: "200+", gradient: "from-slate-200 to-slate-300" },
    { name: "SUVs", icon: "🚙", count: "150+", gradient: "from-amber-200 to-amber-300" },
  ];

  const features = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Smart Search",
      description: "AI-powered search with advanced filters by type, location, price, and premium features",
      gradient: "from-[#f5efe6] to-white"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "100% Verified",
      description: "All vendors are verified with KYC. Secure payments via PCI-DSS compliant gateways",
      gradient: "from-[#f5efe6] to-white"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Instant Booking",
      description: "Book instantly with real-time availability. Get instant confirmation and digital keys",
      gradient: "from-[#f5efe6] to-white"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Premium Service",
      description: "Competitive pricing with transparent fees. 24/7 concierge support for all bookings",
      gradient: "from-[#f5efe6] to-white"
    }
  ];

  const featuredVehicles = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      category: "Luxury Sedan",
      image: "https://images.unsplash.com/photo-1768360612035-8bf84c9fbc0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZW50YWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc3NTYzNDM3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "2,500",
      location: "Mumbai, India",
      rating: 4.9,
      reviews: 125,
      featured: true
    },
    {
      id: 2,
      name: "Honda Activa 6G",
      category: "Premium Scooter",
      image: "https://images.unsplash.com/photo-1758545854748-6c74c566cf24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY29vdGVyJTIwbW90b3JjeWNsZSUyMHVyYmFufGVufDF8fHx8MTc3NTYzNDM3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "500",
      location: "Bangalore, India",
      rating: 4.9,
      reviews: 89,
      featured: false
    },
    {
      id: 3,
      name: "Electric Bike Pro",
      category: "Eco-Friendly",
      image: "https://images.unsplash.com/photo-1627363707801-543bdb44faf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGJpa2UlMjBiaWN5Y2xlJTIwY2l0eXxlbnwxfHx8fDE3NzU2MzQzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "300",
      location: "Delhi, India",
      rating: 4.8,
      reviews: 64,
      featured: false
    }
  ];

  const stats = [
    { label: "Active Vehicles", value: "10,000+", icon: <Car className="w-6 h-6" />, gradient: "from-[#dcc296] to-[#cba36b]" },
    { label: "Happy Customers", value: "50,000+", icon: <Users className="w-6 h-6" />, gradient: "from-[#dcc296] to-[#cba36b]" },
    { label: "Cities Covered", value: "25+", icon: <MapPin className="w-6 h-6" />, gradient: "from-[#dcc296] to-[#cba36b]" },
    { label: "Daily Bookings", value: "500+", icon: <Calendar className="w-6 h-6" />, gradient: "from-[#dcc296] to-[#cba36b]" },
  ];

  return (
    <div>
      {/* Hero Section - True Premium Design */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center mx-auto lg:mx-0 px-4 py-1.5 bg-[#f5efe6] text-[#a67c4a] rounded-md text-sm font-semibold mb-6"
              >
                <Award className="w-4 h-4 mr-2" />
                Premium Rental Platform
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 lg:mb-6 leading-[1.2] lg:leading-[1.1] tracking-tight text-slate-800"
              >
                Your Travel Journey, <br className="hidden sm:block" />
                <span className="text-slate-800">Simplified.</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl sm:text-2xl font-bold mb-4 lg:mb-6 text-[#b88c56]"
              >
                Comfort. Security. Prestige.
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-10 font-medium leading-relaxed"
              >
                Experience premium vehicle rentals tailored to your travel goals. Secure, transparent, and high-quality opportunities all in one place.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link 
                  to="/search" 
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#b88c56] text-white rounded-full text-lg font-semibold hover:bg-[#a67c4a] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Explore Vehicles
                </Link>
                <Link 
                  to="/search" 
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white border border-[#b88c56] text-[#b88c56] rounded-full text-lg font-semibold hover:bg-[#f5efe6] transition-all"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative hidden lg:block"
            >
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 shadow-2xl relative flex items-center justify-center p-8">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1503376712396-8d591b643a68?auto=format&fit=crop&q=80&w=800"
                    alt="Premium Car"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#b88c56]/20 rounded-full blur-2xl"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Vehicle Types - Premium Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-slate-600">Choose from our premium collection of vehicles</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map((type, index) => (
              <Link 
                key={index}
                to="/search"
                className="group relative overflow-hidden bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">{type.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{type.name}</h3>
                  <p className="text-primary font-semibold">{type.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Premium Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Why Agent Rentals?</h2>
            <p className="text-xl text-slate-600">The most trusted platform for premium vehicle rentals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles - Premium Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 text-center md:text-left gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2 md:mb-4">Featured Vehicles</h2>
              <p className="text-lg md:text-xl text-slate-600">Handpicked premium vehicles near you</p>
            </div>
            <Link to="/search" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group bg-primary/10 px-4 py-2 rounded-full md:bg-transparent md:px-0 md:py-0 md:border-none">
              View All Collection
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <Link 
                key={vehicle.id}
                to={`/vehicle/${vehicle.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback 
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {vehicle.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
                      <span className="font-bold text-slate-900">{vehicle.rating}</span>
                      <span className="text-slate-600 text-sm ml-1">({vehicle.reviews})</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-xs font-semibold mb-3">
                    {vehicle.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{vehicle.name}</h3>
                  <div className="flex items-center text-slate-600 mb-6">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{vehicle.location}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-3xl font-bold text-slate-900">₹{vehicle.price}</span>
                      <span className="text-slate-600">/day</span>
                    </div>
                    <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-all font-semibold shadow-md hover:shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Premium Design */}
      <section className="py-20 bg-slate-50 text-slate-900 relative border-y border-slate-200">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS04IDI4YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex w-16 h-16 bg-[#b88c56] rounded-2xl items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-slate-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the future of premium vehicle rental
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/search" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full text-lg font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Search className="w-5 h-5 mr-2" />
              Browse Premium Vehicles
            </Link>
            <Link 
              to="/vendor" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white/10 transition-all"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              List Your Vehicle
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}