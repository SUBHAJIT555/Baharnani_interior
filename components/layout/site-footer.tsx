import Link from "next/link";

import { SiteLogoLink } from "@/components/branding/site-logo";
import { legalPages, mainNav, servicePages } from "@/lib/site-data";

const COMPANY_NAME = "Baharnani Interior";
/** Legal entity shown in the copyright line (footer strip). */
const COMPANY_LEGAL_NAME = "Baharnani Advertising L.L.C.";
const CODECOBBLE_URL = "https://codecobble.com";
const COMPANY_TAGLINE =
  "Dubai-based interior design and fit-out studio delivering villas, apartments, and commercial spaces with tailored layouts, premium finishes, and turnkey delivery across the UAE.";

function FooterHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="border-b border-zinc-200 pb-2 text-[11px] font-semibold font-recia uppercase tracking-[0.2em] text-zinc-900"
    >
      {children}
    </h2>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
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
              <div className="inline-flex w-fit">
                <SiteLogoLink className="p-0 hover:opacity-100" imageAlt="Baharnani Interior logo" />
              </div>
              <div>
                <p className="text-lg font-semibold font-recia tracking-tight text-zinc-950">{COMPANY_NAME}</p>
                <p className="mt-3 max-w-lg text-sm font-medium leading-relaxed text-zinc-600">{COMPANY_TAGLINE}</p>
                <div className="mt-6 max-w-md rounded-2xl  backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase font-recia tracking-[0.18em] text-zinc-800">Newsletter</p>
                  <p className="mt-2 text-sm text-zinc-600">
                    Get design tips, trend updates, and project insights in your inbox.
                  </p>
                  <form className="mt-3 flex flex-col gap-2 sm:flex-row" action="#">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-10 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-300"
                    />
                    <button
                      type="submit"
                      className="h-10 rounded-xl bg-[#0000FF] px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
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

        <div className="mt-14 border-t border-zinc-200 pt-8 text-center text-xs md:text-sm leading-relaxed text-zinc-600">
          <p className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-1 gap-y-1 font-switzer">
            <span>© {year}</span>{" "}
            <Link
              href="/"
              className="font-medium text-teal-700 underline-offset-2 transition hover:text-teal-800 hover:underline"
            >
              {COMPANY_LEGAL_NAME}
            </Link>
            <span>. All Rights Reserved. Made with </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline-block shrink-0 text-red-600 align-[-0.15em]"
              role="img"
              aria-label="love"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
            </svg>
            <span> by </span>
            <a
              href={CODECOBBLE_URL}
              className="font-medium text-teal-700 underline-offset-2 transition hover:text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeCobble
            </a>
            <span className="text-zinc-400" aria-hidden>
              {" "}
              |{" "}
            </span>
            <Link
              href="/site-map"
              className="font-medium text-zinc-600 underline-offset-2 transition hover:text-zinc-900 hover:underline"
            >
              Site Map
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
