"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import HotelIcon from "../../../public/images/Service/Icon1.png";
import EstateIcon from "../../../public/images/Service/Icon2.png";
import ExchangeIcon from "../../../public/images/Service/Icon10.png";
import WorkplaceIcon from "../../../public/images/Service/Icon4.png";
import ConstructionIcon from "../../../public/images/Service/Icon5.png";
import CorporateIcon from "../../../public/images/Service/Icon6.png";
import ManufacturingIcon from "../../../public/images/Service/Icon7.png";
import CulturalIcon from "../../../public/images/Service/Icon8.png";
import BankIcon from "../../../public/images/Service/Icon9.png";

interface IndustryCard {
  id: number;
  title: string;
  icon: StaticImageData;
}

const industries: IndustryCard[] = [
  {
    id: 1,
    title: "Hospitality & Hotels",
    icon: HotelIcon,
  },
  {
    id: 2,
    title: "Residential & Commercial Estate",
    icon: EstateIcon,
  },
  {
    id: 3,
    title: "Government & Public Institutions",
    icon: WorkplaceIcon,
  },
  {
    id: 4,
    title: "Government & Public Institutions",
    icon: WorkplaceIcon,
  },
  {
    id: 5,
    title: "Healthcare Facilities",
    icon: ConstructionIcon,
  },
  {
    id: 6,
    title: "Construction & Industrial Projects",
    icon: CorporateIcon,
  },
  {
    id: 7,
    title: "Corporate Offices & Campuses",
    icon: ManufacturingIcon,
  },
  {
    id: 8,
    title: "Manufacturing & Industrial Facilities",
    icon: CulturalIcon,
  },
  {
    id: 9,
    title: "Cultural Institutions",
    icon: BankIcon,
  },
  {
    id: 10,
    title: "Banks & Exchange Houses",
    icon: ExchangeIcon,
  },
];

const IndustriesSection = () => {
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
      {/* Grid */}
      <div
        className="
          grid

          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5

          gap-4
          md:gap-5

          justify-items-center
        "
      >
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="
              w-full
              max-w-[276px]

              h-[139px]

              rounded-[30px]
              border border-gray-200
              bg-white

              flex flex-col
              items-center
              justify-center

              px-6
              sm:px-8
              lg:px-[61px]

              pt-[23px]
              pb-[19px]

              gap-[10px]

              hover:shadow-lg
              hover:border-orange-300
              hover:-translate-y-1

              transition-all duration-300
            "
          >
            {/* Icon */}
            <div
              className="
                relative

                w-[28px]
                h-[28px]

                sm:w-[30px]
                sm:h-[30px]
              "
            >
              <Image
                src={industry.icon}
                alt={industry.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3
              className="
                text-center

                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[16px]

                font-semibold
                text-[#111111]

                leading-[1.4]
              "
            >
              {industry.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;