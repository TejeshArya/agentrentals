import { useState } from "react";
import { useParams, Link } from "react-router";
import { Star, MapPin, Shield, Calendar, Clock, User, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function VehicleDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const vehicle = {
    id: 1,
    name: "Mercedes-Benz S-Class 2024",
    type: "Luxury Sedan",
    images: [
      "https://images.unsplash.com/photo-1768360612035-8bf84c9fbc0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjByZW50YWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc3NTYzNDM3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1705769943793-821f557c6942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYWN0JTIwc2VkYW4lMjBjYXIlMjBtb2Rlcm58ZW58MXx8fHwxNzc1NjM0MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1748214547184-d994bfe53322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVVYlMjBjYXIlMjBwYXJrZWQlMjBzdHJlZXR8ZW58MXx8fHwxNzc1NjM0MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    price: 2500,
    location: "Andheri West, Mumbai, Maharashtra",
    rating: 4.9,
    reviews: 125,
    vendor: {
      name: "Premium Rentals",
      rating: 4.8,
      totalVehicles: 12,
      verified: true
    },
    description: "Experience luxury and comfort with our premium Mercedes-Benz S-Class. Perfect for business trips, special occasions, or when you want to travel in style. The vehicle is well-maintained and includes all modern amenities.",
    features: [
      "Air Conditioning",
      "GPS Navigation",
      "Bluetooth Audio",
      "Automatic Transmission",
      "Leather Seats",
      "Sunroof",
      "Premium Sound System",
      "Rear Camera"
    ],
    specifications: {
      "Fuel Type": "Petrol",
      "Transmission": "Automatic",
      "Seats": "5",
      "Year": "2024",
      "Mileage": "12 km/l",
      "Insurance": "Comprehensive"
    },
    pickupInstructions: "Vehicle pickup available at vendor's location in Andheri West. Please arrive 15 minutes early with valid documents.",
    cancellationPolicy: "Free cancellation up to 24 hours before pickup. 50% refund for cancellations made within 24 hours.",
    reviews: [
      {
        id: 1,
        user: "Rajesh Kumar",
        rating: 5,
        date: "March 15, 2026",
        comment: "Excellent vehicle! The car was in pristine condition and the vendor was very professional. Highly recommended!"
      },
      {
        id: 2,
        user: "Priya Sharma",
        rating: 4.8,
        date: "March 10, 2026",
        comment: "Great experience overall. The booking process was smooth and the car exceeded my expectations."
      },
      {
        id: 3,
        user: "Amit Patel",
        rating: 5,
        date: "March 5, 2026",
        comment: "Perfect for my business meeting. The luxury and comfort made a great impression."
      }
    ]
  };

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  const days = calculateDays();
  const totalPrice = vehicle.price * days;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/search" className="text-gray-500 hover:text-gray-700">Search</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{vehicle.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <ImageWithFallback
                  src={vehicle.images[selectedImage]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                {vehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white"
                      disabled={selectedImage === 0}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setSelectedImage(Math.min(vehicle.images.length - 1, selectedImage + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white"
                      disabled={selectedImage === vehicle.images.length - 1}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
              <div className="p-4 flex gap-2 overflow-x-auto">
                {vehicle.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === idx ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`${vehicle.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                    {vehicle.type}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900">{vehicle.name}</h1>
                  <div className="flex items-center mt-2 text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{vehicle.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                    <span className="text-2xl font-bold">{vehicle.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">{vehicle.reviews.length} reviews</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{vehicle.description}</p>

              {/* Vendor Info */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Vendor Information</h3>
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                      {vehicle.vendor.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900">{vehicle.vendor.name}</span>
                        {vehicle.vendor.verified && (
                          <Shield className="w-4 h-4 text-green-600 ml-2" />
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                        <span>{vehicle.vendor.rating} • {vehicle.vendor.totalVehicles} vehicles</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                    Contact Vendor
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(vehicle.specifications).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600 mb-1">{key}</div>
                      <div className="font-semibold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold mb-4">Important Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Pickup Instructions</h4>
                    <p className="text-gray-700 text-sm">{vehicle.pickupInstructions}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Cancellation Policy</h4>
                    <p className="text-gray-700 text-sm">{vehicle.cancellationPolicy}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                {vehicle.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold mr-3">
                          {review.user[0]}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{review.user}</div>
                          <div className="text-sm text-gray-600">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="font-semibold">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">₹{vehicle.price}</span>
                  <span className="text-gray-600 ml-2">/day</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={startDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {days > 0 && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>₹{vehicle.price} × {days} days</span>
                    <span>₹{vehicle.price * days}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Service fee</span>
                    <span>₹{Math.round(totalPrice * 0.05)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>₹{totalPrice + Math.round(totalPrice * 0.05)}</span>
                    </div>
                  </div>
                </div>
              )}

              <Link
                to={`/booking/${vehicle.id}`}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Book Now
              </Link>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  <span>Free cancellation within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-600 mr-2" />
                  <span>Verified vendor & vehicle</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-green-600 mr-2" />
                  <span>Instant booking confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
