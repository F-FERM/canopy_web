"use client";

import { useRef } from "react";
import { motion, useInView, Transition } from "framer-motion";
import Button from "@/app/components/ui/Button";
import { Phone, ArrowRight } from "lucide-react";

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const makeTransition = (delay = 0): Transition => ({
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  delay,
});

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[#6B0F1A] overflow-hidden py-8 sm:py-9 md:py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4 md:px-8 lg:px-[120px]">
        <div ref={ref} className="text-center">

          {/* BADGE — from left */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-3 sm:mb-4"
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={makeTransition(0)}
          >
            <span className="flex items-center justify-center w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-full border border-[#F97316] text-[#F97316] text-[10px] sm:text-[11px] font-bold leading-none">
              ⊙
            </span>
            <p className="text-[#F97316] uppercase tracking-[2px] sm:tracking-[3px] text-[13px] sm:text-sm font-semibold">
              Get In Touch
            </p>
          </motion.div>

          {/* HEADING — from right */}
          <motion.h2
            className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[56px] font-bold leading-tight text-white mb-3 sm:mb-4 px-4"
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={makeTransition(0.15)}
          >
            Need Professional{" "}
            <span className="text-[#F97316]">Security Services?</span>
          </motion.h2>

          {/* DESCRIPTION — from left */}
          <motion.p
            className="text-gray-300 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[600px] mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4"
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={makeTransition(0.3)}
          >
            Contact us today to discuss your professional security solutions
            tailored to your business needs.
          </motion.p>

          {/* BUTTONS — each from opposite sides */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4">
            {/* Contact Us */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={makeTransition(0.45)}
              className="w-full sm:w-auto"
            >
              <Button
                icon={Phone}
                label="Contact Us"
                variant="primary"
                showArrow={false}
                href="/contact"
                className="w-full sm:w-auto sm:min-w-[160px] md:min-w-[170px] lg:min-w-[184px] h-[48px] sm:h-[52px] md:h-[56px] rounded-[30px] px-5 sm:px-6 py-3 sm:py-[16px] gap-2 sm:gap-[10px] text-[14px] sm:text-[15px] md:text-[16px]"
              />
            </motion.div>

            {/* Request Quote */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={makeTransition(0.45)}
              className="w-full sm:w-auto"
            >
              <Button
                label="Request Quote"
                variant="ghost"
                href="/request-quote"
                className="w-full sm:w-auto sm:min-w-[160px] md:min-w-[170px] lg:w-[184px] h-[48px] sm:h-[52px] md:h-[56px] rounded-[30px] px-6 sm:px-7 md:px-[32px] py-3 sm:py-[16px] gap-2 sm:gap-[10px] border-white text-white text-[14px] sm:text-[15px] md:text-[16px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}