"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "about", "facilities", "booking", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "📖" },
    { href: "#facilities", label: "Facilities", icon: "🏟️" },
    // { href: '#booking', label: 'Book Now', icon: '📅', highlight: true },
    { href: "#contact", label: "Contact", icon: "📧" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href.substring(1));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full text-white z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-green-500/10 border-b border-green-500/30 py-2 sm:py-3"
            : "bg-black/80 backdrop-blur-md border-b border-green-500/20 py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <a
              href="#home"
              className="flex items-center gap-2 sm:gap-3 group"
              onClick={() => handleNavClick("#home")}
            >
              <div
                className={`relative shrink-0 rounded-full overflow-hidden ring-2 ring-green-500/40 group-hover:ring-green-400 transition-all duration-300 ${
                  scrolled
                    ? "w-10 h-10 sm:w-12 sm:h-12"
                    : "w-12 h-12 sm:w-14 sm:h-14"
                }`}
              >
                <Image
                  src="/images/logo.jpeg"
                  alt="Prime Turf logo"
                  width={56}
                  height={56}
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300 ${
                    scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  Prime Turf
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium -mt-1">
                  Marol, Mumbai
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative group px-4 xl:px-6 py-2.5 rounded-xl font-semibold text-sm xl:text-base transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-green-400 bg-green-500/10"
                      : "text-gray-300 hover:text-green-400 hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {/* <span className="hidden xl:inline text-lg">{link.icon}</span> */}
                    {link.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden relative p-2 rounded-xl text-green-400 hover:bg-green-500/10 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 ${
                isOpen ? "bg-green-500/10" : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
              {/* Notification Dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-green-500/20 bg-black/98 backdrop-blur-xl">
            <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex flex-row gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:translate-x-2 ${
                      activeSection === link.href.substring(1)
                        ? "bg-green-500/10 text-green-400 border border-green-500/30"
                        : "text-gray-300 hover:text-green-400 hover:bg-white/5"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="flex-1">{link.label}</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="mt-6 pt-6 border-t border-green-500/20">
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                  <span>📍 Marol, Andheri East</span>
                  <span>📞 +91 98765 43210</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24"
        }`}
      ></div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
