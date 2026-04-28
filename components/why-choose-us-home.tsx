"use client";

import type { ReactNode } from "react";
import GradientText from "@/components/ui/GradientText";
import ShinyText from "@/components/ui/ShinyText";
import Shuffle from "@/components/ui/Shuffle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const reasons = [
  {
    value: "item-1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7h8" />
        <path d="M8 12h8" />
        <path d="M8 17h8" />
        <path d="M4 7h.01" />
        <path d="M4 12h.01" />
        <path d="M4 17h.01" />
      </svg>
    ),
    title: "Design + Fit-Out Under One Team",
    content:
      "From concept design and 3D visualization to execution and handover, one accountable team manages the full project. This reduces coordination gaps, protects quality, and keeps timelines predictable.",
  },
  {
    value: "item-2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
        <path d="M9 9h1" />
      </svg>
    ),
    title: "Dubai Compliance & Approval Support",
    content:
      "We help coordinate authority submissions and compliance requirements so your office fit-out progresses without avoidable delays. Our process keeps documentation, approvals, and execution aligned.",
  },
  {
    value: "item-3",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 19l4 -6l4 2l5 -7l3 2" />
        <path d="M4 19h16" />
      </svg>
    ),
    title: "Business-First Space Planning",
    content:
      "Every layout is designed around your workflow, team size, and growth goals. We focus on circulation, acoustics, lighting, and ergonomics to create practical offices that improve productivity.",
  },
  {
    value: "item-4",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 6l18 0" />
        <path d="M7 12l0 .01" />
        <path d="M11 12l2 0" />
        <path d="M3 18l18 0" />
      </svg>
    ),
    title: "Transparent Budgeting & Milestones",
    content:
      "You get clear BOQ-based costing, milestone tracking, and regular progress updates. This gives you visibility from procurement to snagging and helps avoid unexpected cost overruns.",
  },
  {
    value: "item-5",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
    ),
    title: "Premium Finishes, Reliable Delivery",
    content:
      "Our fit-out execution combines quality materials, experienced site teams, and detail-focused QA checks. The result is a polished workspace that reflects your brand and is ready for daily operations.",
  },
];

type Reason = {
  value: string;
  title: string;
  content: string;
  icon: ReactNode;
};

export default function WhyChooseUsHome() {
  const typedReasons = reasons as Reason[];

  return (
    <section id="why-choose-us" className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto mb-7 max-w-3xl text-center md:mb-9">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">Why Choose Us</h2>
        <p className="mt-3 text-sm font-medium text-zinc-600 md:text-base">
          Built for modern Dubai offices that need quality, speed, and dependable delivery.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-5 ring-1 ring-zinc-200 ring-offset-2 md:grid-cols-2 md:gap-10 md:p-8 md:ring-offset-6">
        <div className="flex h-full flex-col">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 md:text-5xl">
            <ShinyText
              text="Trusted Office Interior Design & Fit-Out in Dubai"
              speed={2}
              delay={0.2}
              color="#111827"
              shineColor="#64748b"
              spread={125}
              direction="left"
              className="inline"
            />
          </h2>
          <p className="max-w-xl text-base font-medium leading-relaxed text-zinc-700 md:text-lg">
            We create high-performance workspaces with a process built for quality, speed, and complete project
            clarity.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-auto md:pt-8">
            <div className="group rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-300 hover:border-zinc-300 hover:shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500">
                <GradientText
                  colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                  animationSpeed={3}
                  direction="horizontal"
                  showBorder={false}
                  pauseOnHover={false}
                  yoyo
                  className="inline"
                >
                  Project Delivery
                </GradientText>
              </p>
              <Shuffle
                text="On Time"
                tag="p"
                className="mt-1 text-2xl font-bold text-zinc-900"
                textAlign="left"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={false}
                triggerOnHover
                hoverTarget="parent-group"
                respectReducedMotion
              />
            </div>
            <div className="group rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-300 hover:border-zinc-300 hover:shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500">
                <GradientText
                  colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                  animationSpeed={3}
                  direction="horizontal"
                  showBorder={false}
                  pauseOnHover={false}
                  yoyo
                  className="inline"
                >
                  Execution Model
                </GradientText>
              </p>
              <Shuffle
                text="Turnkey"
                tag="p"
                className="mt-1 text-2xl font-bold text-zinc-900"
                textAlign="left"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={false}
                triggerOnHover
                hoverTarget="parent-group"
                respectReducedMotion
              />
            </div>
            <div className="group rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-300 hover:border-zinc-300 hover:shadow-sm sm:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500">
                <GradientText
                  colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                  animationSpeed={3}
                  direction="horizontal"
                  showBorder={false}
                  pauseOnHover={false}
                  yoyo
                  className="inline"
                >
                  Focus Area
                </GradientText>
              </p>
              <Shuffle
                text="Office Interiors, Renovation, and Fit-Out in Dubai"
                tag="p"
                className="mt-1 text-2xl font-bold text-zinc-900"
                textAlign="left"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={false}
                triggerOnHover
                hoverTarget="parent-group"
                respectReducedMotion
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {typedReasons.map((reason) => (
              <AccordionItem key={reason.value} value={reason.value} className="border-zinc-200 last:border-b-0">
                <AccordionTrigger className="text-base font-semibold text-zinc-900 hover:no-underline md:text-lg">
                  <span className="inline-flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700">
                      {reason.icon}
                    </span>
                    <span>{reason.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-zinc-600 md:text-base">
                  {reason.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
