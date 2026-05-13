"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  Target,
  BadgeDollarSign,
} from "lucide-react";

import Button from "@/app/components/ui/Button";

// ─────────────────────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
    },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      delay,
    },
  },
});

// ─────────────────────────────────────────────────────────────
// Feature Data
// ─────────────────────────────────────────────────────────────

const features = [
  {
    id: 1,
    title: "Fast Response",
    description: "We reply within hours.",
    icon: <Zap size={22} strokeWidth={2.2} />,
  },
  {
    id: 2,
    title: "Professional Team",
    description: "Certified security experts.",
    icon: <Users size={22} strokeWidth={2.2} />,
  },
  {
    id: 3,
    title: "Custom Plans",
    description: "Tailored security solutions.",
    icon: <Target size={22} strokeWidth={2.2} />,
  },
  {
    id: 4,
    title: "Value for Money",
    description: "Best value for your investment.",
    icon: <BadgeDollarSign size={22} strokeWidth={2.2} />,
  },
];

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────

export default function ContactFormSection() {
  return (
    <section
      className="
        px-5
        sm:px-8
        md:px-14
        lg:px-24
        xl:px-40
        2xl:px-60

        py-14
        md:py-20

        mx-auto
      "
    >
      <div className="mx-auto max-w-[1400px]">

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">

          {/* ───────────────── LEFT FORM CARD ───────────────── */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              bg-white
              border border-[#E8E8E8]
              rounded-[14px]

              shadow-[0_4px_20px_rgba(0,0,0,0.03)]

              w-full

              px-5
              sm:px-7
              md:px-10
              lg:px-[50px]
              xl:px-[64px]

              py-8
              md:py-10
              xl:pt-[43px]
              xl:pb-[61px]

              min-h-auto
              xl:min-h-[728px]
            "
          >
            {/* TITLE */}
            <h2
              className="
                text-[26px]
                sm:text-[32px]
                md:text-[38px]
                xl:text-[42px]

                font-semibold
                leading-[110%]

                tracking-[-0.02em]

                text-[#111111]

                mb-8
                md:mb-10
              "
            >
              Send Message
            </h2>

            {/* FORM */}
            <form className="space-y-5 md:space-y-7">

              {/* NAME */}
              <div>
                <label
                  className="
                    block

                    text-[16px]
                    md:text-[18px]

                    font-medium
                    text-[#111111]

                    mb-2
                    md:mb-3
                  "
                >
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name..."
                  className="
                    w-full

                    h-[56px]
                    md:h-[62px]

                    rounded-[10px]
                    border border-[#E3E3E3]

                    px-4
                    md:px-6

                    bg-white
                    outline-none

                    text-[15px]
                    md:text-[16px]

                    text-[#111111]

                    placeholder:text-[#C6C6C6]

                    focus:border-[#F26A23]

                    transition-all
                  "
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  className="
                    block

                    text-[16px]
                    md:text-[18px]

                    font-medium
                    text-[#111111]

                    mb-2
                    md:mb-3
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="
                    w-full

                    h-[56px]
                    md:h-[62px]

                    rounded-[10px]
                    border border-[#E3E3E3]

                    px-4
                    md:px-6

                    bg-white
                    outline-none

                    text-[15px]
                    md:text-[16px]

                    text-[#111111]

                    placeholder:text-[#C6C6C6]

                    focus:border-[#F26A23]

                    transition-all
                  "
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  className="
                    block

                    text-[16px]
                    md:text-[18px]

                    font-medium
                    text-[#111111]

                    mb-2
                    md:mb-3
                  "
                >
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Title..."
                  className="
                    w-full

                    h-[56px]
                    md:h-[62px]

                    rounded-[10px]
                    border border-[#E3E3E3]

                    px-4
                    md:px-6

                    bg-white
                    outline-none

                    text-[15px]
                    md:text-[16px]

                    text-[#111111]

                    placeholder:text-[#C6C6C6]

                    focus:border-[#F26A23]

                    transition-all
                  "
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  className="
                    block

                    text-[16px]
                    md:text-[18px]

                    font-medium
                    text-[#111111]

                    mb-2
                    md:mb-3
                  "
                >
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Type Here..."
                  className="
                    w-full

                    h-[140px]
                    md:h-[160px]

                    rounded-[10px]
                    border border-[#E3E3E3]

                    p-4
                    md:p-6

                    bg-white
                    outline-none
                    resize-none

                    text-[15px]
                    md:text-[16px]

                    text-[#111111]

                    placeholder:text-[#C6C6C6]

                    focus:border-[#F26A23]

                    transition-all
                  "
                />
              </div>

              {/* BUTTON */}
              <div className="pt-2">
                <Button
                  label="Send Now"
                  variant="primary"
                  className="
                    w-full
                    sm:w-[220px]
                    md:w-[250px]

                    h-[56px]
                    md:h-[64px]

                    rounded-[10px]

                    bg-[#F26A23]
                    hover:bg-[#df5f1d]

                    text-white

                    text-[16px]
                    md:text-[18px]

                    font-semibold

                    transition-all
                    duration-300
                  "
                />
              </div>
            </form>
          </motion.div>

          {/* ───────────────── RIGHT FEATURE CARDS ───────────────── */}
          <div className="flex flex-col gap-5 md:gap-7">

            {features.map((item, i) => (
              <motion.div
                key={item.id}
                variants={scaleIn(0.1 + i * 0.12)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="
                  bg-white
                  border border-[#E8E8E8]

                  rounded-[20px]

                  px-5
                  sm:px-7
                  md:px-10

                  py-7
                  md:py-10

                  min-h-[140px]
                  md:min-h-[154px]

                  flex items-center

                  shadow-[0_4px_18px_rgba(0,0,0,0.02)]

                  transition-all
                "
              >
                <div className="flex items-start gap-4 md:gap-5">

                  {/* ICON */}
                  <div className="text-[#F26A23] mt-1 shrink-0">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3
                      className="
                        text-[20px]
                        sm:text-[24px]
                        md:text-[30px]
                        xl:text-[34px]

                        font-semibold
                        leading-[110%]

                        text-[#111111]

                        mb-2
                        md:mb-3
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-[14px]
                        md:text-[16px]
                        xl:text-[18px]

                        text-[#5B5B5B]

                        leading-[160%]
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}