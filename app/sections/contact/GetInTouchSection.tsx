import React from "react";
import Button from "@/app/components/ui/Button";

const GetInTouchSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Main Card with Background */}
        <div
          className="relative rounded-3xl overflow-hidden h-96 md:h-125 flex items-center justify-center p-6 md:p-12 lg:p-16"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl">
            {/* Tag */}
            <div className="mb-4">
              <span className="text-orange-500 font-semibold text-sm md:text-sm tracking-widest">
                GET IN TOUCH
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-6 leading-tight">
              <span className="text-white">Get In Touch With Our</span>
              <br />
              <span className="text-orange-500">Security</span>
              <br />
              <span className="text-orange-500">Experts</span>
            </h2>

            {/* Description */}
            <p className="text-gray-200 text-base md:text-sm mb-8 leading-relaxed max-w-2xl mx-auto">
              Have questions? Let's build the right protection solution for you.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                label="📞 Call Now"
                className="px-8 py-3 rounded-full font-semibold flex items-center gap-2"
              />
              <Button
                variant="outline"
                label="Request Quote →"
                className="px-8 py-3 rounded-full font-semibold bg-white text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
