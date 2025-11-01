'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const phoneNumber = '7666555765';
  const whatsappLink = `https://wa.me/91${phoneNumber}`;
  const callLink = `tel:+91${phoneNumber}`;
  const mapsLink =
    'https://www.google.com/maps?q=Prime+Turf,+Building+no+5,+Akshay+Mittal,+C+Wing,+Mittal+Industrial+Estate,+Marol,+Andheri,+Mumbai,+Maharashtra+400059';

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-5 w-48 h-48 bg-green-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-5 w-64 h-64 bg-green-600 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="">
          {/* Left side */}
          <div className="space-y-8 gird lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border border-green-500/20 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-6 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-3"></span>
                Get In Touch
              </h3>
              <div className="space-y-6">
                {/* Address */}
                <div
                  className="flex items-start group hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                  onClick={() => window.open(mapsLink, '_blank')}
                >
                  <div className="min-w-[3rem] bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-black text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-400 mb-1">Address</p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Prime Turf, Building no 5, Akshay Mittal, C Wing, Mittal Industrial Estate, Marol, Andheri, Mumbai, Maharashtra 400059
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <div className="min-w-[3rem] bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-black text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-400 mb-1">Phone</p>
                    <div className="flex flex-col text-sm sm:text-base">
                      <a href={callLink} className="text-gray-300 hover:text-green-400">
                        Call: +91 {phoneNumber}
                      </a>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400">
                        WhatsApp: +91 {phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <div className=" bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-black text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-400 mb-1">Email</p>
                    <a
                      href="mailto:Primeenterprise317@gmail.com"
                      className="text-gray-300 text-sm sm:text-base text-wrap flex flex-row hover:text-green-400"
                    >
                      Primeenterprise317@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map with Pin */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl border border-green-500/20 shadow-xl">
              <h4 className="text-lg sm:text-xl font-bold text-green-400 mb-4 flex items-center">
                <span className="w-2 h-5 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-3"></span>
                Location
              </h4>
              <div className="aspect-video bg-gray-950 rounded-xl border border-green-500/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Prime+Turf,+Building+no+5,+Akshay+Mittal,+C+Wing,+Mittal+Industrial+Estate,+Marol,+Andheri,+Mumbai,+Maharashtra+400059&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
