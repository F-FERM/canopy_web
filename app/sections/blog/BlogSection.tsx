import React from "react";
import Link from "next/link";

interface BlogCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const blogPosts: BlogCard[] = [
  {
    id: 1,
    title: "Security Guard Importance",
    description:
      "How professional guards protect people, property, and businesses from security risks.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Business Security Tips",
    description:
      "Simple security practices every business should follow to stay safe.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Modern Security Solutions",
    description:
      "How technology and trained guards work together for better protection.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-orange-500 font-semibold text-sm md:text-xs tracking-widest mb-2">
            BLOG
          </p>
          <h2 className="text-4xl md:text-3xl font-bold mb-4">
            <span className="text-gray-900">Latest</span>{" "}
            <span className="text-orange-500">Security Insights</span>
          </h2>
          <p className="text-gray-600 text-base md:text-xs max-w-2xl mx-auto">
            Stay informed with the latest updates, security tips, and industry
            news from our experts.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl md:text-lg font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-xs mb-6 leading-relaxed">
                  {post.description}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                >
                  Read More <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
