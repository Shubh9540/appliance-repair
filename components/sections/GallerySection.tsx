'use client';
import React from 'react';
import { GalleryData } from '@/types/templates.types';

export const GallerySection = ({ data }: { data?: GalleryData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-12g-white">
      <div className="max-w-[1250px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-[#007bff]"></span>
            <span className="text-[#007bff] font-bold text-sm tracking-widest uppercase">{data.subtitle}</span>
            <span className="h-[1px] w-12 bg-[#007bff]"></span>
          </div>
          <h2 className="text-4xl md:text-[42px] font-extrabold text-[#051838] mb-4">
            {data.title1} <span className="text-[#007bff]">{data.title2}</span>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[240px]">
          {data.images.map((item, index) => {
            // First item spans 2 rows
            const isLarge = index === 0;
            return (
              <div
                key={item.id}
                className={`group relative rounded-[16px] overflow-hidden ${isLarge ? 'row-span-2 sm:row-span-2' : 'row-span-1'}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded shadow-md">
                  <h4 className="font-bold text-[#051838] text-[13px] md:text-[14px]">
                    {item.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
