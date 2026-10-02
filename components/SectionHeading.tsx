import React from "react";

interface SectionHeadingProps {
  badgeText?: string;
  title: string;
  titleTamil?: string;
  description?: string;
  centered?: boolean;
  theme?: "dark" | "light";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  titleTamil,
  description,
  centered = true,
  theme = "light",
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      {badgeText && (
        <div
          className={`inline-block text-[11px] font-bold tracking-[0.25em] uppercase px-3 py-1 mb-3 rounded-sm border ${
            isDark
              ? "bg-[#C91818]/20 border-[#FFFF01] text-[#FFFF01]"
              : "bg-[#0B4D2C]/10 border-[#0B4D2C]/30 text-[#0B4D2C]"
          }`}
        >
          {badgeText}
        </div>
      )}

      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
          isDark ? "text-white" : "text-[#0B4D2C]"
        }`}
      >
        {title}
      </h2>

      {titleTamil && (
        <div
          className={`font-tamil-serif text-xl sm:text-2xl mt-2 font-bold ${
            isDark ? "text-[#FFFF01]" : "text-[#C91818]"
          }`}
        >
          {titleTamil}
        </div>
      )}

      <div
        className={`h-1 w-24 my-4 bg-gradient-to-r from-[#C91818] via-[#FFFF01] to-[#0B4D2C] ${
          centered ? "mx-auto" : "mr-auto"
        }`}
      />

      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${isDark ? "text-[#FFFDF7]/80" : "text-gray-700"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
