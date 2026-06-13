"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "Helping clinicians capture life outside the session";
const SUBTEXT =
  "Voice journaling for teens. Pre-session briefs for their therapists.";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Split headline into word spans for stagger animation
      const h1 = headlineRef.current;
      if (!h1) return;

      const words = HEADLINE.split(" ");
      h1.innerHTML = words
        .map((word) => `<span class="inline-block word-span">${word}</span>`)
        .join(" ");

      const wordSpans = h1.querySelectorAll<HTMLElement>(".word-span");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.35 });

      tl.fromTo(
        wordSpans,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 }
      )
        .fromTo(
          subtextRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          ctasRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProblem = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-teal-dark px-6 pt-24 pb-16 text-center"
    >
      {/* Ripple background — classes + keyframes defined in globals.css */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 0 }}
      >
        {/* Center apricot dot */}
        <span
          className="absolute rounded-full bg-apricot"
          style={{ width: 10, height: 10 }}
        />

        {/* Ring 1 — innermost, teal-light accent */}
        <span
          className="ripple-ring ripple-ring--accent"
          style={{ width: 220, height: 220, animationDelay: "0s" }}
        />

        {/* Ring 2 */}
        <span
          className="ripple-ring"
          style={{ width: 360, height: 360, animationDelay: "1.4s" }}
        />

        {/* Ring 3 */}
        <span
          className="ripple-ring"
          style={{ width: 520, height: 520, animationDelay: "2.8s" }}
        />

        {/* Ring 4 — outermost */}
        <span
          className="ripple-ring"
          style={{ width: 700, height: 700, animationDelay: "4.2s" }}
        />
      </div>

      {/* Main content — above the rings */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center gap-6">
        <h1
          ref={headlineRef}
          className="text-balance text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-6xl lg:text-7xl xl:text-8xl"
          style={{ maxWidth: "18ch", lineHeight: 1.1 }}
        >
          {HEADLINE}
        </h1>

        <p
          ref={subtextRef}
          className="max-w-xl text-lg text-cream/70 sm:text-xl"
        >
          {SUBTEXT}
        </p>

        <div
          ref={ctasRef}
          className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {/* Book a Demo — apricot FILL pill */}
          <a
            href="mailto:vishwasvijayan007@gmail.com,rishianarkat@gmail.com?subject=Demo Request"
            className="rounded-full bg-apricot px-8 py-3 text-sm font-semibold text-teal-dark transition-colors duration-200 hover:bg-apricot-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apricot"
          >
            Book a Demo
          </a>

          {/* Get in Touch — apricot OUTLINE pill */}
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-full border border-apricot bg-transparent px-8 py-3 text-sm font-semibold text-apricot transition-colors duration-200 hover:bg-apricot/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apricot"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator — bottom-center */}
      <button
        type="button"
        aria-label="Scroll down"
        onClick={scrollToProblem}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-cream/60 transition-opacity hover:text-cream/80"
      >
        <span className="text-xs font-light tracking-widest uppercase">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 animate-bounce"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </section>
  );
}
