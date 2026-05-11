"use client";

import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ButtonProps {
  label: string;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  color?: string;
  showArrow?: boolean;
  icon?: LucideIcon;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Button({
  label,
  href,
  variant = "primary",
  color = "#F97316",
  showArrow,
  icon: Icon,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const isOutline = variant === "outline";
  const isGhost   = variant === "ghost";

  const displayArrow = showArrow ?? isPrimary;

  // ── Shared base classes ──────────────────────────────────────────────────
  const base = `
    inline-flex items-center justify-center gap-2
    h-[51px] px-[45px] rounded-[10px]
    text-[18px] font-medium
    transition-all duration-300
    select-none whitespace-nowrap
    disabled:opacity-50 disabled:pointer-events-none
    hover:-translate-y-1
  `;

  // ── Variant-specific inline styles & classes ─────────────────────────────
  const variantClass = isOutline
    ? "border border-black bg-transparent text-black hover:bg-black hover:text-white"
    : isGhost
    ? "bg-transparent text-black hover:underline"
    : "text-white hover:shadow-lg";  

  const inlineStyle =
    isPrimary && !disabled ? { backgroundColor: color } : undefined;

  // ── Inner content ────────────────────────────────────────────────────────
  const content = (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      {label}
      {displayArrow && <ArrowRight className="w-5 h-5" />}
    </>
  );

  const allClasses = `${base} ${variantClass} ${className}`.replace(/\s+/g, " ").trim();

  // ── Render as Link or button ─────────────────────────────────────────────
  if (href && !disabled) {
    return (
      <Link href={href} className={allClasses} style={inlineStyle}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={allClasses}
      style={inlineStyle}
    >
      {content}
    </button>
  );
}