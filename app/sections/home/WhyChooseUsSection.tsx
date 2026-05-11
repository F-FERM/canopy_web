"use client";

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
            <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full border border-[#F97316] text-[#F97316] text-[11px] font-bold leading-none">
              ⊙
            </span>
            <p className="text-[#F97316] uppercase tracking-[3px] text-sm font-semibold">
              Why Canopy
            </p>
          </div>

          <h2 className="text-[42px] md:text-[56px] font-bold leading-tight text-black mb-4">
            Why <span className="text-[#F97316]">Choose Us</span>
          </h2>

          <p className="text-[#979797] text-[16px] leading-relaxed max-w-[600px] mx-auto">
            We are committed to delivering the highest standard of security
            services with professionalism, integrity, and reliability.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="px-6 lg:px-[120px]">
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
                  p-8
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  transition-all
                  duration-300
                  hover:border-[#F97316]
                  hover:shadow-lg
                  group
                "
              >
                {/* NUMBER BACKGROUND */}
                <div className="absolute top-4 right-4 text-[80px] font-bold text-gray-100 leading-none pointer-events-none select-none">
                  {feature.number}
                </div>

                {/* ICON */}
                <div className="relative z-10 mb-4 text-[#F97316] group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 text-[18px] font-bold text-black mb-3 leading-tight">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 text-[14px] leading-[1.7] text-[#979797]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
