"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PHONE_NUMBER, WHATSAPP_LINK, CALL_LINK } from "../constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#facilities", label: "Facilities" },
    { href: "#contact", label: "Contact" },
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
            ? "bg-black/98 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-white/10 py-2 sm:py-3"
            : "bg-black/85 backdrop-blur-md border-b border-white/5 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <a
              href="#home"
              className="flex items-center gap-2 sm:gap-3 group"
              onClick={() => handleNavClick("#home")}
            >
              <div
                className={`relative shrink-0 rounded-full overflow-hidden ring-2 ring-gray-500/40 group-hover:ring-gray-300 transition-all duration-300 ${
                  scrolled
                    ? "w-10 h-10 sm:w-12 sm:h-12"
                    : "w-12 h-12 sm:w-14 sm:h-14"
                }`}
              >
                <Image
                  src="/images/logo.jpeg"
                  alt="PR Turf And Sports logo"
                  width={56}
                  height={56}
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 transition-all duration-300 ${
                    scrolled ? "text-base sm:text-xl" : "text-lg sm:text-2xl"
                  }`}
                >
                  PR Turf And Sports
                </span>
                <span className="text-[9px] sm:text-xs text-gray-500 font-medium -mt-1">
                  Saki Vihar, Mumbai
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
                  className={`relative group px-3 xl:px-5 py-2.5 rounded-xl font-semibold text-sm xl:text-base transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gray-300 to-gray-500 transition-all duration-300 ${
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
              className={`lg:hidden relative p-2 rounded-xl text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 ${
                isOpen ? "bg-white/10" : ""
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
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 bg-black/98 backdrop-blur-xl">
            <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`group flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:translate-x-1 ${
                      activeSection === link.href.substring(1)
                        ? "bg-white/10 text-white border border-white/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span>{link.label}</span>
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform"
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
              <div className="mt-6 pt-6 border-t border-white/10 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-500 gap-2">
                  <span>📍 Saki Vihar, Andheri East</span>
                  <a href={CALL_LINK} className="text-gray-400 hover:text-white">
                    Call: +91 {PHONE_NUMBER}
                  </a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    WhatsApp: +91 {PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24"
        }`}
      ></div>
    </>
  );
};

export default Header;
