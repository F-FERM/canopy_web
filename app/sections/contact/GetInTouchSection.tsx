"use client";

import Button from "@/app/components/ui/Button";
import HeroBg from "../../../public/images/blog/Blog1.png";
import { Phone } from "lucide-react";

const GetInTouchSection = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        px-4
        sm:px-6
        md:px-8
        lg:px-8

        py-6
        md:py-8
      "
    >
      {/* Main Container */}
      <div
        className="
          relative
          w-full
          max-w-[1760px]
          mx-auto

          h-[420px]
          sm:h-[520px]
          md:h-[620px]
          lg:h-[720px]

          rounded-[20px]
          overflow-hidden
        "
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroBg.src})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Content Wrapper */}
        <div
          className="
            relative
            z-10

            flex
            items-center
            justify-center

            text-center

            h-full

            px-5
            sm:px-8
            md:px-14
            lg:px-24
            xl:px-[148px]

            py-10
            sm:py-14
            md:py-16
          "
        >
          {/* Content Box */}
          <div
            className="
              flex
              flex-col
              items-center

              gap-4
              sm:gap-5
              md:gap-6
              lg:gap-[25px]

              w-full
              max-w-[900px]
            "
          >
            {/* Tag */}
            <p
              className="
                flex items-center gap-2

                text-[13px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[18px]

                font-semibold
                tracking-[0.14em]
                uppercase
                text-[#F26A23]
              "
            >
              <span
                aria-hidden="true"
                className="
                  text-[14px]
                  sm:text-[16px]
                  md:text-[18px]

                  leading-none
                "
              >
                ⓘ
              </span>

              <span>GET IN TOUCH</span>
            </p>

            {/* Heading */}
            <h2
              className="
                font-semibold
                leading-[1.1]

                text-[30px]
                sm:text-[40px]
                md:text-[48px]
                lg:text-[56px]
              "
            >
              <span className="text-white">
                Get In Touch With Our
              </span>
              <br />

              <span className="text-[#F26A23]">
                Security Experts
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                text-[#CDCDCD]

                text-[14px]
                sm:text-[15px]
                md:text-[16px]

                font-normal
                leading-[1.8]

                max-w-[720px]
              "
            >
              Have questions? Let’s build the right protection solution
              for your business, property, and people with our trusted
              security professionals.
            </p>

            {/* Buttons */}
            <div
              className="
                flex
                flex-col
                sm:flex-row

                items-center
                justify-center

                gap-4

                pt-2
                sm:pt-4
              "
            >
              <Button
              icon={Phone}
                label="Call Now"
                variant="primary"
                className="rounded-full"
                showArrow={false}
              />

              <Button
                label="Request Quote →"
                variant="outline"
                className="
                  bg-transparent
                  text-white
                  border-white
                  rounded-full
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;