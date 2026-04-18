import Link from "next/link";
import { legalPages } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Office Villa. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          {legalPages.map((item) => (
            <Link key={item.slug} href={`/${item.slug}`} className="hover:text-zinc-900">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
