"use client";

import Image from "next/image";

import Button from "@/app/components/ui/Button";
import { IconExclamationCircle } from "@tabler/icons-react";
import AboutImage1 from "../../../public/images/home/About1.png";
import AboutImage2 from "../../../public/images/home/About2.png";
import Pattern from "../../../public/images/home/HomePattern2.png";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20 mb-16 sm:mb-20 md:mb-24 lg:mb-30">
      {/* TOP RIGHT dot pattern */}
      <Image
        src={Pattern}
        alt="pattern"
        className="
          absolute
          top-[-2%] sm:top-[-3%] lg:top-[-4%]
          right-[10%] sm:right-[20%] lg:right-[29%]
          w-[160px] sm:w-[220px] md:w-[280px] lg:w-[320px]
          opacity-40 sm:opacity-50 lg:opacity-60
          pointer-events-none
          select-none
          z-0
        "
      />

      {/* BOTTOM LEFT dot pattern */}
      <Image
        src={Pattern}
        alt="pattern"
        className="
          absolute
          bottom-[-40px] sm:bottom-[-50px] lg:bottom-[-70px]
          left-[5%] sm:left-[12%] lg:left-[22%]
          w-[160px] sm:w-[220px] md:w-[280px] lg:w-[320px]
          opacity-15 sm:opacity-20 lg:opacity-25
          pointer-events-none
          select-none
          z-0
        "
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-2 sm:px-4 md:px-6">
        {/* SECTION TITLE */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span
              className="
              flex items-center justify-center
              w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]
              text-[#F97316]
              text-[10px] sm:text-[11px]
              font-bold
              leading-none
            "
            >
              <IconExclamationCircle />
            </span>
            <p
              className="
              text-[#F97316]
              uppercase
              tracking-[2px] sm:tracking-[3px]
              text-[14px] sm:text-[16px] md:text-[18px]
              font-semibold
            "
            >
              About
            </p>
          </div>

          <h2
            className="
            text-[28px] sm:text-[36px] md:text-[42px] lg:text-[56px]
            font-bold
            leading-tight
            text-black
            px-4
          "
          >
            Canopy <span className="text-[#F97316]">Security Services</span>
          </h2>
        </div>

        {/* MAIN CONTENT GRID */}
        <div
          className="
    grid
    grid-cols-1
    lg:grid-cols-2
    items-start
    gap-8 sm:gap-12 md:gap-16 lg:gap-[90px]
  "
        >
          {/* ── LEFT: OVERLAPPING IMAGES ── */}
          <div
            className="
    relative
    w-full
    max-w-[705px]
    mx-auto
    h-[280px] sm:h-[340px] md:h-[380px] lg:h-[421px]
  "
          >
            {/* FIRST IMAGE */}
            <div
              className="
      absolute
      top-0
      left-0
      w-[55%] sm:w-[54%] lg:w-[377px]
      h-[72%] sm:h-[75%] md:h-[80%] lg:h-[349px]
      rounded-[8px] sm:rounded-[10px]
      overflow-hidden
      shadow-lg sm:shadow-xl
      z-20
    "
            >
              <Image
                src={AboutImage2}
                alt="Security Guards"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 55vw, (max-width: 1024px) 54vw, 377px"
              />
            </div>

            {/* SECOND IMAGE */}
            <div
              className="
      absolute
      top-[32px] sm:top-[38px] md:top-[40px] lg:top-[42px]
      left-[42%] sm:left-[44%] lg:left-[321px]
      w-[57%] sm:w-[55%] lg:w-[384px]
      h-[75%] sm:h-[80%] md:h-[87%] lg:h-[384px]
      rounded-[8px] sm:rounded-[10px]
      overflow-hidden
      shadow-xl sm:shadow-2xl
      z-10
    "
            >
              <Image
                src={AboutImage1}
                alt="Security Officer"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 57vw, (max-width: 1024px) 55vw, 384px"
              />
            </div>
          </div>

          {/* ── RIGHT: TEXT CONTENT ── */}
          <div
            className="
    w-full
    max-w-[705px]
    mx-auto lg:mx-0
    flex
    flex-col
    gap-6 sm:gap-8 md:gap-10 lg:gap-[40px]
  "
          >
            <div
              className="
    flex
    flex-col
    gap-4 sm:gap-5 md:gap-6 lg:gap-[24px]
    text-[#979797]
    text-[14px] sm:text-[15px] md:text-[16px]
    leading-[1.7] sm:leading-[1.75] md:leading-[1.85]
    font-normal
  "
            >
              <p>
                Since 2016, Canopy Security Services L.L.C has been delivering
                reliable and professional security and support solutions across
                Dubai, ensuring the safety of people, assets, and businesses
                with trust, excellence, and operational efficiency.
              </p>
              <p>
                We provide a comprehensive range of services including manned
                guarding, Cash &amp; Valuables in Transit (CVIT), event
                security, close protection, and professional cleaning services,
                all supported by skilled personnel, strict compliance, and
                industry-leading standards.
              </p>
              <p>
                Serving commercial, residential, construction, events, and
                corporate sectors, we are committed to delivering tailored
                solutions that meet the highest levels of quality, safety,
                reliability, and complete client satisfaction across Dubai.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="mt-0 sm:mt-1">
              <Button
                label="Learn More"
                href="/about"
                variant="primary"
                color="#F97316"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}