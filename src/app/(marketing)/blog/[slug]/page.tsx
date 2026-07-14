import { blogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.seoDescription ?? post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.seoDescription ?? post.excerpt,
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content?.split('\n\n') ?? [post.excerpt];

  return (
    <article className="section-shell max-w-3xl pb-20 pt-32">
      <h1 className="mb-4 font-display text-3xl font-semibold text-white sm:text-4xl">
        {post.title}
      </h1>
      <p className="mb-8 text-zinc-500">
        {post.createdAt.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <div className="space-y-4 text-base leading-7 text-zinc-300">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
      {slug === 'why-marble-polishing-matters' && (
        <p className="mt-8">
          <Link
            href="/services/marble-polishing"
            className="font-semibold text-violet-300 underline-offset-4 hover:underline"
          >
            View our marble polishing service in El Gouna →
          </Link>
        </p>
      )}
    </article>
  );
}
