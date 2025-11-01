'use client';

import React, { useState } from 'react';

const Facilities = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const facilities = [
    {
      name: 'Football Field',
      description: 'Professional-grade synthetic turf perfect for training and matches.',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop&crop=center',
      features: ['Full-size field', 'Floodlights', 'Goal posts'],
      icon: '⚽',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      name: 'Cricket Pitch',
      description: 'High-quality turf pitch with practice nets for batting and bowling.',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop&crop=center',
      features: ['Turf wicket', 'Practice nets', 'Boundary markings'],
      icon: '🏏',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Pickleball Courts',
      description: 'Dedicated courts for this fast-growing sport with proper lighting.',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
      features: ['Multiple courts', 'Net facilities', 'Even surface'],
      icon: '🎾',
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      name: 'Multi-Sport Area',
      description: 'Versatile space for various sports and recreational activities.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      features: ['Flexible layout', 'Equipment storage', 'Group activities'],
      icon: '🏆',
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="facilities" className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold tracking-wide uppercase">
              Premium Sports Facilities
            </span>
          </div>
          <h2 
            data-aos="fade-down"
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-600">
              Our Facilities
            </span>
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Experience world-class sports facilities designed for peak performance and enjoyment. 
            Every detail crafted to elevate your game.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="text-center px-6 py-3 bg-gray-800/50 rounded-xl border border-green-500/20">
              <div className="text-3xl font-bold text-green-400">4+</div>
              <div className="text-sm text-gray-400">Sports Facilities</div>
            </div>
            <div className="text-center px-6 py-3 bg-gray-800/50 rounded-xl border border-green-500/20">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-sm text-gray-400">Available</div>
            </div>
            <div className="text-center px-6 py-3 bg-gray-800/50 rounded-xl border border-green-500/20">
              <div className="text-3xl font-bold text-green-400">Pro</div>
              <div className="text-sm text-gray-400">Grade Equipment</div>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-green-500/20 hover:border-green-400/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              {/* Image Section with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${facility.image}')` }}
                ></div>
                <div className={`absolute inset-0 bg-gradient-to-t ${hoveredIndex === index ? 'from-black via-black/60 to-transparent' : 'from-black/80 to-transparent'} transition-all duration-500`}></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${facility.gradient} rounded-full flex items-center justify-center text-2xl shadow-lg transform transition-all duration-500 ${hoveredIndex === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                  {facility.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 relative">
                {/* Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${facility.gradient} transform origin-left transition-transform duration-500 ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`}></div>

                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  {facility.name}
                  <span className={`text-xs transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    ✨
                  </span>
                </h3>
                <p className="text-gray-400 mb-5 leading-relaxed line-clamp-2">
                  {facility.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="flex items-center text-xs font-semibold text-green-400 mb-2">
                    <div className="w-8 h-px bg-gradient-to-r from-green-400 to-transparent mr-2"></div>
                    KEY FEATURES
                  </div>
                  <ul className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-center text-sm text-gray-300 transition-all duration-300 delay-${idx * 100} ${hoveredIndex === index ? 'translate-x-2' : 'translate-x-0'}`}
                      >
                        <span className={`w-2 h-2 bg-gradient-to-r ${facility.gradient} rounded-full mr-3 flex-shrink-0`}></span>
                        <span className="group-hover:text-white transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${facility.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Facilities;