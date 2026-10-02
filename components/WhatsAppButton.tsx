"use client";

import React from "react";
import { contactData } from "@/data/contact";
import { MessageSquare } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(
    contactData.whatsappDefaultMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 bg-[#06361D] text-white p-3 sm:px-4 sm:py-3 rounded-full border-2 border-[#E0A911] shadow-2xl hover:bg-[#C91818] transition-all duration-300 hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-inner group-hover:bg-[#E0A911] group-hover:text-[#06361D] transition-colors">
        <MessageSquare className="w-5 h-5" />
      </div>
      <span className="hidden sm:inline text-xs font-extrabold uppercase tracking-wider text-[#FAF6E9] pr-1">
        WhatsApp Enquiry
      </span>
    </a>
  );
};
