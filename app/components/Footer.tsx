'use client';

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_LINK, CALL_LINK, MAPS_LINK, ADDRESS, EMAIL_LINK, EMAIL } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-purple-500/15">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              PR Turf And Sports
              <span className="block text-sm font-normal text-gray-500 mt-1">Saki Vihar, Mumbai</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Mumbai's premier sports facility offering world-class turf for football, cricket, pickleball, and more.
            </p>
            {/* subtle gradient divider */}
            <div className="w-16 h-px bg-gradient-to-r from-purple-500/50 via-emerald-500/50 to-transparent"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-purple-300/80 mb-6 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About Us' },
                { href: '#facilities', label: 'Facilities' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-emerald-400 transition-colors duration-200 hover:pl-2 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-purple-300/80 mb-6 uppercase tracking-widest">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-gray-500">
                <MapPin className="w-4 h-4 text-emerald-500/70 shrink-0 mt-0.5" />
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors leading-relaxed"
                >
                  {ADDRESS}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <Phone className="w-4 h-4 text-emerald-500/70 shrink-0" />
                <a href={CALL_LINK} className="hover:text-emerald-400 transition-colors">
                  +91 {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-500">
                <Mail className="w-4 h-4 text-purple-400/60 shrink-0" />
                <a href={EMAIL_LINK} className="hover:text-purple-300 transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-xs font-bold text-purple-300/80 mb-6 uppercase tracking-widest">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href={CALL_LINK}
                className="flex items-center gap-3 bg-emerald-500/12 border border-emerald-500/25 text-emerald-300 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-emerald-500/22 hover:border-emerald-400/45 transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-purple-500/12 border border-purple-500/25 text-purple-300 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-purple-500/22 hover:border-purple-400/45 transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <p className="text-xs text-gray-600 pt-1">Open 7 days a week</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 PR Turf And Sports Saki Vihar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-sm text-gray-600 hover:text-purple-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-gray-600 hover:text-purple-300 transition-colors">
              Terms of Service
            </a>
            <a href="#refund" className="text-sm text-gray-600 hover:text-purple-300 transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
