"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import GradientText from "@/components/ui/GradientText";
import ShinyText from "@/components/ui/ShinyText";
import Shuffle from "@/components/ui/Shuffle";
import { ShinyButton } from "@/components/ui/shiny-button";

export function OfficeOverviewSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "error">("idle");

  const openInquiryModal = () => {
    setSubmitState("idle");
    setIsSuccessModalOpen(false);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isSuccessModalOpen) return;
    const timeout = setTimeout(() => setIsSuccessModalOpen(false), 10000);
    return () => clearTimeout(timeout);
  }, [isSuccessModalOpen]);

  useEffect(() => {
    const handleOpenInquiryModal = () => openInquiryModal();
    window.addEventListener("openInquiryModal", handleOpenInquiryModal);
    return () => window.removeEventListener("openInquiryModal", handleOpenInquiryModal);
  }, []);

  return (
    <>
      <section
        id="office-interior-overview"
        aria-labelledby="office-interior-overview-title"
        className="w-full px-4 pb-12 sm:px-6 md:pt-6 md:pb-16 lg:px-8"
      >
        <motion.div
          className="mx-auto w-full max-w-7xl overflow-hidden rounded-[1.8rem] border border-zinc-200 bg-zinc-50/70 p-3 md:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="grid gap-4 lg:grid-cols-12 lg:items-stretch">
            <div className="space-y-3 lg:col-span-7 lg:h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-4 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 md:text-sm">
                  <GradientText
                    colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                    animationSpeed={3}
                    direction="horizontal"
                    showBorder={false}
                    pauseOnHover={false}
                    yoyo
                    className="inline"
                  >
                    Dubai Office Fit-Out
                  </GradientText>
                </p>
                <div className="mt-3">
                  <Shuffle
                    text="Office Interior Design & Fit-Out Solutions in Dubai"
                    tag="h2"
                    className="text-left text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl"
                    textAlign="left"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce
                    triggerOnHover
                    hoverTarget="parent-group"
                    respectReducedMotion
                  />
                </div>
                <div className="mt-4 flex-1 text-sm font-medium leading-relaxed text-zinc-900 sm:text-base">
                  <p>
                    Creating a functional and visually appealing workspace is key to productivity and
                    brand identity. Our office interior design services in Dubai deliver modern,
                    efficient, and customized environments tailored to your business needs.
                  </p>
                  <p className="mt-4">
                    We provide end-to-end office fit-out solutions from concept to execution-including
                    workspace planning, renovations, and turnkey services. Every detail, from layout to
                    lighting and furniture, is designed to align with your workflow and brand.
                  </p>
                  <p className="mt-4">
                    Whether it&apos;s a corporate office, modern fit-out, or complete renovation, we
                    ensure high-quality results with seamless delivery. Our expertise includes ergonomic
                    designs, luxury interiors, and space-efficient layouts that enhance productivity and
                    aesthetics.
                  </p>
                </div>

                <div className="mt-7 md:mt-8">
                  <ShinyButton
                    onClick={openInquiryModal}
                    className="group w-full cursor-pointer md:w-auto"
                    style={
                      {
                        ["--shiny-cta-bg" as string]: "#0000FF",
                        ["--shiny-cta-bg-subtle" as string]: "#1d4ed8",
                        ["--shiny-cta-fg" as string]: "#ffffff",
                        ["--shiny-cta-highlight" as string]: "#60a5fa",
                        ["--shiny-cta-highlight-subtle" as string]: "#bfdbfe",
                        ["--shiny-cta-dot" as string]: "rgba(255, 255, 255, 1)",
                        padding: "0.78rem 1.7rem",
                        fontSize: "0.92rem",
                        fontWeight: 600,
                      } as React.CSSProperties
                    }
                  >
                    Talk to Our Experts Today
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    >
                      <motion.path
                        d="M11.303 19.955a9.818 9.818 0 0 1 -3.603 -.955l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.73 1.476 2.665 3.435 2.76 5.433"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                        transition={{
                          duration: 3.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          times: [0, 0.35, 0.72, 1],
                        }}
                      />
                      <motion.path
                        d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                        transition={{
                          duration: 3.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          times: [0, 0.35, 0.72, 1],
                          delay: 0.12,
                        }}
                      />
                      <motion.path
                        d="M20.2 20.2l1.8 1.8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                        transition={{
                          duration: 3.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          times: [0, 0.35, 0.72, 1],
                          delay: 0.24,
                        }}
                      />
                    </motion.svg>
                  </ShinyButton>
                </div>
              </div>
            </div>

            <div className="space-y-3 lg:col-span-5 lg:flex lg:h-full lg:flex-col">
              <motion.div
                className="relative flex-1 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 md:p-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <img
                  src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Modern office interior in Dubai"
                  className="h-full min-h-[320px] w-full rounded-xl object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                    Crafted Workspaces
                  </p>
                  <p className="mt-1 text-xl font-semibold leading-tight text-white">
                    Performance-driven office environments built for growth
                  </p>
                </div>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="group h-full rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                    <GradientText
                      colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                      animationSpeed={3}
                      direction="horizontal"
                      showBorder={false}
                      pauseOnHover={false}
                      yoyo
                      className="inline"
                    >
                      Delivery
                    </GradientText>
                  </p>
                  <Shuffle
                    text="Turnkey"
                    tag="h3"
                    className="mt-2 text-left text-2xl font-bold text-zinc-900"
                    textAlign="left"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce
                    triggerOnHover
                    hoverTarget="parent-group"
                    respectReducedMotion
                  />
                  <p className="mt-1 text-sm font-medium text-zinc-900">From concept to handover with one accountable team.</p>
                </div>
                <div className="group h-full rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                    <GradientText
                      colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                      animationSpeed={3}
                      direction="horizontal"
                      showBorder={false}
                      pauseOnHover={false}
                      yoyo
                      className="inline"
                    >
                      Focus
                    </GradientText>
                  </p>
                  <Shuffle
                    text="Ergonomic"
                    tag="h3"
                    className="mt-2 text-left text-2xl font-bold text-zinc-900"
                    textAlign="left"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce
                    triggerOnHover
                    hoverTarget="parent-group"
                    respectReducedMotion
                  />
                  <p className="mt-1 text-sm font-medium text-zinc-900">Layouts designed to improve comfort and productivity.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {isMounted
        ? createPortal(
            <>
              <AnimatePresence>
                {isModalOpen ? (
                  <motion.div
                    className="fixed inset-0 z-120 grid place-items-center overflow-y-auto bg-black/50 backdrop-blur-sm p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsModalOpen(false)}
                  >
                    <motion.div
                      className="my-6 w-full max-w-lg rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl md:p-8"
                      initial={{ opacity: 0, y: 16, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl  font-bold text-zinc-900">
                            <ShinyText
                              text="Talk to Our Experts"
                              speed={2}
                              delay={0.2}
                              color="#18181b"
                              shineColor="#64748b"
                              spread={100}
                              direction="left"
                              yoyo={false}
                              pauseOnHover={false}
                              className="inline"
                            />
                          </h3>
                          <p className="mt-1 text-sm text-zinc-800">
                            Share your project details and our team will contact you shortly.
                          </p>
                        </div>
                        <button
                          type="button"
                          className="cursor-pointer rounded-md border border-neutral-300 bg-neutral-100 p-1 text-zinc-500 ring-1 ring-neutral-200 ring-offset-2 transition hover:bg-zinc-100 hover:text-zinc-800"
                          onClick={() => setIsModalOpen(false)}
                          aria-label="Close form"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-5"
                            aria-hidden
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <form
                        className="space-y-4"
                        onSubmit={async (e) => {
                          e.preventDefault();
                          setSubmitState("idle");

                          const form = e.currentTarget;
                          const formData = new FormData(form);
                          const fullName = String(formData.get("fullName") || "").trim();
                          const phone = String(formData.get("phone") || "").trim();
                          const email = String(formData.get("email") || "").trim();

                          if (!fullName || !phone || !email) {
                            setSubmitState("error");
                            return;
                          }

                          try {
                            setIsSubmitting(true);
                            await new Promise((resolve) => setTimeout(resolve, 900));
                            setIsModalOpen(false);
                            setIsSuccessModalOpen(true);
                            form.reset();
                          } catch {
                            setSubmitState("error");
                          } finally {
                            setIsSubmitting(false);
                          }
                        }}
                      >
                        <AnimatePresence>
                          {submitState === "error" ? (
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800"
                            >
                              <div className="flex items-start gap-2.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mt-0.5 size-5 shrink-0"
                                  aria-hidden
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                  <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
                                  <path d="M12 9h.01" />
                                  <path d="M11 12h1v4h1" />
                                </svg>
                                <p className="leading-6">
                                  We could not send your request right now. Please check your details and try
                                  again.
                                </p>
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>

                        <div className="grid gap-4 md:grid-cols-2">
                          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
                            <span>
                              Full name <span className="text-red-500">*</span>
                            </span>
                            <input
                              required
                              name="fullName"
                              type="text"
                              placeholder="Full name"
                              className="h-11 rounded-xl border border-zinc-200 px-4 text-sm font-normal outline-none transition focus:border-zinc-400"
                            />
                          </label>
                          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
                            <span>
                              Phone number <span className="text-red-500">*</span>
                            </span>
                            <input
                              required
                              name="phone"
                              type="tel"
                              placeholder="Phone number"
                              className="h-11 rounded-xl border border-zinc-200 px-4 text-sm font-normal outline-none transition focus:border-zinc-400"
                            />
                          </label>
                        </div>
                        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
                          <span>
                            Email address <span className="text-red-500">*</span>
                          </span>
                          <input
                            required
                            name="email"
                            type="email"
                            placeholder="Email address"
                            className="h-11 w-full rounded-xl border border-zinc-200 px-4 text-sm font-normal outline-none transition focus:border-zinc-400"
                          />
                        </label>
                        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
                          Project details (optional)
                          <textarea
                            name="projectDetails"
                            rows={4}
                            placeholder="Tell us about your office project"
                            className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-zinc-400"
                          />
                        </label>
                        <Button
                          type="submit"
                          className="h-11 w-full rounded-full bg-[#0000FF] text-white hover:bg-blue-700"
                          disabled={isSubmitting}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-4"
                            aria-hidden
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                          </svg>
                          {isSubmitting ? "Sending..." : "Submit Inquiry"}
                        </Button>

                        <div className="my-4 h-px w-full bg-zinc-200" />

                        <div className="grid gap-3 sm:grid-cols-2">
                          <ShinyButton
                            onClick={() =>
                              window.open(
                                "https://wa.me/971500000000?text=Hi%2C%20I%20need%20office%20interior%20design%20consultation.",
                                "_blank",
                                "noopener,noreferrer",
                              )
                            }
                            className="w-full"
                            style={
                              {
                                ["--shiny-cta-bg" as string]: "#25d366",
                                ["--shiny-cta-bg-subtle" as string]: "#1ebe5d",
                                ["--shiny-cta-fg" as string]: "#ffffff",
                                ["--shiny-cta-highlight" as string]: "#86efac",
                                ["--shiny-cta-highlight-subtle" as string]: "#dcfce7",
                                ["--shiny-cta-dot" as string]: "rgba(255, 255, 255, 1)",
                                height: "2.75rem",
                                borderRadius: "50px",
                                fontSize: "1rem",
                                fontWeight: 600,
                              } as React.CSSProperties
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="size-4"
                              aria-hidden
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                            </svg>
                            WhatsApp
                          </ShinyButton>
                          <ShinyButton
                            onClick={() => {
                              window.location.href = "tel:+971500000000";
                            }}
                            className="w-full"
                            style={
                              {
                                ["--shiny-cta-bg" as string]: "#7c3aed",
                                ["--shiny-cta-bg-subtle" as string]: "#6d28d9",
                                ["--shiny-cta-fg" as string]: "#ffffff",
                                ["--shiny-cta-highlight" as string]: "#c4b5fd",
                                ["--shiny-cta-highlight-subtle" as string]: "#ede9fe",
                                ["--shiny-cta-dot" as string]: "rgba(255, 255, 255, 1)",
                                height: "2.75rem",
                                borderRadius: "50px",
                                fontSize: "1rem",
                                fontWeight: 600,
                              } as React.CSSProperties
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="size-4"
                              aria-hidden
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" />
                              <path d="M15 5h6" />
                              <path d="M18.5 7.5l2.5 -2.5l-2.5 -2.5" />
                            </svg>
                            Call to an Expert
                          </ShinyButton>
                        </div>
                      </form>
                    </motion.div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <AnimatePresence>
                {isSuccessModalOpen ? (
                  <motion.div
                    className="fixed inset-0 z-120 grid place-items-center overflow-y-auto bg-black/50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsSuccessModalOpen(false)}
                  >
                    <motion.div
                      className="my-6 w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl md:p-8"
                      initial={{ opacity: 0, y: 16, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-semibold text-zinc-900">Request Sent</h3>
                        <button
                          type="button"
                          className="rounded-md border border-neutral-300 bg-neutral-100 p-1 text-zinc-500 ring-1 ring-neutral-200 ring-offset-2 transition hover:bg-zinc-100 hover:text-zinc-800"
                          onClick={() => setIsSuccessModalOpen(false)}
                          aria-label="Close success message"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-5"
                            aria-hidden
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-800">
                        <div className="flex items-start gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mt-0.5 size-5 shrink-0"
                            aria-hidden
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                            <path d="M9 12l2 2l4 -4" />
                          </svg>
                          <p className="text-base leading-7">
                            Your request has been sent successfully. We will get back to you soon.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </>,
            document.body,
          )
        : null}
    </>
  );
}
