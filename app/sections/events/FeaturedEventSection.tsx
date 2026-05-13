"use client";

import React from "react";
import Button from "@/app/components/ui/Button";
import HeroBg from "../../../public/images/EVENTS/Event2.jpg"

const FeaturedEventSection = () => {
  return (
    <section
      className="
        w-full
       

        py-14
        md:py-20

        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-24
      "
    >
      {/* Main Card */}
      <div
        className="
          relative
          w-full
          max-w-[1167px]

          h-[420px]
          sm:h-[500px]
          lg:h-[656px]

          mx-auto

          rounded-[28px]
          overflow-hidden
        "
        style={{
           backgroundImage: `url(${HeroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Glass Content Card */}
        <div
          className="
            absolute

            left-1/2
            -translate-x-1/2

            bottom-6
            sm:bottom-8
            lg:bottom-[54px]

            w-[92%]
            sm:w-[88%]
            lg:w-[970px]

            min-h-[260px]
            lg:h-[451px]

            rounded-[20px]

            border border-white/30

              bg-[#D9D9D9]/20
          

            pt-6
            sm:pt-7
            lg:pt-[28px]

            pr-6
            sm:pr-8
            lg:pr-[73px]

            pb-6
            sm:pb-7
            lg:pb-[28px]

            pl-6
            sm:pl-8
            lg:pl-[75px]

            flex
            flex-col
            justify-center

            gap-[6px]

            z-20
          "
        >
          {/* Tag */}
          <p
            className="
              text-[#F97316]

              text-[12px]
              sm:text-[14px]
              md:text-[16px]

              font-semibold
              tracking-[0.18em]
              uppercase
            "
          >
            ✩ Featured Event
          </p>

          {/* Title */}
          <h2
            className="
              text-white

              text-[28px]
              sm:text-[38px]
              md:text-[48px]
              lg:text-[46px]

              font-semibold
              leading-[1.15]

              max-w-[760px]
            "
          >
            Annual Security Awareness & Safety Training 2026
          </h2>

          {/* Date & Location */}
          <div className="space-y-0">
            <p
              className="
                text-[#CFCFCF]

                text-[16px]
                md:text-[16px]

                font-normal
                leading-[1.40]
              "
            >
             15 June 2026<br/>
Dubai Business Center<br/>
Join our annual event featuring live demonstrations, emergency response training, and workplace safety sessions by industry experts.
            </p>

            {/* <p
              className="
                text-[#CFCFCF]

                text-[15px]
                md:text-[17px]
                leading-tight
              "
            >
              Dubai Business Center
            </p> */}
          </div>

          {/* Description */}
          {/* <p
            className="
                text-[#CFCFCF]

              text-[14px]
              sm:text-[15px]
              md:text-[16px]

              leading-[1.8]

              max-w-[700px]
            "
          >
            Join our annual event featuring live demonstrations, emergency
            response training, and workplace safety sessions by industry
            experts.
          </p> */}

          {/* Button */}
          <div className="pt-2">
            <Button
              variant="primary"
              label="Register Now"
              className="
                h-[54px]

                px-6
                md:px-8

                rounded-[12px]
                font-semibold
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventSection;