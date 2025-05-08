import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import LocationPage from './pages/LocationPage';
import DashboardPage from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Nav from './pages/Nav';
import ProductPage from './pages/ProductPage';  // Correct import statement for ProductPage

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Nav 
        isLoggedIn={isLoggedIn} 
        handleLogin={handleLogin} 
        handleLogout={handleLogout} 
      />

      {/* Main Content */}
      <div className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} /> {/* ProductPage route */}
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={
            isLoggedIn ? <DashboardPage /> : <LoginPage onLogin={handleLogin} />
          } />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Hotel Management</h3>
              <p className="text-gray-300">Providing cutting-edge hotel management solutions since 2025.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-pink">Home</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                <li><Link to="/location" className="text-gray-300 hover:text-white">Location</Link></li>
            
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-300">
                <p>123 Hotel MS</p>
                <p>Rw, NY 10001</p>
                <p className="mt-2">info@luxestay.com</p>
                <p>+250 788-xxxx</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; Hostel Management System.</p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
