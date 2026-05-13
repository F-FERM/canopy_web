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
  badgeIcon?: StaticImageData | string;
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
      slideInterval,
    );
    return () => clearInterval(id);
  }, [slides.length, slideInterval]);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20 xl:px-60 py-12 sm:py-16 lg:py-20 mx-auto">
      {/* Decorative pattern */}
      {patternImage && (
        <Image
          src={patternImage}
          alt=""
          aria-hidden
          className="absolute top-0 left-0 w-[180px] sm:w-[240px] md:w-[300px] lg:w-[420px] opacity-90 pointer-events-none select-none"
        />
      )}

      {/* Main grid */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-[10px] py-4 sm:py-8 md:py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 sm:gap-8 lg:gap-5 items-center">
          {/* ── Left: copy ── */}
          <div className="relative z-10">
            {/* Badge */}
            {badgeText && (
              <div className="flex items-center gap-2">
                {badgeIcon && (
                  <Image
                    src={badgeIcon}
                    alt=""
                    aria-hidden
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                )}
                <p
                  className="uppercase tracking-wide text-xs sm:text-sm md:text-base lg:text-[18px] font-semibold"
                  style={{ color: accentColor }}
                >
                  {badgeText}
                </p>
              </div>
            )}

            {/* Heading */}
            <h1 className="mt-3 sm:mt-4 text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold text-black leading-tight">
              {heading}{" "}
              {headingHighlight && (
                <span style={{ color: accentColor }}>{headingHighlight}</span>
              )}
            </h1>

            {/* Subtext */}
            {subtext && (
              <p className="mt-3 sm:mt-4 max-w-[620px] text-[#979797] text-[14px] sm:text-[15px] md:text-[16px] leading-6 sm:leading-7 md:leading-8 font-normal">
                {subtext}
              </p>
            )}

            {/* Buttons */}
            {buttons.length > 0 && (
              <div className="mt-5 sm:mt-6 md:mt-7 flex flex-wrap gap-3 sm:gap-4 md:gap-5">
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
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[460px] xl:h-[500px] overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[36px]">
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
                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-4 sm:left-6 md:left-8 lg:left-10 text-white z-10 pr-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
                      {activeSlide.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 md:mt-4 max-w-[600px] text-sm sm:text-base lg:text-lg text-white/90 leading-6 sm:leading-7 md:leading-8">
                      {activeSlide.description}
                    </p>
                  </div>
                )}

                {/* Dot indicators */}
                <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 right-4 sm:right-5 md:right-6 flex gap-1.5 sm:gap-2 z-10">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "w-8 sm:w-9 md:w-10 bg-white"
                          : "w-2 sm:w-2.5 md:w-3 bg-white/50"
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