"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { contactData } from "@/data/contact";
import { ArrowRight, Phone, MessageSquare, ShieldCheck, MapPin, Printer } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#FAF6E9] border-b border-[#E0A911]/30 overflow-hidden">
      {/* Background Decorative Frame Corners */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#E0A911] pointer-events-none hidden sm:block" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#E0A911] pointer-events-none hidden sm:block" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-24">
        {/* Thirukkural Banner Box */}
        <div className="max-w-3xl mx-auto text-center mb-10 p-6 rounded bg-[#06361D] border-2 border-[#E0A911] shadow-2xl relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C91818] text-white text-[10px] uppercase font-bold tracking-[0.25em] px-4 py-0.5 rounded border border-[#E0A911]">
            Official Heritage Motto
          </div>
          <p className="font-tamil-serif text-lg sm:text-2xl font-bold text-[#FFF5D0] leading-relaxed whitespace-pre-line mt-1">
            "{contactData.kural.line1}
            {"\n"}
            {contactData.kural.line2}"
          </p>
          <p className="text-xs tracking-[0.2em] text-[#E0A911] font-bold mt-2 uppercase">
            {contactData.kural.source} · {contactData.kural.kuralNo}
          </p>
        </div>

        {/* Large Editorial Heading */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C91818]/10 border border-[#C91818]/30 rounded text-[#C91818] font-bold text-xs uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4 text-[#C91818]" />
            <span>Official Organisation Website · 2026</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#0B4D2C]">
            KAYAL ACHAGAM
            <span className="flex items-center justify-center gap-4 sm:gap-6 mt-3">
              <span className="h-1 flex-1 bg-gradient-to-r from-transparent via-[#E0A911] to-[#C91818]" />
              <span className="text-[#C91818] font-black tracking-widest text-3xl sm:text-5xl lg:text-6xl">
                CENTRE
              </span>
              <span className="h-1 flex-1 bg-gradient-to-r from-[#C91818] via-[#E0A911] to-transparent" />
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-800 font-medium max-w-2xl mx-auto leading-relaxed">
            Printing, Document Services, E-Services, Publications, and Heritage Merchandise — Serving the Paramakudi Community with Trust & Excellence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#0B4D2C] hover:bg-[#06361D] text-white font-bold text-sm px-6 py-3.5 rounded border-2 border-[#E0A911] tracking-wider uppercase shadow-xl transition-all hover:-translate-y-0.5"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-[#E0A911]" />
            </Link>

            <Link
              href="/services#products"
              className="inline-flex items-center gap-2 bg-[#C91818] hover:bg-[#991B1B] text-white font-bold text-sm px-6 py-3.5 rounded border-2 border-[#E0A911] tracking-wider uppercase shadow-xl transition-all hover:-translate-y-0.5"
            >
              <span>View Products</span>
              <Printer className="w-4 h-4 text-[#E0A911]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Collage Section - Green & Red Canvas */}
      <div className="bg-[#0B4D2C] kolam-pattern py-12 px-4 border-t-2 border-[#E0A911]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Figure Cards - Pavanar & Immanuel */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="relative group overflow-hidden rounded border-2 border-[#E0A911] bg-[#06361D] shadow-lg">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/pavanar.jpg"
                  alt="Devaneya Pavanar"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-2 bg-[#06361D] text-center border-t border-[#E0A911]/40">
                <div className="text-[11px] font-bold text-[#E0A911] font-tamil-sans">
                  தேவநேயப் பாவாணர்
                </div>
                <div className="text-[9px] text-white/70 uppercase tracking-wider">Linguistic Pioneer</div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded border-2 border-[#E0A911] bg-[#06361D] shadow-lg">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/immanuel.jpg"
                  alt="Tyagi Immanuel Sekaran"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-2 bg-[#06361D] text-center border-t border-[#E0A911]/40">
                <div className="text-[11px] font-bold text-[#E0A911] font-tamil-sans">
                  இம்மானுவேல் சேகரன்
                </div>
                <div className="text-[9px] text-white/70 uppercase tracking-wider">Social Leader</div>
              </div>
            </div>
          </div>

          {/* Middle Address & Quick Info Box */}
          <div className="md:col-span-4 text-center text-white p-6 rounded bg-[#06361D]/90 border-2 border-[#E0A911] shadow-2xl">
            <div className="inline-block text-[10px] font-bold tracking-[0.2em] text-[#E0A911] uppercase border border-[#E0A911] px-3 py-0.5 rounded mb-3">
              Official Location
            </div>
            <div className="font-tamil-serif text-xl sm:text-2xl font-bold text-[#FFF5D0] leading-snug">
              {contactData.addressTamil}
            </div>
            <div className="text-xs text-white/80 mt-1 font-medium">
              {contactData.address}
            </div>

            <div className="h-0.5 w-32 bg-[#E0A911] mx-auto my-4" />

            <div className="space-y-1.5 text-xs text-white/90">
              <p>📞 Phone: <span className="text-[#E0A911] font-bold">{contactData.phone}</span></p>
              <p>☎️ Landline: <span className="text-[#E0A911] font-bold">{contactData.alternatePhone}</span></p>
              <p>✉️ Email: <span className="text-emerald-300 font-semibold">{contactData.email}</span></p>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <a
                href={contactData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#E0A911] hover:bg-amber-400 text-[#06361D] font-bold text-xs px-3.5 py-2 rounded shadow transition-transform hover:-translate-y-0.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
              <a
                href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#C91818] hover:bg-[#991B1B] text-white font-bold text-xs px-3.5 py-2 rounded border border-[#E0A911] shadow transition-transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#E0A911]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Figure Cards - Thiruvalluvar & Prabhakaran */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="relative group overflow-hidden rounded border-2 border-[#E0A911] bg-[#06361D] shadow-lg">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/thiruvalluvar.jpg"
                  alt="Thiruvalluvar"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-2 bg-[#06361D] text-center border-t border-[#E0A911]/40">
                <div className="text-[11px] font-bold text-[#E0A911] font-tamil-sans">
                  திருவள்ளுவர்
                </div>
                <div className="text-[9px] text-white/70 uppercase tracking-wider">Universal Philosopher</div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded border-2 border-[#E0A911] bg-[#06361D] shadow-lg">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/prabhakaran.jpg"
                  alt="Velupillai Prabhakaran"
                  fill
                  className="object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-2 bg-[#06361D] text-center border-t border-[#E0A911]/40">
                <div className="text-[11px] font-bold text-[#E0A911] font-tamil-sans">
                  வே. பிரபாகரன்
                </div>
                <div className="text-[9px] text-white/70 uppercase tracking-wider">Historical Archival Print</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
