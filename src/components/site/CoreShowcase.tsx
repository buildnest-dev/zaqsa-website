import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Bot,
  Code2,
  GraduationCap,
  HeartPulse,
  Palette,
  Share2,
  Store,
  Sparkles,
  Vote,
} from "@/components/site/icons";
import { useSite } from "@/components/site/SiteContent";
import { getGsap, prefersReducedMotion, smooth } from "@/lib/motion";
import {
  AutomationVisual,
  DesignVisual,
  ElectionVisual,
  HealthcareVisual,
  SchoolVisual,
  SmallBusinessVisual,
  SocialVisual,
  WebAppVisual,
} from "@/components/site/CoreVisuals";
import { LineReveal } from "@/components/site/Split";
import { Photo } from "@/components/site/Photo";

const ICONS = {
  "election-campaign": Vote,
  "school-management": GraduationCap,
  "hospital-management": HeartPulse,
  "website-app-development": Code2,
  "small-business-solutions": Store,
  "social-media-management": Share2,
  "ai-business-automation": Bot,
  "graphic-design-branding": Palette,
} as const;

const VISUALS: Record<string, ReactNode> = {
  "election-campaign": <ElectionVisual />,
  "school-management": <SchoolVisual />,
  "hospital-management": <HealthcareVisual />,
  "website-app-development": <WebAppVisual />,
  "small-business-solutions": <SmallBusinessVisual />,
  "social-media-management": <SocialVisual />,
  "ai-business-automation": <AutomationVisual />,
  "graphic-design-branding": <DesignVisual />,
};

/**
 * Pinned scroll showcase for the core services. The section pins in place, one service
 * is shown at a time and the next slides in from the side as the visitor scrolls, while a
 * thin rail on the left fills to show progress.
 * Without motion (or before hydration) the cards simply stack as a normal list.
 */
export function CoreShowcase() {
  const { core: CORE_SERVICES, services } = useSite();
  const root = useRef<HTMLElement>(null);
  const scene = useRef<{ trigger: ScrollTrigger; total: number } | null>(null);

  /** Jumps to one service: scrolls to its spot in the pinned scene, or to the card when not pinned. */
  const goTo = (index: number) => {
    const section = root.current;
    if (!section) return;
    const pinned = scene.current;
    if (!pinned) {
      section
        .querySelectorAll<HTMLElement>(".core-card")
        [index]?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const { start, end } = pinned.trigger;
    const top = start + (end - start) * (index / pinned.total);
    if (smooth.lenis) smooth.lenis.scrollTo(top, { duration: 1.2 });
    else window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const section = root.current;
    if (!section || prefersReducedMotion()) return;
    const { gsap } = getGsap();
    section.classList.add("core-pinned");

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".core-card", section);
      const tabs = gsap.utils.toArray<HTMLElement>(".core-tab", section);
      const dots = gsap.utils.toArray<HTMLElement>(".core-dot", section);
      const strip = section.querySelector<HTMLElement>(".core-tabs");
      let current = -1;
      const setActive = (index: number) => {
        if (index === current) return;
        current = index;
        tabs.forEach((tab, i) => {
          tab.classList.toggle("is-active", i === index);
          if (i === index) tab.setAttribute("aria-current", "true");
          else tab.removeAttribute("aria-current");
        });
        dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
        // Only the visible card takes clicks, the others wait off to the side.
        cards.forEach((card, i) => card.classList.toggle("is-current", i === index));
        // Keep the active tab in view inside the strip without moving the page.
        const tab = tabs[index];
        if (strip && tab) {
          strip.scrollTo({
            left: tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2,
            behavior: "smooth",
          });
        }
      };
      setActive(0);
      const fill = section.querySelector<HTMLElement>(".core-rail-fill");
      // Each card has two halves, text and visual. Upcoming cards wait below with the
      // halves offset to opposite sides; they rise and cross into place as you scroll.
      const halves = cards.map((card) => ({
        copy: card.querySelector<HTMLElement>(".core-copy"),
        visual: card.querySelector<HTMLElement>(".core-visual"),
      }));
      halves.slice(1).forEach(({ copy, visual }) => {
        gsap.set(visual, { xPercent: 80, yPercent: 100, opacity: 0, scale: 0.92 });
        gsap.set(copy, { xPercent: -80, yPercent: 100, opacity: 0 });
      });

      const total = cards.length - 1 + 0.35;
      const timeline = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        scrollTrigger: {
          trigger: section.querySelector(".core-pin"),
          start: "top top",
          end: `+=${cards.length * 80}%`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          // Settle on a whole service when the visitor stops scrolling.
          snap: {
            snapTo: (value: number) =>
              Math.min(cards.length - 1, Math.round(value * total)) / total,
            duration: { min: 0.25, max: 0.7 },
            delay: 0.12,
            ease: "power2.out",
          },
          onUpdate: (self) => {
            setActive(Math.min(cards.length - 1, Math.round(self.progress * total)));
            if (fill)
              fill.style.transform = `scaleY(${Math.min(1, self.progress * (total / (cards.length - 1)))})`;
          },
        },
      });
      cards.forEach((_card, index) => {
        if (index === 0) return;
        const before = halves[index - 1]!;
        const now = halves[index]!;
        // Leaving card: visual slides left, text slides right, both fade out.
        timeline.to(
          before.visual,
          { xPercent: -80, opacity: 0, scale: 0.92, duration: 1 },
          index - 1,
        );
        timeline.to(before.copy, { xPercent: 80, opacity: 0, duration: 1 }, index - 1);
        // Arriving card: visual from the right, text from the left, both rising into place.
        timeline.to(
          now.visual,
          { xPercent: 0, yPercent: 0, opacity: 1, scale: 1, duration: 1 },
          index - 1,
        );
        timeline.to(now.copy, { xPercent: 0, yPercent: 0, opacity: 1, duration: 1 }, index - 1);
      });
      timeline.to({}, { duration: 0.35 });
      if (timeline.scrollTrigger) scene.current = { trigger: timeline.scrollTrigger, total };
    }, section);

    return () => {
      scene.current = null;
      ctx.revert();
      section.classList.remove("core-pinned");
    };
  }, []);

  return (
    <section ref={root} id="core-services" className="core-section" aria-labelledby="core-h">
      <div className="core-pin">
        <div className="container-z">
          <header className="core-head">
            <p className="eyebrow text-primary">01 / Core services</p>
            <h2 id="core-h">
              <LineReveal lines={["Multiple services,", "one accountable team."]} />
            </h2>
            <nav className="core-tabs" aria-label="Choose a service">
              {CORE_SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  className="core-tab"
                  onClick={() => goTo(index)}
                >
                  {service.label}
                </button>
              ))}
            </nav>
          </header>

          <div className="core-stage">
            <span className="core-rail" aria-hidden="true">
              <span className="core-rail-fill" />
            </span>
            <span className="core-dots">
              {CORE_SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  className="core-dot"
                  aria-label={`Show ${service.label}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </span>
            {CORE_SERVICES.map((service) => {
              const Icon = ICONS[service.id as keyof typeof ICONS] ?? Sparkles;
              return (
                <article key={service.id} className="core-card">
                  <div className="core-copy">
                    <p className="core-label">
                      <span className="core-icon">
                        <Icon size={18} strokeWidth={1.7} />
                      </span>
                      {service.label}
                    </p>
                    <h3>{service.title}</h3>
                    <p className="core-blurb">{service.blurb}</p>
                    <ul className="core-features">
                      {service.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <p className="core-for">
                      <small>Built for</small>
                      {service.builtFor.join(" · ")}
                    </p>
                    <Link to="/services/$slug" params={{ slug: service.id }} className="core-link">
                      Explore {service.label.toLowerCase()} <ArrowUpRight size={16} />
                    </Link>
                  </div>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.id }}
                    className="core-visual"
                    aria-label={`Open ${service.label}`}
                    tabIndex={-1}
                  >
                    <span className="core-scene">
                      <Photo
                        slot={`service-photo-${service.id}`}
                        url={services.find((entry) => entry.id === service.id)?.photo}
                        className="core-photo"
                        settle={false}
                      />
                      <span className="core-float">
                        {VISUALS[service.id as keyof typeof VISUALS]}
                      </span>
                    </span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
