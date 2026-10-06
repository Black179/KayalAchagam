import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ActivityCard } from "@/components/ActivityCard";
import { activitiesData } from "@/data/activities";
import { contactData } from "@/data/contact";
import { ShieldCheck, Calendar, MapPin, Award, BookOpen, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "About & Activities | Kayal Achagam",
  description: "Learn about Kayal Achagam Centre, Paramakudi — Our purpose, Tamil heritage, community e-services, and documented activities.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* PAGE HEADER BANNER */}
      <div className="bg-[#0B4D2C] text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FFFF00] kolam-pattern relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#FFFF00] uppercase border border-[#FFFF00] px-3.5 py-1 rounded mb-3 bg-[#06361D]">
            Official Organisation Overview
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#FFFDF7]">
            ABOUT & ACTIVITIES
          </h1>
          <p className="font-tamil-serif font-bold text-xl text-[#FFFF00] mt-2">
            கயல் அச்சகம் — அமைப்பு & சமூகச் செயல்பாடுகள்
          </p>
        </div>
      </div>

      {/* SECTION 1: ABOUT KAYAL ACHAGAM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFF00] border-b-2 border-[#0B4D2C]/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badgeText="Organisation Heritage"
                title="ABOUT KAYAL ACHAGAM"
                titleTamil="கயல் அச்சகம் மையம் பற்றிய விவரம்"
                centered={false}
              />

              <p className="text-[#101814] font-medium text-base sm:text-lg leading-relaxed">
                Kayal Achagam Centre is an essential community service and document printing organisation operating in Kattu Paramakudi, Paramakudi. Established with a commitment to quality, linguistic preservation, and public utility, the centre acts as a primary bridge for individuals requiring official document processing, government applications, and educational services.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded bg-white border-2 border-[#0B4D2C]/30 shadow-md flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#C91818] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#0B4D2C]">Trusted Services</h4>
                    <p className="text-xs text-gray-700 mt-0.5">Reliable processing for government and exam applications.</p>
                  </div>
                </div>

                <div className="p-4 rounded bg-white border-2 border-[#0B4D2C]/30 shadow-md flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#C91818] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#0B4D2C]">Tamil Heritage</h4>
                    <p className="text-xs text-gray-700 mt-0.5">Promoting classical Tamil literature and publications.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid of Verified Figures */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded border-2 border-[#FFFF00] bg-[#06361D] shadow-lg">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/thiruvalluvar.jpg"
                    alt="Thiruvalluvar"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2 bg-[#06361D] text-center border-t border-[#FFFF00]/40">
                  <div className="text-xs font-bold text-[#FFFF00] font-tamil-sans">
                    திருவள்ளுவர்
                  </div>
                  <div className="text-[10px] text-white/70">Ethics & Wisdom</div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded border-2 border-[#FFFF00] bg-[#06361D] shadow-lg">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/pavanar.jpg"
                    alt="Devaneya Pavanar"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2 bg-[#06361D] text-center border-t border-[#FFFF00]/40">
                  <div className="text-xs font-bold text-[#FFFF00] font-tamil-sans">
                    தேவநேயப் பாவாணர்
                  </div>
                  <div className="text-[10px] text-white/70">Linguistic Scholar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ACTIVITIES TIMELINE / CARDS */}
      <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFF00] border-b-2 border-[#0B4D2C]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            badgeText="Events & Community Work"
            title="DOCUMENTED ACTIVITIES"
            titleTamil="அமைப்பின் பதிவுசெய்த செயல்பாடுகள்"
            description="Timeline of educational book launches, cultural tribute programs, and public e-service camps."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activitiesData.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TAMIL / CULTURAL RETROSPECTIVE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06361D] text-white border-b-4 border-[#FFFF00] kolam-pattern">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#FFFF00] uppercase border border-[#FFFF00] px-3.5 py-1 rounded bg-[#C91818]">
              TAMIL HERITAGE & SOCIAL HISTORY
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#FFF5D0] leading-tight">
              Preserving Tamil History & Community Ethics
            </h2>

            <p className="font-tamil-serif font-bold text-xl text-[#FFFF00]">
              மொழி உணர்வு, பண்பாட்டு வளர்ச்சி மற்றும் சமூகச் சமத்துவம்
            </p>

            <p className="text-sm sm:text-base text-[#FFFDF7]/90 leading-relaxed">
              Kayal Achagam proudly honors the contributions of Thiruvalluvar, Devaneya Pavanar, Tyagi Immanuel Sekaran, and historical figures who stood for truth, language dignity, and social equality.
            </p>

            <div className="p-4 rounded bg-[#0B4D2C] border border-[#FFFF00]">
              <p className="font-tamil-serif text-lg font-bold text-[#FFFF00]">
                "{contactData.kural.line1} {contactData.kural.line2}"
              </p>
              <p className="text-xs text-white/80 mt-1">
                — {contactData.kural.source} · {contactData.kural.kuralNo}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="relative group overflow-hidden rounded border-2 border-[#FFFF00] bg-[#06361D]">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/immanuel.jpg"
                  alt="Tyagi Immanuel Sekaran"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-2 bg-[#06361D] text-center border-t border-[#FFFF00]/40">
                <div className="text-xs font-bold text-[#FFFF00] font-tamil-sans">
                  இம்மானுவேல் சேகரன்
                </div>
                <div className="text-[10px] text-white/80 font-tamil-sans font-semibold mt-0.5">
                  தமிழர் உரிமை போராளி
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded border-2 border-[#FFFF00] bg-[#06361D]">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/prabhakaran.jpg"
                  alt="Velupillai Prabhakaran"
                  fill
                  className="object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-2 bg-[#06361D] text-center border-t border-[#FFFF00]/40">
                <div className="text-xs font-bold text-[#FFFF00] font-tamil-sans">
                  வே. பிரபாகரன்
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
