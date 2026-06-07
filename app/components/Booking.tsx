'use client';

import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sport: '',
    date: '',
    time: '',
    duration: '1'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Booking request submitted! We will contact you shortly.');
  };

  const inputClass = "w-full p-3 bg-black/50 border border-white/15 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors";
  const labelClass = "block text-gray-400 text-sm font-medium mb-2";

  return (
    <section id="booking" className="py-16 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(156,163,175,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(156,163,175,0.2) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="px-6 py-2 bg-white/5 border border-white/15 rounded-full text-gray-400 text-xs font-semibold tracking-wider uppercase">
            Reservations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-2">Book Your Slot</h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className={labelClass}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className={labelClass}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Sport</label>
                <select
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select Sport</option>
                  <option value="football">Football</option>
                  <option value="cricket">Cricket</option>
                  <option value="pickleball">Pickleball</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className={labelClass}>Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-100 text-black font-bold py-3.5 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
