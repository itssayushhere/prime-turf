'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-green-500">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">Prime Turf Marol</h3>
            <p className="text-sm text-gray-400">
              Mumbai's premier sports facility offering world-class turf for football, cricket, pickleball, and more.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-500 transition-colors">About</a></li>
              <li><a href="#facilities" className="hover:text-green-500 transition-colors">Facilities</a></li>
              <li><a href="#booking" className="hover:text-green-500 transition-colors">Book Now</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Prime Turf Marol</li>
              <li>Andheri East, Mumbai</li>
              <li>Maharashtra 400059</li>
              <li>+91 98765 43210</li>
              <li>info@primeturfmarol.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <span className="text-black text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <span className="text-black text-sm">📷</span>
              </a>
              <a href="#" className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <span className="text-black text-sm">🐦</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-green-500 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Prime Turf Marol. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-green-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
