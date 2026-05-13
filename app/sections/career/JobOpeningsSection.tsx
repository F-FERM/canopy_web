"use client";

import React from "react";
import Button from "@/app/components/ui/Button";
import { IconHelpOctagon } from "@tabler/icons-react";

interface JobOpening {
  id: number;
  title: string;
  description: string;
  requirements: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: "Security Guard",
    description:
      "Provide security and surveillance for residential, commercial, and industrial properties.",
    requirements: [
      "Minimum 1 year UAE experience",
      "SIRA certificate required",
      "Good communication skills",
    ],
  },
  {
    id: 2,
    title: "Security Officer",
    description:
      "Monitor and protect commercial and residential properties with professional security services.",
    requirements: [
      "Valid security certification",
      "Excellent observation skills",
      "Professional appearance",
    ],
  },
  {
    id: 3,
    title: "Site Supervisor",
    description:
      "Lead security teams, manage shifts, and ensure safety standards are maintained.",
    requirements: [
      "2+ years supervisory experience",
      "Strong leadership skills",
      "Ability to manage large teams",
    ],
  },
];

const JobOpeningsSection = () => {
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
      <div className="w-full">
        {/* Header */}
        <div
          className="
            text-center

            mb-14
            md:mb-20

            px-2
            sm:px-4
            md:px-8
            lg:px-[120px]
          "
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center justify-center text-[#F97316] text-[11px] font-bold leading-none">
              <IconHelpOctagon className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
            </span>

            <p
              className="
                text-[#F97316]

                tracking-[2px]
                sm:tracking-[3px]

                text-[14px]
                sm:text-[16px]
                md:text-[18px]

                font-semibold
                uppercase
              "
            >
              Openings
            </p>
          </div>

          <h2
            className="
              text-[30px]
              sm:text-[38px]
              md:text-[46px]
              lg:text-[56px]

              font-bold
              leading-tight

              text-black
              mb-4
            "
          >
            Current <span className="text-[#F97316]">Job</span> Openings
          </h2>

          <p
            className="
              text-[#979797]

              text-[14px]
              sm:text-[15px]
              md:text-[16px]

              leading-relaxed

              max-w-[600px]
              mx-auto

              font-normal
            "
          >
            Explore our latest career opportunities and become part of a trusted
            and professional security team.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3

            gap-6
            lg:gap-8

            justify-items-center
          "
        >
          {jobOpenings.map((job) => (
           <div
  key={job.id}
  className="
    group

    w-full
    max-w-[425px]

    min-h-[477px]

    rounded-[20px]
    border border-gray-200
    bg-white

    pt-[41px]
    pr-6
    sm:pr-8
    lg:pr-[49px]

    pb-[41px]

    pl-6
    sm:pl-8
    lg:pl-[49px]

    flex flex-col

    shadow-sm
    hover:shadow-2xl

    hover:-translate-y-3

    transition-all duration-300 ease-out
  "
>
              {/* Job Title */}
              <h3
                className="
                  text-[22px]
                  sm:text-[24px]
                  lg:text-[28px]

                  font-bold
                  text-gray-900

                  leading-tight
                  mb-4
                "
              >
                {job.title}
              </h3>

              {/* Description */}
              <p
                className="
font-normal
                  text-[14px]
                  md:text-[16px]

                  leading-[1.8]

                  mb-8
                "
              >
                {job.description}
              </p>

              {/* Requirements */}
              <ul className="space-y-4 mb-10 flex-1">
                {job.requirements.map((requirement, index) => (
                  <li
                    key={index}
                    className="
                      flex items-start gap-3

                      text-[14px]
                      md:text-[16px]

                      text-gray-700
                      leading-[1.7]
                    "
                  >
                    <span className="text-black font-bold mt-[2px]">
                      •
                    </span>

                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="mt-auto">
                <Button
                  variant="primary"
                  label="Apply Now"
                  className="
                    w-full
                    sm:w-[220px]

                    h-[54px]

                    rounded-xl
                    font-semibold
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpeningsSection;