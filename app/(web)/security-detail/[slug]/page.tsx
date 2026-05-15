"use client";
import SecurityImportance from "@/app/components/detailpages/Security";
import SecurityWhy from "@/app/components/detailpages/WhySecurity";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { listBlogSectionApi } from "@/app/api/HomeBlog";

interface Blog {
  title: string;
  shortDescription: string;
  content: string;
  image: string;
  buttonText: string;
  slug: string;
  isActive: boolean;
  publishedAt: string;
}

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await listBlogSectionApi({});
        const allBlogs = data?.[0]?.blogs || [];
        const foundBlog = allBlogs.find((b: Blog) => b.slug === slug);
        setBlog(foundBlog || null);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F26A21]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Blog not found</h1>
        <p className="text-gray-500">The requested blog post could not be found.</p>
      </div>
    );
  }

  // Split title into title and highlight (optional logic)
  const titleWords = blog.title.split(" ");
  const highlight = titleWords.pop();
  const mainTitle = titleWords.join(" ");

  return (
    <div>
      <SecurityImportance
        title={mainTitle}
        highlight={highlight}
        description={blog.shortDescription}
        image={blog.image}
      />
      <SecurityWhy
        title=""
        highlight={blog.title}
        description={blog.content}
      // Since blog content is a single string, we just pass it as description
      // and keep the default points or hide them if needed.
      // For now, let's keep it simple.
      />
    </div>
  );
};

export default BlogDetailPage;
