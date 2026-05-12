"use client";

import { IconHelpOctagon } from "@tabler/icons-react";
import {
  Users,
  Clock,
  CheckCircle,
  Zap,
  DollarSign,
  Shield,
} from "lucide-react";

interface Feature {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function WhyChooseUsSection() {
  const features: Feature[] = [
    {
      number: "01",
      title: "Construction Security",
      description:
        "Protect construction sites from theft, vandalism, and unauthorized access with dedicated on-site guards.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      number: "02",
      title: "24/7 Security Monitoring",
      description:
        "Round-the-clock surveillance and monitoring services to ensure your property and personnel are protected at all times.",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      number: "03",
      title: "Compliance & Quality Assurance",
      description:
        "We follow strict compliance protocols and quality assurance processes to maintain high service standards.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      number: "04",
      title: "Quick Response to Client Requirements",
      description:
        "We respond promptly and efficiently to all client requests with a client-first approach.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      number: "05",
      title: "Value for Money",
      description:
        "We deliver reliable and professional security services with the best value for your investment.",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      number: "06",
      title: "Professionally Screened and Vetted Security Personnel",
      description:
        "All our security staff are thoroughly screened, vetted, and selected for reliability and professionalism.",
      icon: <Users className="w-8 h-8" />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 px-4 sm:px-8">
      <div className="relative z-10 max-w-[1920px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-20 px-6 lg:px-[120px]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center justify-center text-[#F97316] text-[11px] font-bold leading-none">
              <IconHelpOctagon />
            </span>
            <p className="text-[#F97316]  tracking-[3px] text-[18px] font-semibold uppercase">
              Why canopy
            </p>
          </div>

          <h2 className="text-[42px] md:text-[56px] font-bold leading-tight text-black mb-4">
            Why <span className="text-[#F97316]">Choose Us</span>
          </h2>

          <p className="text-[#979797] text-[16px] leading-relaxed max-w-[600px] mx-auto font-normal">
            We are committed to delivering the highest standard of security
            services with professionalism, integrity, and reliability.
          </p>
        </div>

        {/* FEATURES GRID */}
      <div className="px-6 lg:px-[120px] py-16">
  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-8
      w-full
    "
  >
    {features.map((feature, index) => (
      <div
        key={index}
        className="
          relative
          bg-white
          border
          border-[#E5E7EB]
          overflow-hidden
          transition-all
          duration-300
          hover:shadow-xl
          group
        "
        style={{
          width: "100%",
          maxWidth: "560px",
          height: "375px",
          borderRadius: "10px",
          clipPath:
            "polygon(0 0, calc(100% - 90px) 0, 100% 90px, 100% 100%, 0 100%)",
        }}
      >
        {/* TOP RIGHT CUT BOX */}
       {/* TOP RIGHT CUT CARD */}
<div
  className="
    absolute
    top-0
    right-0
    bg-white
    border-l
    border-b
    border-[#E5E7EB]
    flex
    items-center
    justify-center
    group-hover:border-[#F97316]
    transition-all
    duration-300
  "
  style={{
    width: "181px",
    height: "101px",
    borderRadius: "0 17px 0 17px",
    paddingTop: "10px",
    paddingRight: "28px",
    paddingBottom: "10px",
    paddingLeft: "28px",
    clipPath: "polygon(35% 0%, 100% 0%, 100% 100%, 0% 100%)",
  }}
>
  <span
    className="
      text-[32px]
      font-bold
      text-[#D97354]
      leading-none
    "
  >
    {feature.number}
  </span>
</div>

        {/* HOVER BOTTOM LINE */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[4px]
            bg-[#F97316]
            w-0
            group-hover:w-full
            transition-all
            duration-300
          "
        />

        {/* CONTENT */}
        <div className="p-8 flex flex-col h-full">
          {/* ICON */}
          <div
            className="
              w-[60px]
              h-[60px]
              rounded-[14px]
              border
              border-[#E5E7EB]
              flex
              items-center
              justify-center
              text-[#D97354]
              mb-8
              transition-all
              duration-300
              group-hover:border-[#F97316]
            "
          >
            {feature.icon}
          </div>

          {/* TITLE */}
          <h3 className="text-[22px] font-bold text-black mb-4 leading-snug max-w-[320px]">
            {feature.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-[15px] leading-[30px] text-[#8B8B8B] max-w-[420px]">
            {feature.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
