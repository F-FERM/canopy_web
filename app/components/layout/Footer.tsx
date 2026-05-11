"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import logo from "../../../public/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/95 text-white border-t border-gray-800 z-40">
      {/* MAIN FOOTER */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[120px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* COMPANY INFO */}
          <div className="lg:col-span-1">
            <div className="mb-6 h-[80px] w-auto">
              <Image
                src={logo}
                alt="Canopy Security Services"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-[14px] leading-relaxed mb-6">
              Canopy Security Services L.L.C delivering reliable and
              professional security and support solutions across Dubai, ensuring
              the safety of people, assets, and businesses with trusted reliable
              expertise.
            </p>
            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#F97316] transition-colors"
              >
                <IconBrandFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F97316] transition-colors"
              >
                <IconBrandTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F97316] transition-colors"
              >
                <IconBrandLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F97316] transition-colors"
              >
                <IconBrandInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h4 className="font-bold text-white mb-6 text-[16px]">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#F97316] transition-colors text-[14px]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#F97316] transition-colors text-[14px]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#F97316] transition-colors text-[14px]"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-[#F97316] transition-colors text-[14px]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-[#F97316] transition-colors text-[14px]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 hover:text-[#F97316] transition-colors text-[14px]"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES LINKS */}
          <div>
            <h4 className="font-bold text-white mb-6 text-[16px]">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/construction"
                  className="text-gray-400 hover:text-[#F97316] transition-colors text-[14px]"
                >
                  Construction Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/fire-watch"
                  className="text-gray-400 hover:text-[#F97316] transition-colors text-[14px]"
                >
                  Fire Watch
                </Link>
              </li>
              <li>
                <Link
                  href="/services/industrial"
                  className="text-gray-400 hover:text-[#F97316] transition-colors text-[14px]"
                >
                  Industrial Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/front-desk"
                  className="text-gray-400 hover:text-[#F97316] transition-colors text-[14px]"
                >
                  Front Desk Security
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 text-[16px]">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-[14px]">Phone</p>
                  <a
                    href="tel:+971123456789"
                    className="text-white hover:text-[#F97316] transition-colors text-[14px] font-semibold"
                  >
                    +971 1 234 5678
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-[14px]">Email</p>
                  <a
                    href="mailto:info@canopysecurity.com"
                    className="text-white hover:text-[#F97316] transition-colors text-[14px] font-semibold"
                  >
                    info@canopysecurity.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-[14px]">Address</p>
                  <p className="text-white text-[14px] font-semibold">
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER DIVIDER */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-[12px]">
              © {currentYear} Canopy Security Services L.L.C. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-[#F97316] transition-colors text-[12px]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-[#F97316] transition-colors text-[12px]"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-[#F97316] transition-colors text-[12px]"
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
