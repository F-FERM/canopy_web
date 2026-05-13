"use client";

import React from "react";

interface Benefit {
  id: number;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Industry Experts",
    description:
      "Learn directly from trained and experienced security specialists.",
  },
  {
    id: 2,
    title: "Practical Training",
    description:
      "Gain real-world knowledge through live demonstrations and workshops.",
  },
  {
    id: 3,
    title: "Networking",
    description:
      "Connect with facility managers and security professionals.",
  },
  {
    id: 4,
    title: "Certification",
    description:
      "Selected programs include official participation certificates.",
  },
];

const WhyAttendSection = () => {
  return (
    <section
      className="
        px-5
        sm:px-8
        md:px-14
        lg:px-24
        xl:px-40
        2xl:px-60

        py-14
        md:py-20

        mx-auto
        bg-white
      "
    >
      {/* Header */}
      <div className="mb-12 md:mb-16">
        {/* Eyebrow */}
        <p
          className="
            flex items-center gap-1.5

            text-[15px]
            sm:text-[16px]
            md:text-[18px]

            font-semibold
            mb-4

            tracking-[0.14em]
            uppercase
            text-[#F26A23]
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
            ?
          </span>

          WHY 
        </p>

        {/* Heading */}
        <h2
          className="
            text-[32px]
            sm:text-[38px]
            md:text-[42px]
            lg:text-[46px]

            font-semibold
            leading-[110%]
            tracking-[0.04em]

            text-[#111111]
          "
        >
          Why Attend Our{" "}
          <span className="text-[#F26A23]">
            Events
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2

          gap-5
          md:gap-6
          lg:gap-8

          justify-items-center
        "
      >
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="
              w-full
              max-w-[574px]

              min-h-[163px]

              rounded-[20px]

              pt-[28px]
              sm:pt-[32px]
              lg:pt-[36px]

              pr-[24px]
              sm:pr-[32px]
              lg:pr-[48px]

              pb-[28px]
              sm:pb-[32px]
              lg:pb-[36px]

              pl-[24px]
              sm:pl-[32px]
              lg:pl-[48px]

              flex
              flex-col
              justify-center

              gap-[10px]

              bg-gradient-to-br
              from-[#7F220E]
              to-[#5E1608]

              text-white

              transition-all
              duration-300

              hover:-translate-y-2
              hover:shadow-[0_20px_40px_rgba(127,34,14,0.25)]
            "
          >
            {/* Title */}
            <h3
              className="
                text-[22px]
                sm:text-[24px]
                md:text-[26px]
                lg:text-[28px]

                font-bold
                leading-tight
              "
            >
              {benefit.title}
            </h3>

            {/* Description */}
            <p
              className="
                text-[14px]
                md:text-[16px]

                text-[#D2D2D2]
                font-normal
                leading-[1.7]
              "
            >
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAttendSection;