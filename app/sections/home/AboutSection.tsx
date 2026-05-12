"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Pattern from "../../../public/images/home/HomePattern2.png";
import AboutImage1 from "../../../public/images/home/About1.png";
import AboutImage2 from "../../../public/images/home/About2.png";
import Button from "@/app/components/ui/Button";
import { IconExclamationCircle } from "@tabler/icons-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* TOP RIGHT dot pattern */}
      <Image
        src={Pattern}
        alt="pattern"
        className="
          absolute
          top-[-4%]
          right-[29%]
          w-[320px]
          opacity-60
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
          bottom-[-30px]
          left-[19%]
          w-[190px]
          opacity-25
          pointer-events-none
          select-none
          z-0
        "
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-20">

          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="
              flex items-center justify-center
              w-[20px] h-[20px]
             
              text-[#F97316]
              text-[11px]
              font-bold
              leading-none
            ">
              <IconExclamationCircle/>
            </span>
            <p className="
              text-[#F97316]
              uppercase
              tracking-[3px]
              text-[18px]
              font-semibold
            ">
              About
            </p>
          </div>

          <h2 className="
            text-[42px]
            md:text-[56px]
            font-bold
            leading-tight
            text-black
          ">
            Canopy{" "}
            <span className="text-[#F97316]">Security Services</span>
          </h2>
        </div>

        {/* MAIN CONTENT GRID */}
     <div
  className="
    grid
    lg:grid-cols-2
    items-start
    gap-[90px]
  "
>

          {/* ── LEFT: OVERLAPPING IMAGES ── */}
<div
  className="
    relative
    w-[705px]
    h-[421px]
  "
>

  {/* FIRST IMAGE */}
  <div
    className="
      absolute
      top-0
      left-0
      w-[377px]
      h-[349px]
      rounded-[10px]
      overflow-hidden
      shadow-xl
      z-20
    "
  >
    <Image
      src={AboutImage2}
      alt="Security Guards"
      fill
      className="object-cover"
      sizes="377px"
    />
  </div>

  {/* SECOND IMAGE */}
  <div
    className="
      absolute
      top-[42px]
      left-[321px]
      w-[384px]
      h-[384px]
      rounded-[10px]
      overflow-hidden
      shadow-2xl
      z-10
    "
  >
    <Image
      src={AboutImage1}
      alt="Security Officer"
      fill
      className="object-cover"
      sizes="384px"
    />
  </div>

</div>

          {/* ── RIGHT: TEXT CONTENT ── */}
        <div
  className="
    w-[705px]
    h-[377px]
    flex
    flex-col
    gap-[40px]
  "
>
<div
  className="
    flex
    flex-col
    gap-[24px]
    text-[#979797]
    text-[16px]
    leading-[1.85]
    font-normal
  "
>              <p>
                Since 2016, Canopy Security Services L.L.C has been delivering reliable
                and professional security and support solutions across Dubai, ensuring
                the safety of people, assets, and businesses with trust, excellence,
                and operational efficiency.
              </p>
              <p>
                We provide a comprehensive range of services including manned guarding,
                Cash &amp; Valuables in Transit (CVIT), event security, close
                protection, and professional cleaning services, all supported by skilled
                personnel, strict compliance, and industry-leading standards.
              </p>
              <p>
                Serving commercial, residential, construction, events, and corporate
                sectors, we are committed to delivering tailored solutions that meet
                the highest levels of quality, safety, reliability, and complete client
                satisfaction across Dubai.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="mt-1">
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