"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SECTION_NUMBER = "03";
const SECTION_LABEL = "Our Story";
const HEADLINE = "Built From What We Couldn't Unsee";
const NARRATIVE =
  "During a health policy hackathon in February 2026, we decided to go out on a Friday night instead of staying in the dorm. That night, away from our screens, we saw how easily someone's hardest moments can slip past the people who care most. Within 24 hours, we built PRISM, a predictive platform to help Harris County allocate harm-reduction resources. We won first place. But more importantly, we couldn't stop asking: why does it take a crisis for someone to notice?";
const CLOSING =
  "Refleo exists so that the people already in a teen's life — their therapist — never have to wonder what they missed.";

export default function FoundingStory() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-fs-animate]",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={rootRef}
      className="bg-teal-dark text-cream py-32 md:py-48"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section eyebrow */}
        <div className="flex items-baseline gap-4 mb-14" data-fs-animate>
          <span className="text-apricot font-bold text-5xl sm:text-6xl leading-none tracking-tight">
            {SECTION_NUMBER}
          </span>
          <span className="text-cream/50 text-xs uppercase tracking-widest font-medium">
            {SECTION_LABEL}
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance text-cream mb-12"
          data-fs-animate
        >
          {HEADLINE}
        </h2>

        {/* Narrative paragraph */}
        <p
          className="text-cream/85 text-lg sm:text-xl leading-relaxed mb-14"
          data-fs-animate
        >
          {NARRATIVE}
        </p>

        {/* Closing line — apricot left-border accent, set apart */}
        <div
          className="border-l-2 border-apricot pl-6"
          data-fs-animate
        >
          <p className="text-apricot-light text-xl sm:text-2xl leading-relaxed font-medium">
            {CLOSING}
          </p>
        </div>
      </div>
    </section>
  );
}
