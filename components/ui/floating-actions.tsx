"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "971556545950";
const WHATSAPP_MESSAGE = "Hello! I'm interested in your services.";

function useScrollThresholdVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const thresholdElement = document.getElementById("page-scroll-threshold");
    if (!thresholdElement) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting);
    });

    observer.observe(thresholdElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return isVisible;
}

function ScrollToTopButton({ isVisible }: { isVisible: boolean }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-8 right-4 z-50 rounded-xl border border-[#e1e1e1] bg-[#080f0f] p-1 text-[#e1e1e1] shadow-lg ring ring-neutral-300 ring-offset-2 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110 sm:right-8",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      ].join(" ")}
      type="button"
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
        aria-hidden="true"
        className="size-5 md:size-7"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5v6m0 3v1.5m0 3v.5" />
        <path d="M18 11l-6 -6" />
        <path d="M6 11l6 -6" />
      </svg>
    </button>
  );
}

function WhatsAppButton({ isVisible }: { isVisible: boolean }) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div
      className={[
        "group fixed bottom-20 right-4 z-50 overflow-visible transition-all duration-300 ease-out sm:right-8",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0",
      ].join(" ")}
    >
      <a
        href={href}
        className="relative inline-block rounded-xl border border-[#e1e1e1] bg-green-500 p-1 text-[#e1e1e1] shadow-lg ring ring-neutral-300 ring-offset-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl"
        aria-label="Contact on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="size-5 md:size-7"
        >
          <path d="M12.04 2C6.63 2 2.25 6.38 2.25 11.78c0 1.9.55 3.76 1.58 5.36L2 22l4.98-1.77a9.76 9.76 0 0 0 5.06 1.4h.01c5.4 0 9.79-4.38 9.79-9.79A9.78 9.78 0 0 0 12.04 2Zm0 17.86a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-2.95 1.05 1.08-2.88-.2-.3a8.05 8.05 0 0 1-1.25-4.34c0-4.45 3.62-8.07 8.07-8.07 4.46 0 8.08 3.62 8.08 8.07 0 4.46-3.62 8.08-8.08 8.08Zm4.43-6.04c-.24-.12-1.43-.7-1.65-.77-.22-.08-.38-.12-.54.11s-.62.77-.76.93c-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.17-1.39-1.31-1.62-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.09 3.61.57.24 1.02.39 1.36.5.57.18 1.1.15 1.52.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>

        <div className="pointer-events-none invisible absolute bottom-full right-0 mb-2 translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div className="whitespace-nowrap rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-800 ring ring-neutral-300 ring-offset-2">
            Connect through WhatsApp for faster response
          </div>
        </div>
      </a>
    </div>
  );
}

export function FloatingActions() {
  const isVisible = useScrollThresholdVisibility();

  return (
    <>
      <WhatsAppButton isVisible={isVisible} />
      <ScrollToTopButton isVisible={isVisible} />
    </>
  );
}
