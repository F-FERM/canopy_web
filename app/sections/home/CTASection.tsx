"use client";

import Button from "@/app/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative bg-[#7A0012] overflow-hidden py-20 px-4 sm:px-8">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[120px]">
        <div className="text-center">
          {/* BADGE */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full border border-[#F97316] text-[#F97316] text-[11px] font-bold leading-none">
              ⊙
            </span>
            <p className="text-[#F97316] uppercase tracking-[3px] text-sm font-semibold">
              Get In Touch
            </p>
          </div>

          {/* HEADING */}
          <h2 className="text-[42px] md:text-[56px] font-bold leading-tight text-white mb-4">
            Need Professional{" "}
            <span className="text-[#F97316]">Security Services?</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-[16px] leading-relaxed max-w-[600px] mx-auto mb-8">
            Contact us today to discuss your professional security solutions
            tailored to your business needs.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button label="Contact Us" variant="primary" href="/contact" />
            <Button label="Request Quote" variant="outline" href="/request-quote" className="border-white text-white"   />
          </div>
        </div>
      </div>
    </section>
  );
}
