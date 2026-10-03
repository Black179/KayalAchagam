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

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsOpen((prev) => !prev);
  };

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT & ACTIVITIES", href: "/about" },
    { name: "SERVICES & PRODUCTS", href: "/services" },
    { name: "GALLERY & CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#06361D] text-white text-xs py-1.5 px-4 border-b border-[#FFFF00]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[#FFFDF7]/90 font-medium">
            <span className="inline-flex items-center gap-1.5 text-[#FFFF00]">
              <MapPin className="w-3.5 h-3.5 text-[#FFFF00]" />
              <span className="hidden sm:inline">Paramakudi, Tamil Nadu</span>
              <span className="sm:hidden">Paramakudi</span>
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline font-tamil-sans text-[11px] text-[#FFFDF7]">
              {contactData.motto.tamil}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${contactData.phone}`}
              className="inline-flex items-center gap-1 text-[#FFFF00] hover:underline font-semibold"
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
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#06361D]/95 backdrop-blur-md shadow-xl py-2.5 sm:py-3 border-b-2 border-[#FFFF00]"
            : "bg-[#0B4D2C] py-3 sm:py-4 border-b border-[#FFFF00]/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-2">
          {/* Logo Branding */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 sm:flex-initial">
            {/* Red & Yellow Emblem Box */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 rounded bg-[#C91818] border-2 border-[#FFFF00] flex items-center justify-center font-display font-black text-white text-lg sm:text-xl shadow-md group-hover:scale-105 transition-transform">
              K
            </div>
            <div className="min-w-0">
              <div className="font-display font-extrabold text-base sm:text-xl tracking-wider text-[#FFFDF7] group-hover:text-[#FFFF00] transition-colors truncate">
                KAYAL ACHAGAM
              </div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.25em] text-[#FFFF00] uppercase font-bold font-sans truncate">
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
                        ? "text-[#FFFF00]"
                        : "text-white hover:text-[#FFFF00]"
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
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#C91818] hover:bg-[#991B1B] text-white font-bold text-xs px-4 py-2 rounded-sm border border-[#FFFF00] tracking-wider uppercase shadow-md transition-transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FFFF00]" />
              <span>Enquire Now</span>
            </a>

            <button
              type="button"
              id="mobile-nav-toggle-btn"
              onClick={toggleMenu}
              onTouchEnd={(e) => {
                e.preventDefault();
                toggleMenu(e);
              }}
              className="lg:hidden flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded border-2 border-[#FFFF00] bg-[#06361D] text-[#FFFF00] hover:text-white hover:bg-[#0B4D2C] active:scale-95 transition-all cursor-pointer touch-manipulation z-50 relative shadow-md"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 pointer-events-none" />
              ) : (
                <Menu className="w-6 h-6 pointer-events-none" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-nav-drawer"
          className={`lg:hidden bg-[#06361D] border-t-2 border-[#FFFF00] px-4 pt-3 pb-6 space-y-3 shadow-2xl transition-all duration-200 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-bold tracking-widest py-2.5 px-3 rounded transition-colors uppercase ${
                pathname === link.href
                  ? "bg-[#C91818] text-white border-l-4 border-[#FFFF00]"
                  : "text-[#FFFDF7] hover:bg-white/10 hover:text-[#FFFF00]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#FFFF00]/20 flex flex-col gap-2.5">
            <a
              href={`tel:${contactData.phone}`}
              className="w-full text-center bg-[#0B4D2C] border border-[#FFFF00] text-[#FFFF00] font-bold text-xs py-3 rounded tracking-wider uppercase shadow"
            >
              Call: {contactData.phone}
            </a>
            <a
              href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#C91818] text-white font-bold text-xs py-3 rounded border border-[#FFFF00] tracking-wider uppercase flex items-center justify-center gap-2 shadow"
            >
              <MessageSquare className="w-4 h-4 text-[#FFFF00]" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>

      </nav>
    </>
  );
};
