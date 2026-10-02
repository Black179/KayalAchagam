"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare, Menu, X, Shield, MapPin } from "lucide-react";
import { contactData } from "@/data/contact";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT & ACTIVITIES", href: "/about" },
    { name: "SERVICES & PRODUCTS", href: "/services" },
    { name: "GALLERY & CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#06361D] text-white text-xs py-1.5 px-4 border-b border-[#E0A911]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[#FAF6E9]/90 font-medium">
            <span className="inline-flex items-center gap-1.5 text-[#E0A911]">
              <MapPin className="w-3.5 h-3.5 text-[#E0A911]" />
              <span className="hidden sm:inline">Paramakudi, Tamil Nadu</span>
              <span className="sm:hidden">Paramakudi</span>
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline font-tamil-sans text-[11px] text-[#FAF6E9]">
              {contactData.motto.tamil}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${contactData.phone}`}
              className="inline-flex items-center gap-1 text-[#E0A911] hover:underline font-semibold"
            >
              <Phone className="w-3 h-3" />
              <span>{contactData.phone}</span>
            </a>
            <span className="text-white/40">·</span>
            <a
              href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#06361D]/95 backdrop-blur-md shadow-xl py-3 border-b-2 border-[#E0A911]"
            : "bg-[#0B4D2C] py-4 border-b border-[#E0A911]/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Branding */}
          <Link href="/" className="group flex items-center gap-3">
            {/* Red & Yellow Emblem Box */}
            <div className="w-10 h-10 rounded bg-[#C91818] border-2 border-[#E0A911] flex items-center justify-center font-display font-black text-white text-xl shadow-md group-hover:scale-105 transition-transform">
              K
            </div>
            <div>
              <div className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-[#FAF6E9] group-hover:text-[#E0A911] transition-colors">
                KAYAL ACHAGAM
              </div>
              <div className="text-[10px] tracking-[0.25em] text-[#E0A911] uppercase font-bold font-sans">
                Official Centre · Paramakudi
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-xs font-bold tracking-widest transition-all uppercase py-1 relative ${
                      isActive
                        ? "text-[#E0A911]"
                        : "text-white hover:text-[#E0A911]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C91818]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#C91818] hover:bg-[#991B1B] text-white font-bold text-xs px-4 py-2 rounded-sm border border-[#E0A911] tracking-wider uppercase shadow-md transition-transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#E0A911]" />
              <span>Enquire Now</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#E0A911] hover:text-white rounded border border-[#E0A911]/40"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#06361D] border-t border-[#E0A911]/30 px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-bold tracking-widest py-2 px-3 rounded transition-colors uppercase ${
                  pathname === link.href
                    ? "bg-[#C91818] text-white border-l-4 border-[#E0A911]"
                    : "text-[#FAF6E9] hover:bg-white/10 hover:text-[#E0A911]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#E0A911]/20 flex flex-col gap-2">
              <a
                href={`tel:${contactData.phone}`}
                className="w-full text-center bg-[#0B4D2C] border border-[#E0A911] text-[#E0A911] font-bold text-xs py-2.5 rounded tracking-wider uppercase"
              >
                Call: {contactData.phone}
              </a>
              <a
                href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#C91818] text-white font-bold text-xs py-2.5 rounded border border-[#E0A911] tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#E0A911]" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
