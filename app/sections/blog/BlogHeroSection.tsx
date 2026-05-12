import React from "react";
import Button from "@/app/components/ui/Button";

const BlogHeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-150 overflow-hidden p-4 md:p-6 lg:p-8 rounded-3xl">
      {/* Background Image */}
      <div
        className="absolute inset-6 bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-12 lg:px-20 max-w-6xl">
        {/* Tag */}
        <div className="mb-4">
          <span className="text-orange-500 font-semibold text-sm md:text-sm">
            LATEST INSIGHTS
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-3xl lg:text-3xl font-bold leading-tight mb-6 max-w-2xl">
          <span className="text-white">Security Tips, Industry News</span>
          <br />
          <span className="text-white">&</span>{" "}
          <span className="text-orange-500">Professional Insights</span>
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-xs md:text-xs max-w-2xl mb-8 leading-relaxed">
          Stay informed with expert advice, safety strategies, and the latest
          updates from Canopy Security Services.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="primary"
            label="View Blogs →"
            className="px-8 py-3 rounded-md font-semibold"
          />
          <Button
            variant="outline"
            label="Contact Us"
            className="px-8 py-3 rounded-md font-semibold bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
