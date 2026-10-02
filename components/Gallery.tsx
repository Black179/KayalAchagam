"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData, GalleryItem } from "@/data/gallery";
import { Lightbox } from "./Lightbox";
import { Maximize2, Image as ImageIcon } from "lucide-react";

const categories = ["All", "Events", "Activities", "Products", "Publications", "Posters"];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <div>
      {/* Category Filter Chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm border transition-all ${
              activeCategory === cat
                ? "bg-[#C91818] text-white border-[#FFFF01] shadow-md scale-105"
                : "bg-[#FFFDF7] text-[#06361D] border-[#FFFF01]/60 hover:bg-[#FFFF01]/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative bg-[#06361D] rounded overflow-hidden border-2 border-[#FFFF01] aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
              <div className="flex items-center justify-between text-[#FFFF01]">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#C91818] text-white px-2 py-0.5 rounded border border-[#FFFF01]">
                  {item.category}
                </span>
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-white font-display text-sm font-bold mt-2 leading-tight">
                {item.title || item.alt}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={activeItem}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
