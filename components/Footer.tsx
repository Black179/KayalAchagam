import React from "react";
import Link from "next/link";
import { contactData } from "@/data/contact";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06361D] text-white border-t-4 border-[#FFFF00] kolam-pattern-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FFFF00]/30">
          {/* Column 1: Branding & Thirukkural */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#C91818] border-2 border-[#FFFF00] flex items-center justify-center font-display font-black text-white text-xl shadow-md">
                K
              </div>
              <div>
                <div className="font-display font-black text-2xl text-[#FFFF00] tracking-wider">
                  KAYAL ACHAGAM
                </div>
                <div className="text-[10px] tracking-[0.25em] text-white/80 uppercase font-bold">
                  Official Centre · Paramakudi
                </div>
              </div>
            </div>

            <p className="text-xs text-[#FFFDF7]/90 leading-relaxed max-w-md">
              Kayal Achagam Centre is an official local organization and service centre providing printing, document processing, e-services, publications, and Tamil heritage products for the community.
            </p>

            {/* Thirukkural Badge */}
            <div className="p-4 rounded bg-[#0B4D2C] border border-[#FFFF00]/50 text-left">
              <p className="font-tamil-serif text-sm font-bold text-[#FFF5D0] leading-snug">
                "{contactData.kural.line1} {contactData.kural.line2}"
              </p>
              <p className="text-[10px] text-[#FFFF00] font-bold mt-1 uppercase tracking-wider">
                {contactData.kural.source} · {contactData.kural.kuralNo}
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-extrabold text-[#FFFF00] text-sm uppercase tracking-widest border-b border-[#FFFF00]/40 pb-2">
              Website Navigation
            </h4>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider">
              <li>
                <Link href="/" className="hover:text-[#FFFF00] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C91818]" />
                  <span>1. HOME</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFFF00] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C91818]" />
                  <span>2. ABOUT & ACTIVITIES</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FFFF00] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C91818]" />
                  <span>3. SERVICES & PRODUCTS</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFFF00] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C91818]" />
                  <span>4. GALLERY & CONTACT</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-extrabold text-[#FFFF00] text-sm uppercase tracking-widest border-b border-[#FFFF00]/40 pb-2">
              Official Contact
            </h4>
            <div className="space-y-2 text-xs text-white/90">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C91818] flex-shrink-0 mt-0.5" />
                <span className="font-tamil-sans">{contactData.addressTamil}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C91818] flex-shrink-0" />
                <span>{contactData.phone} / {contactData.alternatePhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C91818] flex-shrink-0" />
                <span>{contactData.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-wrap justify-between items-center text-xs text-white/70 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FFFF00]" />
            <span>© 2026 Kayal Achagam Centre. All Rights Reserved.</span>
          </div>
          <div className="font-tamil-sans text-emerald-300 font-semibold text-[11px]">
            {contactData.motto.tamil}
          </div>
        </div>
      </div>
    </footer>
  );
};
