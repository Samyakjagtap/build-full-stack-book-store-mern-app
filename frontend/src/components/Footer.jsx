import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center shadow-lg mr-4">
                  {/* Book pages effect */}
                  <div className="absolute inset-1 bg-white rounded-lg opacity-90"></div>
                  <div className="absolute inset-1.5 bg-orange-100 rounded-lg opacity-80"></div>
                  {/* Quill/pen icon */}
                  <div className="relative z-10">
                    <svg className="w-6 h-6 text-orange-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                  </div>
                  {/* Small decorative elements */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">Quillia</span>
                  <span className="text-sm text-orange-600 font-medium tracking-wider uppercase">Literary Hub</span>
                </div>
              </div>
              <p className="text-gray-600 max-w-md">
                Your trusted companion in the journey through literature. Discover, read, and connect with stories that matter.
              </p>
            </div>
            <div className="md:w-96">
              <p className="text-gray-900 font-medium mb-4">
                Subscribe to stay tuned for new product and latest updates. Let's do it!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                />
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-8">
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Features</a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Gallery</a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Team</a>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-8">
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Terms of Use</a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Sales and Refunds</a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Legal</a>
        </div>
        
        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-3">
          <a href="#" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors group">
            <FaInstagram className="text-lg group-hover:text-white" />
          </a>
          <a href="#" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors group">
            <span className="text-sm font-bold group-hover:text-white">G</span>
          </a>
          <a href="#" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors group">
            <FaFacebook className="text-lg group-hover:text-white" />
          </a>
        </div>
         
      </div>
    </footer>
  );
};

export default Footer;