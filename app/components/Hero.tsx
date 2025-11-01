'use client';

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop',
      title: 'Experience Premier Sports Turf',
      subtitle: 'World-class facilities in the heart of Marol'
    },
    {
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&h=1080&fit=crop',
      title: 'Unleash Your Potential',
      subtitle: 'Professional-grade surfaces for champions'
    },
    {
      image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=1920&h=1080&fit=crop',
      title: 'Play Day & Night',
      subtitle: 'Premium LED lighting for 24/7 excellence'
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    // ✅ Initialize AOS and trigger animations immediately
    AOS.init({
      duration: 1000,
      once: true,
      startEvent: 'load',
      offset: 0
    });
    AOS.refreshHard(); // Ensures AOS detects all elements on mount

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-110 animate-kenburns"
            style={{ backgroundImage: `url('${slide.image}')` }}
          ></div>
        </div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div 
          data-aos="fade-down"
          data-aos-delay="0"
          className={`mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full text-green-400 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Mumbai's Premier Sports Facility
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-6xl mx-auto mb-8">
          <h1
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 leading-tight"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 animate-gradient">
              {slides[currentSlide].title}
            </span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 max-w-4xl mx-auto text-gray-300 leading-relaxed"
          >
            {slides[currentSlide].subtitle}
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Discover world-class facilities for football, cricket, pickleball, and more. Book your slot today and elevate your game.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
        >
          <a
            href="#contact"
            className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-bold text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Your Slot
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
          <a
            href="#facilities"
            className="group px-8 sm:px-12 py-4 sm:py-5 border-2 border-green-500 hover:bg-green-500 text-green-400 hover:text-black font-bold text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg flex items-center gap-2"
          >
            View Facilities
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 sm:bottom-28 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg shadow-green-500/50'
                : 'w-2 bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
