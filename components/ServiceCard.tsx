"use client";

import React from "react";
import { ServiceCategory } from "@/data/services";
import { contactData } from "@/data/contact";
import { Printer, Globe, CreditCard, Bus, FileCheck, Building2, Shirt, Flag, CheckCircle, MessageSquare } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Printer: <Printer className="w-6 h-6 text-[#C91818]" />,
  Globe: <Globe className="w-6 h-6 text-[#C91818]" />,
  CreditCard: <CreditCard className="w-6 h-6 text-[#C91818]" />,
  Bus: <Bus className="w-6 h-6 text-[#C91818]" />,
  FileCheck: <FileCheck className="w-6 h-6 text-[#C91818]" />,
  Building2: <Building2 className="w-6 h-6 text-[#C91818]" />,
  Shirt: <Shirt className="w-6 h-6 text-[#C91818]" />,
  Flag: <Flag className="w-6 h-6 text-[#C91818]" />,
};

interface ServiceCardProps {
  service: ServiceCategory;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const whatsappUrl = `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(
    `Hello Kayal Achagam, I would like to enquire about ${service.title} (${service.items.slice(0, 3).join(", ")}).`
  )}`;

  return (
    <div className="bg-white rounded-lg border-2 border-[#FFFF01]/60 p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
      {/* Red Accent Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C91818] via-[#FFFF01] to-[#0B4D2C]" />

      <div>
        {/* Header with Category Number & Icon */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded bg-[#FFFDF7] border border-[#FFFF01] flex items-center justify-center shadow-inner group-hover:bg-[#C91818]/10 transition-colors">
            {iconMap[service.iconName] || <Printer className="w-6 h-6 text-[#C91818]" />}
          </div>
          <span className="num-stroke text-4xl sm:text-5xl font-extrabold select-none opacity-80">
            {service.categoryNumber}
          </span>
        </div>

        {/* Titles */}
        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0B4D2C] group-hover:text-[#C91818] transition-colors">
          {service.title}
        </h3>
        <p className="font-tamil-serif font-bold text-base text-[#C91818] mt-1 mb-3">
          {service.titleTamil}
        </p>

        <p className="text-sm text-gray-700 leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Service Items List / Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.items.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 bg-[#FFFDF7] text-[#06361D] text-xs font-semibold px-2.5 py-1 rounded border border-[#FFFF01]/60"
            >
              <CheckCircle className="w-3.5 h-3.5 text-[#C91818]" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-4 border-t border-gray-100">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#0B4D2C] hover:bg-[#C91818] text-white font-bold text-xs py-2.5 px-4 rounded border border-[#FFFF01] uppercase tracking-wider transition-all duration-300 shadow"
        >
          <MessageSquare className="w-4 h-4 text-[#FFFF01]" />
          <span>Enquire Service</span>
        </a>
      </div>
    </div>
  );
};
