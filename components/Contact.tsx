"use client";

import React, { useState } from "react";
import { contactData } from "@/data/contact";
import { Phone, MessageSquare, Mail, MapPin, Navigation, Send, CheckCircle2 } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Printing & Document Services",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Kayal Achagam,\nName: ${formData.name}\nPhone: ${formData.phone}\nService/Product: ${formData.service}\nMessage: ${formData.message}`;
    const waUrl = `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Contact Details & Official Badges */}
      <div className="lg:col-span-6 bg-[#06361D] text-white p-8 sm:p-10 rounded-lg border-2 border-[#E0A911] shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#C91818]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="inline-block text-[10px] font-bold tracking-[0.25em] text-[#E0A911] uppercase border border-[#E0A911] px-3 py-1 rounded mb-4">
          Verified Official Contact
        </div>

        <h3 className="font-display text-3xl sm:text-4xl text-[#E0A911] font-extrabold mb-2">
          GET IN TOUCH
        </h3>
        <p className="font-tamil-serif text-lg text-[#FAF6E9] mb-6 font-bold">
          {contactData.organisationName} — பரமக்குடி
        </p>

        <div className="space-y-6 text-sm">
          {/* Address Box */}
          <div className="flex items-start gap-4 p-4 rounded bg-[#0B4D2C] border border-[#E0A911]/40">
            <div className="p-2.5 rounded bg-[#C91818] text-white flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#E0A911]" />
            </div>
            <div>
              <div className="text-xs text-[#E0A911] font-bold uppercase tracking-wider">Address</div>
              <div className="font-tamil-serif font-bold text-base text-[#FFF5D0] mt-0.5">
                {contactData.addressTamil}
              </div>
              <div className="text-xs text-white/80 mt-1">
                {contactData.address}
              </div>
            </div>
          </div>

          {/* Phones Box */}
          <div className="flex items-start gap-4 p-4 rounded bg-[#0B4D2C] border border-[#E0A911]/40">
            <div className="p-2.5 rounded bg-[#C91818] text-white flex-shrink-0">
              <Phone className="w-5 h-5 text-[#E0A911]" />
            </div>
            <div>
              <div className="text-xs text-[#E0A911] font-bold uppercase tracking-wider">Phone Numbers</div>
              <div className="text-base font-bold text-white mt-0.5">
                <a href={`tel:${contactData.phone}`} className="hover:text-[#E0A911] transition-colors">
                  {contactData.phone}
                </a>
                <span className="mx-2 text-white/40">|</span>
                <a href={`tel:${contactData.alternatePhone}`} className="hover:text-[#E0A911] transition-colors">
                  {contactData.alternatePhone}
                </a>
              </div>
            </div>
          </div>

          {/* Email Box */}
          <div className="flex items-start gap-4 p-4 rounded bg-[#0B4D2C] border border-[#E0A911]/40">
            <div className="p-2.5 rounded bg-[#C91818] text-white flex-shrink-0">
              <Mail className="w-5 h-5 text-[#E0A911]" />
            </div>
            <div>
              <div className="text-xs text-[#E0A911] font-bold uppercase tracking-wider">Email Address</div>
              <a href={`mailto:${contactData.email}`} className="text-base font-bold text-white hover:text-[#E0A911] transition-colors">
                {contactData.email}
              </a>
            </div>
          </div>
        </div>

        {/* Quick Action Button Bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <a
            href={`tel:${contactData.phone}`}
            className="flex flex-col items-center justify-center p-3 rounded bg-[#C91818] hover:bg-[#991B1B] text-white font-bold text-xs uppercase tracking-wider border border-[#E0A911] transition-transform hover:-translate-y-0.5 text-center"
          >
            <Phone className="w-4 h-4 text-[#E0A911] mb-1" />
            <span>Call</span>
          </a>

          <a
            href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded bg-[#0B4D2C] hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider border border-[#E0A911] transition-transform hover:-translate-y-0.5 text-center"
          >
            <MessageSquare className="w-4 h-4 text-[#E0A911] mb-1" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`mailto:${contactData.email}`}
            className="flex flex-col items-center justify-center p-3 rounded bg-[#C91818] hover:bg-[#991B1B] text-white font-bold text-xs uppercase tracking-wider border border-[#E0A911] transition-transform hover:-translate-y-0.5 text-center"
          >
            <Mail className="w-4 h-4 text-[#E0A911] mb-1" />
            <span>Email</span>
          </a>

          <a
            href={contactData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded bg-[#E0A911] hover:bg-amber-400 text-[#06361D] font-bold text-xs uppercase tracking-wider transition-transform hover:-translate-y-0.5 text-center"
          >
            <Navigation className="w-4 h-4 text-[#06361D] mb-1" />
            <span>Directions</span>
          </a>
        </div>
      </div>

      {/* Interactive Enquiry Form */}
      <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-lg border-2 border-[#E0A911] shadow-xl">
        <h3 className="font-display text-2xl sm:text-3xl text-[#0B4D2C] font-extrabold mb-1">
          Direct Enquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-6">
          Submit your query to automatically launch a formatted WhatsApp message to Kayal Achagam.
        </p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-300 rounded p-6 text-center text-emerald-800">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="font-bold text-lg">Enquiry Redirected to WhatsApp!</h4>
            <p className="text-xs mt-1">Thank you for contacting Kayal Achagam. We will assist you promptly.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs font-bold text-[#0B4D2C] underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded border border-gray-300 focus:border-[#0B4D2C] focus:ring-1 focus:ring-[#0B4D2C] text-sm text-gray-900 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Contact Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter 10-digit mobile number"
                className="w-full px-4 py-2.5 rounded border border-gray-300 focus:border-[#0B4D2C] focus:ring-1 focus:ring-[#0B4D2C] text-sm text-gray-900 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Select Service or Product Category
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 rounded border border-gray-300 focus:border-[#0B4D2C] focus:ring-1 focus:ring-[#0B4D2C] text-sm text-gray-900 outline-none bg-white"
              >
                <option value="Printing & Document Services">Printing & Document Services (Xerox/Binding/Scanning)</option>
                <option value="E-Services & Applications">Online Applications & E-Services (Exam/PAN/Passport)</option>
                <option value="Fees & Online Payments">Fees & Online Payments (College/EB Bills)</option>
                <option value="Ticket Booking">Bus & Train Ticket Booking</option>
                <option value="Books & Publications">Books & Publications</option>
                <option value="Merchandise & Printing">Custom T-Shirt / Flag / Tote Bag Printing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Your Requirement Details
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your document, product, or service enquiry..."
                className="w-full px-4 py-2.5 rounded border border-gray-300 focus:border-[#0B4D2C] focus:ring-1 focus:ring-[#0B4D2C] text-sm text-gray-900 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#C91818] hover:bg-[#991B1B] text-white font-bold text-xs py-3.5 px-6 rounded border border-[#E0A911] uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <Send className="w-4 h-4 text-[#E0A911]" />
              <span>Send Enquiry via WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
