"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-[#FFFF00] bg-white/10 hover:bg-white/20 p-2 rounded-full border border-white/20 transition-all z-10"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next Buttons */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#FFFF00] bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/20 transition-all z-10 hidden sm:block"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#FFFF00] bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/20 transition-all z-10 hidden sm:block"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-[65vh] rounded border-2 border-[#FFFF00] overflow-hidden bg-[#06361D] shadow-2xl">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#FFFF00] px-2.5 py-0.5 rounded bg-[#C91818] mb-1">
            {item.category}
          </div>
          <h4 className="text-white font-display text-lg sm:text-xl font-bold">
            {item.title || item.alt}
          </h4>
          {item.description && (
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
