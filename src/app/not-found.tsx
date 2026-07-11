import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
      <p className="text-zinc-400 mb-8">The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-all">
        Go Home
      </Link>
    </div>
  );
}