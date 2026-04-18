import { PageHero } from "@/components/ui/page-hero";
import { SectionCard } from "@/components/ui/section-card";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="About Us"
        description="We design and deliver functional, elegant interiors for residential and commercial projects in Dubai."
      />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SectionCard
          title="Design-First Approach"
          text="Every project starts with clear planning, mood boards, and practical space optimization."
        />
        <SectionCard
          title="Build with Precision"
          text="Our fit-out team executes with quality control, timeline focus, and transparent communication."
        />
        <SectionCard
          title="Client-Centered"
          text="We tailor each project based on lifestyle, brand identity, and budget expectations."
        />
      </section>
    </div>
  );
}
