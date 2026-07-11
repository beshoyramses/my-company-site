import Link from "next/link";

export function MobileNav() {
  return (
    <nav className="flex flex-col gap-3 rounded-2xl bg-stone-100 p-4 text-sm font-medium text-stone-700">
      <Link href="/services">Services</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
