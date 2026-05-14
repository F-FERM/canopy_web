"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandPinterest,
} from "@tabler/icons-react";

import logo from "../../../public/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1A0004] text-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[70px] pt-16 pb-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] gap-14 pb-14">
          {/* LOGO + DESCRIPTION */}
          <div>
            <div className="mb-8">
              <Image
                src={logo}
                alt="Canopy Security Services"
                className="w-[320px] h-auto object-contain"
                priority
              />
            </div>

            <p className="text-[#C8B8B8] text-[16px] leading-[32px] max-w-[420px]">
              Professional security solutions protecting people,
              property, and businesses with trained and reliable
              personnel.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-5 mt-10">
              {[
                IconBrandInstagram,
                IconBrandFacebook,
                IconBrandTwitter,
                IconBrandPinterest,
              ].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-[#C65A1E] hover:text-white transition-all duration-300"
                >
                  <Icon stroke={1.7} className="w-[26px] h-[26px]" />
                </Link>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white text-[22px] font-semibold mb-8">
              Company
            </h3>

            <ul className="space-y-5">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Service", "/services"],
                ["Career", "/career"],
                ["Blog", "/blog"],
                ["Events", "/events"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
className="text-[#C8B8B8] text-[18px] hover:text-[#C65A1E] transition-all duration-300 flex items-center gap-3 hover:translate-x-1.5"                  >
                    <span className="text-white text-[10px]">•</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white text-[22px] font-semibold mb-8">
              Services
            </h3>

            <ul className="space-y-5">
              {[
                "Construction Security",
                "Fire Watch",
                "Industrial Security",
                "Front Desk Security",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-[#C8B8B8] text-[18px] hover:text-[#C65A1E] transition-colors duration-300 flex items-center gap-3"
                  >
                    <span className="text-white text-[10px]">•</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <div className="space-y-8">
              {/* PHONE */}
              <div className="flex items-start gap-5">
                <div className="w-[52px] h-[52px] rounded-xl border border-[#A53F10] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C65A1E]" />
                </div>

                <div>
                  <p className="text-[#B9A7A7] text-[15px] mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:+971043384044"
                    className="text-white text-[18px] leading-relaxed hover:text-[#C65A1E] transition-colors"
                  >
                    +971 043384044
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5">
                <div className="w-[52px] h-[52px] rounded-xl border border-[#A53F10] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C65A1E]" />
                </div>

                <div>
                  <p className="text-[#B9A7A7] text-[15px] mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:info@canopysecurity.com"
                    className="text-white text-[18px] leading-relaxed hover:text-[#C65A1E] transition-colors"
                  >
                    info@canopysecurity.com
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-5">
                <div className="w-[52px] h-[52px] rounded-xl border border-[#A53F10] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C65A1E]" />
                </div>

                <div>
                  <p className="text-[#B9A7A7] text-[15px] mb-1">
                    Address
                  </p>

                  <p className="text-white text-[18px] leading-[34px] max-w-[300px]">
                    Office No 301, Al Safa Commercial Building,
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#6A4A4A] pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-[#C8B8B8] text-[15px]">
              © {currentYear} Canopy Security Services L.L.C.
              All rights reserved.
            </p>

            <div className="flex items-center gap-8">
              <Link
                href="/privacy-policy"
                className="text-[#C8B8B8] text-[15px] hover:text-[#C65A1E] transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-[#C8B8B8] text-[15px] hover:text-[#C65A1E] transition-colors"
              >
                Terms of Service
              </Link>

              <Link
                href="/cookies"
                className="text-[#C8B8B8] text-[15px] hover:text-[#C65A1E] transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}