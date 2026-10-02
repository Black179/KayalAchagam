"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { contactData } from "@/data/contact";
import { MessageSquare, Tag, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(
    `Hello Kayal Achagam, I would like to enquire about the product: ${product.name}.`
  )}`;

  return (
    <div className="bg-white rounded-lg border-2 border-[#E0A911] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] bg-[#FAF6E9] overflow-hidden border-b border-[#E0A911]/40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-[#C91818] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-[#E0A911] shadow">
          {product.category}
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#E0A911] font-bold uppercase tracking-wider mb-1">
            <Tag className="w-3.5 h-3.5 text-[#C91818]" />
            <span>Organisation Merchandise</span>
          </div>

          <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#0B4D2C] group-hover:text-[#C91818] transition-colors leading-snug">
            {product.name}
          </h3>

          {product.nameTamil && (
            <p className="font-tamil-serif font-bold text-sm text-[#C91818] mt-0.5 mb-2">
              {product.nameTamil}
            </p>
          )}

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
            {product.description}
          </p>

          {/* Specifications */}
          {product.specifications && (
            <ul className="space-y-1 mb-5">
              {product.specifications.map((spec, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                  <Check className="w-3.5 h-3.5 text-[#0B4D2C]" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-gray-100 mt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#C91818] hover:bg-[#991B1B] text-white font-bold text-xs py-2.5 px-4 rounded border border-[#E0A911] uppercase tracking-wider transition-all duration-300 shadow"
          >
            <MessageSquare className="w-4 h-4 text-[#E0A911]" />
            <span>Enquire Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
