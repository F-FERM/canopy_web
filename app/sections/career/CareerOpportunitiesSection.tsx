import React from "react";
import Button from "@/app/components/ui/Button";

const CareerOpportunitiesSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Tag */}
            <p className="text-orange-500 font-semibold text-sm md:text-sm tracking-widest mb-2">
              CAREER OPPORTUNITIES
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Build Your</span>{" "}
              <span className="text-orange-500">Future</span>
              <span className="text-gray-900"> With</span>
              <br />
              <span className="text-gray-900">Canopy Security Services</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-sm mb-8 leading-relaxed">
              Join one of the leading security service providers in the UAE. We
              are looking for disciplined, professional, and motivated
              individuals ready to build a rewarding career in the security
              industry.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                className="px-8 py-3 rounded-md font-semibold"
              >
                View Openings →
              </Button>
              <Button
                variant="secondary"
                className="px-8 py-3 rounded-md font-semibold"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Right Content - Why Join Us Card + Image */}
          <div className="relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=500&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Why Join Us Card */}
            <div className="relative z-10 p-6 md:p-8 rounded-2xl bg-white/95 backdrop-blur w-80 mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Join Us
              </h3>

              {/* Stats */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-orange-500 font-bold text-2xl">500+</div>
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Employees Across UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-orange-500 font-bold text-2xl">24/7</div>
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Professional Support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-orange-500 font-bold text-2xl">10+</div>
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Years of Experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-orange-500 font-bold text-2xl">100%</div>
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Career Growth Opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunitiesSection;
