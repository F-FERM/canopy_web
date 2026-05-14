"use client";

import { listHomeAboutApi } from "@/app/api/HomeAbout";
import { useEffect, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

interface ListHomeAboutResponse {
  stats: Stat[];
}

export default function StatsSection() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await listHomeAboutApi({});
        if (!data || data.length === 0) throw new Error("Failed to fetch stats");
        
        setStats(data[0].stats);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const skeletonItems = Array.from({ length: 5 });

  const gridClass = `
    w-full
    grid
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-3
    lg:grid-cols-5
    xl:grid-cols-5
    gap-y-6
    gap-x-6
    sm:gap-y-8 sm:gap-x-8
    md:gap-y-8 md:gap-x-10
    lg:gap-[60px]
    xl:gap-[60px]
    items-center
    justify-items-center
  `;

  if (loading) {
    return (
      <section
        className="
          w-full
          bg-[#6B0F1A]
          px-4
          sm:px-6
          md:px-12
          lg:px-20
          xl:px-60
        "
      >
        <div
          className="
            max-w-[1920px]
            mx-auto
            px-4
            sm:px-6
            md:px-8
            lg:px-[40px]
            xl:px-[120px]
            py-8
            sm:py-10
            md:py-8
            lg:py-0
            lg:h-[148px]
            flex
            items-center
            justify-center
          "
        >
          <div className={gridClass}>
            {skeletonItems.map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-full animate-pulse"
              >
                <div className="h-[36px] sm:h-[44px] md:h-[48px] lg:h-[58px] w-16 sm:w-20 md:w-24 bg-white/20 rounded mb-2 sm:mb-2.5 md:mb-3" />
                <div className="h-3 sm:h-4 md:h-[17px] lg:h-5 w-20 sm:w-24 md:w-28 bg-white/20 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-[#6B0F1A] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-60">
        <div className="max-w-[1920px] mx-auto min-h-[100px] flex items-center justify-center">
          <p className="text-white/60 text-sm">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="
        w-full
        bg-[#6B0F1A]
        px-4
        sm:px-6
        md:px-12
        lg:px-20
        xl:px-60
      "
    >
      <div
        className="
          max-w-[1920px]
          mx-auto
          px-4
          sm:px-6
          md:px-8
          lg:px-[40px]
          xl:px-[120px]
          py-8
          sm:py-10
          md:py-8
          lg:py-0
          lg:h-[148px]
          flex
          items-center
          justify-center
        "
      >
        <div className={gridClass}>
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                items-center
                text-center
                w-full
              "
            >
              {/* NUMBER */}
              <h3
                className="
                  text-[#F97316]
                  text-[28px]
                  sm:text-[36px]
                  md:text-[42px]
                  lg:text-[52px]
                  xl:text-[58px]
                  leading-none
                  font-bold
                "
              >
                {item.value}
              </h3>

              {/* LABEL */}
              <p
                className="
                  mt-1.5
                  sm:mt-2
                  md:mt-2.5
                  lg:mt-3
                  text-white
                  text-[11px]
                  sm:text-[13px]
                  md:text-[15px]
                  lg:text-[18px]
                  xl:text-[20px]
                  font-medium
                  whitespace-nowrap
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}