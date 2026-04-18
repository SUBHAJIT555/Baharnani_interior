import Link from "next/link";

import { SiteLogoLink } from "@/components/branding/site-logo";
import { legalPages, mainNav, servicePages } from "@/lib/site-data";

const COMPANY_NAME = "Baharnani Interior";
const COMPANY_TAGLINE =
  "Dubai-based interior design and fit-out studio delivering villas, apartments, and commercial spaces with tailored layouts, premium finishes, and turnkey delivery across the UAE.";

function FooterHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="border-b border-zinc-200 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-700"
    >
      {children}
    </h2>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm text-zinc-600 transition-colors hover:text-zinc-950"
    >
      <span className="min-w-0">{children}</span>
      <span
        className="text-zinc-400 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-zinc-600"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 shrink-0"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12h.5m3 0h1.5m3 0h6" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      </span>
    </Link>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-zinc-200 bg-zinc-50 text-zinc-700" role="contentinfo">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gray-50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-20%,rgba(251,191,36,0.08),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-none px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-0 lg:gap-y-14">
          <div className="lg:col-span-4 lg:border-r lg:border-zinc-200 lg:pr-10">
            <div className="flex flex-col gap-5">
              <div className="inline-flex w-fit rounded-2xl bg-white">
                <SiteLogoLink className="p-0 hover:opacity-100" imageAlt="Baharnani Interior logo" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight text-zinc-950">{COMPANY_NAME}</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-600">{COMPANY_TAGLINE}</p>
              </div>
            </div>
          </div>

          <nav
            className="lg:col-span-2 lg:border-r lg:border-zinc-200 lg:px-8"
            aria-labelledby="footer-explore-heading"
          >
            <FooterHeading id="footer-explore-heading">Explore</FooterHeading>
            <ul className="mt-5 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="sm:col-span-2 lg:col-span-4 lg:border-r lg:border-zinc-200 lg:px-8"
            aria-labelledby="footer-services-heading"
          >
            <FooterHeading id="footer-services-heading">All Services</FooterHeading>
            <ul className="mt-5 grid gap-x-8 gap-y-2.5 text-sm sm:grid-cols-2">
              {servicePages.map((s) => (
                <li key={s.slug}>
                  <FooterLink href={`/services/${s.slug}`}>{s.title}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2 lg:pl-8" aria-labelledby="footer-legal-heading">
            <FooterHeading id="footer-legal-heading">Legal</FooterHeading>
            <ul className="mt-5 space-y-3">
              {legalPages.map((item) => (
                <li key={item.slug}>
                  <FooterLink href={`/${item.slug}`}>{item.title}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-200 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="leading-relaxed">
            © {year} {COMPANY_NAME}. <span className="text-zinc-400">All rights reserved.</span>
          </p>
          <p className="sm:text-right">
            Developed by{" "}
            <a
              href="https://codecoccle.com"
              className="font-medium text-zinc-700 underline-offset-4 transition hover:text-amber-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              codecoccle
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
