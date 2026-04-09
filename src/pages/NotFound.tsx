import { Link } from "react-router";
import { Home, Search, AlertCircle } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <Link
            to="/search"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <Search className="w-5 h-5 mr-2" />
            Search Vehicles
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Popular Pages</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/search" className="hover:text-blue-600">Search Vehicles</Link></li>
              <li><Link to="/vendor" className="hover:text-blue-600">Vendor Dashboard</Link></li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
              <li><Link to="/register" className="hover:text-blue-600">Register</Link></li>
              <li><Link to="/profile" className="hover:text-blue-600">My Profile</Link></li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Contact Support</a></li>
              <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
