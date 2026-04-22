"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

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
];

export default function WhyItsMatterHome() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Scroll-linked stacked-card effect (card 2 rises and overlaps card 1)
  const secondCardY = useTransform(scrollYProgress, [0.48, 0.9], [700, 0]);
  const secondCardScale = useTransform(scrollYProgress, [0.48, 0.9], [0.97, 1]);
  const secondCardOpacity = 1;
  const firstCardScale = useTransform(scrollYProgress, [0.62, 0.94], [1, 0.98]);
  const firstCardOpacity = useTransform(scrollYProgress, [0.68, 0.96], [1, 0.96]);

  return (
    <section ref={sectionRef} className="relative h-auto w-full bg-background px-4 py-14 sm:px-6 md:h-[260vh] lg:px-32">
      <div className="w-full md:hidden">
        <h2 className="mb-8 font-recia text-3xl font-semibold text-zinc-900">Why It Matters</h2>
        <div className="space-y-6">
          <article className="grid gap-5 rounded-3xl border border-zinc-300/80 bg-white p-4 shadow-xl">
            <div className="overflow-hidden rounded-2xl">
              <img src={cards[0].image} alt={cards[0].alt} className="h-full min-h-[220px] w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-recia text-5xl font-semibold leading-tight text-zinc-900">{cards[0].title}</h3>
              <p className="mt-3 text-base leading-8 text-zinc-700">{cards[0].description}</p>
            </div>
          </article>

          <article className="grid gap-5 rounded-3xl border border-black/10 bg-[#e65b2a] p-4 text-white shadow-2xl">
            <div className="flex flex-col justify-center">
              <h3 className="font-recia text-5xl font-semibold leading-tight">{cards[1].title}</h3>
              <p className="mt-3 text-base leading-8 text-white/90">{cards[1].description}</p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src={cards[1].image} alt={cards[1].alt} className="h-full min-h-[220px] w-full object-cover" />
            </div>
          </article>
        </div>
      </div>

      <div className="sticky top-20 hidden w-full md:block">
        <h2 className="mb-8 font-recia text-3xl font-semibold text-zinc-900 md:text-5xl">Why It Matters</h2>

        <div className="relative min-h-[78vh]">
          <motion.article
            style={{ scale: firstCardScale, opacity: firstCardOpacity }}
            className="grid gap-6 rounded-3xl border border-zinc-300 bg-neutral-100 ring-1 ring-zinc-200 ring-offset-2 md:ring-offset-4 p-4  md:grid-cols-2 md:p-7"
          >
            <div className="overflow-hidden rounded-xl">
              <img src={cards[0].image} alt={cards[0].alt} className="h-full min-h-[260px] w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-recia text-3xl font-semibold leading-tight text-zinc-900 md:text-5xl">
                {cards[0].title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-700 md:text-3xl lg:mt-14">{cards[0].description}</p>
            </div>
          </motion.article>

          <motion.article
            style={{ y: secondCardY, scale: secondCardScale, opacity: secondCardOpacity }}
            className="absolute inset-x-0 top-0 z-10 grid gap-6 rounded-3xl border border-black/10 bg-[#e65b2a] p-4 text-white ring-1 ring-[#e65b2a] ring-offset-2 md:ring-offset-4 md:grid-cols-2 md:p-7"
          >
            <div className="flex flex-col justify-center">
              <h3 className="font-recia text-3xl font-semibold leading-tight md:text-5xl">{cards[1].title}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/90 md:text-3xl lg:mt-14">{cards[1].description}</p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src={cards[1].image} alt={cards[1].alt} className="h-full min-h-[260px] w-full object-cover" />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
