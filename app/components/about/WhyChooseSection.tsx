"use client";

import Image from "next/image";
import CardShape from "../../../public/images/about/Rectangle 22.png";
import { useEffect, useState } from "react";
import {
  HelpCircle,
  Star,
  Diamond,
  Shield,
  Target,
  Users,
  LucideIcon,
} from "lucide-react";
import { listAboutCardsApi } from "@/app/api/AboutValues";

// ─── Icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  HelpCircle,
  Star,
  Diamond,
  Shield,
  Target,
  Users,
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface CardAPI {
  number: string;
  title: string;
  description: string;
  icon: string;
  isActive: boolean;
}

interface WhatWeDoAPIResponse {
  _id: string;
  cards: CardAPI[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// ─── Card component ───────────────────────────────────────────────────────────

function WhatWeDoCard({ card }: { card: CardAPI }) {
  const numberPrefix = card.number.slice(0, -1); // e.g. "0"
  const numberSuffix = card.number.slice(-1);    // e.g. "1"
  const IconComponent = ICON_MAP[card.icon] ?? HelpCircle;

  return (
    <div
      className="
        relative
        w-full
        max-w-[540px]
        h-[420px]
        sm:h-[480px]
        lg:h-[560px]
      "
    >
      {/* Number */}
      <div
        className="
          absolute z-20 flex items-end leading-none
          top-6 left-6
          sm:top-8 sm:left-10
          lg:top-10 lg:left-20
        "
      >
        <span
          className="
            text-[55px]
            sm:text-[65px]
            lg:text-[80px]
            font-semibold text-[#D9D9D9]
          "
        >
          {numberPrefix}
        </span>
        <span
          className="
            text-[75px]
            sm:text-[90px]
            lg:text-[110px]
            font-semibold text-[#F4A176]
          "
        >
          {numberSuffix}
        </span>
      </div>

      {/* Shape Card */}
      <div
        className="
          absolute
          top-[45px]
          left-1/2
          -translate-x-1/2
          sm:top-[50px]
          lg:top-[60px]
          lg:left-[70px]
          lg:translate-x-0
          w-[88%]
          sm:w-[430px]
          h-[360px]
          sm:h-[400px]
          lg:h-[455px]
        "
      >
        <Image
          src={CardShape}
          alt="shape card"
          fill
          className="object-contain"
          priority
        />

        {/* Content */}
        <div
          className="
            absolute inset-0 z-10 flex flex-col justify-end
            px-6
            sm:px-7
            lg:px-[34px]
            pt-[120px]
            lg:pt-[141px]
            pb-7
            lg:pb-9
          "
        >
          {/* Icon */}
          <div
            className="
              absolute
              top-5 right-5
              sm:top-6 sm:right-6
              lg:top-[28px]
              lg:right-[34px]
              w-[70px]
              h-[65px]
              sm:w-[80px]
              sm:h-[72px]
              lg:w-[92px]
              lg:h-[82px]
              rounded-[14px]
              bg-[#F2F2F2]
              flex items-center justify-center
            "
          >
            <IconComponent
              className="
                w-[36px] h-[36px]
                sm:w-[42px] sm:h-[42px]
                lg:w-[50px] lg:h-[50px]
                text-[#8B2E12]
              "
              strokeWidth={1.5}
            />
          </div>

          {/* Title */}
          <h2
            className="
              text-[17px]
              sm:text-[18px]
              lg:text-[20px]
              font-semibold
              tracking-[1px]
              text-black
            "
          >
            {card.title}
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              lg:mt-5
              text-[14px]
              sm:text-[15px]
              lg:text-[16px]
              text-[#979797]
              font-normal
              max-w-[320px]
              leading-[1.7]
            "
          >
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Skeleton Card ────────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div
      className="
        relative w-full max-w-[540px]
        h-[420px] sm:h-[480px] lg:h-[560px]
        animate-pulse
      "
    >
      {/* Number placeholder */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10 lg:top-10 lg:left-20 flex items-end gap-1">
        <div className="w-10 h-14 lg:h-20 rounded bg-gray-200" />
        <div className="w-10 h-20 lg:h-28 rounded bg-gray-200" />
      </div>

      {/* Card placeholder */}
      <div
        className="
          absolute top-[45px] left-1/2 -translate-x-1/2
          sm:top-[50px]
          lg:top-[60px] lg:left-[70px] lg:translate-x-0
          w-[88%] sm:w-[430px]
          h-[360px] sm:h-[400px] lg:h-[455px]
          rounded-[24px] bg-gray-200
        "
      />
    </div>
  );
}


// ─── Main section ─────────────────────────────────────────────────────────────

export default function WhatWeDoCards() {
  const [cards, setCards] = useState<CardAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
// ── Fetch API data ────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await listAboutCardsApi({});
        console.log(data, "herodata");
        setCards(data?.[0]?.cards ?? []);
      } catch (error) {
        console.error("HeroSection API error:", error);
        setError("Failed to load about section data");
      } finally {
        setLoading(false);
      }
    };
    fetchHeroData();
  }, []);

  return (
    <section
      className="
        w-full
        px-5
        sm:px-8
        md:px-14
        lg:px-24
        xl:px-40
        2xl:px-60
        py-14
        md:py-20
        mx-auto
      "
    >
      {error && !loading && (
        <p className="text-center text-sm text-red-500 mb-6">
          Failed to load data: {error}
        </p>
      )}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-8
          lg:gap-10
          justify-items-center
        "
      >
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : cards.map((card) => (
              <WhatWeDoCard key={card.number} card={card} />
            ))}
      </div>
    </section>
  );
}