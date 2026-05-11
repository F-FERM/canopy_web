"use client";

import Image from "next/image";
import Button from "@/app/components/ui/Button";

interface Service {
  title: string;
  description: string;
  image: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      title: "General Security",
      description:
        "Trained security personnel providing 24/7 surveillance, access control, patrolling, and risk prevention to ensure safety of people and property.",
      image: "/images/home/service-general-security.png",
    },
    {
      title: "CCTV Operators",
      description:
        "Skilled CCTV operators monitoring surveillance systems in real-time to detect incidents, ensure compliance, and respond quickly.",
      image: "/images/home/service-cctv-operators.png",
    },
    {
      title: "Cleaners",
      description:
        "Professional cleaning services for offices, buildings and facilities, ensuring hygiene, cleanliness, and healthy environments.",
      image: "/images/home/service-cleaners.png",
    },
    {
      title: "CVIT",
      description:
        "Secure Cash & Valuables in Transit (CVIT) services with trained personnel and armored transport for complete peace of mind.",
      image: "/images/home/service-cvit.png",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 px-4 sm:px-8">
      <div className="relative z-10 max-w-[1920px] mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-20 px-6 lg:px-[120px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full border border-[#F97316] text-[#F97316] text-[11px] font-bold leading-none">
              ⊙
            </span>
            <p className="text-[#F97316] uppercase tracking-[3px] text-sm font-semibold">
              What We Offer
            </p>
          </div>

          <h2 className="text-[42px] md:text-[56px] font-bold leading-tight text-black">
            Our <span className="text-[#F97316]">Security Services</span>
          </h2>

          <p className="text-[#979797] text-[16px] leading-relaxed mt-4 max-w-[500px]">
            We offer a full range of professional security services tailored to
            your specific needs.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="px-6 lg:px-[120px]">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-[76px]
              w-full
            "
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group
                  flex
                  flex-col
                  overflow-hidden
                  rounded-xl
                  bg-gray-900
                  text-white
                  transition-all
                  duration-300
                  hover:shadow-2xl
                  cursor-pointer
                "
              >
                {/* IMAGE */}
                <div className="relative h-[280px] w-full overflow-hidden bg-gray-800">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <h3 className="text-[20px] font-bold leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-[14px] leading-[1.7] text-gray-300 flex-1">
                    {service.description}
                  </p>

                  <div className="mt-2">
                    <Button
                      label="Learn More"
                      href="/services"
                      variant="primary"
                      color="#F97316"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
