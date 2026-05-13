"use client";

import React from "react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Consultation",
    description:
      "Explore our complete range of security services designed to protect your business, property, and people.",
  },
  {
    id: 2,
    title: "Site Assessment",
    description:
      "Our team identifies vulnerabilities and security risks.",
  },
  {
    id: 3,
    title: "Security Planning",
    description:
      "We create a custom protection strategy for your property.",
  },
  {
    id: 4,
    title: "Deployment",
    description:
      "Our trained guards and systems are deployed immediately.",
  },
];

const ProcessSection = () => {
  return (
    <>
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
              ⓘ
            </span>

            <span className="text-orange-500 font-semibold text-sm md:text-base tracking-widest">
              Our Process
            </span>
          </p>

          <h2
            className="
              text-[32px]
              sm:text-[38px]
              md:text-[42px]
              lg:text-[46px]

              font-semibold
              leading-[110%]
              tracking-[0.04em]

              mb-2
              text-[#111111]
            "
          >
            <span className="text-gray-900">
              How We Secure
            </span>{" "}
            <span className="text-orange-500">
              Your
            </span>
            <br />
            <span className="text-orange-500">
              Property
            </span>
          </h2>
        </div>

        {/* Process Grid */}
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
          {processSteps.map((step) => (
            <div
              key={step.id}
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

                flex flex-col
                justify-center

                gap-[10px]

                bg-gradient-to-br
                from-[#7F220E]
                to-[#7F220E]

                text-white

                hover:shadow-xl
                transition-all duration-300
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
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-[14px]
                  md:text-[16px]

                  text-[#AEAEAE]
                  font-normal
                  leading-[1.7]
                "
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProcessSection;