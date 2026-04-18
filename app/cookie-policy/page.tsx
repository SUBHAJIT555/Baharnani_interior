import { PageHero } from "@/components/ui/page-hero";

export default function CookiePolicyPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Cookie Policy"
        description="Basic placeholder cookie policy page. Replace this text with your final policy."
      />
      <section className="rounded-xl border border-zinc-200 p-6 text-sm leading-7 text-zinc-600">
        <p>
          This website may use cookies to improve user experience and analytics tracking.
          Update this section with your legal cookie details.
        </p>
      </section>
    </div>
  );
}
