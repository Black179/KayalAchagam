import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { contactData } from "@/data/contact";

export const metadata = {
  title: "Gallery & Contact | Kayal Achagam",
  description: "Official photo gallery and contact details for Kayal Achagam Centre, Paramakudi.",
};

export default function ContactPage() {
  return (
    <div className="space-y-0">
      {/* PAGE HEADER BANNER */}
      <div className="bg-[#0B4D2C] text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#E0A911] kolam-pattern">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#E0A911] uppercase border border-[#E0A911] px-3.5 py-1 rounded mb-3 bg-[#06361D]">
            Official Media & Contact Hub
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#FAF6E9]">
            GALLERY & CONTACT
          </h1>
          <p className="font-tamil-serif font-bold text-xl text-[#E0A911] mt-2">
            புகைப்படக் கூடம் & தொடர்பு விவரங்கள்
          </p>
        </div>
      </div>

      {/* SECTION 1: RESPONSIVE GALLERY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E0A911]/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            badgeText="Media Collection"
            title="OFFICIAL PHOTO GALLERY"
            titleTamil="புகைப்படக் கூடம்"
            description="Explore archival portraits, publication book covers, merchandise, and event photographs. Click any image for full-screen viewer."
          />

          <Gallery />
        </div>
      </section>

      {/* SECTION 2: OFFICIAL CONTACT SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6E9]">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            badgeText="Direct Communication"
            title="CONTACT KAYAL ACHAGAM"
            titleTamil="அமைப்பைத் தொடர்பு கொள்ளவும்"
            description="Reach out to us via call, WhatsApp message, email, or visit our Paramakudi centre."
          />

          <Contact />
        </div>
      </section>
    </div>
  );
}
