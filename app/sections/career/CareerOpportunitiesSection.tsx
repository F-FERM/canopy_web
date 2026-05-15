"use client";

import Image from "next/image";
import Button from "@/app/components/ui/Button";

import Subtract from "../../../public/images/about/Subtract.png";
import DotPattern from "../../../public/images/about/Pattern1.jpg";
import HeroImage from "../../../public/images/about/Excelence1.jpg";
import TopPattern from "../../../public/images/career/Pattern1.jpg";

// ─── Content ────────────────────────────────────────────────────────────────
const aboutContent = {
  eyebrow: "CAREER OPPORTUNITIES",

  headingPrefix: "Build Your",
  headingBrand: "Future",
  headingSuffix: "With Canopy Security Services",

  description:
    "Join one of the leading security service providers in the UAE. We are looking for disciplined, professional, and motivated individuals ready to build a rewarding career in the security industry.",

  image: {
    src: Subtract,
    alt: "Security officer monitoring CCTV screens",
  },

  stats: [
    {
      value: "500+",
      label: "Employees Across UAE",
    },
    {
      value: "24/7",
      label: "Professional Support",
    },
    {
      value: "10+",
      label: "Years of Experience",
    },
    {
      value: "100%",
      label: "Career Growth Opportunities",
    },
  ],
};

// ────────────────────────────────────────────────────────────────────────────

export default function AboutUs() {
  const {
    eyebrow,
    headingPrefix,
    headingBrand,
    headingSuffix,
    description,
    stats,
  } = aboutContent;

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[42%_1fr]
          items-start

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
          overflow-visible
        "
      >
        {/* ── Left Content ───────────────────── */}
        <div className="w-full pt-2 md:pt-4 z-20">
          {/* Eyebrow */}
          <p
            className="
              flex
              items-center
              gap-1.5

              text-[14px]
              sm:text-[16px]
              md:text-[18px]

              font-semibold
              tracking-[0.14em]
              uppercase
              text-[#F26A23]

              mb-3
              md:mb-4
            "
          >
            <span
              aria-hidden="true"
              className="
                text-[16px]
                md:text-[18px]
                font-normal
                leading-none
              "
            >
              ⓘ
            </span>

            {eyebrow}
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
              md:tracking-[0.08em]

              text-[#0f0f0f]

              mb-4
              md:mb-5
            "
          >
            {headingPrefix}
            <br />

            <span className="text-[#E07B2A]">{headingBrand}</span>{" "}
            {headingSuffix}
          </h2>

          {/* Description */}
          <p
            className="
              text-[15px]
              md:text-[16px]

              leading-[1.9]

              text-[#979797]

              max-w-[680px]
            "
          >
            {description}
          </p>
          <div className="mt-5 sm:mt-6 md:mt-7 flex flex-wrap gap-3 sm:gap-4 md:gap-5">
            <Button
              label="View Openings"
              href="#openings"
              variant="primary"
            />
            <Button
              label="Contact Us"
              href="/contact"
              variant="outline"
            />
          </div>
        </div>


        {/* ── Right Section ─────────────────── */}
        <div
          className="
            relative
            w-full

            h-auto
            lg:h-[720px]

            overflow-visible

            pr-0
            lg:pr-[120px]

            mt-4
            lg:mt-0
          "
        >
          {/* Top Pattern */}
          <Image
            src={TopPattern}
            alt=""
            width={320}
            height={320}
            aria-hidden="true"
            className="
              absolute

              top-[-35px]
              right-[-10px]

              lg:top-[-55px]
              lg:right-[-120px]

              z-0

              w-[120px]
              sm:w-[180px]
              md:w-[220px]
              lg:w-[300px]

              h-auto
              pointer-events-none
              opacity-100
            "
          />

          {/* Mobile / Tablet Layout */}
          <div className="relative lg:hidden w-full">
            {/* Main Image */}
            <div
              className="
                relative
                w-full

                h-[260px]
                sm:h-[380px]
                md:h-[480px]

                rounded-[20px]
                overflow-hidden
                z-10
              "
            >
              <Image
                src={HeroImage}
                alt="Security Officer"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Glass Card */}
            <div
              className="
                relative
                z-20

                w-[92%]
                sm:w-[80%]

                mx-auto
                -mt-16
                sm:-mt-24

                rounded-[20px]
                overflow-hidden

                border border-[#BEBEBE]

                shadow-[0_8px_24px_rgba(0,0,0,0.06)]

                bg-white/20
                backdrop-blur-[18px]
              "
            >
              <div
                className="
                  relative

                  px-5
                  sm:px-7

                  pt-8
                  pb-6
                "
              >
                {/* Frosted Overlay */}
                <div className="absolute inset-0 bg-[#B8B8B8]/22 pointer-events-none" />

                <div className="relative z-10">
                  <h3
                    className="
                      text-[26px]
                      sm:text-[30px]

                      font-bold
                      text-black

                      mb-5
                    "
                  >
                    Why Join Us
                  </h3>

                  <div className="flex flex-col border-b border-[#A9A9A9]">
                    {stats.map((item, index) => (
                      <div
                        key={item.label}
                        className={`
                          flex
                          items-center
                          justify-between

                          gap-4

                          py-4

                          ${index !== stats.length - 1
                            ? "border-b border-[#A9A9A9]"
                            : ""
                          }
                        `}
                      >
                        <p
                          className="
                            min-w-[70px]

                            text-[18px]
                            sm:text-[20px]

                            font-semibold
                            text-[#8D2B14]
                          "
                        >
                          {item.value}
                        </p>

                        <p
                          className="
                            flex-1

                            text-right

                            text-[14px]
                            sm:text-[16px]

                            text-[#2E2E2E]
                          "
                        >
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Main Image */}
            <div
              className="
                absolute
                top-0
                z-10
                overflow-hidden
                rounded-[20px]
              "
              style={{
                width: "722px",
                height: "511px",
                right: "20px",
              }}
            >
              <Image
                src={HeroImage}
                alt="Security Officer"
                fill
                priority
                className="object-cover"
                sizes="55vw"
              />
            </div>

            {/* Glass Card */}
            <div
              className="
                absolute
                z-20
                rounded-[20px]
                overflow-hidden
                border
                border-[#BEBEBE]
                shadow-[0_8px_24px_rgba(0,0,0,0.06)]
              "
              style={{
                width: "402px",
                height: "379px",
                top: "264px",
                left: "-42px",
                background: "rgba(255,255,255,0.22)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
            >
              {/* Inner Content */}
              <div className="relative w-full h-full px-[24px] pt-[42px] pb-[28px]">
                {/* Frosted Overlay */}
                <div className="absolute inset-0 bg-[#B8B8B8]/22 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Heading */}
                  <h3
                    className="
                      text-[32px]
                      leading-none
                      font-[700]
                      tracking-[0.2px]
                      text-black
                      mb-[28px]
                    "
                  >
                    Why Join Us
                  </h3>

                  {/* Stats */}
                  <div className="flex flex-col border-b border-[#A9A9A9]">
                    {stats.map((item, index) => (
                      <div
                        key={item.label}
                        className={`
                          flex
                          items-center
                          justify-between
                          py-[18px]
                          ${index !== stats.length - 1
                            ? "border-b border-[#A9A9A9]"
                            : ""
                          }
                        `}
                      >
                        {/* Left Value */}
                        <p
                          className="
                            min-w-[86px]
                            text-[22px]
                            leading-none
                            font-[600]
                            tracking-[0.3px]
                            text-[#8D2B14]
                          "
                        >
                          {item.value}
                        </p>

                        {/* Right Label */}
                        <p
                          className="
                            flex-1
                            text-center
                            text-[17px]
                            leading-none
                            font-[400]
                            tracking-[0.1px]
                            text-[#2E2E2E]
                          "
                        >
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Pattern */}
          <Image
            src={DotPattern}
            alt=""
            width={320}
            height={320}
            aria-hidden="true"
            className="
              absolute

              bottom-[-40px]
              left-[-20px]

              lg:bottom-[-60px]
              lg:left-[-170px]

              z-0

              w-[120px]
              sm:w-[180px]
              md:w-[220px]
              lg:w-[300px]

              h-auto
              pointer-events-none
              opacity-100
            "
          />
        </div>
      </div>
    </section>
  );
}