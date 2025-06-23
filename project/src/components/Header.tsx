import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Moor_logo from '../images/Moor_logo.png';

const Header: React.FC = () => {
  const location = useLocation();
  const { state, dispatch } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: 'Avaleht', path: '/' },
    { name: 'Pood', path: '/store' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <header className="bg-vintage-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-vintage-500 rounded-full flex items-center justify-center">
              <img
                src={Moor_logo}
                alt="Moor Home"
                className="h-12 w-12 rounded-full object-cover inline-block"
              />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-vintage-700">Moor Home</h1>
              <p className="text-xs text-vintage-600 -mt-1">Vintage Furniture Restoration</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-vintage-700 hover:text-vintage-500 px-3 py-2 text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? 'border-b-2 border-vintage-500' : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative p-2 text-vintage-700 hover:text-vintage-500 transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-vintage-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-vintage-700 hover:text-vintage-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-vintage-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-vintage-700 hover:text-vintage-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;