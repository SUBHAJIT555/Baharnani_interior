import { HomeScrollHero } from "@/components/ui/home-scroll-hero";
import WhyItsMatterHome from "@/components/why-its-matter-home";
import ServicesHomeOverviewFixed from "@/components/services-home-overview";
import OurProcessHome from "@/components/our-process-home";
import WhyChooseUsHome from "@/components/why-choose-us-home";
import HomeCtaSection from "@/components/home-cta-section";

export default function Home() {
  return (
    <div className="relative left-1/2 -mb-10 -mt-10 w-dvw max-w-none -translate-x-1/2 overflow-x-clip">
      <HomeScrollHero />
      <WhyItsMatterHome />
      <ServicesHomeOverviewFixed />
      <OurProcessHome />
      <WhyChooseUsHome />
      <HomeCtaSection />
    </div>
  );
}
