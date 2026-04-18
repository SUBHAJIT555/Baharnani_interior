import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionCard } from "@/components/ui/section-card";
import { servicePages } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Villa Interior Design and Fit-Out in Dubai"
        description="A clean starter website with all key routes ready for your content, SEO, and design system."
      />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SectionCard
          title="End-to-End Services"
          text="From concept design to turnkey fit-out execution for villas, apartments, and offices."
        />
        <SectionCard
          title="Luxury Detailing"
          text="Custom joinery, premium finishes, and lighting details tailored to your project."
        />
        <SectionCard
          title="Dubai Areas"
          text="Local expertise for Dubai Marina, Palm Jumeirah, JVC, and Arabian Ranches."
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Featured Service Pages
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {servicePages.slice(0, 6).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-lg border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
