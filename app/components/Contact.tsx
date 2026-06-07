'use client';

import { PHONE_NUMBER, WHATSAPP_LINK, CALL_LINK, MAPS_LINK, ADDRESS, EMAIL, EMAIL_LINK, MAPS_EMBED_SRC } from '../constants';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white relative overflow-hidden"
    >
      {/* Subtle background glows */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-700 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-700 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-purple-500/10 border border-purple-500/25 rounded-full text-purple-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Reach Out
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Have questions? We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <div className="bg-white/4 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-purple-500/15 shadow-xl hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-7 bg-gradient-to-b from-purple-400 to-emerald-500 rounded-full"></span>
              Get In Touch
            </h3>
            <div className="space-y-6">
              {/* Address */}
              <div
                className="flex items-start group hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                onClick={() => window.open(MAPS_LINK, '_blank')}
              >
                <div className="shrink-0 w-11 h-11 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors">
                  <span className="text-base">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-200 mb-1">Address</p>
                  <p className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors">
                    {ADDRESS}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                <div className="shrink-0 w-11 h-11 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 transition-colors">
                  <span className="text-base">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-200 mb-1">Phone</p>
                  <div className="flex flex-col text-sm sm:text-base gap-1">
                    <a href={CALL_LINK} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      Call: +91 {PHONE_NUMBER}
                    </a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      WhatsApp: +91 {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                <div className="shrink-0 w-11 h-11 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors">
                  <span className="text-base">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-200 mb-1">Email</p>
                  <a href={EMAIL_LINK} className="text-gray-400 text-sm sm:text-base hover:text-purple-300 transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={CALL_LINK}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold rounded-xl hover:bg-emerald-500/25 hover:border-emerald-400/50 transition-all duration-200 transform hover:scale-105 text-sm"
              >
                📞 Call Now
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-purple-500/15 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/25 hover:border-purple-400/50 transition-all duration-200 transform hover:scale-105 text-sm"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Google Map Card */}
          <div className="bg-white/4 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-emerald-500/15 shadow-xl hover:border-emerald-500/30 transition-all duration-300">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-purple-500 rounded-full"></span>
              Location
            </h4>
            <div className="aspect-video bg-gray-950 rounded-xl border border-white/8 overflow-hidden">
              <iframe
                src={MAPS_EMBED_SRC}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PR Turf And Sports location"
              ></iframe>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-500/8 border border-emerald-500/20 rounded-xl text-emerald-400/70 hover:text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/35 transition-all duration-200 text-sm font-medium"
            >
              📍 Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
