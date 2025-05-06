
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">SMSA</h3>
            <p className="mb-4 text-gray-200">
              Connecting farmers, buyers, and agricultural experts in a single ecosystem to improve how food is produced, sold, and consumed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-accent transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-accent transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-accent transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-accent transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-200 hover:text-accent transition-colors duration-200">Home</Link></li>
              <li><Link to="/marketplace" className="text-gray-200 hover:text-accent transition-colors duration-200">Marketplace</Link></li>
              <li><Link to="/knowledge" className="text-gray-200 hover:text-accent transition-colors duration-200">Knowledge Hub</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-accent transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-accent transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">For Users</h3>
            <ul className="space-y-2">
              <li><Link to="/auth/register?role=farmer" className="text-gray-200 hover:text-accent transition-colors duration-200">Register as Farmer</Link></li>
              <li><Link to="/auth/register?role=buyer" className="text-gray-200 hover:text-accent transition-colors duration-200">Register as Buyer</Link></li>
              <li><Link to="/auth/register?role=expert" className="text-gray-200 hover:text-accent transition-colors duration-200">Register as Expert</Link></li>
              <li><Link to="/help" className="text-gray-200 hover:text-accent transition-colors duration-200">Help Center</Link></li>
              <li><Link to="/terms" className="text-gray-200 hover:text-accent transition-colors duration-200">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-200 space-y-2">
              <p>123 Agriculture Way</p>
              <p>Farmington, CA 98765</p>
              <p className="mt-4">info@smsa-platform.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} SMSA - Smart Market for Sustainable Agriculture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
