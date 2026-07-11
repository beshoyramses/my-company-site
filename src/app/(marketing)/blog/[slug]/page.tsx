import { blogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return { title: post?.title ?? 'Post Not Found' };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-zinc-500 mb-8">{post.createdAt.toLocaleDateString()}</p>
      <div className="prose prose-invert max-w-none text-zinc-300">
        {/* Replace with actual content */}
        <p>{post.excerpt}</p>
      </div>
    </div>
  );
}