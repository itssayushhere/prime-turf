'use client';

import React, { useState } from 'react';

const About = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

const features = [
  { 
    icon: '🏟️', 
    text: 'Professional-grade synthetic turf',
    description: 'FIFA-approved quality materials'
  },
  { 
    icon: '🔒', 
    text: '24/7 security and maintenance',
    description: 'Round-the-clock monitoring'
  },
  { 
    icon: '💡', 
    text: 'Advanced LED floodlights',
    description: 'Perfect visibility at night'
  },
  { 
    icon: '🎥', 
    text: 'Shooting available',
    description: 'Ideal for sports shoots and events'
  },
  { 
    icon: '🎉', 
    text: 'Book turf for college functions',
    description: 'Perfect venue for college events and gatherings'
  }
];


  const stats = [
    { value: '10+', label: 'Years Experience', icon: '📅' },
    { value: '50K+', label: 'Happy Players', icon: '👥' },
    { value: '4.9', label: 'Rating', icon: '⭐' },
    { value: '100%', label: 'Satisfaction', icon: '✅' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6" data-aos="fade-down">
            <span className="px-6 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-green-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
          </div>
          <h2 
            data-aos="fade-down"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 px-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-600">
              Prime Turf Marol
            </span>
          </h2>
          <div 
            data-aos="zoom-in"
            data-aos-delay="200"
            className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 mx-auto mb-8 rounded-full"
          ></div>
          <p 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Mumbai's premier destination for world-class sports facilities and unforgettable athletic experiences
          </p>
        </div>


        {/* Main Content Grid */}
        <div className="flex gap-8 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p 
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                Prime Turf Marol is Mumbai's premier sports facility, offering state-of-the-art turf for football, cricket, pickleball, and various other sports. Established with a vision to provide top-quality sports infrastructure, we cater to athletes of all levels.
              </p>
              <p 
                data-aos="fade-right"
                data-aos-delay="400"
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                Our facility features high-quality synthetic turf, excellent lighting for evening sessions, modern amenities, and a commitment to safety and excellence.
              </p>
            </div>

            {/* Features Grid */}
            <div 
              data-aos="fade-up"
              data-aos-delay="500"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-green-500/20 hover:border-green-400/60 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-lg transition-all duration-300 ${activeFeature === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm sm:text-base text-green-300 font-medium block">
                        {feature.text}
                      </span>
                      <span className={`text-xs text-gray-500 mt-1 block transition-all duration-300 ${activeFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                        {feature.description}
                      </span>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;