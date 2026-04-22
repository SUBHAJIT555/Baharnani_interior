import { HomeScrollHero } from "@/components/ui/home-scroll-hero";
import WhyItsMatterHome from "@/components/why-its-matter-home";
import ServicesHomeOverview from "@/components/services-home-overview";

export default function Home() {
  return (
    <div className="relative left-1/2 -mb-10 -mt-10 w-dvw max-w-none -translate-x-1/2 overflow-x-clip">
      <HomeScrollHero />
      <WhyItsMatterHome />
      <ServicesHomeOverview />
    </div>
  );
}
