"use client";

import Image from "next/image";
import Button from "@/app/components/ui/Button";

import HeroImage from "../../../public/images/about/Excelence1.jpg";

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
<div
  className="
    relative
    w-full

    h-[620px]
    sm:h-[700px]
    lg:h-[760px]

    overflow-visible

    mt-10
    lg:mt-0
  "
>
  {/* Top Right Piece */}
{/* First Piece */}
<div
  className="
    relative
    w-[325.5px]
    h-[172px]
    overflow-hidden
    rounded-[25px]
    bg-[#D9D9D9]
  "
>
  <Image
    src={HeroImage}
    alt="Security Team"
    fill
    className="object-cover"
  />
</div>

  {/* Left Large Piece */}
  <div
    className="
      absolute

      left-0
      top-[145px]

      sm:top-[175px]
      lg:top-[185px]

      w-[280px]
      sm:w-[360px]
      lg:w-[430px]

      h-[190px]
      sm:h-[240px]
      lg:h-[270px]

      overflow-hidden

      rounded-[28px]
      rounded-tr-[80px]

      z-10
    "
  >
    <Image
      src={HeroImage}
      alt="Training Program"
      fill
      className="object-cover scale-[1.8]"
      style={{ objectPosition: "left center" }}
    />
  </div>

  {/* Center Square Piece */}
  <div
    className="
      absolute

      left-[170px]
      sm:left-[230px]
      lg:left-[449px]

      top-[185px]
      sm:top-[220px]
      lg:top-[225px]

      w-[200px]
      sm:w-[250px]
      lg:w-[290px]

      h-[200px]
      sm:h-[250px]
      lg:h-[290px]

      overflow-hidden

      rounded-[24px]

      z-30
    "
  >
    <Image
      src={HeroImage}
      alt="Community Activity"
      fill
      className="object-cover scale-[1.8]"
      style={{ objectPosition: "center center" }}
    />
  </div>

  {/* Bottom Right Piece */}
  <div
    className="
      absolute

      right-[10px]
      sm:right-[40px]
      lg:right-[70px]

      bottom-[20px]

      w-[260px]
      sm:w-[320px]
      lg:w-[390px]

      h-[150px]
      sm:h-[190px]
      lg:h-[220px]

      overflow-hidden

      rounded-[28px]
      rounded-tr-[80px]

      z-20
    "
  >
    <Image
      src={HeroImage}
      alt="Event Security"
      fill
      className="object-cover scale-[1.8]"
      style={{ objectPosition: "center bottom" }}
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default EventsHeroSection;