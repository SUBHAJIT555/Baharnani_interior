"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { LayoutGroup, motion, useAnimationFrame, useMotionValue } from "motion/react";

import { servicePages } from "@/lib/site-data";
import GradientText from "@/components/ui/GradientText";

type ServicesTab = {
  id: string;
  label: string;
  serviceSlugs: string[];
};

const tabs: ServicesTab[] = [
  {
    id: "interior-design",
    label: "Interior Design",
    serviceSlugs: ["villa-interior-design", "apartment-interior-design", "office-interior-design", "luxury-interior-design"],
  },
  {
    id: "fitout-renovation",
    label: "Fit-Out & Renovation",
    serviceSlugs: ["turnkey-fit-out-services", "kitchen-fit-out-services", "bathroom-renovation"],
  },
  {
    id: "custom-finishes",
    label: "Custom & Finishes",
    serviceSlugs: ["joinery-custom-furniture", "ceiling-lighting-solutions", "flooring-tiling-services"],
  },
  {
    id: "locations",
    label: "Locations",
    serviceSlugs: ["interior-design-marina", "palm-jumeirah-interior-design", "jvc-interior-design-services", "arabian-ranches-villa-interiors"],
  },
];

const imageBySlug: Record<string, string> = {
  "villa-interior-design": "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "apartment-interior-design": "https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "office-interior-design": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "luxury-interior-design": "https://images.pexels.com/photos/8134848/pexels-photo-8134848.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "turnkey-fit-out-services": "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "kitchen-fit-out-services": "https://images.pexels.com/photos/6283976/pexels-photo-6283976.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "bathroom-renovation": "https://images.pexels.com/photos/7031624/pexels-photo-7031624.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "joinery-custom-furniture": "https://images.pexels.com/photos/7218525/pexels-photo-7218525.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "ceiling-lighting-solutions": "https://images.pexels.com/photos/6283976/pexels-photo-6283976.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "flooring-tiling-services": "https://images.pexels.com/photos/5998051/pexels-photo-5998051.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "interior-design-marina": "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "palm-jumeirah-interior-design": "https://images.pexels.com/photos/8134848/pexels-photo-8134848.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "jvc-interior-design-services": "https://images.pexels.com/photos/7587839/pexels-photo-7587839.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "arabian-ranches-villa-interiors": "https://images.pexels.com/photos/6585592/pexels-photo-6585592.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

const serviceBlurbs: Record<string, string> = {
  "villa-interior-design": "Bespoke layouts, finishes, and styling for Dubai villas.",
  "apartment-interior-design": "Space-smart plans for apartments across the city.",
  "office-interior-design": "Branded workplaces that support focus and collaboration.",
  "luxury-interior-design": "High-end materials, detailing, and curated aesthetics.",
  "turnkey-fit-out-services": "Design-to-handover delivery with one accountable team.",
  "kitchen-fit-out-services": "Cabinetry, surfaces, lighting, and appliance integration.",
  "bathroom-renovation": "Waterproofing, fixtures, and spa-like comfort.",
  "joinery-custom-furniture": "Built-ins, wardrobes, and feature joinery made to measure.",
  "ceiling-lighting-solutions": "Cove, feature ceilings, and layered lighting schemes.",
  "flooring-tiling-services": "Stone, tile, and wood finishes with expert installation.",
  "interior-design-marina": "Marina towers: compact luxury with strong sea-city views.",
  "palm-jumeirah-interior-design": "Signature island homes with elevated material palettes.",
  "jvc-interior-design-services": "Family-friendly JVC homes with efficient storage and flow.",
  "arabian-ranches-villa-interiors": "Community villas with warm, timeless interiors.",
};

export default function ServicesHomeOverviewFixed() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [singleTrackWidth, setSingleTrackWidth] = useState(0);
  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const currentCards = currentTab.serviceSlugs;
  const titleBySlug = useMemo(() => Object.fromEntries(servicePages.map((service) => [service.slug, service.title.replace(/\s+Dubai$/i, "")])), []);
  const mobileSwiperRef = useRef<HTMLDivElement | null>(null);
  const firstTrackRef = useRef<HTMLDivElement | null>(null);
  const marqueeX = useMotionValue(0);

  useEffect(() => {
    const measure = () => {
      if (!firstTrackRef.current) return;
      setSingleTrackWidth(firstTrackRef.current.scrollWidth);
    };

    marqueeX.set(0);
    setIsPaused(false);
    setHoveredCard(null);
    measure();

    const timer = setTimeout(measure, 60);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, [activeTab, marqueeX]);

  useEffect(() => {
    mobileSwiperRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    setMobileActiveIndex(0);
  }, [activeTab]);

  useEffect(() => {
    const container = mobileSwiperRef.current;
    if (!container) return;

    const updateActiveIndex = () => {
      const firstCard = container.children[0] as HTMLElement | undefined;
      if (!firstCard) return;
      const cardStep = firstCard.offsetWidth + 16;
      const nextIndex = Math.round(container.scrollLeft / cardStep);
      const boundedIndex = Math.max(0, Math.min(currentCards.length - 1, nextIndex));
      setMobileActiveIndex(boundedIndex);
    };

    updateActiveIndex();
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);
    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [currentCards]);

  useAnimationFrame((_, delta) => {
    if (isPaused || singleTrackWidth === 0) return;
    const speed = 78;
    let next = marqueeX.get() - (speed * delta) / 1000;
    if (Math.abs(next) >= singleTrackWidth) next += singleTrackWidth;
    marqueeX.set(next);
  });

  return (
    <section className="w-full bg-background pt-4 pb-14 md:pt-6 md:pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0">
        <h2 className="text-left md:text-center text-3xl font-bold text-zinc-900 md:text-5xl">Our Services</h2>
        <h3 className="text-left md:text-center text-base md:text-lg capitalize font-medium text-zinc-600 mt-2 mb-6 md:mb-8">
          We offer a wide range of services to meet your needs.
        </h3>
   

        <LayoutGroup>
          <div className="mt-6 overflow-x-auto pb-2 md:mt-8 md:pb-6">
            <div className="mx-auto flex min-w-max items-center justify-center gap-2 ">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`relative whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors md:text-base ${isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-800"}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {isActive ? (
                      <GradientText
                        colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                        animationSpeed={3}
                        direction="horizontal"
                        showBorder={false}
                        pauseOnHover={false}
                        yoyo
                        className="inline"
                      >
                        {tab.label}
                      </GradientText>
                    ) : (
                      tab.label
                    )}
                    {isActive ? (
                      <motion.span
                        layoutId="services-tab-indicator-fixed"
                        className="absolute inset-x-1 -bottom-px h-0.5 rounded-full bg-[#0000FF]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </LayoutGroup>

        <div className="mt-8 md:hidden">
          <div
            ref={mobileSwiperRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-visible px-1 pt-2 pb-2"
          >
            {currentCards.map((slug) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group h-[392px] w-[92%] shrink-0 snap-center rounded-3xl border border-zinc-300 bg-white p-3 ring-1 ring-zinc-200 ring-offset-3 shadow-md"
              >
                <div className="h-56 overflow-hidden rounded-2xl border border-zinc-300 bg-neutral-100">
                  <img
                    src={imageBySlug[slug]}
                    alt={titleBySlug[slug] ?? slug}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 min-h-[88px] px-1">
                  <h3 className="text-xl font-semibold text-zinc-900">{titleBySlug[slug] ?? slug}</h3>
                  <p className="mt-2 line-clamp-2 text-sm font-medium text-zinc-600">{serviceBlurbs[slug] ?? "Explore service details."}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2" aria-label="Mobile carousel pagination">
            {currentCards.map((slug, index) => (
              <button
                key={`mobile-dot-${slug}`}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={mobileActiveIndex === index}
                onClick={() => {
                  if (!mobileSwiperRef.current) return;
                  const firstCard = mobileSwiperRef.current.children[0] as HTMLElement | undefined;
                  if (!firstCard) return;
                  const cardStep = firstCard.offsetWidth + 16;
                  mobileSwiperRef.current.scrollTo({
                    left: cardStep * index,
                    behavior: "smooth",
                  });
                }}
                className={`rounded-full border border-zinc-400 transition-all duration-300 ${
                  mobileActiveIndex === index
                    ? "h-3 w-7 border-[#0000FF] bg-[#0000FF]"
                    : "h-3 w-3 bg-zinc-500/70"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative hidden overflow-x-hidden overflow-y-visible md:block">
          <motion.div style={{ x: marqueeX }} className="flex w-max gap-5 py-2">
            <div ref={firstTrackRef} className="flex gap-5">
              {currentCards.map((slug, index) => (
                <Link key={`track-a-${slug}`} href={`/services/${slug}`}>
                  <article
                    onMouseEnter={() => {
                      setHoveredCard(index);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => {
                      setHoveredCard(null);
                      setIsPaused(false);
                    }}
                    className={`group h-[424px] w-[420px] shrink-0 rounded-3xl border border-zinc-300 bg-white p-3 ring-1 ring-zinc-200 ring-offset-4 transition duration-300 ${
                      hoveredCard !== null && hoveredCard !== index ? "scale-[0.96] blur-[2px] opacity-55" : "scale-100 opacity-100"
                    }`}
                  >
                    <div className="h-56 overflow-hidden rounded-2xl border border-zinc-300 bg-neutral-100">
                      <img
                        src={imageBySlug[slug]}
                        alt={titleBySlug[slug] ?? slug}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 min-h-[96px] px-1">
                      <h3 className="text-2xl font-semibold text-zinc-900">{titleBySlug[slug] ?? slug}</h3>
                      <p className="mt-2 line-clamp-2 text-base font-medium text-zinc-600">{serviceBlurbs[slug] ?? "Explore service details."}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <div className="flex gap-5">
              {currentCards.map((slug, index) => (
                <Link key={`track-b-${slug}`} href={`/services/${slug}`}>
                  <article
                    onMouseEnter={() => {
                      setHoveredCard(index);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => {
                      setHoveredCard(null);
                      setIsPaused(false);
                    }}
                    className={`group h-[424px] w-[420px] shrink-0 rounded-3xl border border-zinc-300 bg-white p-3 ring-1 ring-zinc-200 ring-offset-3 transition duration-300 ${
                      hoveredCard !== null && hoveredCard !== index ? "scale-[0.96] blur-[2px] opacity-55" : "scale-100 opacity-100"
                    }`}
                  >
                    <div className="h-56 overflow-hidden rounded-2xl border border-zinc-300 bg-neutral-100">
                      <img
                        src={imageBySlug[slug]}
                        alt={titleBySlug[slug] ?? slug}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 min-h-[96px] px-1">
                      <h3 className="text-2xl font-semibold text-zinc-900">{titleBySlug[slug] ?? slug}</h3>
                      <p className="mt-2 line-clamp-2 text-base font-medium text-zinc-600">{serviceBlurbs[slug] ?? "Explore service details."}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
