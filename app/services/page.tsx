import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { servicePages } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Services"
        description="Browse our complete set of interior design and fit-out service pages for Dubai."
      />
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {servicePages.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="rounded-lg border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 hover:text-zinc-900"
          >
            {service.title}
          </Link>
        ))}
      </section>
    </div>
  );
}
