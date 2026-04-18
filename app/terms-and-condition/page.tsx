import { PageHero } from "@/components/ui/page-hero";

export default function TermsAndConditionPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Terms and Condition"
        description="Basic placeholder terms page. Replace this content with your legal text."
      />
      <section className="rounded-xl border border-zinc-200 p-6 text-sm leading-7 text-zinc-600">
        <p>
          By using this website, you agree to the terms and conditions set by Office Villa.
          Please update this page with your finalized legal policy.
        </p>
      </section>
    </div>
  );
}
