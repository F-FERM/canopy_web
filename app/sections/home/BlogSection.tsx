"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export default function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      title: "Security Guard Importance",
      excerpt:
        "How professional guards protect people, property, and businesses from security threats.",
      image: "/images/home/blog-security-guard.png",
      slug: "security-guard-importance",
    },
    {
      title: "Business Security Tips",
      description:
        "Simple security practices every business should follow to stay safe.",
      image: "/images/home/blog-business-security.png",
      slug: "business-security-tips",
    },
    {
      title: "Modern Security Solutions",
      excerpt:
        "How technology and trained guards work together to ensure protection.",
      image: "/images/home/blog-modern-security.png",
      slug: "modern-security-solutions",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 px-4 sm:px-8">
      <div className="relative z-10 max-w-[1920px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-20 px-6 lg:px-[120px]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full border border-[#F97316] text-[#F97316] text-[11px] font-bold leading-none">
              ⊙
            </span>
            <p className="text-[#F97316] uppercase tracking-[3px] text-sm font-semibold">
              Blog
            </p>
          </div>

          <h2 className="text-[42px] md:text-[56px] font-bold leading-tight text-black mb-4">
            Latest <span className="text-[#F97316]">Security Insights</span>
          </h2>

          <p className="text-[#979797] text-[16px] leading-relaxed max-w-[600px] mx-auto">
            Stay informed with the latest updates, security tips, and industry
            news from our experts.
          </p>
        </div>

        {/* BLOG CARDS GRID */}
        <div className="px-6 lg:px-[120px]">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
              w-full
            "
          >
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
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
                  hover:border-[#F97316]
                  cursor-pointer
                "
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-[240px] w-full overflow-hidden bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  {/* TITLE */}
                  <h3 className="text-[18px] font-bold text-black leading-tight group-hover:text-[#F97316] transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* EXCERPT */}
                  <p className="text-[14px] leading-[1.6] text-[#979797] flex-1">
                    {post.excerpt}
                  </p>

                  {/* READ MORE LINK */}
                  <div className="flex items-center gap-2 text-[#F97316] font-semibold text-[14px] group-hover:gap-3 transition-all duration-300">
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
