"use client";

import * as React from "react";
import { motion } from "motion/react";
import GradientText from "@/components/ui/GradientText";
import ShinyText from "@/components/ui/ShinyText";

const cards = [
  {
    title: "Improves Productivity",
    description:
      "Smart office interior design in Dubai optimizes layout, lighting, and workflow-helping your team stay focused and efficient.",
    image:
      "https://images.pexels.com/photos/6489110/pexels-photo-6489110.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Team working in a modern office",
  },
  {
    title: "Enhances Brand Perception",
    description:
      "A modern office fit-out creates a strong first impression, reflecting professionalism and building client trust.",
    image:
      "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Client meeting in a contemporary workspace",
  },
] as const;

const sharedGrid = {
  backgroundImage:
    "linear-gradient(to right, #e7e5e4 1px, transparent 1px), linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)",
  backgroundSize: "1px 1px",
  backgroundPosition: "0 0, 0 0",
  maskComposite: "intersect" as const,
  WebkitMaskComposite: "source-in" as const,
};

const mobileGridStyle: React.CSSProperties = {
  ...sharedGrid,
  maskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 100% 80% at 50% 0%, #000 50%, transparent 90%)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 100% 80% at 50% 0%, #000 50%, transparent 90%)",
};

const desktopGridStyle: React.CSSProperties = {
  ...sharedGrid,
  maskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 82% 80% at 100% 100%, #000 50%, transparent 90%)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 82% 80% at 100% 100%, #000 50%, transparent 90%)",
};

const desktopGridStyleLeft: React.CSSProperties = {
  ...sharedGrid,
  maskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 82% 80% at 0% 100%, #000 50%, transparent 90%)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 82% 80% at 0% 100%, #000 50%, transparent 90%)",
};

function StickyCard({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      layout="position"
      style={{ top: 126 + index * 20, z: index * 10, backfaceVisibility: "hidden" }}
      className="sticky"
    >
      {children}
    </motion.div>
  );
}

export default function WhyItsMatterHome() {
  return (
    <section id="why-it-matters" className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full md:hidden">
          <h2 className="mb-3 text-3xl font-semibold text-zinc-900">Why It Matters</h2>
          <p className="mb-8 text-base font-medium leading-relaxed text-zinc-600">
          Design That Drives Business Outcomes
          </p>
          <div className="space-y-6">
            {cards.map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                className="relative grid gap-5 overflow-hidden rounded-3xl border border-zinc-300 bg-white p-4 ring-1 ring-zinc-200 ring-offset-2"
              >
                <div className="pointer-events-none absolute inset-0 z-0" style={mobileGridStyle} />
                <div className="overflow-hidden rounded-2xl">
                  <img src={card.image} alt={card.alt} className="relative z-10 h-full min-h-[220px] w-full object-cover" />
                </div>
                <div className="relative z-10 flex h-full flex-col py-3">
                  <h3 className="text-2xl font-semibold leading-tight">
                    <ShinyText
                      text={card.title}
                      speed={2.1}
                      delay={0.2}
                      color="#111827"
                      shineColor="#64748b"
                      spread={125}
                      direction="left"
                      className="inline"
                    />
                  </h3>
                  <p className="mt-4 text-base font-medium leading-relaxed text-zinc-900">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            
            <h2 className="mt-2 text-4xl font-bold text-zinc-900 md:text-5xl">
            Why It Matters
            </h2>
            <p className="mt-4 text-lg font-medium leading-relaxed text-zinc-600">
            Design That Drives Business Outcomes
            </p>
          </div>

          <div className="relative space-y-16 pb-24 md:pb-28" style={{ perspective: "1000px" }}>
            {cards.map((card, index) => {
              const reverseLayout = index % 2 === 1;
              return (
                <StickyCard key={card.title} index={index}>
                  <article className="relative grid gap-6 overflow-hidden rounded-3xl border border-zinc-300 bg-white p-4 ring-1 ring-zinc-200 ring-offset-2 shadow-lg md:grid-cols-2 md:p-7 md:ring-offset-6">
                    <div
                      className="pointer-events-none absolute inset-0 z-0"
                      style={reverseLayout ? desktopGridStyleLeft : desktopGridStyle}
                    />
                    {reverseLayout ? (
                      <>
                        <div className="relative z-10 flex h-full flex-col py-4 md:py-6">
                          <h3 className="text-left text-3xl font-semibold leading-tight md:text-5xl">
                            <ShinyText
                              text={card.title}
                              speed={2.1}
                              delay={0.2}
                              color="#111827"
                              shineColor="#64748b"
                              spread={125}
                              direction="left"
                              className="inline"
                            />
                          </h3>
                          <p className="mt-6 text-base leading-relaxed font-medium text-zinc-700 md:mt-auto md:text-2xl">
                            {card.description}
                          </p>
                        </div>
                        <div className="relative z-10 overflow-hidden rounded-xl">
                          <img src={card.image} alt={card.alt} className="h-full min-h-[260px] w-full object-cover" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative z-10 overflow-hidden rounded-xl">
                          <img src={card.image} alt={card.alt} className="h-full min-h-[260px] w-full object-cover" />
                        </div>
                        <div className="relative z-10 flex h-full flex-col py-4 md:py-6">
                          <h3 className="text-left text-3xl font-semibold leading-tight md:text-5xl">
                            <ShinyText
                              text={card.title}
                              speed={2.1}
                              delay={0.2}
                              color="#111827"
                              shineColor="#64748b"
                              spread={125}
                              direction="left"
                              className="inline"
                            />
                          </h3>
                          <p className="mt-6 text-base leading-relaxed font-medium text-zinc-700 md:mt-auto md:text-2xl">
                            {card.description}
                          </p>
                        </div>
                      </>
                    )}
                  </article>
                </StickyCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
