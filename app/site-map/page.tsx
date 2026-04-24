import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import { legalPages, mainNav, servicePages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Site Map",
  description: "All pages on Baharnani Interior — explore, services, and legal.",
};

function SitemapSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="border-b border-zinc-200 pb-2 text-sm font-semibold uppercase tracking-wider text-zinc-900">
        {title}
      </h2>
      <ul className="grid gap-2 sm:grid-cols-2">{children}</ul>
    </section>
  );
}

function SitemapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm font-medium text-zinc-600 underline-offset-2 hover:text-zinc-950 hover:underline">
        {children}
      </Link>
    </li>
  );
}

export default function SiteMapPage() {
  return (
    <div className="space-y-10 pb-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Site Map</h1>
        <p className="max-w-2xl text-sm text-zinc-600">
          A single index of every public page on this site for quick navigation.
        </p>
      </div>

      <SitemapSection title="Main pages">
        {mainNav.map((item) => (
          <SitemapLink key={item.href} href={item.href}>
            {item.label}
          </SitemapLink>
        ))}
      </SitemapSection>

      <SitemapSection title="Services">
        <SitemapLink href="/services">Services hub</SitemapLink>
        {servicePages.map((s) => (
          <SitemapLink key={s.slug} href={`/services/${s.slug}`}>
            {s.title}
          </SitemapLink>
        ))}
      </SitemapSection>

      <SitemapSection title="Legal">
        {legalPages.map((p) => (
          <SitemapLink key={p.slug} href={`/${p.slug}`}>
            {p.title}
          </SitemapLink>
        ))}
      </SitemapSection>
    </div>
  );
}
