"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconExclamationCircle } from "@tabler/icons-react";
import {
  listSecurityServicesApi,
  listSeviceSecurityServicesApi,
} from "@/app/api/web/HomeService";
import BadgeIcon from "../../../public/images/home/localoffer.png";
import DotPatternLeftImg from "../../../public/images/home/dot-pattern-left.jpg";
import DotPatternRightImg from "../../../public/images/home/dot-pattern-right.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface RootObject {
  _id: string;
  badgeText: string;
  heading: string;
  headingHighlight: string;
  description: string;
  services: Service[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Service {
  title: string;
  slug?: string;
  image: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  isActive: boolean;
  subtitle?: string;
  detailPage?: DetailPage;
}

interface DetailPage {
  heroSection: HeroSection;
  whyChooseSection: WhyChooseSection;
  responsibilitiesSection: ResponsibilitiesSection;
  industriesSection: IndustriesSection;
}

interface IndustriesSection {
  heading: string;
  headingHighlight: string;
  description: string;
  industries: Responsibility[];
}

interface ResponsibilitiesSection {
  heading: string;
  headingHighlight: string;
  responsibilities: Responsibility[];
}

interface Responsibility {
  title: string;
  description: string;
}

interface WhyChooseSection {
  heading: string;
  headingHighlight: string;
  descriptionOne: string;
  descriptionTwo: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

interface HeroSection {
  badgeText: string;
  heading: string;
  headingHighlight: string;
  description: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function ServiceCardSkeleton() {
  return (
    <div className="w-full max-w-[425px] rounded-[20px] overflow-hidden border border-gray-100 bg-white shadow-sm">
      <div className="w-full h-[220px] bg-gray-200 animate-pulse rounded-t-[20px]" />
      <div className="px-5 py-5 flex flex-col gap-3">
        <div className="h-5 w-40 bg-gray-200 animate-pulse rounded" />
        <div className="h-3.5 w-24 bg-orange-100 animate-pulse rounded mt-1" />
      </div>
    </div>
  );
}

function SectionSkeleton() {
  return (
    <section className="relative overflow-hidden bg-white px-5 sm:px-8 md:px-14 lg:px-24 xl:px-40 2xl:px-60 py-14 md:py-20">
      {/* Header skeleton */}
      <div className="mb-12 text-center flex flex-col items-center gap-4">
        <div className="h-4 w-32 rounded bg-gray-200 animate-pulse" />
        <div className="h-10 w-72 rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-[380px] max-w-full rounded bg-gray-200 animate-pulse" />
      </div>

      {/* Cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 justify-items-center max-w-[900px] mx-auto">
        {Array.from({ length: 4 }).map((_, i) => (
          <ServiceCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="
        group
        w-full max-w-[425px]
        rounded-[20px] overflow-hidden
        bg-white
        border border-gray-100
        shadow-[0_2px_12px_rgba(0,0,0,0.07)]
        hover:shadow-[0_8px_32px_rgba(0,0,0,0.13)]
        transition-all duration-300
        block
      "
    >
      {/* Image */}
      <div className="relative w-full h-[220px] sm:h-[230px] lg:h-[240px] overflow-hidden bg-gray-100">
        {service.image && (
          <Image
            src={service.image}
            alt={service.title || "Service"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 425px"
          />
        )}
      </div>

      {/* Content */}
      <div className="px-5 pt-[18px] pb-[20px] bg-white">
        <h3 className="text-[17px] font-bold text-[#111111] leading-snug mb-[10px]">
          {/* Title */}
          {service.title}
        </h3>

        {/* Description — reveal on hover */}
        {service.subtitle && (
          <p className="text-[12px] text-gray-400 font-medium mb-[6px] -mt-1">
            {service.subtitle}
          </p>
        )}

        <div
          className="
            overflow-hidden
            max-h-0 opacity-0
            group-hover:max-h-[120px] group-hover:opacity-100
            transition-all duration-400 ease-in-out
            mb-0 group-hover:mb-[12px]
          "
        >
          <p className="text-[13px] text-[#6B7280] leading-[1.65]">
            {service.description}
          </p>
        </div>

        {/* Button */}
        <div className="inline-flex items-center gap-[6px] text-[#F26A23] font-semibold text-[13px]">
          {service.buttonText || "View Details"}
          <svg
            className="w-[15px] h-[15px] transition-transform duration-200 group-hover:translate-x-[4px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

const SecurityServicesSection = () => {
  const [data, setData] = useState<RootObject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const res = await listSeviceSecurityServicesApi({});
        setData(res?.[0] ?? null);
      } catch (err) {
        console.error("SecurityServicesSection API error:", err);
        setError("Failed to load services data");
      } finally {
        setLoading(false);
      }
    };

    fetchServicesData();
  }, []);

  if (loading) return <SectionSkeleton />;

  if (error || !data) {
    return (
      <p className="text-center text-sm text-red-500 py-10">
        Failed to load section{error ? `: ${error}` : ""}.
      </p>
    );
  }

  const services = data.services;

  return (
    <section
      id="services-list"
      className="
        relative overflow-hidden
        bg-white
        px-5 sm:px-8 md:px-14 lg:px-24 xl:px-40 2xl:px-60
        py-14 md:py-20
        mx-auto
      "
    >
      {/* Header */}
      <div
        className="
          pointer-events-none select-none
          absolute left-0 bottom-0
          w-[260px] sm:w-[300px] lg:w-[340px]
          h-[260px] sm:h-[300px] lg:h-[340px]
          opacity-[0.18]
          z-0
        "
      >
        <Image
          src={DotPatternLeftImg}
          alt=""
          fill
          className="object-cover object-right-top"
          aria-hidden="true"
        />
      </div>

      <div
        className="
          pointer-events-none select-none
          absolute right-0 top-0
          w-[260px] sm:w-[300px] lg:w-[340px]
          h-[260px] sm:h-[300px] lg:h-[340px]
          opacity-[0.18]
          z-0
        "
      >
        <Image
          src={DotPatternRightImg}
          alt=""
          fill
          className="object-cover object-left-bottom"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mb-10 sm:mb-12 md:mb-14 lg:mb-16 text-center">
        <div className="flex items-center justify-center gap-[7px] mb-[14px]">
          <Image
            src={BadgeIcon}
            alt="Badge Icon"
            className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] object-contain"
          />
          <p className="text-[#F26A23] uppercase tracking-[2.5px] text-[12px] sm:text-[13px] md:text-[14px] font-semibold">
            {data.badgeText}
          </p>
        </div>

        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-bold leading-tight text-black">
          {data.heading}{" "}
          <span className="text-[#F26A23]">{data.headingHighlight}</span>
        </h2>

        <p className="text-[#979797] text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed mt-3 sm:mt-4 font-normal max-w-[420px] mx-auto">
          {data.description}
        </p>
      </div>

      <div
        className="
          relative z-10
          grid grid-cols-1 sm:grid-cols-2
          gap-5 lg:gap-6
          justify-items-center
          max-w-[900px] mx-auto
        "
      >
        {services.map((service, index) => (
          <ServiceCard key={service.slug || index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default SecurityServicesSection;
