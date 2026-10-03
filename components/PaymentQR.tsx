"use client";

import React from "react";
import Image from "next/image";
import { QrCode, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink } from "lucide-react";
import { contactData } from "@/data/contact";

export const PaymentQR: React.FC = () => {
  return (
    <div className="bg-[#06361D] text-white p-6 sm:p-8 rounded-lg border-2 border-[#FFFF00] shadow-2xl relative overflow-hidden">
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C91818]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-[#FFFF00] uppercase border border-[#FFFF00] px-3 py-1 rounded bg-[#0B4D2C]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FFFF00]" />
          <span>Official Verified Payment</span>
        </div>
        <div className="text-xs text-[#FFFF00] font-bold tracking-wider uppercase font-tamil-sans">
          PhonePe · GPay · Paytm · All UPI
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Side: QR Code Card */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="bg-white p-3 rounded-lg border-4 border-[#FFFF00] shadow-xl max-w-[280px] w-full transition-transform hover:scale-105 duration-300">
            <div className="relative aspect-[541/1024] w-full overflow-hidden rounded">
              <Image
                src="/images/payments/phonepe_qr.jpg"
                alt="PhonePe QR Code - Gokila K - Kayal Achagam"
                fill
                sizes="(max-width: 768px) 260px, 280px"
                className="object-contain"
                priority
              />
            </div>
          </div>
          <p className="text-[11px] text-[#FFFF00] font-bold mt-3 tracking-wider text-center">
            Payee: <span className="text-white">GOKILA K</span> (கயல் அச்சகம்)
          </p>
        </div>

        {/* Right Side: Payment Instructions & Confirmation */}
        <div className="md:col-span-7 space-y-4">
          <h3 className="font-display text-2xl sm:text-3xl text-[#FFFF00] font-black leading-tight">
            SCAN & PAY VIA UPI
          </h3>
          <p className="font-tamil-serif text-lg text-[#FFF5D0] font-bold">
            கட்டணம் செலுத்த QR குறியீட்டை ஸ்கேன் செய்யவும்
          </p>

          <p className="text-sm text-white/90 leading-relaxed font-medium">
            Use PhonePe, Google Pay, Paytm, or any UPI banking app to pay for printing orders, books, publications, exam fees, or services.
          </p>

          <div className="space-y-2.5 pt-2">
            <div className="flex items-start gap-2.5 text-xs text-[#FFFDF7]">
              <CheckCircle2 className="w-4 h-4 text-[#FFFF00] flex-shrink-0 mt-0.5" />
              <span>Instant payment verification for all printing & document services.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[#FFFDF7]">
              <CheckCircle2 className="w-4 h-4 text-[#FFFF00] flex-shrink-0 mt-0.5" />
              <span>Official payment recipient: <strong>GOKILA K</strong>.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[#FFFDF7]">
              <CheckCircle2 className="w-4 h-4 text-[#FFFF00] flex-shrink-0 mt-0.5" />
              <span>After payment, send your screenshot via WhatsApp for instant processing.</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent("Hello Kayal Achagam, I have made a UPI payment via QR code. Here is my payment confirmation details:")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C91818] hover:bg-[#991B1B] text-white font-extrabold text-xs px-5 py-3 rounded border-2 border-[#FFFF00] uppercase tracking-wider shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-[#FFFF00]" />
              <span>Send Payment Screenshot</span>
            </a>

            <a
              href="/images/payments/phonepe_qr.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B4D2C] hover:bg-[#06361D] text-[#FFFF00] font-bold text-xs px-4 py-3 rounded border border-[#FFFF00]/60 uppercase tracking-wider transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Full QR</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
