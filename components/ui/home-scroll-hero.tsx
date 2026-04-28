'use client';

import { useEffect, useRef, useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import GradientText from "@/components/ui/GradientText";
import ShinyText from "@/components/ui/ShinyText";
import { ShinyButton } from "@/components/ui/shiny-button";
import { OfficeOverviewSection } from "@/components/ui/office-overview-section";

export function HomeScrollHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasSoundStarted, setHasSoundStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const openInquiryModal = () => {
    window.dispatchEvent(new Event("openInquiryModal"));
  };

  const safePlay = async (video: HTMLVideoElement) => {
    try {
      await video.play();
      return true;
    } catch {
      return false;
    }
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (!hasSoundStarted) {
      video.currentTime = 0;
      video.muted = false;
      const didPlay = await safePlay(video);
      if (!didPlay) return;
      setHasSoundStarted(true);
      setIsPlaying(true);
      return;
    }

    if (video.paused) {
      const didPlay = await safePlay(video);
      if (!didPlay) return;
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleTimelineChange = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <section id="home" className="relative min-h-screen w-full scroll-mt-24 overflow-hidden bg-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(231, 229, 228, 0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(231, 229, 228, 0.45) 1px, transparent 1px)",
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

        <div className="relative z-10">
          <ContainerScroll
            titleComponent={
              <div className="space-y-3 px-4 md:space-y-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] sm:text-sm">
                  <GradientText
                    colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                    animationSpeed={3}
                    showBorder={false}
                    direction="horizontal"
                    pauseOnHover={false}
                    yoyo
                    className="inline"
                  >
                    Interior Design & Fit-Out 
                  </GradientText>
                </p>
                <h1 className="mx-auto max-w-5xl text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-[3.6rem] md:leading-[1.05]">
                  <ShinyText
                    text={"Modern Interior Design\n& Fit-Out in Dubai"}
                    speed={2.2}
                    delay={0.5}
                    color="#111827"
                    shineColor="#64748b"
                    spread={130}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    className="inline whitespace-pre-line"
                  />
                </h1>
                <p className="mx-auto max-w-3xl md:text-xl text-lg leading-relaxed text-zinc-700">
                  Transform your workspace into a productivity-driven environment
                </p>
              </div>
            }
          >
            <div className="group relative h-full w-full">
              <video
                ref={videoRef}
                className="h-full w-full rounded-2xl object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1800&q=80"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={(event) => {
                  setCurrentTime(event.currentTarget.currentTime);
                }}
                onLoadedMetadata={(event) => {
                  setDuration(event.currentTarget.duration || 0);
                }}
                onClick={togglePlayback}
              >
                <source src="https://www.pexels.com/download/video/34630451/" type="video/mp4" />
              </video>

              {(!hasSoundStarted || !isPlaying) && (
                <button
                  type="button"
                  onClick={togglePlayback}
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-400 bg-black/75 text-white shadow-xl backdrop-blur transition hover:scale-105 cursor-pointer"
                  aria-label={!hasSoundStarted ? "Play video with sound" : "Play video"}
                >
                  <span className="ml-1 text-3xl">▶</span>
                </button>
              )}

              {hasSoundStarted && (
                <div className="absolute inset-x-4 bottom-4 rounded-xl bg-black/70 p-3 text-white backdrop-blur">
                  <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    step={0.1}
                    value={Math.min(currentTime, duration || 0)}
                    onChange={(event) => handleTimelineChange(Number(event.currentTarget.value))}
                    className="h-1.5 w-full cursor-pointer accent-white"
                    aria-label="Video progress timeline"
                  />
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span>{formatTime(currentTime)}</span>
                    <button
                      type="button"
                      onClick={togglePlayback}
                      className="rounded-md px-2 py-1 text-xs font-medium hover:bg-white/20"
                    >
                      {isPlaying ? "Pause" : "Play"}
                    </button>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              )}
            </div>
          </ContainerScroll>

          <div className="relative z-30 mx-auto -mt-24 w-full max-w-4xl px-4 pb-10 md:-mt-28">
            <div className="flex flex-col items-center gap-6 px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                <div className="-space-x-2">
                  {[
                    "https://i.pravatar.cc/80?img=12",
                    "https://i.pravatar.cc/80?img=32",
                    "https://i.pravatar.cc/80?img=45",
                    "https://i.pravatar.cc/80?img=52",
                  ].map((avatar) => (
                    <img
                      key={avatar}
                      src={avatar}
                      alt="Community member"
                      className="inline-block h-10 w-10 rounded-full border-2 border-white object-cover sm:h-11 sm:w-11"
                      loading="lazy"
                    />
                  ))}
                </div>
                <p className="text-sm text-zinc-700 md:text-xl">
                  <GradientText
                    colors={["#0f172a", "#2563eb", "#0f172a", "#1d4ed8", "#0f172a"]}
                    animationSpeed={3}
                    direction="horizontal"
                    showBorder={false}
                    pauseOnHover={false}
                    yoyo
                    className="inline text-xl font-bold!"
                  >
                    1 Million+
                  </GradientText>{" "}
                  sq ft designed and delivered across Dubai offices.
                </p>
              </div>

              <ShinyButton
                onClick={openInquiryModal}
                className="bg-[#0000FF] text-white"
                style={
                  {
                    ["--shiny-cta-bg" as string]: "#0000FF",
                    ["--shiny-cta-bg-subtle" as string]: "#1d4ed8",
                    ["--shiny-cta-fg" as string]: "#ffffff",
                    ["--shiny-cta-highlight" as string]: "#60a5fa",
                    ["--shiny-cta-highlight-subtle" as string]: "#bfdbfe",
                    ["--shiny-cta-dot" as string]: "rgba(255, 255, 255, 1)",
                    padding: "0.95rem 2.2rem",
                    fontSize: "1rem",
                    fontWeight: 700,
                  } as React.CSSProperties
                }
              >
                Get Free Consultation
              </ShinyButton>
            </div>
          </div>
        </div>
      </section>

      <OfficeOverviewSection />
    </>
  );
}
