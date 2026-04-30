import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { Menu, User, LogOut, LayoutDashboard, Search, Car, UserCircle } from "lucide-react";
import { useState, useEffect } from "react";
const brandLogo = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400&h=400";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'customer' | 'vendor' | 'admin'>('customer');
  const [userName, setUserName] = useState('');

  // Check authentication status on mount and location change
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const role = localStorage.getItem('userRole') as 'customer' | 'vendor' | 'admin' || 'customer';
    const name = localStorage.getItem('userName') || '';
    
    setIsAuthenticated(authStatus);
    setUserRole(role);
    setUserName(name);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  // Hide navigation on auth pages
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  if (isAuthPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header - Premium Design */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group px-3 sm:px-4 py-1.5 bg-white/50 backdrop-blur-md rounded-full shadow-sm hover:shadow-md transition-all border border-slate-100">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#f43f5e] via-[#eab308] to-[#0ea5e9] flex items-center justify-center text-white font-bold">
                  <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"/>
                </div>
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-800 uppercase" style={{ letterSpacing: '0.05em' }}>Agent<span className="font-light hidden sm:inline">Rentals</span></span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex md:space-x-8 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                <Link 
                  to="/" 
                  className={`inline-flex items-center px-1 font-medium transition-all duration-200 ${
                    isActive('/') 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/search" 
                  className={`inline-flex items-center px-1 font-medium transition-all duration-200 ${
                    isActive('/search') 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Search Vehicles
                </Link>
                {isAuthenticated && userRole === 'customer' && (
                  <Link 
                    to="/dashboard" 
                    className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive('/dashboard') 
                        ? 'bg-emerald-50 text-emerald-600 font-semibold' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    My Dashboard
                  </Link>
                )}
                {isAuthenticated && userRole === 'vendor' && (
                  <Link 
                    to="/vendor" 
                    className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive('/vendor') 
                        ? 'bg-emerald-50 text-emerald-600 font-semibold' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Vendor Dashboard
                  </Link>
                )}
                {isAuthenticated && userRole === 'admin' && (
                  <Link 
                    to="/admin" 
                    className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive('/admin') 
                        ? 'bg-emerald-50 text-emerald-600 font-semibold' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Admin Dashboard
                  </Link>
                )}
              </div>
            </div>

            {/* Right side - User menu */}
            <div className="flex items-center space-x-3">
              {isAuthenticated ? (
                <div className="hidden md:flex items-center space-x-3">
                  {userName && (
                    <span className="text-sm text-slate-500">
                      Welcome, <span className="font-semibold text-slate-800">{userName}</span>
                    </span>
                  )}
                  <Link 
                    to="/profile" 
                    className="inline-flex items-center px-5 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary/5 transition-all duration-200 font-semibold"
                  >
                    <UserCircle className="w-4 h-4 mr-2" />
                    Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="inline-flex items-center px-6 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary-dark shadow-sm hover:shadow-md transition-all duration-200 font-semibold"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-4">
                  <Link 
                    to="/login" 
                    className="inline-flex items-center px-6 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary/5 transition-all duration-200 font-semibold"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="inline-flex items-center px-6 py-2 bg-[#b88c56] text-white rounded-full text-sm hover:bg-[#a67c4a] shadow-sm hover:shadow-md transition-all duration-200 font-semibold"
                  >
                    Register
                  </Link>
                </div>
              )}
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden absolute inset-x-0 top-[80px] bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
            isMenuOpen ? "opacity-100 scale-y-100 max-h-[calc(100vh-80px)]" : "opacity-0 scale-y-0 max-h-0"
          }`}
        >
          <div className="pt-2 pb-6 space-y-1 px-4 overflow-y-auto">
            <Link 
              to="/" 
              className={`block px-4 py-3 rounded-lg font-medium ${
                isActive('/') 
                  ? 'bg-primary/10 text-primary-dark' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/search" 
              className={`block px-4 py-3 rounded-lg font-medium ${
                isActive('/search') 
                  ? 'bg-primary/10 text-primary-dark' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Search Vehicles
            </Link>
            
            {isAuthenticated ? (
              <>
                {userRole === 'customer' && (
                  <Link 
                    to="/dashboard" 
                    className={`block px-4 py-3 rounded-lg font-medium ${
                      isActive('/dashboard') 
                        ? 'bg-primary/10 text-primary-dark' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Dashboard
                  </Link>
                )}
                {userRole === 'vendor' && (
                  <Link 
                    to="/vendor" 
                    className={`block px-4 py-3 rounded-lg font-medium ${
                      isActive('/vendor') 
                        ? 'bg-primary/10 text-primary-dark' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Vendor Dashboard
                  </Link>
                )}
                {userRole === 'admin' && (
                  <Link 
                    to="/admin" 
                    className={`block px-4 py-3 rounded-lg font-medium ${
                      isActive('/admin') 
                        ? 'bg-primary/10 text-primary-dark' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                <Link 
                  to="/profile" 
                  className={`block px-4 py-3 rounded-lg font-medium ${
                    isActive('/profile') 
                      ? 'bg-primary/10 text-primary-dark' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <div className="pt-4 pb-2 border-t border-slate-100 mt-2">
                  <button 
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center px-4 py-3 rounded-full text-white bg-primary hover:bg-primary-dark shadow-sm font-semibold transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="pt-4 mt-2 border-t border-slate-100 grid grid-cols-2 gap-3">
                <Link 
                  to="/login" 
                  className="w-full flex items-center justify-center px-4 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-slate-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="w-full flex items-center justify-center px-4 py-3 rounded-full bg-primary text-white font-semibold shadow-sm hover:bg-primary-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer - Premium Design */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-xl font-bold">Agent Rentals</span>
                  <p className="text-xs text-slate-400">Premium Marketplace</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                Your trusted peer-to-peer vehicle rental marketplace. Connect with vehicle owners and rent with confidence.
              </p>
            </div>
            <div className="text-center md:text-left mt-8 md:mt-0">
              <h3 className="text-lg font-semibold mb-4 text-white">For Customers</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="/search" className="hover:text-primary transition-colors">Browse Vehicles</Link></li>
                <li><Link to="/register" className="hover:text-primary transition-colors">Sign Up</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Safety & Trust</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left mt-8 md:mt-0">
              <h3 className="text-lg font-semibold mb-4 text-white">For Vendors</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="/vendor" className="hover:text-primary transition-colors">List Your Vehicle</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Vendor Resources</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Insurance</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-sm text-slate-400">© 2026 Agent Rentals. All rights reserved. | Built for the modern sharing economy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}