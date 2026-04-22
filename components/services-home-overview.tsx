"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useAnimationFrame, useMotionValue } from "motion/react";

type ServicesTab = {
  id: string;
  label: string;
  services: string[];
};

type SwiperCard = {
  title: string;
  text: string;
  image: string;
};

const tabs: ServicesTab[] = [
  {
    id: "interior-design",
    label: "Interior Design",
    services: [
      "Villa Interior Design Dubai",
      "Apartment Interior Design Dubai",
      "Office Interior Design Dubai",
      "Luxury Interior Design Dubai",
    ],
  },
  {
    id: "fitout-renovation",
    label: "Fit-Out & Renovation",
    services: [
      "Turnkey Fit-Out Services Dubai",
      "Kitchen Fit-Out Services Dubai",
      "Bathroom Renovation Dubai",
    ],
  },
  {
    id: "custom-finishes",
    label: "Custom & Finishes",
    services: [
      "Joinery & Custom Furniture Dubai",
      "Ceiling & Lighting Solutions Dubai",
      "Flooring & Tiling Services Dubai",
    ],
  },
  {
    id: "locations",
    label: "Locations",
    services: [
      "Interior Design Dubai Marina",
      "Palm Jumeirah Interior Design",
      "JVC Interior Design Services",
      "Arabian Ranches Villa Interiors",
    ],
  },
];

const swiperCards: {
  interiorDesign: SwiperCard[];
  fitoutRenovation: SwiperCard[];
  customFinishes: SwiperCard[];
  locations: SwiperCard[];
} = {
  interiorDesign: [
    {
      title: "Villa Interior Design Dubai",
      text: "Bespoke layouts and finishes for luxury villa living.",
      image:
        "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Apartment Interior Design Dubai",
      text: "Space-smart modern apartment concepts for urban comfort.",
      image:
        "https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Office Interior Design Dubai",
      text: "Functional business environments that improve productivity.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Luxury Interior Design Dubai",
      text: "Premium materials, detailing, and curated luxury styling.",
      image:
        "https://images.pexels.com/photos/8134848/pexels-photo-8134848.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ],
  fitoutRenovation: [
    {
      title: "Turnkey Fit-Out Services Dubai",
      text: "End-to-end project execution from concept to handover.",
      image:
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Kitchen Fit-Out Services Dubai",
      text: "Modern kitchen systems, storage, and finishes built to last.",
      image:
        "https://images.pexels.com/photos/6283976/pexels-photo-6283976.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Bathroom Renovation Dubai",
      text: "Clean, elegant, and durable bathroom transformation services.",
      image:
        "https://images.pexels.com/photos/7031624/pexels-photo-7031624.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ],
  customFinishes: [
    {
      title: "Joinery & Custom Furniture Dubai",
      text: "Tailor-made furniture and storage with precise craftsmanship.",
      image:
        "https://images.pexels.com/photos/7218525/pexels-photo-7218525.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Ceiling & Lighting Solutions Dubai",
      text: "Layered lighting and ceiling concepts to elevate ambience.",
      image:
        "https://images.pexels.com/photos/6283976/pexels-photo-6283976.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Flooring & Tiling Services Dubai",
      text: "Premium flooring and tiling for clean and lasting finishes.",
      image:
        "https://images.pexels.com/photos/5998051/pexels-photo-5998051.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ],
  locations: [
    {
      title: "Interior Design Dubai Marina",
      text: "Urban concepts crafted for Marina lifestyle and modern living.",
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Palm Jumeirah Interior Design",
      text: "Luxury island residences with refined contemporary detailing.",
      image:
        "https://images.pexels.com/photos/8134848/pexels-photo-8134848.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "JVC Interior Design Services",
      text: "Smart layouts and stylish finishes tailored for JVC homes.",
      image:
        "https://images.pexels.com/photos/7587839/pexels-photo-7587839.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Arabian Ranches Villa Interiors",
      text: "Family-focused villa interiors with timeless material palettes.",
      image:
        "https://images.pexels.com/photos/6585592/pexels-photo-6585592.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ],
};

export default function ServicesHomeOverview() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [singleTrackWidth, setSingleTrackWidth] = useState(0);
  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const currentSwiperCards =
    activeTab === "interior-design"
      ? swiperCards.interiorDesign
      : activeTab === "fitout-renovation"
        ? swiperCards.fitoutRenovation
        : activeTab === "custom-finishes"
          ? swiperCards.customFinishes
          : swiperCards.locations;
  const mobileSwiperRef = useRef<HTMLDivElement | null>(null);
  const firstTrackRef = useRef<HTMLDivElement | null>(null);
  const marqueeX = useMotionValue(0);

  const scrollCards = (direction: "left" | "right") => {
    if (!mobileSwiperRef.current) return;
    const amount = Math.round(mobileSwiperRef.current.clientWidth * 0.9);
    mobileSwiperRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

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
    const container = mobileSwiperRef.current;
    if (!container) return;

    const updateActiveIndex = () => {
      const firstCard = container.children[0] as HTMLElement | undefined;
      if (!firstCard) return;

      const cardStep = firstCard.offsetWidth + 16; // card width + gap-4
      const nextIndex = Math.round(container.scrollLeft / cardStep);
      const boundedIndex = Math.max(0, Math.min(currentSwiperCards.length - 1, nextIndex));
      setMobileActiveIndex(boundedIndex);
    };

    updateActiveIndex();
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [currentSwiperCards]);

  useEffect(() => {
    setMobileActiveIndex(0);
    mobileSwiperRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [activeTab]);

  useAnimationFrame((_, delta) => {
    if (isPaused || singleTrackWidth === 0) return;
    const speed = 75;
    let next = marqueeX.get() - (speed * delta) / 1000;
    if (Math.abs(next) >= singleTrackWidth) {
      next += singleTrackWidth;
    }
    marqueeX.set(next);
  });

  return (
    <section className="w-full bg-background px-0 py-14">
      <div className="w-full">
        <h2 className="text-center font-recia text-3xl font-semibold text-zinc-900 md:text-4xl">
          Our Services
        </h2>

        <LayoutGroup>
          <div className="mt-8 overflow-x-auto pb-2">
            <div className="mx-auto flex min-w-max items-center justify-center gap-2 border-b border-zinc-200 px-1">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`relative whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors md:text-base ${
                      isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                    {isActive ? (
                      <motion.span
                        layoutId="services-tab-indicator"
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

        <div className="mt-10">

          {/* Mobile swiper */}
          <div ref={mobileSwiperRef} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:px-6 md:hidden">
            {currentSwiperCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                className="group h-[456px] w-[94%] shrink-0 snap-center rounded-3xl border border-zinc-300 bg-background ring-1 ring-zinc-200 ring-offset-2 md:ring-offset-4 p-3"
              >
                <div className="h-[72%] overflow-hidden border border-zinc-300 bg-background rounded-2xl">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-4 px-1">
                  <h4 className="font-recia text-xl font-semibold text-zinc-900">{card.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-700">{card.text}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 md:hidden" aria-label="Mobile carousel pagination">
            {currentSwiperCards.map((card, index) => (
              <button
                key={`mobile-dot-${card.title}`}
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
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  mobileActiveIndex === index ? "w-6 bg-[#0000FF]" : "w-2.5 bg-background"
                }`}
              />
            ))}
          </div>

          {/* Desktop marquee cards */}
          <div className="relative mx-auto hidden max-w-[1520px] overflow-x-hidden overflow-y-visible md:block">
            <motion.div style={{ x: marqueeX }} className="flex w-max gap-4 md:gap-8 py-3">
              <div ref={firstTrackRef} className="flex gap-4 md:gap-8">
                {currentSwiperCards.map((card, index) => (
                  <motion.article
                    key={`desktop-a-${card.title}`}
                    onMouseEnter={() => {
                      setHoveredCard(index);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => {
                      setHoveredCard(null);
                      setIsPaused(false);
                    }}
                    className={`group h-[440px] w-[480px] shrink-0 rounded-3xl border border-zinc-300 bg-neutral-100 ring-1 ring-zinc-200 ring-offset-2 md:ring-offset-4 p-3 transition duration-300 ${
                      hoveredCard !== null && hoveredCard !== index ? "blur-[2px] opacity-45" : "opacity-100"
                    }`}
                  >
                    <div className="h-[74%] overflow-hidden border border-zinc-300 bg-neutral-100 rounded-2xl">
                      <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="mt-4 px-1">
                      <h4 className="font-recia text-2xl font-semibold text-zinc-900">{card.title}</h4>
                      <p className="mt-2 text-base leading-7 text-zinc-700">{card.text}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
              <div className="flex gap-4">
                {currentSwiperCards.map((card, index) => (
                  <motion.article
                    key={`desktop-b-${card.title}`}
                    onMouseEnter={() => {
                      setHoveredCard(index);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => {
                      setHoveredCard(null);
                      setIsPaused(false);
                    }}
                    className={`group h-[440px] w-[480px] shrink-0 rounded-3xl border border-zinc-300 bg-neutral-100 ring-1 ring-zinc-200 ring-offset-2 md:ring-offset-4 p-3 transition duration-300 ${
                      hoveredCard !== null && hoveredCard !== index ? "blur-[2px] opacity-45" : "opacity-100"
                    }`}
                  >
                    <div className="h-[74%] overflow-hidden border border-zinc-300 bg-neutral-100 rounded-2xl">
                      <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="mt-4 px-1">
                      <h4 className="font-recia text-2xl font-semibold text-zinc-900">{card.title}</h4>
                      <p className="mt-2 text-base leading-7 text-zinc-700">{card.text}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex justify-center">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="h-11 rounded-full bg-[#0000FF] px-7 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-blue-700 md:h-12 md:px-8 md:text-base"
            >
              Get Custom Office Plan -&gt;
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
