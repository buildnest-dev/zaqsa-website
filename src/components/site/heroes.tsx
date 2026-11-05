import type { CSSProperties, ReactNode } from "react";
import {
  Briefcase,
  Mail,
  MapPin,
  Phone,
  Building2,
  Cpu,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  LineChart,
  MessagesSquare,
  ReceiptText,
  Rocket,
  ShoppingBag,
  ShoppingCart,
  Store,
  Truck,
  UserPlus,
  Wheat,
} from "@/components/site/icons";
import { INDUSTRIES, JOURNEY_STEPS, LAB, NEED_EVENT, TECHNOLOGY } from "@/lib/content";
import { useSite } from "@/components/site/SiteContent";
import { initialsOf } from "@/lib/photos";
import { smooth } from "@/lib/motion";
import { GlassButton } from "@/components/site/primitives";
import { FounderDeck } from "@/components/site/FounderDeck";
import { TechBackdrop } from "@/components/site/motion";
import { Scene3D } from "@/components/site/Scene3D";

const vars = (values: Record<string, string | number>) => values as CSSProperties;

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow hero-eyebrow">
      <span className="page-hero-prompt" aria-hidden="true">
        &gt;_
      </span>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ Technology */
export function TechnologyHero() {
  return (
    <header className="hero hero-editor">
      <TechBackdrop />
      <div className="container-z">
        <div className="editor">
          <div className="editor-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <em>technology.ts</em>
            <b>TypeScript</b>
          </div>
          <div className="editor-grid">
            <div className="editor-scene" aria-hidden="true">
              <Scene3D kind="stack" />
            </div>
            <ol className="editor-gutter" aria-hidden="true">
              {Array.from({ length: 12 }, (_, index) => (
                <li key={index}>{index + 1}</li>
              ))}
            </ol>
            <div className="editor-code">
              <p className="ed-line ed-comment" style={vars({ "--i": 0 })}>
                // ZAQSA · Technology universe
              </p>
              <p className="ed-line" style={vars({ "--i": 1 })}>
                <span className="ed-kw">export const</span> approach{" "}
                <span className="ed-op">=</span> {"{"}
              </p>
              <h1 className="ed-title" style={vars({ "--i": 2 })}>
                Many disciplines.
                <br />
                <em>One way of thinking.</em>
              </h1>
              <p className="ed-line ed-comment ed-intro" style={vars({ "--i": 3 })}>
                /** From AI agents to Wi-Fi networks, we choose technology by what the problem needs
                — not by what's fashionable. */
              </p>
              <p className="ed-line" style={vars({ "--i": 4 })}>
                &nbsp;&nbsp;disciplines<span className="ed-op">:</span> [
              </p>
              <p className="ed-line ed-list" style={vars({ "--i": 5 })}>
                {TECHNOLOGY.map((group) => (
                  <span key={group.id} className="ed-str">
                    "{group.title}"
                  </span>
                ))}
              </p>
              <p className="ed-line" style={vars({ "--i": 6 })}>
                &nbsp;&nbsp;],
                <span className="ed-caret" />
              </p>
              <p className="ed-line" style={vars({ "--i": 7 })}>
                {"}"};
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------- Business */
export function BusinessHero() {
  const nodes = [
    [UserPlus, "Lead", "captured"],
    [MessagesSquare, "Follow-up", "scheduled"],
    [ReceiptText, "Invoice", "sent"],
    [LineChart, "Report", "ready"],
  ] as const;
  return (
    <header className="hero hero-center">
      <TechBackdrop />
      <div className="container-z hero-2col">
        <div className="hero-2col-main">
          <div className="hero-center-copy">
            <Eyebrow>Business</Eyebrow>
            <h1 className="hero-title">
              Software for the way
              <br />
              <em>you actually work.</em>
            </h1>
            <p className="hero-lead">
              CRM, billing, inventory, people, schools, marketing and paperwork — practical systems
              that remove friction from everyday operations.
            </p>
          </div>
          <ol className="pipe" aria-hidden="true">
            {nodes.map(([Icon, label, state], index) => (
              <li key={label} style={vars({ "--i": index })}>
                <span className="pipe-icon">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <strong>{label}</strong>
                <small>{state}</small>
              </li>
            ))}
            <span className="pipe-track">
              <span className="pipe-run" />
            </span>
          </ol>
        </div>
        <div className="hero-3d">
          <Scene3D kind="bars" />
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ Solutions */
const WAVE = JOURNEY_STEPS.map((label, index) => ({
  label,
  x: 50 + index * 100,
  y: 112 + Math.sin(index * 0.95) * 52,
}));
const WAVE_PATH = WAVE.map((point, index) => {
  if (index === 0) return `M${point.x} ${point.y.toFixed(1)}`;
  const previous = WAVE[index - 1]!;
  const mid = (previous.x + point.x) / 2;
  return `C${mid} ${previous.y.toFixed(1)}, ${mid} ${point.y.toFixed(1)}, ${point.x} ${point.y.toFixed(1)}`;
}).join(" ");

export function SolutionsHero() {
  return (
    <header className="hero hero-journey">
      <TechBackdrop />
      <div className="container-z hero-2col">
        <div className="hero-2col-main">
          <Eyebrow>Solutions</Eyebrow>
          <h1 className="hero-title hero-title-wide">
            Thinking partner.
            <br />
            <em>Building partner.</em>
          </h1>
          <p className="hero-lead">
            Before we write code, we help you think clearly. Strategy, planning and an honest
            journey from idea to launch.
          </p>
        </div>
        <div className="hero-3d">
          <Scene3D kind="knot" />
        </div>
      </div>
      <div className="journey" aria-hidden="true">
        <svg viewBox="0 0 1000 220" preserveAspectRatio="xMidYMid meet">
          <path className="journey-line" d={WAVE_PATH} />
          <circle r="7" className="journey-dot">
            <animateMotion dur="9s" repeatCount="indefinite" path={WAVE_PATH} />
          </circle>
        </svg>
        {WAVE.map((point, index) => (
          <span
            key={point.label}
            className={`journey-stop ${index % 2 ? "is-low" : ""}`}
            style={vars({
              left: `${point.x / 10}%`,
              top: `${(point.y / 220) * 100}%`,
              "--i": index,
            })}
          >
            <i />
            <em>{point.label}</em>
          </span>
        ))}
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------- Industries */
const INDUSTRY_ICONS: Record<string, typeof Wheat> = {
  Agriculture: Wheat,
  Healthcare: HeartPulse,
  Education: GraduationCap,
  Finance: Landmark,
  Retail: Store,
  "E-commerce": ShoppingCart,
  Logistics: Truck,
  Manufacturing: Factory,
  "Real Estate": Building2,
  "Professional Services": Briefcase,
  Startups: Rocket,
  "Small Businesses": ShoppingBag,
  "Technology Businesses": Cpu,
};

export function IndustriesHero() {
  const rows = [INDUSTRIES.slice(0, 7), INDUSTRIES.slice(6)];
  return (
    <header className="hero hero-ticker">
      <TechBackdrop />
      <div className="container-z hero-2col">
        <div className="hero-2col-main hero-center-copy">
          <Eyebrow>Industries</Eyebrow>
          <h1 className="hero-title">
            Different industries.
            <br />
            <em>Same curiosity.</em>
          </h1>
          <p className="hero-lead">
            Tap any industry to see how we think about it, where we can help, and what the work
            could look like.
          </p>
        </div>
        <div className="hero-3d">
          <Scene3D kind="city" />
        </div>
      </div>
      <div className="ticker" aria-hidden="true">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`ticker-row ${rowIndex ? "is-reverse" : ""}`}>
            <div className="ticker-track">
              {[...row, ...row].map((industry, index) => {
                const Icon = INDUSTRY_ICONS[industry.name] ?? Briefcase;
                return (
                  <span className="ticker-chip" key={`${industry.name}-${index}`}>
                    <Icon size={20} strokeWidth={1.6} />
                    {industry.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------------ Lab */
export function LabHero() {
  return (
    <header className="hero hero-lab">
      <div className="container-z hero-2col">
        <div className="hero-2col-main lab-copy">
          <Eyebrow>ZAQSA Lab · Exploration in progress</Eyebrow>
          <h1 className="hero-title">
            Where ideas get
            <br />
            <em>tested first.</em>
          </h1>
          <p className="hero-lead">
            An experimental but practical space for prototypes, experiments and new product
            thinking.
          </p>
          <ul className="lab-log" aria-hidden="true">
            {LAB.slice(0, 4).map((item, index) => (
              <li key={item} style={vars({ "--i": index })}>
                <i />
                <span>{item.toLowerCase().replace(/\s+/g, "-")}</span>
                <b>exploring</b>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-3d">
          <Scene3D kind="atom" />
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------------- About */
export function AboutHero() {
  const { company: COMPANY } = useSite();
  return (
    <header className="hero hero-portrait">
      <TechBackdrop />
      <div className="container-z hero-portrait-grid">
        <div>
          <Eyebrow>About ZAQSA</Eyebrow>
          <h1 className="hero-title">
            Meet the
            <br />
            <em>founders.</em>
          </h1>
          <p className="hero-lead">{COMPANY.support}</p>
          <blockquote className="portrait-quote">
            “ZAQSA begins with a simple belief: technology becomes meaningful when it solves
            something real. I want ZAQSA to grow beyond a single technology or a single industry —
            into a place where different ideas, disciplines and people can come together to build
            useful things.”
            <footer>
              {COMPANY.founder} · {COMPANY.role}
            </footer>
          </blockquote>
          <div className="mt-8">
            <GlassButton to="/contact">Talk to ZAQSA</GlassButton>
          </div>
        </div>
        <FounderDeck />
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------- Contact */
export function ContactHero() {
  const { company: COMPANY, core: CORE_SERVICES, team: TEAM } = useSite();
  const pick = (label: string) => {
    window.dispatchEvent(new CustomEvent(NEED_EVENT, { detail: label }));
    const form = document.getElementById("contact-form");
    if (!form) return;
    if (smooth.lenis) smooth.lenis.scrollTo(form, { offset: -110 });
    else form.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(
      () => document.getElementById("contact-name")?.focus({ preventScroll: true }),
      700,
    );
  };
  const founders = TEAM.filter((person) => person.group === "founder");

  return (
    <header className="hero cx-hero">
      <TechBackdrop />
      <div className="container-z cx-grid">
        <div className="cx-copy">
          <p className="cx-live">
            <i aria-hidden="true" />
            We reply by email or phone
          </p>
          <h1 className="cx-title">
            What are you thinking <em>of building?</em>
          </h1>
          <p className="cx-lead">
            Tell us about the problem, idea or possibility you have in mind. Pick what fits best and
            we will take it from there.
          </p>
          <p className="cx-pick-label">I need help with</p>
          <ul className="cx-picks">
            {CORE_SERVICES.map((service) => (
              <li key={service.id}>
                <button type="button" onClick={() => pick(service.label)}>
                  {service.label}
                </button>
              </li>
            ))}
            <li>
              <button type="button" onClick={() => pick("Something completely new")}>
                Something else
              </button>
            </li>
          </ul>
        </div>

        <aside className="cx-card" aria-label="Contact details">
          <p className="eyebrow text-primary">Talk to us directly</p>
          <ul className="cx-lines">
            <li>
              <span className="cx-icon">
                <Phone size={18} />
              </span>
              <span>
                <small>Phone</small>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
              </span>
            </li>
            <li>
              <span className="cx-icon">
                <Mail size={18} />
              </span>
              <span>
                <small>Email</small>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </span>
            </li>
            <li>
              <span className="cx-icon">
                <MapPin size={18} />
              </span>
              <span>
                <small>Office</small>
                {COMPANY.address}
              </span>
            </li>
          </ul>
          <div className="cx-people">
            <span className="cx-avatars" aria-hidden="true">
              {founders.map((person) => (
                <b key={person.slot}>
                  {person.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </b>
              ))}
            </span>
            <span>
              You will talk to the people who build it
              <small>{founders.map((person) => person.name).join(" & ")}</small>
            </span>
          </div>
        </aside>
      </div>
    </header>
  );
}
