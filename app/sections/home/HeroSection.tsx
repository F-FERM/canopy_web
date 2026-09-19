"use client";

import {
  ListHomeHeroSection,
  HeroSlide,
  HeroButton,
} from "@/Interfaces/HomeHero";
import { listHomeHeroApi } from "@/app/api/web/Home";
import Button from "@/app/components/ui/Button";
import Image, { StaticImageData } from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroSectionProps {
  badgeText?: string;
  badgeIcon?: StaticImageData | string;
  heading?: string;
  headingHighlight?: string;
  subtext?: string;
  buttons?: HeroButton[];
  slides?: (
    | HeroSlide
    | {
        image: StaticImageData | string;
        title: string;
        description: string;
        isActive?: boolean;
      }
  )[];
  slideInterval?: number;
  patternImage?: StaticImageData | string;
  accentColor?: string;
  bgColor?: string;
}

// ─── Layout system ────────────────────────────────────────────────────────────
//
// GOAL: on every screen the hero fills the first screen, so the trust bar and
// the anniversary badge are visible without scrolling (as far as physically
// possible on very small screens).
//
//   hero min-height = 100svh − header − bottom gap
//
// Three CSS variables drive the layout. They are MEASURED AT RUNTIME by
// `useHeroMetrics` below, so you do not have to guess any sizes:
//
//   --header-h        real height of everything above the hero (your header)
//   --bar-h           real height of the trust bar
//   --anniv-overflow  how far the anniversary badge sticks UP above the bar
//                     (badge height − bar height). Space for it is reserved
//                     at the bottom of the content area, so the badge never
//                     covers the buttons or the slider.
//
// The values below are only FALLBACKS used for the server render / first
// paint, before the measurement runs.
//
//   --bottom-gap      space left under the trust bar so it isn't glued to the
//                     bottom edge of the screen. Raise it to lift the
//                     anniversary section further up.
//
const LAYOUT_VARS = [
  "[--header-h:72px]",
  "sm:[--header-h:80px]",
  "lg:[--header-h:120px]",

  "[--anniv-overflow:0px]",
  "sm:[--anniv-overflow:60px]",
  "lg:[--anniv-overflow:110px]",
  "xl:[--anniv-overflow:130px]",
  "2xl:[--anniv-overflow:170px]",

  "[--bar-h:0px]",
  "lg:[--bar-h:105px]",
  "xl:[--bar-h:125px]",
  "2xl:[--bar-h:140px]",

  "[--bottom-gap:0px]",
  "sm:[--bottom-gap:16px]",
  "lg:[--bottom-gap:clamp(12px,3.5svh,32px)]",

  // Badge width. Below lg: fixed formula. From lg up: proportional to the
  // screen width (20.4vw → 388px @1906, 261px @1280) so a 1280px laptop gets
  // the same proportions as a big desktop. Always capped by screen height.
  "[--anniv-w:clamp(185px,min(13vw_+_140px,45svh),400px)]",
  "lg:[--anniv-w:clamp(185px,min(20.4vw,45svh),400px)]",
].join(" ");

// Section fills the first screen (below the header) and stacks: content → bar.
// If the content is taller than the screen it simply grows (no clipping).
const SECTION_SHELL = `relative flex w-full flex-col min-h-[calc(100svh_-_var(--header-h)_-_var(--bottom-gap))] ${LAYOUT_VARS}`;

// Content area takes all leftover height and vertically centres the hero.
// • bottom padding on sm+ reserves room for the anniversary badge
// • side padding is fluid on xl+ (~100px @1280 → 240px @1906+) instead of a
//   fixed 240px, so 1280–1600px laptops get the same wide desktop layout
const CONTENT_WRAP =
  "flex flex-1 items-center px-4 pt-4 pb-4 sm:px-6 sm:pt-6 sm:pb-[var(--anniv-overflow)] md:px-10 lg:px-16 lg:pt-[clamp(8px,3.5svh,32px)] xl:px-[clamp(96px,calc(22.4vw_-_186px),240px)]";

// Slider height scales with the screen HEIGHT on every breakpoint, so it also
// behaves on landscape phones, tablets and short laptops.
// On lg+ it is derived from the measured header / bar / badge space.
const SLIDER_HEIGHT =
  "h-[clamp(160px,26svh,220px)] sm:h-[clamp(200px,30svh,260px)] md:h-[clamp(240px,34svh,340px)] lg:h-[clamp(280px,calc(100svh_-_var(--header-h)_-_var(--bar-h)_-_var(--anniv-overflow)_-_var(--bottom-gap)_-_56px),520px)]";

// ─── Runtime measurement ──────────────────────────────────────────────────────

type HeroMetrics = { header?: number; bar?: number; overflow?: number };

function useHeroMetrics(ready: boolean) {
  const sectionRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const [m, setM] = useState<HeroMetrics>({});

  useEffect(() => {
    let active = true;

    const measure = () => {
      if (!active) return;

      const next: HeroMetrics = {};

      // Everything above the hero (header, announcement bars, …)
      const section = sectionRef.current;
      if (section) {
        next.header = Math.max(
          0,
          Math.round(section.getBoundingClientRect().top + window.scrollY),
        );
      }

      // Trust bar + badge (only present once the real hero is rendered)
      const bar = barRef.current;
      if (bar) {
        const barH = Math.round(bar.getBoundingClientRect().height);
        next.bar = barH;

        const badgeH = Math.round(
          badgeRef.current?.getBoundingClientRect().height ?? 0,
        );
        // 0 means hidden (mobile) or image not loaded yet → keep fallback
        if (badgeH > 0) next.overflow = Math.max(0, badgeH - barH);
      }

      setM((prev) => {
        const merged = { ...prev, ...next };
        return merged.header === prev.header &&
          merged.bar === prev.bar &&
          merged.overflow === prev.overflow
          ? prev
          : merged;
      });
    };

    measure();

    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (barRef.current) ro?.observe(barRef.current);
    if (badgeRef.current) ro?.observe(badgeRef.current);

    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});

    return () => {
      active = false;
      ro?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [ready]);

  const style = {
    ...(m.header !== undefined ? { "--header-h": `${m.header}px` } : {}),
    ...(m.bar !== undefined ? { "--bar-h": `${m.bar}px` } : {}),
    ...(m.overflow !== undefined
      ? { "--anniv-overflow": `${m.overflow}px` }
      : {}),
  } as CSSProperties;

  return { sectionRef, barRef, badgeRef, style };
}

// ─── Trust bar icons ──────────────────────────────────────────────────────────

type IconProps = { className?: string };

function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3L20 6V11C20 16.2 16.5 20 12 21C7.5 20 4 16.2 4 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12L10.8 14.3L15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TeamIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.5 19C3.5 15.7 5.8 13.5 9 13.5C12.2 13.5 14.5 15.7 14.5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14.5 14.2C15.2 13.8 16 13.6 17 13.6C19.6 13.6 21 15.3 21 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CrosshairIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 17V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 12H7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 12H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function StarCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3L14.8 8.2L20.5 9L16.3 13.1L17.3 18.8L12 16.1L6.7 18.8L7.7 13.1L3.5 9L9.2 8.2L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TRUST_ITEMS: {
  title: string;
  caption: string;
  Icon: ComponentType<IconProps>;
}[] = [
  {
    title: "Licensed & Certified",
    caption: "SIRA Approved Security Company",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Trained Professionals",
    caption: "Well Trained & Experienced Staff",
    Icon: TeamIcon,
  },
  {
    title: "24/7 Protection",
    caption: "Round The Clock Security Service",
    Icon: CrosshairIcon,
  },
  {
    title: "Trusted By Clients",
    caption: "Delivering Excellence Since 2016",
    Icon: StarCheckIcon,
  },
];

// ─── Skeleton ─────────────────────────────────────────────────────────────────
// Uses the same shell / wrappers / heights as the real hero so nothing jumps
// when the data arrives.

function HeroSkeleton({
  metrics,
}: {
  metrics: ReturnType<typeof useHeroMetrics>;
}) {
  return (
    <section
      ref={metrics.sectionRef}
      className={SECTION_SHELL}
      style={metrics.style}
    >
      <div className={CONTENT_WRAP}>
        <div className="mx-auto w-full max-w-[1920px]">
          <div className="grid grid-cols-1 items-center gap-5 sm:gap-6 lg:grid-cols-[2fr_3fr] xl:grid-cols-[minmax(470px,2fr)_minmax(0,3fr)] lg:gap-5">
            {/* Left: copy skeleton */}
            <div className="relative z-10 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200 sm:h-5 sm:w-5" />
                <div className="h-4 w-36 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="mt-3 space-y-2 sm:mt-4">
                <div className="h-7 w-3/4 animate-pulse rounded-lg bg-gray-200 sm:h-9 md:h-10 lg:h-12" />
                <div className="h-7 w-1/2 animate-pulse rounded-lg bg-gray-200 sm:h-9 md:h-10 lg:h-12" />
              </div>

              <div className="mt-3 space-y-2 sm:mt-4">
                <div className="h-3 w-full max-w-[520px] animate-pulse rounded bg-gray-200 sm:h-4" />
                <div className="h-3 w-5/6 max-w-[440px] animate-pulse rounded bg-gray-200 sm:h-4" />
                <div className="h-3 w-2/3 max-w-[360px] animate-pulse rounded bg-gray-200 sm:h-4" />
              </div>

              <div className="mt-5 flex flex-wrap gap-3 sm:mt-6 sm:gap-4 md:mt-7">
                <div className="h-10 w-28 animate-pulse rounded-full bg-gray-200 sm:h-11 sm:w-32" />
                <div className="h-10 w-28 animate-pulse rounded-full bg-gray-200 sm:h-11 sm:w-32" />
              </div>
            </div>

            {/* Right: image slider skeleton */}
            <div className="relative w-full">
              <div
                className={`relative w-full ${SLIDER_HEIGHT} animate-pulse overflow-hidden rounded-2xl bg-gray-200 sm:rounded-[28px] lg:rounded-[36px]`}
              >
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                <div className="absolute bottom-4 left-4 z-10 space-y-2 pr-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10">
                  <div className="h-5 w-40 animate-pulse rounded-lg bg-gray-300/60 sm:h-6 sm:w-52 md:h-8 md:w-64" />
                  <div className="h-3 w-56 animate-pulse rounded bg-gray-300/60 sm:h-4 md:w-80" />
                  <div className="h-3 w-44 animate-pulse rounded bg-gray-300/60 sm:h-4 sm:w-56 md:w-72" />
                </div>

                <div className="absolute bottom-4 right-4 z-10 flex gap-1.5 sm:bottom-5 sm:right-5 sm:gap-2 md:bottom-6 md:right-6">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-2 animate-pulse rounded-full bg-gray-300/60 sm:h-2.5 ${
                        i === 0 ? "w-7 sm:w-9 md:w-10" : "w-2 sm:w-2.5"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar skeleton */}
      <div className="relative w-full">
        <div className="h-[200px] w-full animate-pulse rounded-r-[12px] bg-gray-200 sm:h-[130px] lg:h-[105px] xl:h-[125px] 2xl:h-[140px]" />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_BUTTONS: HeroButton[] = [
  {
    label: "Explore",
    href: "/services",
    variant: "primary",
  },
  {
    label: "Contact",
    href: "/contact",
    variant: "outline",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroSection({
  badgeText: propBadgeText = "Trusted Security Partner",
  badgeIcon: propBadgeIcon,
  heading: propHeading = "Highly Trained &\nExperienced",
  headingHighlight: propHeadingHighlight = "Security Services",
  subtext:
    propSubtext = "Providing professional security solutions to protect people, property, and businesses with trained and reliable security personnel.",
  buttons: propButtons = DEFAULT_BUTTONS,
  slides: propSlides = [],
  slideInterval: propSlideInterval = 3000,
  patternImage: propPatternImage,
  accentColor: propAccentColor = "#F26A23",
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState<ListHomeHeroSection | null>(null);

  const metrics = useHeroMetrics(!loading);

  // ── Fetch API data ────────────────────────────────────────────────────────

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await listHomeHeroApi({});

        console.log(data, "herodata");

        setApiData(data?.[0] ?? null);
      } catch (error) {
        console.error("HeroSection API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // ── Merge API data with prop fallbacks ────────────────────────────────────

  const badgeText = apiData?.badgeText ?? propBadgeText;
  const badgeIcon = apiData?.badgeIcon ?? propBadgeIcon;
  const heading = apiData?.heading ?? propHeading;
  const headingHighlight = apiData?.headingHighlight ?? propHeadingHighlight;
  const subtext = apiData?.subtext ?? propSubtext;
  const buttons = apiData?.buttons ?? propButtons;

  const slides = (apiData?.slides ?? propSlides).filter(
    (s) => s.isActive !== false,
  );

  const slideInterval = apiData?.slideInterval ?? propSlideInterval;

  const patternImage = apiData?.patternImage ?? propPatternImage;

  const accentColor = apiData?.accentColor ?? propAccentColor;

  // ── Slide auto-advance ────────────────────────────────────────────────────

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(id);
  }, [slides.length, slideInterval]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  if (loading) {
    return <HeroSkeleton metrics={metrics} />;
  }

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <section
      ref={metrics.sectionRef}
      className={SECTION_SHELL}
      style={metrics.style}
    >
      {/* ============================================================
          DECORATIVE PATTERN
          (from xl up its width equals the side padding, so it ends exactly
           where the text starts and never runs under the copy)
          ============================================================ */}

      {patternImage && (
        <Image
          src={typeof patternImage === "string" ? patternImage : patternImage}
          alt=""
          aria-hidden
          width={420}
          height={420}
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            w-[70px]
            select-none
            opacity-80
            sm:w-[100px]
            md:w-[130px]
            lg:w-[150px]
            xl:w-[clamp(96px,calc(22.4vw_-_186px),240px)]
          "
        />
      )}

      {/* ============================================================
          CONTENT AREA (fills leftover height, centres the hero)
          ============================================================ */}

      <div className={CONTENT_WRAP}>
        <div className="mx-auto w-full max-w-[1920px]">
          <div className="grid grid-cols-1 items-center gap-5 sm:gap-6 lg:grid-cols-[2fr_3fr] xl:grid-cols-[minmax(470px,2fr)_minmax(0,3fr)] lg:gap-5">
            {/* ======================================================
                LEFT: HERO COPY
                ====================================================== */}

            <div className="relative z-10">
              {/* Badge */}

              {badgeText && (
                <div className="flex items-center gap-2">
                  {badgeIcon && (
                    <Image
                      src={badgeIcon}
                      alt=""
                      aria-hidden
                      width={20}
                      height={20}
                      className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5"
                    />
                  )}

                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-wide
                      sm:text-sm
                      md:text-base
                      lg:text-[18px]
                    "
                    style={{
                      color: accentColor,
                    }}
                  >
                    {badgeText}
                  </p>
                </div>
              )}

              {/* Heading — on lg+ the size follows BOTH screen width and
                  screen height, so it shrinks on narrow / short screens */}

              <h1
                className="
                  mt-3
                  whitespace-pre-line
                  text-[24px]
                  font-semibold
                  leading-tight
                  text-black
                  sm:mt-4
                  sm:text-[30px]
                  md:text-[36px]
                  lg:mt-[clamp(8px,1.75svh,16px)]
                  lg:text-[length:clamp(28px,min(5.2svh,3.6vw),42px)]
                  xl:text-[length:clamp(30px,min(5.2svh,3.4vw),46px)]
                "
              >
                {heading}{" "}
                {headingHighlight && (
                  <span
                    style={{
                      color: accentColor,
                    }}
                  >
                    {headingHighlight}
                  </span>
                )}
              </h1>

              {/* Subtext */}

              {subtext && (
                <p
                  className="
                    mt-3
                    max-w-full
                    text-[13px]
                    font-normal
                    leading-6
                    text-[#979797]
                    sm:mt-4
                    sm:max-w-[480px]
                    sm:text-[14px]
                    sm:leading-7
                    md:max-w-[560px]
                    md:text-[15px]
                    md:leading-8
                    lg:mt-[clamp(8px,1.75svh,16px)]
                    lg:max-w-[620px]
                    lg:text-[16px]
                    lg:leading-[clamp(24px,3.6svh,32px)]
                  "
                >
                  {subtext}
                </p>
              )}

              {/* Buttons */}

              {buttons.length > 0 && (
                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-3
                    sm:mt-6
                    sm:gap-4
                    md:mt-7
                    md:gap-5
                    lg:mt-[clamp(14px,3.07svh,28px)]
                  "
                >
                  {buttons.map((btn) => (
                    <Button
                      key={btn.href}
                      label={btn.label}
                      href={btn.href}
                      variant={btn.variant as "primary" | "outline" | "ghost"}
                      color={accentColor}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* ======================================================
                RIGHT: IMAGE SLIDER
                ====================================================== */}

            {slides.length > 0 && (
              <div className="relative w-full lg:mt-0">
                <div
                  className={`
                    relative
                    w-full
                    ${SLIDER_HEIGHT}
                    overflow-hidden
                    rounded-2xl
                    sm:rounded-[28px]
                    lg:rounded-[36px]
                  `}
                >
                  {/* Slides */}

                  {slides.map((slide, index) => (
                    <img
                      key={index}
                      src={
                        typeof slide.image === "string"
                          ? slide.image
                          : (slide.image as StaticImageData).src
                      }
                      alt={slide.title}
                      className={`
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-opacity
                        duration-1000
                        ${currentSlide === index ? "opacity-100" : "opacity-0"}
                      `}
                    />
                  ))}

                  {/* Gradient overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Slide copy */}

                  {activeSlide && (
                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        z-10
                        pr-4
                        text-white
                        sm:bottom-6
                        sm:left-6
                        sm:pr-6
                        md:bottom-8
                        md:left-8
                        lg:bottom-10
                        lg:left-10
                      "
                    >
                      <h3
                        className="
                          line-clamp-2
                          text-base
                          font-semibold
                          leading-tight
                          sm:text-lg
                          md:text-2xl
                          lg:text-3xl
                          xl:text-4xl
                        "
                      >
                        {activeSlide.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          line-clamp-2
                          max-w-[280px]
                          text-xs
                          leading-5
                          text-white/90
                          sm:mt-2
                          sm:line-clamp-3
                          sm:max-w-[420px]
                          sm:text-sm
                          sm:leading-6
                          md:mt-3
                          md:max-w-[520px]
                          md:text-base
                          md:leading-7
                          lg:max-w-[600px]
                          lg:text-lg
                        "
                      >
                        {activeSlide.description}
                      </p>
                    </div>
                  )}

                  {/* Dot indicators */}

                  <div
                    className="
                      absolute
                      bottom-3
                      right-3
                      z-10
                      flex
                      gap-1.5
                      sm:bottom-5
                      sm:right-5
                      sm:gap-2
                      md:bottom-6
                      md:right-6
                    "
                  >
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`
                          h-1.5
                          rounded-full
                          transition-all
                          duration-300
                          sm:h-2
                          md:h-3
                          ${
                            currentSlide === index
                              ? "w-6 bg-white sm:w-8 md:w-10"
                              : "w-1.5 bg-white/50 sm:w-2 md:w-3"
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ============================================================
          TRUST BAR + ANNIVERSARY
          (sits at the bottom of the first screen — the content area above
           reserves space for the badge, measured at runtime)
          ============================================================ */}

      <div ref={metrics.barRef} className="relative w-full overflow-visible">
        <div
          className="
            relative
            z-10
            grid
            w-full
            grid-cols-[3fr_2fr]
            items-center
            gap-1.5
            overflow-hidden
            rounded-r-[12px]
            bg-[#7F220E]
            px-4
            py-4

            sm:block
            sm:h-auto
            sm:gap-0
            sm:py-3
            sm:pl-[calc(var(--anniv-w)_+_25px)]
            sm:pr-3
            md:pr-4
            lg:h-[105px]
            lg:py-0
            xl:h-[125px]
            xl:pr-6
            2xl:h-[140px]
            2xl:pr-8
          "
        >
          {/* --------------------------------------------------------
              MOBILE-ONLY: logo + caption — LEFT column
              -------------------------------------------------------- */}
          <div className="flex flex-col items-center text-center sm:hidden">
            <img
              src="/images/home/anniversarylogo.png"
              alt="10 Years Logo"
              className="block h-auto w-[120px] max-w-full object-contain"
            />
            <p className="text-[15px] font-bold leading-snug text-white">
              A Decade Trust And Protection
            </p>
            <p className="mt-1 text-[11px] leading-snug text-white/70">
              Thank You To Our Clients, Partners And Team For being Part Of Our
              Journey
            </p>
          </div>

          {/* --------------------------------------------------------
              MOBILE-ONLY: icon cards — RIGHT column
              -------------------------------------------------------- */}
          <div className="flex flex-col items-center gap-2 sm:hidden">
            {TRUST_ITEMS.map(({ title, Icon }) => (
              <div
                key={title}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] border border-white/15 bg-white/[0.025]"
              >
                <Icon className="h-[26px] w-[26px] text-[#F26A23]" />
              </div>
            ))}
          </div>

          {/* ============================================================
              TRUST ITEMS — sm+ only: full cards (icon + text)
              ============================================================ */}
          <div
            className="
              hidden
              sm:grid
              sm:h-full
              sm:w-full
              sm:grid-cols-2
              sm:gap-2
              md:grid-cols-2
              md:gap-2
              lg:grid-cols-4
              lg:gap-0
            "
          >
            {TRUST_ITEMS.map(({ title, caption, Icon }, i) => {
              const isLast = i === TRUST_ITEMS.length - 1;

              return (
                <div
                  key={title}
                  className={`
                    flex min-w-0 items-center
                    rounded-[5px] border border-white/15 bg-white/[0.025]
                    px-2.5 py-2.5
                    lg:rounded-none lg:border-0 lg:px-4 lg:py-0
                    ${isLast ? "" : "lg:border-r lg:border-white/25"}
                    xl:px-5 2xl:px-6
                  `}
                >
                  <div className="mr-2.5 flex shrink-0 items-center justify-center text-[#F26A23] md:mr-2.5 lg:mr-3 xl:mr-3.5">
                    <Icon
                      className="
                        h-[22px] w-[22px]
                        md:h-[23px] md:w-[23px]
                        lg:h-[25px] lg:w-[25px]
                        xl:h-[27px] xl:w-[27px]
                      "
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className="
                        truncate whitespace-nowrap font-semibold leading-[1.15] text-white
                        text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]
                      "
                    >
                      {title}
                    </h3>
                    <p
                      className="
                        mt-[4px] truncate whitespace-nowrap font-normal leading-none text-white/70
                        text-[8px] md:text-[9px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px]
                      "
                    >
                      {caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            ANNIVERSARY IMAGE — sm+ only, absolutely positioned.
            Its height is measured (badgeRef) to reserve the right amount
            of space above the trust bar.
            ============================================================ */}

        <div
          ref={metrics.badgeRef}
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-30
            hidden
            select-none
            overflow-visible
            sm:block
          "
        >
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet="/images/home/anniversary-tablet.png"
            />
            <img
              src="/images/home/anniversary.png"
              alt="10th Anniversary"
              className="block h-auto w-[var(--anniv-w)] max-w-none"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}