"use client";

import type React from "react";
import { motion } from "motion/react";
import GradientText from "@/components/ui/GradientText";
import ShinyText from "@/components/ui/ShinyText";
import { ShinyButton } from "@/components/ui/shiny-button";

type HomeCtaSectionProps = {
  heading?: string;
  subheading?: string;
  description?: string;
  points?: string[];
  panelTitle?: string;
  panelSummary?: string;
  panelPoints?: string[];
  whatsappNumber?: string;
  phoneNumber?: string;
};

const defaultPoints = [
  "Free design consultation with workspace planning clarity",
  "End-to-end delivery from concept to handover",
  "Timeline-focused execution with quality-first supervision",
];

export default function HomeCtaSection({
  heading = "Turn Your Office Into the Talk of Dubai !",
  subheading = "Make Your space a Powerful Impression.",
  description = "Transform your office with bespoke interior solutions proven to spark creativity, wow visitors, and boost your team's daily performance.",
  points = defaultPoints,
  panelTitle = "Design and Fit-Out Spaces That Elevate How You Live and Work",
  panelSummary = "We create extraordinary offices that inspire innovation, showcase your brand, and deliver peace of mind from design to delivery. Our team of experts works closely with you to understand your unique needs and create a space that is both functional and aesthetically pleasing.",
  panelPoints = [
    "Customized solutions tailored to your brand and workflow",
    "Transparent budgeting with clear milestones and progress tracking",
    "Single accountable team for design, approvals, and fit-out coordination",
  ],
  whatsappNumber = "971500000000",
  phoneNumber = "+971500000000",
}: HomeCtaSectionProps) {
  return (
    <section id="cta-contact" className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto w-full max-w-7xl space-y-7 md:space-y-10">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-zinc-300 bg-zinc-50/70 p-4 ring-1 ring-zinc-200 ring-offset-2 md:p-6 md:ring-offset-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(to right, #e7e5e4 1px, transparent 1px), linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)",
              backgroundSize: "1px 1px",
              backgroundPosition: "0 0, 0 0",
              maskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />

          <div className="relative z-10 grid gap-6 md:grid-cols-2 md:gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-blue-500" />
                <p className="text-xs font-extrabold uppercase tracking-[0.18em]">
                  <GradientText
                    colors={["#52525b", "#2563eb", "#52525b", "#1d4ed8", "#52525b"]}
                    animationSpeed={3}
                    direction="horizontal"
                    showBorder={false}
                    pauseOnHover={false}
                    yoyo
                    className="inline"
                  >
                    Our Approach
                  </GradientText>
                </p>
              </div>
              <h3 className="mt-2 text-3xl font-semibold leading-tight text-zinc-900 md:text-5xl">
                {panelTitle}
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-base font-medium leading-relaxed text-zinc-900 md:text-lg">{panelSummary}</p>
              <ul className="space-y-2.5">
                {panelPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm font-medium text-zinc-700 md:text-base">
                    <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-3xl px-4 py-14 md:px-10 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-2xl font-medium md:text-4xl">
              <GradientText
                colors={["#52525b", "#2563eb", "#52525b", "#1d4ed8", "#52525b"]}
                animationSpeed={3}
                direction="horizontal"
                showBorder={false}
                pauseOnHover={false}
                yoyo
                className="inline"
              >
                {subheading.toLowerCase()}
              </GradientText>
            </p>
            <h2 className="mt-2 text-5xl font-bold leading-[0.95] tracking-tight text-zinc-900 md:text-7xl">
              <ShinyText
                text={heading}
                speed={2.2}
                delay={0.2}
                color="#111827"
                shineColor="#64748b"
                spread={135}
                direction="left"
                className="inline"
              />
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-zinc-700 md:text-xl">{description}</p>

            {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10">
              {points.map((point) => (
                <span key={point} className="rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-700 md:text-sm">
                  {point}
                </span>
              ))}
            </div> */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10">
              <ShinyButton
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20need%20office%20interior%20design%20consultation.`,
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                style={
                  {
                    ["--shiny-cta-bg" as string]: "#22c55e",
                    ["--shiny-cta-bg-subtle" as string]: "#16a34a",
                    ["--shiny-cta-fg" as string]: "#ffffff",
                    ["--shiny-cta-highlight" as string]: "#86efac",
                    ["--shiny-cta-highlight-subtle" as string]: "#dcfce7",
                    ["--shiny-cta-dot" as string]: "rgba(255, 255, 255, 1)",
                    height: "2.75rem",
                    borderRadius: "999px",
                    paddingInline: "1.45rem",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                  } as React.CSSProperties
                }
              >
                WhatsApp Now
              </ShinyButton>

              <ShinyButton
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
                style={
                  {
                    ["--shiny-cta-bg" as string]: "#8b5cf6",
                    ["--shiny-cta-bg-subtle" as string]: "#7c3aed",
                    ["--shiny-cta-fg" as string]: "#ffffff",
                    ["--shiny-cta-highlight" as string]: "#c4b5fd",
                    ["--shiny-cta-highlight-subtle" as string]: "#ede9fe",
                    ["--shiny-cta-dot" as string]: "rgba(255, 255, 255, 1)",
                    height: "2.75rem",
                    borderRadius: "999px",
                    paddingInline: "1.45rem",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                  } as React.CSSProperties
                }
              >
                Call to an Expert
              </ShinyButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
