"use client";

import React from "react";
import { motion } from "framer-motion";

// ─── Icons (simple SVG components) ────────────────────────────────────────────

const HelpIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy="0.3em"
      fontSize="18"
      fontWeight="bold"
      fill="currentColor"
    >
      ?
    </text>
  </svg>
);

const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="4" fill="currentColor" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 2L5 8V15C5 23 16 28 16 28C16 28 27 23 27 15V8L16 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const PeopleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M4 20C4 16.5 6.5 14 10 14C13.5 14 16 16.5 16 20"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="22" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M16 20C16 16.5 18.5 14 22 14C25.5 14 28 16.5 28 20"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const ValuesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 4L20 12H28L21 17L24 25L16 20L8 25L11 17L4 12H12L16 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const FocusIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M16 2V6M16 26V30M2 16H6M26 16H30"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

// ─── Icon Map ─────────────────────────────────────────────────────────────────

const iconMap: { [key: string]: React.ReactNode } = {
  help: <HelpIcon />,
  target: <TargetIcon />,
  shield: <ShieldIcon />,
  people: <PeopleIcon />,
  values: <ValuesIcon />,
  focus: <FocusIcon />,
};

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WhyChooseCard {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

interface WhyChooseSectionProps {
  title?: string;
  subtitle?: string;
  cards?: WhyChooseCard[];
}

// ─── Default Data (API-like structure) ────────────────────────────────────────

const defaultCards: WhyChooseCard[] = [
  {
    id: 1,
    number: "01",
    title: "WHAT WE DO",
    description:
      "With an unwavering sense of professionalism and dedication to excellence, we work tirelessly to deliver the best possible service. Our commitment to quality is reflected in every aspect of our work.",
    icon: "help",
  },
  {
    id: 2,
    number: "02",
    title: "OUR MISSION",
    description:
      "In today's world of increasing uncertainty, we are proud to offer something certain to our economy and society. Our mission is rooted in an unwavering sense of security and satisfaction from our customers.",
    icon: "target",
  },
  {
    id: 3,
    number: "03",
    title: "OUR SERVICES",
    description:
      "With highly trained and experienced security personnel, you can be assured that we will deliver on our promises and protect your interests. We use a rigorous and thorough screening process.",
    icon: "shield",
  },
  {
    id: 4,
    number: "04",
    title: "OUR TEAM",
    description:
      "With a team of multi-cultural staff from various nationalities, we strive to become a truly global company that provides services that cannot be trumped to customers all over the world.",
    icon: "people",
  },
  {
    id: 5,
    number: "05",
    title: "OUR VALUES",
    description:
      "With a team of multi-cultural staff from various nationalities, we strive to become a truly global company that provides services that cannot be trumped to customers all over the world.",
    icon: "values",
  },
  {
    id: 6,
    number: "06",
    title: "OUR FOCUS",
    description:
      "The level of focus and attention paid to customers is done so with the aim of making you feel as if you are part of the family, not just part of the job.",
    icon: "focus",
  },
];

// ─── Animation Variants ────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// ─── Component ─────────────────────────────────────────────────────────────────

export default function WhyChooseSection({
  title = "Why Choose",
  subtitle = "Canopy Security Services",
  cards = defaultCards,
}: WhyChooseSectionProps) {
  return (
    <>
      <section className=" from-slate-900 to-slate-800 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {title} <span className="text-[#E8490F]">{subtitle}</span>
        </h2> */}
          <div className="h-1 w-16 bg-[#E8490F] mx-auto mt-4"></div>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 -left-6 w-20 h-20  rounded-full flex items-center justify-center">
                <span className="text-5xl font-bold text-gray-300">
                  {card.number}
                </span>
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-6 inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl text-[#E8490F] group-hover:bg-[#E8490F] group-hover:text-white transition-all duration-300">
                {iconMap[card.icon]}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Hover underline */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#E8490F] rounded-full w-0 group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <div className="bg-[#6B0F1A] h-[500px]"></div>
    </>
  );
}
