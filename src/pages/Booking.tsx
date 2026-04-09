import { useState } from "react";
import { useParams, Link } from "react-router";
import { Calendar, MapPin, Shield, CreditCard, Check, ChevronRight } from "lucide-react";

export function Booking() {
  const { id } = useParams();
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    startDate: "2026-04-10",
    endDate: "2026-04-15",
    insurance: false,
    pickupTime: "10:00",
    additionalServices: [] as string[]
  });

  const vehicle = {
    name: "Mercedes-Benz S-Class",
    type: "Luxury Sedan",
    price: 2500,
    vendor: "Premium Rentals",
    location: "Andheri West, Mumbai"
  };

  const calculateDays = () => {
    const start = new Date(bookingDetails.startDate);
    const end = new Date(bookingDetails.endDate);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) || 1;
  };

  const days = calculateDays();
  const subtotal = vehicle.price * days;
  const insurance = bookingDetails.insurance ? 500 * days : 0;
  const serviceFee = Math.round(subtotal * 0.05);
  const total = subtotal + insurance + serviceFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step >= s ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {step > s ? <Check className="w-6 h-6" /> : s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-4 ${step > s ? 'bg-blue-600' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className={step >= 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Details</span>
            <span className={step >= 2 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Review</span>
            <span className={step >= 3 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Payment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Step 1: Booking Details */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Start Date
                        </label>
                        <input
                          type="date"
                          value={bookingDetails.startDate}
                          onChange={(e) => setBookingDetails({...bookingDetails, startDate: e.target.value})}
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
                          value={bookingDetails.endDate}
                          onChange={(e) => setBookingDetails({...bookingDetails, endDate: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Time</label>
                      <input
                        type="time"
                        value={bookingDetails.pickupTime}
                        onChange={(e) => setBookingDetails({...bookingDetails, pickupTime: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Additional Options</h3>
                      <label className="flex items-start p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer mb-3">
                        <input
                          type="checkbox"
                          checked={bookingDetails.insurance}
                          onChange={(e) => setBookingDetails({...bookingDetails, insurance: e.target.checked})}
                          className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Shield className="w-5 h-5 text-blue-600 mr-2" />
                              <span className="font-semibold text-gray-900">Comprehensive Insurance</span>
                            </div>
                            <span className="font-semibold text-gray-900">₹500/day</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            Full coverage for damages, theft, and third-party liability
                          </p>
                        </div>
                      </label>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Pickup Location</h3>
                      <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">{vehicle.location}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Please arrive 15 minutes before your scheduled pickup time
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full mt-8 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center"
                  >
                    Continue to Review
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              )}

              {/* Step 2: Review */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Booking</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Rental Period</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Start:</span>
                          <span className="font-medium">{bookingDetails.startDate} at {bookingDetails.pickupTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">End:</span>
                          <span className="font-medium">{bookingDetails.endDate} at {bookingDetails.pickupTime}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t">
                          <span className="text-gray-600">Total Days:</span>
                          <span className="font-semibold text-blue-600">{days} days</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Selected Options</h3>
                      <div className="space-y-2">
                        {bookingDetails.insurance ? (
                          <div className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-green-600 mr-2" />
                            <span>Comprehensive Insurance (₹{500 * days})</span>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-600">No additional options selected</p>
                        )}
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-2">Important Information</h3>
                      <ul className="space-y-1 text-sm text-blue-800">
                        <li>• Please bring a valid driver's license and ID proof</li>
                        <li>• Vehicle must be returned with the same fuel level</li>
                        <li>• Late returns may incur additional charges</li>
                        <li>• Free cancellation available up to 24 hours before pickup</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center"
                    >
                      Proceed to Payment
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                      <Shield className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <div className="text-sm text-green-800">
                        <p className="font-semibold mb-1">Secure Payment</p>
                        <p>Your payment is processed through PCI-DSS compliant payment gateway with 256-bit encryption</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <Link
                      to="/profile"
                      className="flex-1 bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center"
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      Complete Booking
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h3>
              
              <div className="mb-4 pb-4 border-b">
                <h4 className="font-semibold text-gray-900">{vehicle.name}</h4>
                <p className="text-sm text-gray-600">{vehicle.type}</p>
                <p className="text-sm text-gray-600 mt-1">{vehicle.vendor}</p>
              </div>

              <div className="space-y-3 mb-4 pb-4 border-b text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">₹{vehicle.price} × {days} days</span>
                  <span className="font-medium">₹{subtotal}</span>
                </div>
                {bookingDetails.insurance && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Insurance</span>
                    <span className="font-medium">₹{insurance}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Service fee</span>
                  <span className="font-medium">₹{serviceFee}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-blue-600">₹{total}</span>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  <span>Free cancellation within 24h</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  <span>Instant confirmation</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
