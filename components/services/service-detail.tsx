import { PageHero } from "@/components/ui/page-hero";

type ServiceDetailProps = {
  title: string;
};

export function ServiceDetail({ title }: ServiceDetailProps) {
  return (
    <div className="space-y-8">
      <PageHero
        title={title}
        description={`This is the starter page for ${title}. Replace with your service-specific copy, portfolio, FAQs, and CTA.`}
      />
      <section className="rounded-xl border border-zinc-200 p-6">
        <h2 className="text-xl font-semibold text-zinc-900">What to Add Next</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600">
          <li>Service overview and key benefits</li>
          <li>Process steps and timeline</li>
          <li>Project gallery and testimonials</li>
          <li>Area-specific SEO content and contact CTA</li>
        </ul>
      </section>
    </div>
  );
}
