"use client";

import Button from "@/app/components/ui/Button";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroSlide {
  image: StaticImageData | string;
  title: string;
  description: string;
}

export interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "outline" | "ghost";
}

export interface HeroSectionProps {
  badgeText?: string;
  badgeIcon?: StaticImageData | string ;
  heading?: string;
  headingHighlight?: string;
  subtext?: string;
  buttons?: HeroButton[];
  slides?: HeroSlide[];
  slideInterval?: number;
  patternImage?: StaticImageData | string;
  accentColor?: string;
  bgColor?: string;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_BUTTONS: HeroButton[] = [
  { label: "Explore", href: "/services", variant: "primary" },
  { label: "Contact", href: "/contact", variant: "outline" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection({
  badgeText = "Trusted Security Partner",
  badgeIcon,
  heading = "Highly Trained &\nExperienced",
  headingHighlight = "Security Services",
  subtext = "Providing professional security solutions to protect people, property, and businesses with trained and reliable security personnel.",
  buttons = DEFAULT_BUTTONS,
  slides = [],
  slideInterval = 3000,
  patternImage,
  accentColor = "#F26A23",
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      slideInterval
    );
    return () => clearInterval(id);
  }, [slides.length, slideInterval]);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden pt-24 px-4 sm:px-8 lg:px-40">

      {/* Decorative pattern */}
      {patternImage && (
        <Image
          src={patternImage}
          alt=""
          aria-hidden
          className="absolute top-0  left-0 w-[300px] lg:w-[420px] opacity-90 pointer-events-none select-none"
        />
      )}

      {/* Main grid */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[120px] py-8 sm:py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-5 items-center">

          {/* ── Left: copy ── */}
          <div className="relative z-10">

            {/* Badge */}
            {badgeText && (
              <div className="flex items-center gap-2">
                {badgeIcon && (
                  <Image src={badgeIcon} alt="" aria-hidden className="w-5 h-5" />
                )}
                <p
                  className="uppercase tracking-wide text-sm lg:text-[18px] font-semibold"
                  style={{ color: accentColor }}
                >
                  {badgeText}
                </p>
              </div>
            )}

            {/* Heading */}
           <h1 className="mt-4 text-[36px] sm:text-[42px] lg:text-[46px] font-semibold text-black ">
  {heading}{" "}
  {headingHighlight && (
    <span style={{ color: accentColor }}>
      {headingHighlight}
    </span>
  )}
</h1>

            {/* Subtext */}
            {subtext && (
              <p className="mt-2 max-w-[620px] text-[#979797] text-[16px] leading-8 font-normal">
                {subtext}
              </p>
            )}

            {/* Buttons */}
            {buttons.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-5">
                {buttons.map((btn) => (
                  <Button
                    key={btn.href}
                    label={btn.label}
                    href={btn.href}
                    variant={btn.variant}
                    color={accentColor}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ── Right: image slider ── */}
          {slides.length > 0 && (
            <div className="relative">
              <div className="relative w-full h-[260px] sm:h-[380px] lg:h-[500px] overflow-hidden rounded-[36px]">

                {/* Slides */}
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={
                      typeof slide.image === "string"
                        ? slide.image
                        : slide.image.src
                    }
                    alt={slide.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Slide copy */}
                {activeSlide && (
                  <div className="absolute bottom-10 left-10 text-white z-10">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{activeSlide.title}</h3>
                    <p className="mt-4 max-w-[600px] text-base lg:text-lg text-white/90 leading-8">
                      {activeSlide.description}
                    </p>
                  </div>
                )}

                {/* Dot indicators */}
                <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "w-10 bg-white"
                          : "w-3 bg-white/50"
                      }`}
                    />
                  ))}
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}