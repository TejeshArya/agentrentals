import { useState } from "react";
import { Link } from "react-router";
import { MapPin, Star, Filter, SlidersHorizontal, X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function VehicleSearch() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    vehicleType: "all",
    priceRange: [0, 10000],
    location: "",
    rating: 0,
    features: [] as string[]
  });

  const vehicles = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      type: "Luxury Sedan",
      image: "https://images.unsplash.com/photo-1768360612035-8bf84c9fbc0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZW50YWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc3NTYzNDM3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      price: 2500,
      location: "Mumbai, Maharashtra",
      rating: 4.9,
      reviews: 125,
      features: ["AC", "GPS", "Bluetooth", "Automatic"],
      vendor: "Premium Rentals",
      available: true
    },
    {
      id: 2,
      name: "Honda Activa 6G",
      type: "Scooter",
      image: "https://images.unsplash.com/photo-1758545854748-6c74c566cf24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY29vdGVyJTIwbW90b3JjeWNsZSUyMHVyYmFufGVufDF8fHx8MTc3NTYzNDM3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      price: 500,
      location: "Bangalore, Karnataka",
      rating: 4.8,
      reviews: 89,
      features: ["Helmet", "Storage"],
      vendor: "City Rides",
      available: true
    },
    {
      id: 3,
      name: "Hero Electric Bike",
      type: "Electric Bike",
      image: "https://images.unsplash.com/photo-1627363707801-543bdb44faf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGJpa2UlMjBiaWN5Y2xlJTIwY2l0eXxlbnwxfHx8fDE3NzU2MzQzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 300,
      location: "Delhi, Delhi",
      rating: 4.7,
      reviews: 64,
      features: ["Eco-friendly", "Lock"],
      vendor: "Green Wheels",
      available: true
    },
    {
      id: 4,
      name: "Toyota Fortuner",
      type: "SUV",
      image: "https://images.unsplash.com/photo-1748214547184-d994bfe53322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVVYlMjBjYXIlMjBwYXJrZWQlMjBzdHJlZXR8ZW58MXx8fHwxNzc1NjM0MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 3500,
      location: "Pune, Maharashtra",
      rating: 4.9,
      reviews: 210,
      features: ["AC", "GPS", "7 Seater", "4WD"],
      vendor: "Adventure Motors",
      available: true
    },
    {
      id: 5,
      name: "Honda City",
      type: "Compact Sedan",
      image: "https://images.unsplash.com/photo-1705769943793-821f557c6942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYWN0JTIwc2VkYW4lMjBjYXIlMjBtb2Rlcm58ZW58MXx8fHwxNzc1NjM0MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 1800,
      location: "Chennai, Tamil Nadu",
      rating: 4.6,
      reviews: 156,
      features: ["AC", "Bluetooth", "Automatic"],
      vendor: "Smart Drive",
      available: false
    },
    {
      id: 6,
      name: "Ferrari 488 GTB",
      type: "Sports Car",
      image: "https://images.unsplash.com/photo-1749566710727-f5a537305331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjByZWQlMjBtb2Rlcm58ZW58MXx8fHwxNzc1NjM0MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 15000,
      location: "Mumbai, Maharashtra",
      rating: 5.0,
      reviews: 45,
      features: ["Premium", "GPS", "High Performance"],
      vendor: "Elite Exotics",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search by vehicle name or location..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              All Vehicles
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
              Cars
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
              Scooters
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
              Bikes
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
              SUVs
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="hidden lg:block w-80 bg-white rounded-xl shadow-lg p-6 h-fit sticky top-32">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Price Range (per day)</h4>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    defaultValue={0}
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    defaultValue={10000}
                  />
                </div>
              </div>

              {/* Vehicle Type */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Vehicle Type</h4>
                <div className="space-y-2">
                  {["All", "Car", "SUV", "Scooter", "Bike"].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="vehicleType"
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                <div className="space-y-2">
                  {["AC", "GPS", "Bluetooth", "Automatic", "Eco-friendly"].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700 flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        {rating}+
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Apply Filters
              </button>
            </div>
          )}

          {/* Vehicle Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{vehicles.length}</span> vehicles found
              </p>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {vehicles.map((vehicle) => (
                <Link
                  key={vehicle.id}
                  to={`/vehicle/${vehicle.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {!vehicle.available && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                          Not Available
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="font-semibold text-gray-900 text-sm">{vehicle.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {vehicle.type}
                      </span>
                      <span className="text-xs text-gray-500">{vehicle.reviews} reviews</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {vehicle.location}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">₹{vehicle.price}</span>
                        <span className="text-gray-600 text-sm">/day</span>
                      </div>
                      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
