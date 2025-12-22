'use client';

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const phoneNumber = '7208018763';
  const whatsappLink = `https://wa.me/91${phoneNumber}`;
  const callLink = `tel:+91${phoneNumber}`;
  const emailLink = 'mailto:contact@primeturfmarol.com';
  const mapsLink = 'https://www.google.com/maps?q=Prime+Turf,+Building+no+5,+Akshay+Mittal,+C+Wing,+Mittal+Industrial+Estate,+Marol,+Andheri,+Mumbai,+Maharashtra+400059';

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 border-t-2 border-green-500">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Prime Turf Marol
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Mumbai's premier sports facility offering world-class turf for football, cricket, pickleball, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-green-400 mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors hover:pl-2 inline-block duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors hover:pl-2 inline-block duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-gray-300 hover:text-green-400 transition-colors hover:pl-2 inline-block duration-200">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-300 hover:text-green-400 transition-colors hover:pl-2 inline-block duration-200">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors hover:pl-2 inline-block duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-green-400 mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <a 
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  Building no 5, Akshay Mittal, C Wing, Mittal Industrial Estate, Marol, Andheri, Mumbai, Maharashtra 400059
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href={callLink} className="hover:text-green-400 transition-colors">
                  +91 {phoneNumber}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href={emailLink} className="hover:text-green-400 transition-colors">
                  contact@primeturfmarol.com
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-lg font-bold text-green-400 mb-6 relative inline-block">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h4>
            <div className="space-y-3">
              <a
                href={callLink}
                className="flex items-center space-x-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 px-4 py-3 rounded-lg transition-all shadow-lg hover:shadow-green-500/50 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Call Now</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 px-4 py-3 rounded-lg transition-all shadow-lg hover:shadow-green-400/50 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">WhatsApp</span>
              </a>
              <p className="text-xs text-gray-400 pt-2">
                Open 7 days a week<br />
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © 2024 Prime Turf Marol. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
              Terms of Service
            </a>
            <a href="#refund" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;