"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Employee {
  id: string;
  name: string;
  month: string;
  image: string;
  featured?: boolean;
}

interface ExcellenceSectionProps {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  employees?: Employee[];
}

// ─── Default data ─────────────────────────────────────────────────────────────

const defaultEmployees: Employee[] = [
  {
    id: "1",
    name: "John Mathew",
    month: "March",
    image: "/images/about/About1.png",
    featured: false,
  },
  {
    id: "2",
    name: "Mariya ks",
    month: "February",
    image: "/images/about/About2.png",
    featured: true,
  },
  {
    id: "3",
    name: "Arun Kumar",
    month: "January",
    image: "/images/about/About3.png",
    featured: false,
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay },
  },
});

// ─── Employee Card ────────────────────────────────────────────────────────────

function EmployeeCard({
  employee,
  delay,
}: {
  employee: Employee;
  delay: number;
}) {
  const { name, month, image, featured } = employee;

  return (
    <motion.div
      variants={scaleIn(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`
        group relative overflow-hidden rounded-2xl
        ${featured ? "h-50 shadow-[0_16px_48px_rgba(0,0,0,0.18)]" : "h-60 shadow-[0_8px_30px_rgba(0,0,0,0.10)]"}
        w-full cursor-pointer
      `}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={`${name} – Employee of the Month`}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Soft vignette gradient — bottom-heavy for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(180,180,180,0.10) 0%, rgba(60,60,60,0.25) 55%, rgba(10,10,10,0.72) 100%)",
        }}
      />

      {/* Name + month text */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[15px] font-bold leading-tight text-white drop-shadow-sm">
          {name}
        </p>
        <p className="mt-0.5 text-[12px] font-medium text-white/70">{month}</p>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ExcellenceSection({
  title = "Excellence in",
  titleHighlight = "Service",
  subtitle = "Employee of the Month Recognition",
  employees = defaultEmployees,
}: ExcellenceSectionProps) {
  return (
    <section
      className="bg-white px-6 py-16 md:px-12 lg:px-20 lg:py-20"
      aria-label="Excellence in Service – Employee of the Month"
    >
      {/* ── Section heading ── */}
      <div className="mb-30 flex flex-col items-center text-center">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[30px] font-extrabold tracking-tight text-[#111111] md:text-[34px]"
        >
          {title} <span style={{ color: "#E8490F" }}>{titleHighlight}</span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 text-[13px] text-[#999999]"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* ── Cards grid ── */}
      {/* Middle card is taller — achieved via self-end + individual heights */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-end gap-5 sm:grid-cols-3">
        {employees.map((emp, i) => (
          <EmployeeCard key={emp.id} employee={emp} delay={0.1 + i * 0.12} />
        ))}
      </div>
    </section>
  );
}
