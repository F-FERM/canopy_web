"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { IconExclamationCircle } from "@tabler/icons-react";
import Image1 from "../../../public/images/Service/Security1.jpg"
import Image2 from "../../../public/images/Service/Security2.jpg"
import Image3 from "../../../public/images/Service/Security3.png"
import Image4 from "../../../public/images/Service/Security4.jpg"
import Image5 from "../../../public/images/Service/Security5.png"
import Image6 from "../../../public/images/Service/Security6.png"

interface ServiceCard {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "CCTV Operators",
    image:
      Image1,
    description:
      "Professional CCTV monitoring services with highly trained operators ensuring complete surveillance and rapid incident response.",
  },
  {
    id: 2,
    title: "Fire Watch Services",
    image:
      Image2,
    description:
      "Reliable fire watch services designed to safeguard properties, construction sites, and businesses during emergencies.",
  },
  {
    id: 3,
    title: "Construction Security",
    image:
      Image3,
    description:
      "Advanced construction site protection with trained guards, surveillance systems, and 24/7 monitoring support.",
  },
  {
    id: 4,
    title: "CVIT",
    image:
      Image4,
    description:
      "Secure cash and valuables transportation services ensuring safety, reliability, and professional handling.",
  },
  {
    id: 5,
    title: "Housekeeping Services",
    image:
      Image5,
    description:
      "Comprehensive housekeeping solutions maintaining cleanliness, hygiene, and comfort across all environments.",
  },
  {
    id: 6,
    title: "Event Security",
    image:
      Image6,
    description:
      "Professional event security management ensuring crowd control, VIP protection, and smooth event operations.",
  },
];

const SecurityServicesSection = () => {
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
      "
    >
      {/* Header */}
      <div className="mb-15 sm:mb-14 md:mb-16 lg:mb-25 px-2 sm:px-4 md:px-8 lg:px-[120px] text-center">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <span className="flex items-center justify-center text-[#F97316] text-[10px] sm:text-[11px] font-bold leading-none">
            <IconExclamationCircle className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
          </span>

          <p className="text-[#F97316] uppercase tracking-[2px] sm:tracking-[3px] text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
            Our Services
          </p>
        </div>

        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[56px] font-bold leading-tight text-black">
          Professional <span className="text-[#F97316]">Security</span>{" "}
          Services
        </h2>

        <p className="text-[#979797] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mt-3 sm:mt-4 font-normal max-w-[500px] mx-auto">
          Explore our complete range of security services designed to protect
          your business, property, and people.
        </p>
      </div>

      {/* Grid */}
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
        {services.map((service) => (
          <div
            key={service.id}
            className="
              group
              relative

              w-full
              max-w-[425px]

              h-[360px]
              sm:h-[390px]
              lg:h-[426px]

              rounded-[20px]
              overflow-hidden

              bg-white
              border border-gray-200

              shadow
              hover:shadow-xl

              transition-all duration-500
            "
          >
            {/* Image */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/35
                  to-transparent
                "
              />
            </div>

            {/* Content */}
            <div
              className="
                absolute inset-0

                flex flex-col justify-end

                px-6
                pb-[27px]
              "
            >
              {/* Bottom Content */}
              <div
                className="
                  flex flex-col

                  transition-all duration-500
                "
              >
                {/* Title */}
                <h3
                  className="
                    text-[22px]
                    md:text-[24px]

                    font-semibold
                    text-white

                    transition-all duration-500
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <div
                  className="
                    overflow-hidden

                    max-h-0
                    opacity-0

                    group-hover:max-h-[250px]
                    group-hover:opacity-100

                    transition-all duration-500 ease-in-out
                  "
                >
                  <p
                    className="
                      text-[14px]
                      md:text-[15px]

                      text-[#E5E5E5]

                      leading-[1.8]

                      mt-3
                      mb-4
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href={`/service-detail`}
                  className="
                    inline-flex items-center

                    text-[#F97316]
                    font-semibold

                    hover:text-orange-400

                    transition-colors duration-300
                  "
                >
                  View Details
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityServicesSection;