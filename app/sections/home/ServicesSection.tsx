"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IconArrowNarrowRight, IconExclamationCircle } from "@tabler/icons-react";
import Offer1 from "../../../public/images/home/Offer1.png"
import Offer2 from "../../../public/images/home/Offer2.png"
import Offer3 from "../../../public/images/home/Offer3.jpg"
import Offer4 from "../../../public/images/home/Offer4.jpg"


interface Service {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      title: "General Security",
      description:
        "Trained security personnel providing 24/7 surveillance, access control, patrolling, and risk prevention to ensure safety of people and property.",
      image:Offer1,
    },
    {
      title: "CCTV Operators",
      description:
        "Skilled CCTV operators monitoring surveillance systems in real-time to detect incidents, ensure compliance, and respond quickly.",
      image: Offer2,
    },
    {
      title: "Cleaners",
      description:
        "Professional cleaning services for offices, buildings and facilities, ensuring hygiene, cleanliness, and healthy environments.",
      image: Offer3,
    },
    {
      title: "CVIT",
      description:
        "Secure Cash & Valuables in Transit (CVIT) services with trained personnel and armored transport for complete peace of mind.",
      image: Offer4,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
      <div className="relative z-10 max-w-[1920px] mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-10 sm:mb-14 md:mb-16 lg:mb-20 px-2 sm:px-4 md:px-8 lg:px-[120px]">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="flex items-center justify-center text-[#F97316] text-[10px] sm:text-[11px] font-bold leading-none">
              <IconExclamationCircle className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
            </span>
            <p className="text-[#F97316] uppercase tracking-[2px] sm:tracking-[3px] text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
              What We Offer
            </p>
          </div>

          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[56px] font-bold leading-tight text-black">
            Our <span className="text-[#F97316]">Security Services</span>
          </h2>

          <p className="text-[#979797] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mt-3 sm:mt-4 font-normal max-w-[500px]">
            We offer a full range of professional security services tailored to
            your specific needs.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="w-full max-w-[1430px] mx-auto px-2 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-y-10 lg:justify-items-center">
            {services.map((service, index) => (
              <Link
                href="/service-detail"
                key={index}
                className="
                  group
                  relative
                  w-full
                  sm:max-w-[335px]
                  lg:w-[335px]
                  h-[400px] sm:h-[450px] md:h-[480px] lg:h-[516px]
                  overflow-hidden
                  rounded-[10px]
                  cursor-pointer
                  flex-shrink-0
                  mx-auto sm:mx-0
                "
              >
                {/* IMAGE */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>

                {/* CONTENT — anchored to bottom */}
                <div
                  className="
                    relative
                    z-10
                    h-full
                    flex
                    flex-col
                    justify-end
                    pl-[24px] sm:pl-[28px] md:pl-[31px]
                    pr-[24px] sm:pr-[28px] md:pr-[32px]
                    pb-[32px] sm:pb-[36px] md:pb-[42px]
                    text-white
                  "
                >
                  {/* TITLE */}
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-tight">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-[8px] sm:mt-[10px] text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-white/80 font-normal">
                    {service.description}
                  </p>

                  {/* LEARN MORE */}
                  <div className="flex items-center gap-2 mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#F97316]">
                    <span>Learn More</span>
                    <IconArrowNarrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}