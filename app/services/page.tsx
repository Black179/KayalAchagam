"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { PublicationCard } from "@/components/PublicationCard";
import { servicesData } from "@/data/services";
import { productsData } from "@/data/products";
import { publicationsData } from "@/data/publications";
import { Printer, Globe, CreditCard, Filter, BookOpen } from "lucide-react";

export default function ServicesPage() {
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>("All");

  const serviceCategories = [
    "Printing & Document Services",
    "E-Services",
    "Online Payment Services",
  ] as const;

  const productFilterCategories = ["All", "Books", "Cloth Bags", "Badges", "Flags", "Clothing", "Frames"];

  const filteredProducts = selectedProductCategory === "All"
    ? productsData
    : productsData.filter((p) => p.category === selectedProductCategory);

  return (
    <div className="space-y-0">
      {/* PAGE HEADER BANNER */}
      <div className="bg-[#0B4D2C] text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#E0A911] kolam-pattern">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#E0A911] uppercase border border-[#E0A911] px-3.5 py-1 rounded mb-3 bg-[#06361D]">
            Official Catalogue & Offerings
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#FAF6E9]">
            SERVICES & PRODUCTS
          </h1>
          <p className="font-tamil-serif font-bold text-xl text-[#E0A911] mt-2">
            சேவைகள், பொருள்கள் & நூல் வெளியீடுகள்
          </p>
        </div>
      </div>

      {/* MAJOR AREA 1: SERVICES BY CATEGORY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E0A911]/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            badgeText="Document & Digital Solutions"
            title="OUR SERVICES"
            titleTamil="அச்சகம் & அரசு சேவைப் பட்டியல்"
            description="Categorized services provided at Kayal Achagam Centre in Paramakudi."
          />

          {serviceCategories.map((groupName) => {
            const groupServices = servicesData.filter((s) => s.categoryGroup === groupName);
            return (
              <div key={groupName} className="space-y-6 pt-4">
                <div className="flex items-center gap-3 border-b-2 border-[#C91818] pb-3">
                  <span className="w-4 h-4 rounded-full bg-[#E0A911]" />
                  <h3 className="font-display font-extrabold text-2xl text-[#0B4D2C]">
                    {groupName}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MAJOR AREA 2: PRODUCTS CATALOGUE */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6E9] border-b border-[#E0A911]/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            badgeText="Organisation Merchandise"
            title="PRODUCTS CATALOGUE"
            titleTamil="அமைப்பின் பொருள்கள் அட்டவணை"
            description="High-quality Tamil literature, printed cloth bags, badges, flags, and framed wall portraits."
          />

          {/* Product Category Filter Chips */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="text-xs font-bold text-[#06361D] flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#C91818]" /> Filter:
            </span>
            {productFilterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedProductCategory(cat)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm border transition-all ${
                  selectedProductCategory === cat
                    ? "bg-[#C91818] text-white border-[#E0A911] shadow-md scale-105"
                    : "bg-white text-[#06361D] border-[#E0A911]/60 hover:bg-[#E0A911]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* MAJOR AREA 3: PUBLICATIONS */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E0A911]/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            badgeText="Official Literature"
            title="PUBLICATIONS & BOOKS"
            titleTamil="நூல் வெளியீடுகள்"
            description="Explore verified editorial books, Thirukkural commentary, and cultural essays."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publicationsData.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
