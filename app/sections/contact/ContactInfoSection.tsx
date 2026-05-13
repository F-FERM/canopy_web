"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

import cardBg from "../../../public/images/contact/Rectangle.png";

interface ContactInfo {
  id: number;
  title: string;
  icon: React.ReactNode;
  details: string[];
}

const contactDetails: ContactInfo[] = [
  {
    id: 1,
    title: "Call Us",
    icon: <Phone size={30} strokeWidth={2} />,
    details: ["Phone : 043384044", "Fax : 043384494"],
  },
  {
    id: 2,
    title: "Email",
    icon: <Mail size={30} strokeWidth={2} />,
    details: ["info@canopysecurityuae.com"],
  },
  {
    id: 3,
    title: "Address",
    icon: <MapPin size={30} strokeWidth={2} />,
    details: [
      "Office No 301, Al Safa Commercial",
      "Building Umm Hurair-1, Khalid Bin Al Waleed",
      "Road, Near Burjuman metro Exit-1, Dubai, UAE",
    ],
  },
];

const ContactInfoSection = () => {
  return (
    <section
      className="
        px-5 sm:px-8 md:px-14 lg:px-24 xl:px-40 2xl:px-60
        py-14 md:py-20
        bg-white
      "
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-14 md:mb-20">
          <h2
            className="
              text-[32px] sm:text-[38px] md:text-[42px] lg:text-[46px]
              font-semibold
              leading-[1.7]
              tracking-[0.02em]
              text-[#111111]
            "
          >
            <span className="text-black">Call Now Get Free Quote</span>
            <br />
            <span className="text-[#F26A21]">We're Here</span>{" "}
            <span className="text-black">To Help</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {contactDetails.map((contact) => (
            <div
              key={contact.id}
              className="
                relative
                w-full
                max-w-[420px]
                mx-auto

                h-[260px]

                bg-contain bg-no-repeat bg-center
              "
              style={{
                backgroundImage: `url(${cardBg.src})`,
              }}
            >

              {/* ICON (NO POSITION CHANGE, ONLY RESPONSIVE TWEAK) */}
              <div
                className="
                  absolute
                  top-[-4px]
                  right-[-19px]

                  sm:top-[-6px]
                  sm:right-[-15px]

                  md:top-[-8px]
                  md:right-[-18px]
                "
              >
                <div
                  className="
                    w-[92px]
                    h-[92px]
                    rounded-full
                    bg-white
                    border border-[#E8E8E8]
                    flex items-center justify-center
                    shadow-md
                  "
                >
                  <div className="text-[#F26A21] scale-[1.4]">
                    {contact.icon}
                  </div>
                </div>
              </div>

              {/* CONTENT (UNCHANGED) */}
              <div
                className="
                  h-full
                  flex flex-col justify-center
                  px-8 sm:px-10
                  pt-10 pb-10
                "
              >
                <h3
                  className="
                    text-[28px] sm:text-[32px] lg:text-[24px]
                    font-semibold text-black
                    mb-5
                  "
                >
                  {contact.title}
                </h3>

                <div className="space-y-1">
                  {contact.details.map((detail, index) => (
                    <p
                      key={index}
                      className="
                        text-[14px] sm:text-[15px]
                        leading-[28px]
                        text-[#4A4A4A]
                      "
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;