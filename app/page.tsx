import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { PublicationCard } from "@/components/PublicationCard";
import { ActivityCard } from "@/components/ActivityCard";
import { servicesData } from "@/data/services";
import { productsData } from "@/data/products";
import { publicationsData } from "@/data/publications";
import { activitiesData } from "@/data/activities";
import { contactData } from "@/data/contact";
import { ArrowRight, Phone, MessageSquare, Mail, Printer, BookOpen, Sparkles, MapPin } from "lucide-react";

export default function HomePage() {
  const featuredServices = servicesData.filter((s) => s.featuredOnHome).slice(0, 3);
  const featuredProducts = productsData.slice(0, 4);
  const featuredPublications = publicationsData.slice(0, 2);
  const featuredActivities = activitiesData.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ABOUT INTRODUCTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E0A911]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#C91818] via-[#E0A911] to-[#0B4D2C] rounded-lg transform -rotate-1" />
            <div className="relative aspect-[4/3] rounded bg-[#06361D] overflow-hidden border-2 border-[#E0A911] shadow-2xl">
              <Image
                src="/images/thiruvalluvar.jpg"
                alt="Kayal Achagam Heritage & Documentation"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 bg-[#06361D]/90 text-[#E0A911] text-xs font-bold font-tamil-serif px-3 py-1 rounded border border-[#E0A911]">
                திருவள்ளுவர் · தமிழ்ப் பாரம்பரியம்
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="inline-block text-[11px] font-bold tracking-[0.25em] text-[#C91818] uppercase bg-[#C91818]/10 px-3 py-1 rounded border border-[#C91818]/30">
              Organisation Profile
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B4D2C] leading-tight">
              About Kayal Achagam Centre
            </h2>

            <p className="font-tamil-serif font-bold text-xl text-[#C91818]">
              காயல் அச்சகம் — பரமக்குடி சமூக சேவை மையம்
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
              Kayal Achagam Centre is an established organisation and official service hub located in Paramakudi, Tamil Nadu. Dedicated to public welfare, civic accessibility, and document processing, Kayal Achagam provides comprehensive printing services, digital e-services, online fee payments, and Tamil publication distribution to local citizens and institutions.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#0B4D2C] hover:bg-[#C91818] text-white font-bold text-xs px-5 py-3 rounded border border-[#E0A911] uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#E0A911]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY SERVICES PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6E9] border-b border-[#E0A911]/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badgeText="Core Offerings"
            title="KEY SERVICES & E-SERVICES"
            titleTamil="முக்கிய சேவைகள் & இணையச் சேவைகள்"
            description="Verified printing, document creation, government portal assistance, and digital payment solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#C91818] hover:bg-[#991B1B] text-white font-bold text-xs px-6 py-3.5 rounded border border-[#E0A911] uppercase tracking-wider shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span>View All Available Services</span>
              <ArrowRight className="w-4 h-4 text-[#E0A911]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E0A911]/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badgeText="Merchandise & Publications"
            title="FEATURED PRODUCTS"
            titleTamil="சிறப்புப் பொருள்கள் & வெளியீடுகள்"
            description="Authentic organisation literature, printed apparel, cloth bags, pin badges, and heritage flags."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services#products"
              className="inline-flex items-center gap-2 bg-[#0B4D2C] hover:bg-[#06361D] text-white font-bold text-xs px-6 py-3.5 rounded border border-[#E0A911] uppercase tracking-wider shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span>Explore Full Catalogue</span>
              <Printer className="w-4 h-4 text-[#E0A911]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TAMIL HERITAGE FEATURE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#06361D] text-white kolam-pattern relative overflow-hidden border-y-4 border-[#E0A911]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block text-[11px] font-bold tracking-[0.3em] text-[#E0A911] uppercase bg-[#C91818] px-4 py-1 rounded border border-[#E0A911] mb-6">
            TAMIL HERITAGE · தமிழ்ப் பாரம்பரியம்
          </div>

          <blockquote className="font-tamil-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF5D0] leading-relaxed whitespace-pre-line mb-6">
            "{contactData.kural.line1}
            {"\n"}
            {contactData.kural.line2}"
          </blockquote>

          <div className="h-1 w-32 bg-[#E0A911] mx-auto my-6" />

          <p className="text-sm sm:text-base text-[#FAF6E9]/90 font-medium max-w-xl mx-auto italic mb-3">
            "{contactData.kural.translation}"
          </p>

          <p className="text-xs tracking-[0.25em] text-[#E0A911] font-bold uppercase">
            — {contactData.kural.source} · {contactData.kural.kuralNo}
          </p>
        </div>
      </section>

      {/* 6. PUBLICATIONS SECTION PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6E9] border-b border-[#E0A911]/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badgeText="Literature Archives"
            title="FEATURED PUBLICATIONS"
            titleTamil="நூல் வெளியீடுகள்"
            description="Official books, cultural works, and social essay compilations preserved by Kayal Achagam."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPublications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services#publications"
              className="inline-flex items-center gap-2 bg-[#0B4D2C] hover:bg-[#C91818] text-white font-bold text-xs px-6 py-3.5 rounded border border-[#E0A911] uppercase tracking-wider shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span>View All Publications</span>
              <BookOpen className="w-4 h-4 text-[#E0A911]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. ACTIVITIES PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E0A911]/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badgeText="Community & Events"
            title="ACTIVITIES PREVIEW"
            titleTamil="நிகழ்வுகள் & சமூகச் செயல்பாடுகள்"
            description="Highlighting recent book launch ceremonies, cultural commemorations, and community e-service drives."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about#activities"
              className="inline-flex items-center gap-2 bg-[#C91818] hover:bg-[#991B1B] text-white font-bold text-xs px-6 py-3.5 rounded border border-[#E0A911] uppercase tracking-wider shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span>View All Activities →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CONTACT CTA BAR */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#06361D] via-[#0B4D2C] to-[#C91818] text-white border-t-4 border-[#E0A911]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#E0A911] uppercase border border-[#E0A911] px-4 py-1 rounded">
            GET IN TOUCH WITH KAYAL ACHAGAM
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#FAF6E9]">
            Need Document Printing or Official Assistance?
          </h2>

          <p className="font-tamil-serif font-bold text-xl text-[#E0A911]">
            அச்சு, விண்ணப்பம் மற்றும் மின் சேவைகளுக்கு உடனே தொடர்பு கொள்ளுங்கள்
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href={`tel:${contactData.phone}`}
              className="inline-flex items-center gap-2 bg-[#C91818] hover:bg-[#991B1B] text-white font-bold text-xs px-6 py-3.5 rounded border border-[#E0A911] uppercase tracking-wider shadow-xl transition-transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#E0A911]" />
              <span>Call: {contactData.phone}</span>
            </a>

            <a
              href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#06361D] hover:bg-emerald-800 text-white font-bold text-xs px-6 py-3.5 rounded border border-[#E0A911] uppercase tracking-wider shadow-xl transition-transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-[#E0A911]" />
              <span>WhatsApp Message</span>
            </a>

            <a
              href={`mailto:${contactData.email}`}
              className="inline-flex items-center gap-2 bg-[#E0A911] hover:bg-amber-400 text-[#06361D] font-bold text-xs px-6 py-3.5 rounded border border-[#06361D] uppercase tracking-wider shadow-xl transition-transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-[#06361D]" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
