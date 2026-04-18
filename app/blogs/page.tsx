import { PageHero } from "@/components/ui/page-hero";
import { SectionCard } from "@/components/ui/section-card";

export default function BlogsPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Blogs"
        description="Use this page as your content hub for interior design ideas, trends, and project stories."
      />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SectionCard
          title="Post Placeholder 01"
          text="How to choose materials and finishes for a modern villa interior in Dubai."
        />
        <SectionCard
          title="Post Placeholder 02"
          text="Lighting tips to create layered ambiance in luxury residential spaces."
        />
        <SectionCard
          title="Post Placeholder 03"
          text="Fit-out planning checklist before starting your apartment renovation."
        />
      </section>
    </div>
  );
}
