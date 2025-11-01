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
    // Handle form submission here
    console.log('Booking submitted:', formData);
    alert('Booking request submitted! We will contact you shortly.');
  };

  return (
    <section id="booking" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-500 mb-8">Book Your Slot</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg border border-green-500">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-green-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-green-500 rounded text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-green-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-green-500 rounded text-white"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-green-400 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-green-500 rounded text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-green-400 mb-2">Sport</label>
                <select
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-green-500 rounded text-white"
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
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-green-400 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-green-500 rounded text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-green-400 mb-2">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-green-500 rounded text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-green-400 mb-2">Duration (hours)</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-green-500 rounded text-white"
                >
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg transition-colors"
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