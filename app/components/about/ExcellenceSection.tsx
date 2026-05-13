"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Excellence1 from "../../../public/images/about/Excelence1.jpg";
import Excellence2 from "../../../public/images/about/Excelence2.jpg";
import Excellence3 from "../../../public/images/about/Excelence3.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Employee {
  id: string;
  name: string;
  month: string;
  image: StaticImageData;
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
    image: Excellence1,
    featured: false,
  },
  {
    id: "2",
    name: "Mariya ks",
    month: "February",
    image: Excellence2,
    featured: true,
  },
  {
    id: "3",
    name: "Arun Kumar",
    month: "January",
    image: Excellence3,
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
  const { name, month, image } = employee;

  return (
    <motion.div
      variants={scaleIn(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="
        group relative overflow-hidden rounded-[30px]
        w-full
        max-w-full
        sm:max-w-[448px]

        h-[300px]
        sm:h-[320px]
        md:h-[340px]
        lg:h-[363px]

        cursor-pointer
        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
      "
    >
      <Image
        src={image}
        alt={`${name} – Employee of the Month`}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(180,180,180,0.10) 0%, rgba(60,60,60,0.25) 55%, rgba(10,10,10,0.72) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-[36px] pb-6 md:pb-[31px]">
        <p className="text-[22px] sm:text-[24px] md:text-[26px] font-medium leading-tight text-white drop-shadow-sm">
          {name}
        </p>

        <p className="mt-0.5 text-[14px] md:text-[15px] font-medium text-white/70">
          {month}
        </p>
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
      aria-label="Excellence in Service – Employee of the Month"
    >
      {/* ── Section heading ── */}
      <div className="mb-14 md:mb-20 lg:mb-28 flex flex-col items-center text-center">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            text-center
            text-[32px]
            sm:text-[38px]
            md:text-[42px]
            lg:text-[46px]

            font-semibold
            leading-[110%]
            tracking-[0.04em]
            mb-2
            text-[#111111]
          "
        >
          {title}{" "}
          <span className="text-[#F26A23]">{titleHighlight}</span>
        </motion.h2>

        <motion.p
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mt-4 md:mt-5
            text-[14px]
            md:text-[16px]
            text-[#979797]
            font-normal
          "
        >
          {subtitle}
        </motion.p>
      </div>

      {/* ── Cards grid ── */}
      <div
        className="
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          items-end

          gap-5
        "
      >
        {employees.map((emp, i) => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            delay={0.1 + i * 0.12}
          />
        ))}
      </div>
    </section>
  );
}