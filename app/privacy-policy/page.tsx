import { PageHero } from "@/components/ui/page-hero";

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Privacy Policy"
        description="Basic placeholder privacy page. Replace this content with your finalized policy."
      />
      <section className="rounded-xl border border-zinc-200 p-6 text-sm leading-7 text-zinc-600">
        <p>
          We respect your privacy and handle personal information responsibly. Replace this
          starter text with your official privacy policy details.
        </p>
      </section>
    </div>
  );
}
