"use client";

import React from "react";
import Image from "next/image";
import { Publication } from "@/data/publications";
import { contactData } from "@/data/contact";
import { BookOpen, MessageSquare, User, Building } from "lucide-react";

interface PublicationCardProps {
  publication: Publication;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const whatsappUrl = `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(
    `Hello Kayal Achagam, I would like to enquire about the publication: ${publication.title}.`
  )}`;

  return (
    <div className="bg-[#FFFDF7] rounded-lg border-2 border-[#FFFF01] p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-center group">
      {/* Book Cover Frame */}
      <div className="relative w-36 sm:w-44 aspect-[3/4] flex-shrink-0 rounded border-2 border-[#FFFF01] overflow-hidden bg-[#06361D] shadow-xl group-hover:scale-105 transition-transform duration-500">
        <Image
          src={publication.image}
          alt={publication.title}
          fill
          className="object-cover object-top"
        />
        <div className="absolute top-2 left-2 bg-[#C91818] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#FFFF01]">
          {publication.category}
        </div>
      </div>

      {/* Book Information */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#FFFF01] uppercase tracking-wider mb-1">
            <BookOpen className="w-3.5 h-3.5 text-[#C91818]" />
            <span>Official Publication</span>
          </div>

          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0B4D2C] group-hover:text-[#C91818] transition-colors leading-tight">
            {publication.title}
          </h3>

          {publication.titleTamil && (
            <p className="font-tamil-serif font-bold text-base text-[#C91818] mt-1 mb-2">
              {publication.titleTamil}
            </p>
          )}

          <div className="space-y-1 text-xs text-gray-800 mb-3">
            {publication.author && (
              <p className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#0B4D2C]" />
                <span className="font-semibold">Author:</span> {publication.author}
              </p>
            )}
            {publication.publisher && (
              <p className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#0B4D2C]" />
                <span className="font-semibold">Publisher:</span> {publication.publisher}
              </p>
            )}
          </div>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
            {publication.description}
          </p>
        </div>

        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0B4D2C] hover:bg-[#C91818] text-white font-bold text-xs py-2.5 px-5 rounded border border-[#FFFF01] uppercase tracking-wider transition-all duration-300 shadow"
          >
            <MessageSquare className="w-4 h-4 text-[#FFFF01]" />
            <span>Enquire Publication</span>
          </a>
        </div>
      </div>
    </div>
  );
};
