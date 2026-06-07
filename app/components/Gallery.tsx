'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&h=800&fit=crop',
      alt: 'Football match in progress',
      title: 'Football Match',
    },
    {
      src: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=800&fit=crop',
      alt: 'Cricket practice session',
      title: 'Cricket Practice',
    },
    {
      src: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=800&fit=crop',
      alt: 'Pickleball tournament',
      title: 'Pickleball Tournament',
    },
    {
      src: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&h=800&fit=crop',
      alt: 'Evening training under lights',
      title: 'Evening Training',
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop',
      alt: 'Group fitness class',
      title: 'Fitness Class',
    },
    {
      src: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=800&fit=crop',
      alt: 'Facility overview',
      title: 'Facility Overview',
    },
    {
      src: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=800&h=800&fit=crop',
      alt: 'Modern changing rooms',
      title: 'Changing Rooms',
    },
    {
      src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=800&fit=crop',
      alt: 'Equipment storage',
      title: 'Equipment Area',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-950 py-16">
      <div className="text-center mb-12">
        <span className="px-4 py-1.5 text-xs font-semibold text-gray-300 bg-white/5 border border-white/15 rounded-full uppercase tracking-wider">
          Our Moments
        </span>
        <h2 className="text-4xl font-bold text-white mt-5 mb-2">Gallery</h2>
        <p className="text-gray-500 mt-2 text-base">
          Experience our vibrant community in action
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="pb-16"
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/10 hover:border-white/25 hover:scale-[1.02] transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-[280px] md:h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-white border-t border-white/5">
                  <h3 className="font-semibold text-base text-gray-100">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{item.alt}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="custom-prev absolute left-0 top-[45%] -translate-y-1/2 z-10 cursor-pointer bg-black/60 border border-white/20 hover:bg-white/20 hover:border-white/40 p-2.5 rounded-full transition-all duration-200 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="custom-next absolute right-0 top-[45%] -translate-y-1/2 z-10 cursor-pointer bg-black/60 border border-white/20 hover:bg-white/20 hover:border-white/40 p-2.5 rounded-full transition-all duration-200 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center mt-4 gap-2"></div>
      </div>
    </section>
  );
};

export default Gallery;
