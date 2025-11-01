'use client';

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Football Coach',
      image: '/testimonial1.jpg',
      rating: 5,
      text: 'Prime Turf Marol has transformed our training sessions. The quality of the turf and facilities is outstanding. Highly recommended!'
    },
    {
      name: 'Priya Patel',
      role: 'Cricket Enthusiast',
      image: '/testimonial2.jpg',
      rating: 5,
      text: 'Perfect venue for weekend cricket matches. The lighting and maintenance are top-notch. Great experience every time.'
    },
    {
      name: 'Amit Kumar',
      role: 'Pickleball Player',
      image: '/testimonial3.jpg',
      rating: 5,
      text: 'Love the new pickleball courts! Well-maintained and great atmosphere. Prime Turf is the best in Marol.'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-green-500' : 'text-gray-500'}>★</span>
    ));
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-500 mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black p-6 rounded-lg border border-green-500 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-green-400">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-sm italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;