"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { useLanguage } from "@/lib/i18n";

export default function BlogPage() {
  const { isArabic } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-32">
      <h1 className="mb-12 text-center text-4xl font-bold gradient-text">
        {isArabic ? "مدونتنا" : "Our Blog"}
      </h1>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass block rounded-2xl p-6 transition-colors hover:border-brand-500/50"
          >
            <h2 className="text-xl font-semibold text-white">{post.title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
