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
    <section id="about" className="py-24 bg-gradient-to-br from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-700 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(156,163,175,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(156,163,175,0.2) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6" data-aos="fade-down">
            <span className="px-6 py-2 bg-white/5 border border-white/15 rounded-full text-gray-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
          </div>
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 px-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              PR Turf And Sports Saki Vihar
            </span>
          </h2>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="w-32 h-1.5 bg-gradient-to-r from-white via-gray-400 to-gray-600 mx-auto mb-8 rounded-full"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Mumbai's premier destination for world-class sports facilities and unforgettable athletic experiences
          </p>
        </div>

        {/* Stats Row */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="flex gap-8 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8 w-full">
            <div className="space-y-6">
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                PR Turf And Sports Saki Vihar is Mumbai's premier sports facility, offering state-of-the-art turf for football, cricket, pickleball, and various other sports. Established with a vision to provide top-quality sports infrastructure, we cater to athletes of all levels.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="400"
                className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed"
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
                  className="group relative bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`shrink-0 w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 border border-white/20 rounded-lg flex items-center justify-center text-lg transition-all duration-300 ${activeFeature === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm sm:text-base text-gray-200 font-medium block">
                        {feature.text}
                      </span>
                      <span className={`text-xs text-gray-500 mt-1 block transition-all duration-300 ${activeFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                        {feature.description}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
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
