"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Blog1 from "../../../public/images/home/Blog1.png"
import Blog2 from "../../../public/images/home/Blog2.jpg"
import Blog3 from "../../../public/images/home/Blog3.png"

interface BlogPost {
  title: string;
  excerpt: string;
  image: StaticImageData;
  slug: string;
}

export default function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      title: "Security Guard Importance",
      excerpt:
        "How professional guards protect people, property, and businesses from security threats.",
      image: Blog1,
      slug: "security-guard-importance",
    },
    {
      title: "Business Security Tips",
      excerpt:
        "Simple security practices every business should follow to stay safe.",
      image: Blog2,
      slug: "business-security-tips",
    },
    {
      title: "Modern Security Solutions",
      excerpt:
        "How technology and trained guards work together to ensure protection.",
      image: Blog3,
      slug: "modern-security-solutions",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-18 lg:pt-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 pb-12 sm:pb-16 md:pb-18 lg:pb-20">
      <div className="relative z-10 max-w-[1920px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20 px-2 sm:px-4 md:px-8 lg:px-[120px]">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="flex items-center justify-center w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-full border border-[#F97316] text-[#F97316] text-[10px] sm:text-[11px] font-bold leading-none">
              ⊙
            </span>
            <p className="text-[#F97316] uppercase tracking-[2px] sm:tracking-[3px] text-[13px] sm:text-sm font-semibold">
              Blog
            </p>
          </div>

          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[56px] font-bold leading-tight text-black mb-3 sm:mb-4">
            Latest <span className="text-[#F97316]">Security Insights</span>
          </h2>

          <p className="text-[#979797] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[600px] mx-auto px-4">
            Stay informed with the latest updates, security tips, and industry
            news from our experts.
          </p>
        </div>

        {/* BLOG CARDS GRID */}
        <div className="px-2 sm:px-4 md:px-8 lg:px-[120px]">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-5 sm:gap-6 md:gap-7 lg:gap-8
              w-full
            "
          >
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href="/security-detail"
                className="
                  group
                  flex
                  flex-col
                  overflow-hidden
                  rounded-xl
                  bg-white
                  border
                  border-gray-200
                  transition-all
                  duration-300
                  hover:shadow-xl
                  
                  cursor-pointer
                  max-w-[500px]
                  mx-auto
                  md:max-w-none
                  md:mx-0
                "
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-[200px] sm:h-[220px] md:h-[230px] lg:h-[240px] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-xl"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-6 sm:p-7 md:p-8 lg:p-10 gap-3 sm:gap-3.5 md:gap-4">
                  {/* TITLE */}
                  <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-semibold text-black leading-tight group-hover:text-[#F97316] transition-colors duration-300 ">
                    {post.title}
                  </h3>

                  {/* EXCERPT */}
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.55] sm:leading-[1.58] md:leading-[1.6] text-[#D4D4D4] flex-1 mb-8">
                    {post.excerpt}
                  </p>

                  {/* READ MORE LINK */}
                  <div className="flex items-center gap-2 text-[#F97316] font-semibold text-[14px] sm:text-[15px] md:text-[18px] group-hover:gap-3 transition-all duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}