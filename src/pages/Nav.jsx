import { Link } from 'react-router-dom';
import { Hotel, User, Phone, MapPin, LogIn, LogOut, Menu, X, Home, MessageCircle , Box} from 'lucide-react'; 
import { FaFacebookF , FaWhatsapp , FaTwitter } from 'react-icons/fa';

const Nav = ({ isLoggedIn, handleLogin, handleLogout, isMenuOpen, toggleMenu }) => {
  return (
    <header className="bg-blue-500 text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Chat Button on Left */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 p-2 rounded-md"
            >
              <MessageCircle size={20} className="text-white" /> {/* Lucide Icon for chat */}
              <span className="hidden sm:block text-white">Chat</span>
            </a>
          </div>
          
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <Hotel size={28} />
            <span className="text-xl font-bold">HMS</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-200 flex items-center gap-1">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/contact" className="hover:text-blue-200 flex items-center gap-1">
              <Phone size={18} />
              <span>Contact</span>
            </Link>
            <Link to="/location" className="hover:text-blue-200 flex items-center gap-1">
              <MapPin size={18} />
              <span>Location</span>
            </Link>
            <Link to="/product" className="bg-blue-500 hover:bg-blue-400 py-2 px-3 rounded-md flex items-center gap-2"
                  onClick={() => toggleMenu()}>
                  <Box size={18} />
                  <span>Product</span>
                </Link>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="hover:text-blue-200 flex items-center gap-1">
                  <User size={18} />
                  <span>Dashboard</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md flex items-center gap-1"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex items-center gap-1">
                  <LogIn size={18} />
                  <span>Sign In</span>
                </Link>
                <Link to="/register" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md flex items-center gap-1">
                  <User size={18} />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </nav>
          
          {/* Social Media Icons on the Right */}
          <div className="flex items-center space-x-4">
            {/* Facebook Icon */}
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <FaFacebookF size={20} className="text-blue-100 animate-bounce"  /> {/* Placeholder for Facebook */}
            </a>
            {/* WhatsApp Icon */}
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-green-300"
            >
              <FaWhatsapp size={20} className="text-green-500 animate-bounce" /> {/* Placeholder for WhatsApp */}
            </a>
            {/* X (Twitter) Icon */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter size={20} className="text-black bg-opacity-20 animate-bounce" /> {/* Placeholder for X (Twitter) */}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 pb-4 px-4">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="hover:bg-blue-600 py-2 px-3 rounded-md flex items-center gap-2"
              onClick={() => toggleMenu()}>
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/contact" className="hover:bg-blue-600 py-2 px-3 rounded-md flex items-center gap-2"
              onClick={() => toggleMenu()}>
              <Phone size={18} />
              <span>Contact</span>
            </Link>
            <Link to="/location" className="hover:bg-blue-600 py-2 px-3 rounded-md flex items-center gap-2"
              onClick={() => toggleMenu()}>
              <MapPin size={18} />
              <span>Location</span>
            </Link>
            <Link to="/product" className="bg-blue-500 hover:bg-blue-400 py-2 px-3 rounded-md flex items-center gap-2"
                  onClick={() => toggleMenu()}>
                  <Box size={18} />
                  <span>Product</span>
                </Link>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="hover:bg-blue-600 py-2 px-3 rounded-md flex items-center gap-2"
                  onClick={() => toggleMenu()}>
                  <User size={18} />
                  <span>Dashboard</span>
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="bg-red-600 hover:bg-red-500 py-2 px-3 rounded-md flex items-center gap-2"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="bg-blue-600 hover:bg-blue-500 py-2 px-3 rounded-md flex items-center gap-2"
                  onClick={() => toggleMenu()}>
                  <LogIn size={18} />
                  <span>Sign In</span>
                </Link>
                <Link to="/register" className="bg-blue-500 hover:bg-blue-400 py-2 px-3 rounded-md flex items-center gap-2"
                  onClick={() => toggleMenu()}>
                  <User size={18} />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
