import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Code2,
  Compass,
  Cpu,
  GraduationCap,
  HeartPulse,
  LineChart,
  Vote,
  Workflow,
} from "@/components/site/icons";
import strategySession from "@/assets/strategy-session.jpg";
import transformationOperations from "@/assets/transformation-operations.jpg";
import { ConsultingGlobe } from "@/components/site/ConsultingGlobe";
import { GlassButton, Reveal, SectionHead } from "@/components/site/primitives";
import {
  AnimatedWordmark,
  CodeTerminal,
  CountUp,
  StackRow,
  TechBackdrop,
} from "@/components/site/motion";
import { LineReveal, StaggerList, WordReveal } from "@/components/site/Split";
import {
  BigText,
  HeroPhotoCards,
  ParallaxPhoto,
  ScaledWordmark,
  TiltFrame,
} from "@/components/site/HumanMotion";
import { Photo } from "@/components/site/Photo";
import { BrandFamilies } from "@/components/site/BrandFamilies";
import { CoreShowcase } from "@/components/site/CoreShowcase";
import { ProcessSticky } from "@/components/site/ProcessSticky";
import { useOnceInView } from "@/lib/motion";
import {
  BUSINESS,
  CONSULTING_PILLARS,
  INDUSTRIES,
  STACK_ROWS,
  TECHNOLOGY,
  TECH_RIBBON,
} from "@/lib/content";
import { IndustryAccordion } from "@/components/site/IndustryAccordion";
import { seo } from "@/lib/seo";
import { useSite } from "@/components/site/SiteContent";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "ZAQSA — Hospital, School & Election Campaign Software | Websites, Apps & Digital Marketing",
      "ZAQSA builds hospital, school and small-business management software, websites, apps and AI automation, and runs election campaigns, social media, branding and digital marketing — planned, built and run by one accountable team in New Delhi.",
    ),
  component: Home,
});

const PILLAR_ICONS = [Compass, LineChart, Cpu, Workflow];
const RIBBON_ITEMS = TECH_RIBBON;
const statsFor = (serviceCount: number) =>
  [
    { value: Math.floor(serviceCount / 5) * 5, label: "Service lines", suffix: "+" },
    { value: TECHNOLOGY.length, label: "Technology domains", suffix: "+" },
    {
      value: [...TECHNOLOGY, ...BUSINESS].reduce((total, group) => total + group.items.length, 0),
      label: "Capabilities",
      suffix: "+",
    },
    { value: INDUSTRIES.length, label: "Industries served", suffix: "+" },
  ] as const;
const HERO_AUDIENCE = [
  // Highlighted: website and app development is the service most visitors ask for first.
  { to: "website-app-development", label: "Apps & Websites", Icon: Code2, featured: true },
  { to: "hospital-management", label: "Hospitals", Icon: HeartPulse, featured: false },
  { to: "school-management", label: "Schools", Icon: GraduationCap, featured: false },
  { to: "election-campaign", label: "Campaigns", Icon: Vote, featured: false },
  { to: "small-business-solutions", label: "Businesses", Icon: Briefcase, featured: false },
] as const;

const SERVICE_PHOTO = {
  Consulting: "service-consulting",
  Technology: "service-technology",
  Business: "service-business",
  Marketing: "service-marketing",
} as const;

/** The closing button pulses once when it first scrolls into view. */
function PulseOnce({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useOnceInView(ref, (element) => element.classList.add("is-in"));
  return (
    <div ref={ref} className="pulse-once">
      {children}
    </div>
  );
}

function Hero() {
  const { home } = useSite();
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <TechBackdrop />
      <div className="container-z">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow home-hero-kicker">{home.kicker}</p>
            <AnimatedWordmark className="home-wordmark" />
            <h1 id="home-hero-title" className="home-hero-title">
              <span className="home-hero-line">
                <WordReveal text={home.titleLine1} startDelay={0.1} />
              </span>
              <span className="home-hero-line home-hero-line-accent">
                <WordReveal text={home.titleLine2} startDelay={0.3} />
              </span>
            </h1>
            <div className="hero-for">
              <p className="hero-for-label">{home.audienceLabel}</p>
              <ul className="hero-for-list">
                {HERO_AUDIENCE.map(({ to, label, Icon, featured }, index) => (
                  <li key={to} style={{ "--i": index } as React.CSSProperties}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: to }}
                      className={featured ? "is-featured" : undefined}
                    >
                      <Icon size={18} strokeWidth={1.8} aria-hidden />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="home-hero-description">{home.description}</p>
            <div className="home-hero-actions">
              <GlassButton to="/contact" className="hero-cta">
                {home.primaryCta}
              </GlassButton>
              <a
                href="#core-services"
                className="inline-flex min-h-12 items-center gap-2 border border-border bg-card/55 px-5 text-[.68rem] font-bold tracking-[.13em] text-foreground uppercase transition-colors hover:border-teal/70 hover:text-teal"
              >
                See our core services <ArrowDown size={14} aria-hidden />
              </a>
            </div>
            <div className="home-hero-utility">
              <span>New Delhi · India</span>
              <a href="#capabilities-h" className="home-hero-scroll">
                Explore the approach <ArrowDown size={13} aria-hidden />
              </a>
            </div>
          </div>

          <div
            className="home-hero-art"
            role="group"
            aria-label="Interactive visualization of connected strategy and technology"
          >
            <ConsultingGlobe />
            <HeroPhotoCards />
            <span className="hero-orbit-node hero-orbit-node-gold" aria-hidden="true" />
            <span className="hero-orbit-node hero-orbit-node-teal" aria-hidden="true" />
            {HERO_AUDIENCE.map(({ to, label, Icon, featured }, index) => (
              <Link
                key={to}
                to="/services/$slug"
                params={{ slug: to }}
                className={`hero-pill hero-pill-${index + 1}${featured ? " is-featured" : ""}`}
              >
                <Icon size={15} strokeWidth={1.8} aria-hidden />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const { services: SERVICES } = useSite();
  const STATS = statsFor(SERVICES.length);
  return (
    <main>
      <Hero />

      <section className="border-b border-border py-8 sm:py-10">
        <div className="container-z grid gap-6 text-sm text-muted-foreground sm:grid-cols-3">
          <p>
            <span className="mr-3 text-primary">01</span>One accountable team from idea to
            production
          </p>
          <p>
            <span className="mr-3 text-primary">02</span>Software shaped around outcomes, not trends
          </p>
          <p>
            <span className="mr-3 text-primary">03</span>Practical capability built into your
            organisation
          </p>
        </div>
        <div className="motion-ribbon mt-8" aria-hidden="true">
          <div className="motion-ribbon-track">
            {[...RIBBON_ITEMS, ...RIBBON_ITEMS].map((item, index) => (
              <span className="motion-ribbon-item" key={`${item}-${index}`}>
                {item}
                <span className="motion-ribbon-spark" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <CoreShowcase />

      <section className="py-24 sm:py-32" aria-labelledby="capabilities-h">
        <div className="container-z">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHead
              eyebrow="02 / What we do"
              title={<span id="capabilities-h">From idea to a working system.</span>}
              intro="ZAQSA closes the gap between planning and production. We define what matters, design the solution and build it."
            />
            <div className="border-t border-border">
              {CONSULTING_PILLARS.map((pillar, index) => {
                const Icon = PILLAR_ICONS[index];
                return (
                  <Reveal
                    key={pillar.title}
                    className="group grid gap-5 border-b border-border py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start"
                    delay={index * 70}
                  >
                    <span className="text-xs text-primary">{pillar.number}</span>
                    <div>
                      <h3 className="text-2xl font-semibold">{pillar.title}</h3>
                      <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                        {pillar.blurb}
                      </p>
                    </div>
                    {Icon && (
                      <Icon
                        className="text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                        size={24}
                        strokeWidth={1.3}
                      />
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border py-24 sm:py-32" aria-labelledby="services-h">
        <div className="container-z">
          <div className="max-w-3xl">
            <p className="eyebrow text-teal">03 / Services</p>
            <h2 className="mt-4 text-[clamp(2.1rem,4.8vw,4rem)] leading-[1.02] font-medium tracking-[-.02em]">
              <span id="services-h">
                <LineReveal lines={["Every capability,", "one accountable team."]} />
              </span>
            </h2>
            <Reveal delay={200}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Explore what we deliver across consulting, technology, business and civic work —
                each service has its own detailed page.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {(["Consulting", "Technology", "Business", "Marketing"] as const).map((cat, index) => (
              <Reveal key={cat} className="services-category" delay={index * 120}>
                <p className="eyebrow text-primary">{cat}</p>
                <StaggerList className="mt-5 border-t border-border">
                  {SERVICES.filter((s) => s.category === cat).map((s, serviceIndex) => (
                    <li key={s.id} style={{ "--i": serviceIndex } as React.CSSProperties}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.id }}
                        className="svc-link group flex items-center justify-between gap-4 border-b border-border py-4 transition-colors hover:text-primary"
                      >
                        <span>
                          <span className="block font-semibold">{s.title}</span>
                          <span className="mt-1 block text-sm text-muted-foreground">
                            {s.blurb}
                          </span>
                        </span>
                        <span className="svc-end">
                          <Photo
                            slot={SERVICE_PHOTO[cat]}
                            round
                            ratio="1"
                            settle={false}
                            className="svc-photo"
                          />
                          <ArrowUpRight
                            size={18}
                            className="svc-arrow flex-none text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-primary"
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
                </StaggerList>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BrandFamilies />

      <section className="build-section py-24 sm:py-32" aria-labelledby="build-h">
        <TechBackdrop />
        <div className="container-z relative">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHead
                eyebrow="04 / Engineering"
                title={<span id="build-h">From requirement to release, in the open.</span>}
                intro="Every project follows one disciplined pipeline — analysed, designed, built, deployed and monitored — so you always know what ships next."
              />
              <dl className="stat-grid mt-10">
                {STATS.map((stat, index) => (
                  <Reveal key={stat.label} delay={index * 90} className="stat-card">
                    <Photo
                      slot={`stat-${index + 1}` as "stat-1"}
                      round
                      ratio="1"
                      className="stat-photo"
                    />
                    <dt>{stat.label}</dt>
                    <dd>
                      <CountUp value={stat.value} suffix={"suffix" in stat ? stat.suffix : ""} />
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </div>
            <Reveal from="right" delay={120}>
              <CodeTerminal />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32" aria-labelledby="process-h">
        <div className="container-z">
          <ProcessSticky />
        </div>
      </section>

      <section className="border-b border-border py-24 sm:py-32" aria-labelledby="practice-h">
        <div className="container-z">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-8">
              <figure className="relative overflow-hidden border border-border">
                <img
                  src={strategySession}
                  alt="Business leaders reviewing a strategy together in a New Delhi office"
                  loading="lazy"
                  width={1600}
                  height={1072}
                  className="aspect-[3/2] w-full object-cover grayscale-[20%] transition duration-700 hover:grayscale-0 hover:scale-[1.015]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/85 px-5 py-4 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-md">
                  <span>Strategic alignment</span>
                  <span className="text-primary">01 / Advisory</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-4" delay={120}>
              <p className="eyebrow text-primary">06 / In practice</p>
              <h2
                id="practice-h"
                className="mt-5 text-[clamp(2.3rem,4vw,4.4rem)] leading-[0.96] font-semibold"
              >
                Close to the decision. Accountable for the outcome.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Our work brings leadership, operations and technology into the same room. That
                shared context produces stronger decisions and fewer handover gaps.
              </p>
              <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-primary">
                <span className="h-px w-12 bg-primary" /> Evidence over assumption
              </div>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="order-2 lg:order-1 lg:col-span-4" delay={80}>
              <p className="eyebrow text-primary">Transformation delivery</p>
              <h3 className="mt-5 text-3xl font-semibold">
                Visibility that changes how the business moves.
              </h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                From operating dashboards to intelligent workflows, we build the information layer
                teams need to act with confidence.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-px bg-border">
                <div className="bg-background p-4">
                  <LineChart className="text-primary" size={21} strokeWidth={1.4} />
                  <p className="mt-4 text-sm">Decision intelligence</p>
                </div>
                <div className="bg-background p-4">
                  <Workflow className="text-primary" size={21} strokeWidth={1.4} />
                  <p className="mt-4 text-sm">Connected operations</p>
                </div>
              </div>
            </Reveal>
            <Reveal className="order-1 lg:order-2 lg:col-span-8" delay={150}>
              <figure className="relative overflow-hidden border border-border">
                <img
                  src={transformationOperations}
                  alt="A consulting team using operational data to guide transformation"
                  loading="lazy"
                  width={1600}
                  height={1072}
                  className="aspect-[3/2] w-full object-cover grayscale-[20%] transition duration-700 hover:grayscale-0 hover:scale-[1.015]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/85 px-5 py-4 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-md">
                  <span>Connected operations</span>
                  <span className="text-primary">02 / Execution</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border py-24 sm:py-32" aria-labelledby="stack-h">
        <div className="container-z">
          <SectionHead
            eyebrow="07 / Technology"
            title={<span id="stack-h">A modern stack, chosen per problem.</span>}
            intro="We pick tools for fit, not fashion — web, mobile, backend, cloud, AI and IoT."
          />
        </div>
        <div className="stack-rows mt-12">
          <StackRow tools={[...STACK_ROWS[0], ...STACK_ROWS[1]]} />
          <div className="container-z">
            <ParallaxPhoto slot="stack-team" className="stack-photo" />
          </div>
          <StackRow tools={[...STACK_ROWS[2], ...STACK_ROWS[3]]} reverse />
        </div>
      </section>

      <section
        className="outcomes-band border-y border-border py-24 sm:py-32"
        aria-labelledby="industries-h"
      >
        <div className="container-z">
          <SectionHead
            eyebrow="08 / Industries"
            title={<span id="industries-h">Context changes. The need for clarity does not.</span>}
            intro="We combine cross-industry thinking with the practical detail needed to make change work in your environment."
          />
          <div className="mt-14">
            <IndustryAccordion items={INDUSTRIES.slice(0, 6)} />
          </div>
          <div className="mt-10">
            <GlassButton to="/industries">View industry experience</GlassButton>
          </div>
        </div>
      </section>

      <section
        className="outcomes-band big-band border-y border-border py-24 sm:py-32"
        aria-labelledby="outcomes-h"
      >
        <div className="big-bg" aria-hidden="true">
          <Photo slot="bg-team" settle={false} className="h-full" />
        </div>
        <div className="container-z relative">
          <p className="eyebrow text-primary">09 / What changes</p>
          <BigText
            id="outcomes-h"
            lines={["Clearer decisions.", "Leaner operations.", "Stronger digital capability."]}
          />
          <div className="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Strategic clarity",
                "A prioritised roadmap aligned to value, risk and feasibility.",
              ],
              [
                "02",
                "Operational momentum",
                "Simpler workflows, better visibility and fewer manual bottlenecks.",
              ],
              [
                "03",
                "Technology confidence",
                "Systems selected and built around the business—not the other way around.",
              ],
              [
                "04",
                "Sustainable growth",
                "Capability, governance and insight that compound beyond the engagement.",
              ],
            ].map(([n, t, d], i) => (
              <Reveal
                key={t}
                delay={i * 70}
                className="border-b border-border py-8 sm:px-6 sm:first:pl-0 lg:border-r lg:last:border-r-0"
              >
                <span className="text-xs text-primary">{n}</span>
                <h3 className="mt-8 text-2xl font-semibold">{t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section border-t border-border bg-muted py-20 sm:py-24">
        <ScaledWordmark>ZAQSA</ScaledWordmark>
        <div className="container-z relative">
          <div className="grid gap-10 border border-border bg-card/80 p-7 shadow-sm backdrop-blur-sm sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-14">
            <div>
              <Reveal>
                <p className="eyebrow text-primary">A useful first conversation</p>
                <h2 className="mt-5 max-w-4xl text-[clamp(2.5rem,5.4vw,4.5rem)] leading-[0.98] font-semibold">
                  Bring us the problem before you know the solution.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  We will help frame the decision, identify the highest-value next move and explain
                  where ZAQSA can contribute.
                </p>
              </Reveal>
              <Reveal delay={120} className="mt-8">
                <PulseOnce>
                  <GlassButton to="/contact" variant="ink">
                    Start the conversation
                  </GlassButton>
                </PulseOnce>
              </Reveal>
            </div>
            <Reveal delay={160} from="right">
              <TiltFrame className="cta-photo">
                <Photo slot="cta-group" ratio="4 / 3" settle={false} />
              </TiltFrame>
            </Reveal>
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-5 border border-border bg-card p-6 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-4">
              <span
                aria-hidden
                className="h-3 w-3 shrink-0 animate-pulse rounded-full bg-primary"
              />
              <div>
                <p className="eyebrow text-primary">Your next advantage</p>
                <h3 className="mt-1 text-xl font-semibold">
                  Turn complexity into decisive progress.
                </h3>
              </div>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
            >
              Request consultation{" "}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
