import { PageHero } from "@/components/ui/page-hero";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Contact"
        description="Connect with our team to discuss your interior design or fit-out project in Dubai."
      />
      <section className="grid gap-4 rounded-xl border border-zinc-200 p-6 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">Office</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Dubai, United Arab Emirates
            <br />
            Mon-Sat, 9:00 AM - 6:00 PM
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">Enquiries</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Phone: +971 XX XXX XXXX
            <br />
            Email: hello@officevilla.ae
          </p>
        </div>
      </section>
    </div>
  );
}
