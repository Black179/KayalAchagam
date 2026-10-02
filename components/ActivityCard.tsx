"use client";

import React from "react";
import Image from "next/image";
import { Activity } from "@/data/activities";
import { Calendar, MapPin, Tag } from "lucide-react";

interface ActivityCardProps {
  activity: Activity;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg border-2 border-[#FFFF01]/70 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1">
      {/* Activity Media */}
      <div className="relative aspect-[16/10] bg-[#06361D] overflow-hidden border-b border-[#FFFF01]/40">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-[#C91818] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-[#FFFF01] shadow">
          {activity.category}
        </div>
      </div>

      {/* Activity Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#0B4D2C] group-hover:text-[#C91818] transition-colors leading-snug">
            {activity.title}
          </h3>

          {activity.titleTamil && (
            <p className="font-tamil-serif font-bold text-sm text-[#C91818] mt-1 mb-3">
              {activity.titleTamil}
            </p>
          )}

          <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-3 font-semibold">
            {activity.date && (
              <span className="flex items-center gap-1 text-[#0B4D2C]">
                <Calendar className="w-3.5 h-3.5 text-[#C91818]" />
                <span>{activity.date}</span>
              </span>
            )}
            {activity.location && (
              <span className="flex items-center gap-1 text-[#0B4D2C]">
                <MapPin className="w-3.5 h-3.5 text-[#C91818]" />
                <span>{activity.location}</span>
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            {activity.description}
          </p>
        </div>
      </div>
    </div>
  );
};
