"use client";

import Image from "next/image";
import Button from "@/app/components/ui/Button";

import HeroImage from "../../../public/images/about/Excelence1.jpg";
import RightSection from "../../../public/images/EVENTS/EventRightSection.png";

const EventsHeroSection = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[42%_1fr]
          items-center

          gap-12
          lg:gap-14

          px-5
          sm:px-8
          md:px-14
          lg:pl-24
          lg:pr-10
          xl:pl-40
          xl:pr-16
          2xl:pl-60
          2xl:pr-24

          py-14
          md:py-20

          mx-auto
        "
      >
        {/* ── Left Content ───────────────────── */}
        <div className="w-full pt-2 md:pt-4 z-20">
          {/* Eyebrow */}
          <p
            className="
              text-[#F26A23]
              uppercase
              tracking-[0.16em]
              font-semibold

              text-[14px]
              sm:text-[16px]
              md:text-[18px]

              mb-4
            "
          >
            UPCOMING EVENTS
          </p>

          {/* Heading */}
          <h2
            className="
              font-bold

              text-[30px]
              sm:text-[38px]
              md:text-[42px]
              lg:text-[46px]

              leading-[130%]
              tracking-[0.05em]

              text-[#111111]

              mb-5
            "
          >
            <span className="text-[#E07B2A]">
              Security Events
            </span>{" "}
            We Did,
            <br />
            Training Programs &
            <br />
            Community Activities
          </h2>

          {/* Description */}
          <p
            className="
              text-[15px]
              md:text-[16px]

              leading-[1.9]

              text-[#8B8B8B]

              max-w-[680px]
            "
          >
            Our event security services follow strict SIRA guidelines
            to ensure safe and well-managed events. We provide risk
            assessment, access control, crowd management, and trained
            SIRA-certified security personnel. With on-site supervision,
            continuous monitoring, and quick emergency response, we
            ensure the safety of guests, staff, and assets at all times.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              label="View Events"
              href="#events"
              variant="primary"
            />

            <Button
              label="Contact"
              href="/contact"
              variant="outline"
            />
          </div>
        </div>

        {/* ── Right Section ─────────────────── */}
        {/* ── Right Section ─────────────────── */}
{/* ── Right Section (Single Image) ─────────────────── */}
<div
  className="
    relative
    w-full
    h-[620px]
    sm:h-[700px]
    lg:h-[760px]
    mt-10
    lg:mt-0
    rounded-[30px]
    overflow-hidden
  "
>
  <Image
    src={RightSection}
    alt="Events Hero"
    fill
    className="object-cover"
    priority
  />
</div>
      </div>
    </section>
  );
};

export default EventsHeroSection;