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
import Image from "next/image";
import Pattern from "../../../public/images/home/HomePattern1.png"
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
    <section className="relative overflow-hidden py-28">
      <div
        className="
          relative z-10 max-w-[1920px] mx-auto
          px-5 sm:px-8 md:px-14 lg:px-24 xl:px-40 2xl:px-60
        "
      >
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center justify-center text-[#F97316] text-[11px] font-bold leading-none">
              <IconHelpOctagon />
            </span>

            <p className="text-[#F97316] tracking-[3px] text-[18px] font-semibold uppercase">
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
        
<div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
  <Image
    src={Pattern}
    alt="Pattern"
    width={400}
    height={400}
    className="opacity-20"
  />
</div> 
<div className="absolute right-[9px] top-[190px] z-0 pointer-events-none">
  <Image
    src={Pattern}
    alt="Pattern Right"
    width={350} 
    height={350}
    className="opacity-20"
  />
</div>
      {/* GRID */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {features.map((feature, index) => {
              const gridClasses = [
                "md:col-span-4",
                "md:col-span-8",
                "md:col-span-8",
                "md:col-span-4",
                "md:col-span-4",
                "md:col-span-8",
              ];

              const isSmallCard =
                gridClasses[index] === "md:col-span-4";

              return (
                <div
                  key={index}
                  className={`
                    relative w-full ${gridClasses[index]}
                    min-h-[300px]
                    overflow-hidden
                    rounded-[10px]
                    transition-all duration-300 group hover:shadow-xl 
                  `}
                  style={{
                    backgroundImage: `url(${
                      isSmallCard
                        ? "/images/home/Subtract.png"
                        : "/images/home/Subtract1.png"
                    })`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  }}
                >
                  {/* HOVER LINE */}
                  <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#D97354] transition-all duration-500 group-hover:w-full rounded-b-[10px] z-30" />

                  {/* NUMBER CARD */}
                  <div
                    className={`
                      absolute  border flex items-center justify-center 
                      transition-all duration-300 z-20 border-gray-300
                      ${isSmallCard ? "  top-[20px] right-[2px]" : "  top-[20px] right-[20px]"}
                      group-hover:border-[#F97316]
                    `}
                    style={{
                      width: isSmallCard ? "140px" : "270px",
                      height: isSmallCard ? "68px" : "78px",
                      borderRadius: isSmallCard ? "17px" : "20px",
                      padding: "10px 28px",
                      overflow: "hidden",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.03)", 
                    }}
                  >
                    <div className="flex items-center leading-none tracking-[0.04em] font-bold">
                      <span
                        style={{ fontSize: isSmallCard ? "30px" : "46px" }}
                        className="text-[#D9D9D9]"
                      >
                        {feature.number.charAt(0)}
                      </span>

                      <span
                        style={{ fontSize: isSmallCard ? "40px" : "60px" }}
                        className="text-[#D97354] -ml-[2px]"
                      >
                        {feature.number.charAt(1)}
                      </span>
                    </div>
                  </div>
              

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col h-full p-12 justify-center">
                    {/* ICON */}
                    <div className="w-[73px] h-[73px] p-[23px] mb-6 flex items-center justify-center bg-white border border-[#E5E7EB] rounded-[10px] text-[#D97354] shadow-xl transition-all duration-300 group-hover:bg-[#D97354] group-hover:text-white">
                      {feature.icon}
                    </div>

                    {/* TITLE */}
                    <h3 className="text-[28px] font-bold text-black mb-4 max-w-[70%]">
                      {feature.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-[16px] leading-[28px] text-[#555] max-w-[75%]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}