import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bot,
  Code2,
  GraduationCap,
  HeartPulse,
  Palette,
  Share2,
  Store,
  Vote,
} from "@/components/site/icons";
import { GlassButton, PageHero, Reveal } from "@/components/site/primitives";
import { Photo } from "@/components/site/Photo";
import { CATEGORY_LABEL, type Service } from "@/lib/content";
import { useSite } from "@/components/site/SiteContent";
import { seo } from "@/lib/seo";
import { ServicesVisual } from "@/components/site/hero-visuals";

export const Route = createFileRoute("/services/")({
  head: () =>
    seo(
      "Services — Election Campaigns, School & Hospital Software, Websites, Apps & Social Media | ZAQSA",
      "Every ZAQSA service in one place: election campaign management, school and hospital management software, websites and apps, small business solutions, social media, SEO, digital and performance marketing, creative production and events.",
    ),
  component: Page,
});

const CATS: Service["category"][] = ["Core", "Consulting", "Technology", "Business", "Marketing"];
const FEATURE_ICON: Record<string, typeof HeartPulse> = {
  "election-campaign": Vote,
  "school-management": GraduationCap,
  "hospital-management": HeartPulse,
  "website-app-development": Code2,
  "small-business-solutions": Store,
  "social-media-management": Share2,
  "ai-business-automation": Bot,
  "graphic-design-branding": Palette,
};
const CAT_LABEL = CATEGORY_LABEL;

function Page() {
  const { services: SERVICES } = useSite();
  const [active, setActive] = useState<Service["category"] | "All">("All");
  const visibleCats = active === "All" ? CATS : CATS.filter((cat) => cat === active);
  return (
    <main>
      <PageHero
        visual={<ServicesVisual />}
        eyebrow="Services"
        title={
          <>
            Every service.
            <br />
            <em className="text-primary">One accountable team.</em>
          </>
        }
        intro="Choose a service to see what it covers, how we deliver it and what you can expect."
      />
      <section className="pb-28">
        <div className="container-z space-y-16">
          <div className="service-filter" role="group" aria-label="Filter services">
            {(["All", ...CATS] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={active === cat}
                onClick={() => setActive(cat)}
                className="service-filter-chip"
              >
                {cat === "All" ? "All services" : CAT_LABEL[cat]}
              </button>
            ))}
          </div>
          {visibleCats.map((cat, categoryIndex) => (
            <Reveal
              key={`${active}-${cat}`}
              className="service-category-block"
              delay={categoryIndex * 140}
            >
              <p className="eyebrow text-primary">{CAT_LABEL[cat]}</p>
              {cat === "Core" ? (
                <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {SERVICES.filter((s) => s.category === cat).map((s, i) => {
                    const Icon = FEATURE_ICON[s.id] ?? HeartPulse;
                    return (
                      <Reveal key={s.id} delay={i * 80}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.id }}
                          className="svc-feature group"
                        >
                          <span className="svc-feature-media">
                            <Photo slot={`service-photo-${s.id}`} url={s.photo} ratio="16 / 10" />
                            <span className="svc-feature-badge">Core service</span>
                            <span className="svc-feature-icon">
                              <Icon size={34} />
                            </span>
                          </span>
                          <h2 className="mt-10 text-2xl font-semibold">{s.title}</h2>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {s.blurb}
                          </p>
                          <ul className="mt-6 flex flex-wrap gap-2">
                            {s.items.slice(0, 4).map((item) => (
                              <li key={item} className="svc-feature-chip">
                                {item}
                              </li>
                            ))}
                          </ul>
                          <span className="svc-feature-cta">
                            Explore {s.items.length} capabilities
                            <ArrowUpRight size={16} />
                          </span>
                        </Link>
                      </Reveal>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                  {SERVICES.filter((s) => s.category === cat).map((s, i) => (
                    <Reveal key={s.id} delay={i * 40} className="bg-background">
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.id }}
                        className="group flex h-full min-h-48 flex-col justify-between p-7 transition-colors hover:bg-card"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-xs text-muted-foreground">
                            {String(s.items.length).padStart(2, "0")} capabilities
                          </span>
                          <ArrowUpRight
                            size={18}
                            className="text-muted-foreground transition-colors group-hover:text-primary"
                          />
                        </div>
                        <div>
                          <h2 className="mt-10 text-2xl font-semibold transition-colors group-hover:text-primary">
                            {s.title}
                          </h2>
                          <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
          <Reveal delay={160}>
            <GlassButton to="/contact">Discuss your requirement</GlassButton>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
