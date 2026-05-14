"use client";

import { IconHelpOctagon } from "@tabler/icons-react";
import {
  Users,
  Clock,
  CheckCircle,
  Zap,
  DollarSign,
  Shield,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Pattern from "../../../public/images/home/HomePattern1.png";
import { useEffect, useState } from "react";
import { listWhyChooseUsApi } from "@/app/api/HomeChooseUs";

// ── API types ──────────────────────────────────────────────────────────────
export interface ListWhyChooseUsResponse {
  _id: string;
  badgeText: string;
  heading: string;
  headingHighlight: string;
  description: string;
  features: Feature[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Feature {
  number: string;
  title: string;
  description: string;
  icon: string;
}

// ── Icon map ───────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, LucideIcon> = {
  Shield,
  Clock,
  CheckCircle,
  Zap,
  DollarSign,
  Users,
};

function resolveIcon(iconName: string) {
  const Icon = ICON_MAP[iconName] ?? Shield;
  return <Icon className="w-8 h-8" />;
}

// ── Number Badge ───────────────────────────────────────────────────────────
// Small card  → 140×68  (same on all screen sizes — fits fine)
// Wide card   → mobile: 140×68  |  md+: 270×78  (original)
function NumberBadge({
  number,
  isSmallCard,
}: {
  number: string;
  isSmallCard: boolean;
}) {
  return (
    <>
      {/* ── SMALL CARD badge — fixed 140×68 on all sizes (original) ── */}
      {isSmallCard && (
        <div
          className="absolute border flex items-center justify-center border-gray-300 group-hover:border-[#F97316] transition-all duration-300 z-20 top-[20px] right-[2px]"
          style={{
            width: "140px",
            height: "68px",
            borderRadius: "17px",
            padding: "10px 28px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
          }}
        >
          <div className="flex items-center leading-none tracking-[0.04em] font-bold">
            <span style={{ fontSize: "30px" }} className="text-[#D9D9D9]">
              {number.charAt(0)}
            </span>
            <span style={{ fontSize: "40px" }} className="text-[#D97354] -ml-[2px]">
              {number.charAt(1)}
            </span>
          </div>
        </div>
      )}

      {/* ── WIDE CARD badge — 140×68 on mobile, 270×78 on md+ (original) ── */}
      {!isSmallCard && (
        <>
          {/* Mobile badge (hidden at md+) */}
          <div
            className="absolute border flex items-center justify-center border-gray-300 group-hover:border-[#F97316] transition-all duration-300 z-20 top-[20px] right-[2px] md:hidden"
            style={{
              width: "140px",
              height: "68px",
              borderRadius: "17px",
              padding: "10px 28px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
            }}
          >
            <div className="flex items-center leading-none tracking-[0.04em] font-bold">
              <span style={{ fontSize: "30px" }} className="text-[#D9D9D9]">
                {number.charAt(0)}
              </span>
              <span style={{ fontSize: "40px" }} className="text-[#D97354] -ml-[2px]">
                {number.charAt(1)}
              </span>
            </div>
          </div>

          {/* Desktop badge — ORIGINAL 270×78 (hidden below md) */}
          <div
            className="absolute border items-center justify-center border-gray-300 group-hover:border-[#F97316] transition-all duration-300 z-20 top-[12px] right-[20px] hidden md:flex"
            style={{
              width: "270px",
              height: "78px",
              borderRadius: "20px",
              padding: "10px 28px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
            }}
          >
            <div className="flex items-center leading-none tracking-[0.04em] font-bold">
              <span style={{ fontSize: "46px" }} className="text-[#D9D9D9]">
                {number.charAt(0)}
              </span>
              <span style={{ fontSize: "60px" }} className="text-[#D97354] -ml-[2px]">
                {number.charAt(1)}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// ── Skeleton card ──────────────────────────────────────────────────────────
function SkeletonCard({ wide }: { wide: boolean }) {
  return (
    <div
      className={`relative w-full col-span-12 ${
        wide ? "md:col-span-8" : "md:col-span-4"
      } min-h-[300px] rounded-[10px] bg-gray-100 animate-pulse`}
    />
  );
}

const SKELETON_PATTERN = [false, true, true, false, false, true];

// ── Main component ─────────────────────────────────────────────────────────
export default function WhyChooseUsSection() {
  const [data, setData] = useState<ListWhyChooseUsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listWhyChooseUsApi({});
        console.log(res, "herodata");
        setData(res?.[0] ?? null);
      } catch (err) {
        console.error("WhyChooseUs API error:", err);
        setError("Failed to load");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const features = data?.features ?? [];

  // ORIGINAL grid pattern — unchanged
  const getColSpan = (index: number) => {
    const pattern = [
      "md:col-span-4",
      "md:col-span-8",
      "md:col-span-8",
      "md:col-span-4",
      "md:col-span-4",
      "md:col-span-8",
    ];
    return pattern[index % pattern.length];
  };

  return (
    // ORIGINAL: py-28 — unchanged
    <section className="relative overflow-hidden py-28">
      <div
        className="
          relative z-10 max-w-[1920px] mx-auto
          px-5 sm:px-8 md:px-14 lg:px-24 xl:px-40 2xl:px-60
        "
      >
        {/* ── HEADER — all xl values unchanged ──────────────────────────── */}
        {/* ORIGINAL: text-center mb-20 — unchanged */}
        <div className="text-center mb-20">

          {/* ORIGINAL: tracking-[3px] text-[18px] — unchanged */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center justify-center text-[#F97316] text-[11px] font-bold leading-none">
              <IconHelpOctagon />
            </span>
            <p className="text-[#F97316] tracking-[3px] text-[18px] font-semibold uppercase">
              {loading ? (
                <span className="inline-block w-28 h-4 bg-orange-100 rounded animate-pulse" />
              ) : (
                data?.badgeText ?? "Why Canopy"
              )}
            </p>
          </div>

          {/* ORIGINAL: md:text-[42px] lg:text-[56px] — unchanged; sm added below */}
          <h2 className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[56px] font-bold leading-tight text-black mb-4">
            {loading ? (
              <span className="inline-block w-56 h-10 bg-gray-200 rounded animate-pulse" />
            ) : (
              <>
                {data?.heading ?? "Why"}{" "}
                <span className="text-[#F97316]">
                  {data?.headingHighlight ?? "Choose Us"}
                </span>
              </>
            )}
          </h2>

          {/* ORIGINAL: text-[16px] max-w-[600px] — unchanged */}
          <p className="text-[#979797] text-[16px] leading-relaxed max-w-[600px] mx-auto font-normal">
            {loading ? (
              <span className="inline-block w-80 h-5 bg-gray-100 rounded animate-pulse" />
            ) : (
              data?.description ??
              "We are committed to delivering the highest standard of security services with professionalism, integrity, and reliability."
            )}
          </p>

          {error && <p className="mt-3 text-sm text-red-500">⚠ {error}</p>}
        </div>

        {/* ── DECORATIVE PATTERNS — ORIGINAL positions unchanged ─────────── */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <Image src={Pattern} alt="Pattern" width={400} height={400} className="opacity-20" />
        </div>
        <div className="absolute right-[9px] top-[190px] z-0 pointer-events-none">
          <Image src={Pattern} alt="Pattern Right" width={350} height={350} className="opacity-20" />
        </div>

        {/* ── GRID — ORIGINAL: py-16, md:grid-cols-12 — unchanged ─────────── */}
        <div className="py-16">
          <div className="grid grid-cols-12 gap-5 sm:gap-6 md:gap-8">

            {loading
              ? SKELETON_PATTERN.map((wide, i) => (
                  <SkeletonCard key={i} wide={wide} />
                ))
              : features.map((feature, index) => {
                  const mdColSpan = getColSpan(index);
                  // xs/sm → full width; md+ → original 4/8 pattern
                  const colSpan = `col-span-12 ${mdColSpan}`;
                  const isSmallCard = mdColSpan === "md:col-span-4";

                  return (
                    <div
                      key={feature.number + index}
                      className={`
                        relative w-full ${colSpan}
                        min-h-[300px]
                        overflow-hidden
                        rounded-[10px]
                        transition-all duration-300 group hover:shadow-xl
                      `}
                      style={{
                        // ORIGINAL backgroundImage logic — unchanged
                        backgroundImage: `url(${
                          isSmallCard
                            ? "/images/home/Subtract.png"
                            : "/images/home/Subtract1.png"
                        })`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                      }}
                    >
                      {/* HOVER LINE — ORIGINAL — unchanged */}
                      <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#D97354] transition-all duration-500 group-hover:w-full rounded-b-[10px] z-30" />

                      {/* NUMBER BADGE — responsive component */}
                      <NumberBadge number={feature.number} isSmallCard={isSmallCard} />

                      {/* CONTENT — ORIGINAL: p-12 at md+, scaled down only below md */}
                      <div className="relative z-10 flex flex-col h-full justify-center p-6 sm:p-8 md:p-12">

                        {/* ICON — ORIGINAL: w-[73px] h-[73px] p-[23px] mb-6 — unchanged */}
                        <div className="w-[73px] h-[73px] p-[23px] mb-6 flex items-center justify-center bg-white border border-[#E5E7EB] rounded-[10px] text-[#D97354] shadow-xl transition-all duration-300 group-hover:bg-[#D97354] group-hover:text-white">
                          {resolveIcon(feature.icon)}
                        </div>

                        {/* TITLE — ORIGINAL: text-[28px] mb-4 — unchanged at md+ */}
                        <h3
                          className={`font-bold text-black mb-4 ${
                            isSmallCard
                              ? "text-[20px] sm:text-[24px] md:text-[28px] max-w-full"
                              : "text-[20px] sm:text-[24px] md:text-[28px] max-w-full md:max-w-[70%]"
                          }`}
                        >
                          {feature.title}
                        </h3>

                        {/* DESCRIPTION — ORIGINAL: text-[16px] leading-[28px] — unchanged at md+ */}
                        <p
                          className={`text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#555] ${
                            isSmallCard ? "max-w-full" : "max-w-full md:max-w-[75%]"
                          }`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </section>
  );
}