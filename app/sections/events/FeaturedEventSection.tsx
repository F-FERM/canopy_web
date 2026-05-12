import React from "react";
import Button from "@/app/components/ui/Button";

const FeaturedEventSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="lg:max-w-4xl mx-auto">
        {/* Featured Event Card */}
        <div
          className="relative rounded-3xl overflow-hidden h-96 md:h-[500px] flex items-center justify-start p-8 md:p-12"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Featured Tag */}
            <div className="mb-4">
              <span className="text-orange-500 font-semibold text-sm md:text-base tracking-widest">
                FEATURED EVENT
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Annual Security Awareness & Safety Training 2026
            </h3>

            {/* Date and Location */}
            <div className="mb-4 space-y-2">
              <p className="text-gray-200 text-base md:text-lg font-semibold">
                15 June 2026
              </p>
              <p className="text-gray-200 text-base md:text-lg">
                Dubai BusinessCenter
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed max-w-xl">
              Join our exclusive live demonstrations, emergency response
              training, and workplace safety sessions by industry experts.
            </p>

            {/* Register Button */}
            <Button
              variant="primary"
              className="px-6 md:px-8 py-3 rounded-md font-semibold"
            >
              Register Now →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventSection;
