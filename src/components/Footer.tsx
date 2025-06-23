import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import Moor_logo from '../images/Moor_logo.png';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-vintage-800 text-vintage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-vintage-500 rounded-full flex items-center justify-center">
                <span className="text-vintage-100 font-bold text-lg"> <img
                src={Moor_logo}
                alt="Moor Home"
                className="h-12 w-12 rounded-full object-cover inline-block"
              /></span>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold">Moor Home</h3>
                <p className="text-sm text-vintage-300">Vintage Furniture Restoration</p>
              </div>
            </div>
            <p className="text-vintage-300 mb-6 max-w-md">
              For over three decades, we've been passionate about preserving the artistry and 
              craftsmanship of vintage furniture, bringing timeless pieces back to life for modern homes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-vintage-300 hover:text-vintage-100 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-vintage-300 hover:text-vintage-100 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-vintage-300 hover:text-vintage-100 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

           <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-vintage-300 hover:text-vintage-100 transition-colors duration-200">Home</a></li>
              <li><a href="/store" className="text-vintage-300 hover:text-vintage-100 transition-colors duration-200">Store</a></li>
              <li><a href="/Moor-Home/contact" className="text-vintage-300 hover:text-vintage-100 transition-colors duration-200">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-vintage-400" />
                <span className="text-vintage-300">123 Vintage Lane<br />Craftsman City, CC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-vintage-400" />
                <span className="text-vintage-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-vintage-400" />
                <span className="text-vintage-300">hello@moorhome.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-lg font-semibold mb-4">Store Hours</h5>
              <div className="text-vintage-300 text-sm">
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Saturday: 10AM - 5PM</p>
                <p>Sunday: 12PM - 4PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-vintage-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-vintage-300 text-sm">
            © 2024 Moor Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;