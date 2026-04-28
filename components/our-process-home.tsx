"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import ShinyText from "@/components/ui/ShinyText";

type ProcessStep = {
  icon: ReactNode;
  heading: string;
  paragraph: string;
  points: string[];
  image: string;
};

const processSteps: ProcessStep[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-zinc-800">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9.5 6.5l-4.5 4.5l4.5 4.5" />
        <path d="M14.5 6.5l4.5 4.5l-4.5 4.5" />
      </svg>
    ),
    heading: "Discovery & Site Survey",
    paragraph:
      "We align with your goals, team structure, and brand direction, then perform a detailed site survey to define scope, constraints, and opportunities.",
    points: [
      "On-site measurements and existing-condition assessment",
      "Requirement workshop for teams, departments, and workflows",
    ],
    image:
      "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-zinc-800">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
    ),
    heading: "Concept & Space Planning",
    paragraph:
      "Our designers develop layout options, material palettes, and 3D visual direction to create a modern, ergonomic office interior tailored to your business.",
    points: [
      "Zoning plans for collaboration, focus, and meeting spaces",
      "Mood boards and design concepts aligned with your brand",
    ],
    image:
      "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-zinc-800">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
      </svg>
    ),
    heading: "BOQ, Budget & Approvals",
    paragraph:
      "Before execution, we finalize technical drawings, BOQ, and budget clarity while coordinating Dubai authority approvals for a predictable project start.",
    points: [
      "Transparent costing with value-engineering options",
      "Permit and compliance coordination for smooth approvals",
    ],
    image:
      "https://images.pexels.com/photos/6694965/pexels-photo-6694965.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-zinc-800">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 12l5 5l10 -10" />
        <path d="M2 12l5 5m5 -5l5 -5" />
      </svg>
    ),
    heading: "Fit-Out Execution & Handover",
    paragraph:
      "Our project team manages procurement, joinery, MEP, and on-site execution with quality checks and milestone reporting until final handover.",
    points: [
      "Dedicated project manager and timeline-based execution",
      "Snagging, QA checks, and handover ready for move-in",
    ],
    image:
      "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
];

export default function OurProcessHome() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight * 0.36;
      let bestIndex = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });

      setActiveIndex((prev) => (prev !== bestIndex ? bestIndex : prev));
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="our-process" className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full md:hidden">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Our Process</h2>
          <p className="mt-3 text-base leading-relaxed font-medium text-zinc-600">
            A clear, end-to-end workflow for office interior design and fit-out in Dubai.
          </p>

          <div className="mt-8 space-y-4">
            {processSteps.map((step) => (
              <article key={step.heading} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img src={step.image} alt={`${step.heading} visual`} className="h-auto w-full object-cover" loading="lazy" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-100 border border-zinc-300 ring ring-zinc-200 ring-offset-2 shadow-md text-base">
                    {step.icon}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">
                    <ShinyText text={step.heading} speed={3} />
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-800 font-semibold">{step.paragraph}</p>
                <div className="my-2 h-px w-full bg-zinc-200" />
                <ul className="mt-3 space-y-1.5">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm font-medium text-zinc-600">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded bg-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">Our Process</h2>
            <p className="mt-4 text-lg font-medium leading-relaxed text-zinc-600">
              A structured delivery model for office design, approvals, and fit-out execution.
            </p>
          </div>

          <div className="mt-16 w-full max-w-7xl space-y-16 md:mt-20 md:space-y-24">
            {processSteps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={step.heading} className="relative flex flex-col gap-5 md:flex-row md:gap-20" aria-current={isActive ? "true" : "false"}>
                  <div className="top-20 flex h-min w-72 shrink-0 items-start gap-3 md:sticky">
                    <span
                      className={`mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 ring-zinc-200 ring-offset-2 text-base ${
                        isActive ? "bg-zinc-100 border border-zinc-200 shadow-xl" : "bg-zinc-100 text-zinc-700"
                      }`}
                    >
                      {step.icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold text-zinc-900">{step.heading}</span>
                      <span className="text-sm text-zinc-500">
                        Step {index + 1} of {processSteps.length}
                      </span>
                    </div>
                  </div>

                  <div
                    ref={(el) => {
                      sentinelRefs.current[index] = el;
                    }}
                    aria-hidden
                    className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                  />

                  <article
                    className={`flex flex-col rounded-2xl border p-4 transition-all duration-300 md:p-5 ${
                      isActive
                        ? "border-zinc-300 bg-zinc-50 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] ring-1 ring-zinc-200 ring-offset-2 md:ring-offset-6 md:shadow-xl"
                        : "border-zinc-200 bg-white ring-1 ring-zinc-200 ring-offset-2 md:ring-offset-6 shadow-xl"
                    } w-full max-w-4xl`}
                  >
                    <div className="mb-4 overflow-hidden rounded-xl">
                      <img
                        src={step.image}
                        alt={`${step.heading} visual`}
                        className={`w-full object-cover transition-all duration-300 ${isActive ? "h-56 md:h-64" : "h-44 md:h-48"}`}
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className={`text-xl font-semibold leading-tight transition-colors md:text-3xl ${isActive ? "text-zinc-900" : "text-zinc-800"}`}>
                        {step.heading}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-all md:text-lg font-medium ${isActive ? "text-zinc-700 line-clamp-none" : "text-zinc-600 line-clamp-2"}`}>
                        {step.paragraph}
                      </p>
                    </div>

                    <div className={`grid transition-all duration-500 ease-out ${isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <div className="rounded-xl border border-zinc-200 bg-white p-4">
                          <ul className="space-y-2">
                            {step.points.map((point) => (
                              <li key={point} className="flex items-start gap-2 text-sm md:text-base font-medium text-zinc-600">
                                <span className="mt-1 inline-block h-3 w-3 shrink-0 rounded-sm bg-emerald-500" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
