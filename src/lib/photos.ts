import strategySession from "@/assets/strategy-session.jpg";
import type { ArtName } from "@/components/site/Art";
import transformationOperations from "@/assets/transformation-operations.jpg";

export type PhotoSlot =
  | "hero-team"
  | "hero-collab"
  | "hero-client"
  | "service-consulting"
  | "service-technology"
  | "service-business"
  | "service-marketing"
  | "process-1"
  | "process-2"
  | "process-3"
  | "process-4"
  | "stack-team"
  | "bg-team"
  | "stat-1"
  | "stat-2"
  | "stat-3"
  | "stat-4"
  | "cta-group"
  | "contact-team"
  | "team-founder"
  | `team-${string}`
  | `service-photo-${string}`;

// Files dropped into src/assets/photos are matched to slots by file name.
const uploaded = import.meta.glob("/src/assets/photos/*.{webp,jpg,jpeg,png,avif}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const byName = new Map<string, string>();
for (const [path, url] of Object.entries(uploaded)) {
  const name = path
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "");
  if (name) byName.set(name, url);
}

const ALT: Record<string, string> = {
  "service-photo-election-campaign":
    "Campaign volunteers in matching T-shirts standing together beside a van",
  "service-photo-school-management": "A teacher and students in a bright classroom",
  "service-photo-hospital-management":
    "A doctor reviewing a tablet with a patient in a hospital room",
  "service-photo-website-app-development":
    "Overhead view of a developer working with code on a laptop and monitors",
  "service-photo-small-business-solutions": "A shop owner behind a counter with a billing terminal",
  "service-photo-social-media-management":
    "A smiling content creator speaking to a phone on a ring light stand",
  "service-photo-ai-business-automation":
    "Two customer support agents with headsets working on laptops",
  "service-photo-graphic-design-branding":
    "A brand positioning diagram on a clipboard on a designer's desk",
  "hero-team": "A team collaborating around a table with laptops",
  "hero-collab": "Colleagues brainstorming around a table with sticky notes",
  "hero-client": "Two professionals shaking hands after agreeing on a project",
  "service-consulting": "Consultants discussing strategy with a client",
  "service-technology": "Engineers reviewing code together",
  "service-business": "Team walking through a business dashboard",
  "service-marketing": "Marketers reviewing campaign results together",
  "process-1": "Two colleagues planning with sticky notes on a whiteboard",
  "process-2": "A team reviewing documents and laptops around a table",
  "process-3": "A hand pointing at code on a laptop screen",
  "process-4": "Colleagues celebrating with raised fists in the office",
  "stack-team": "A diverse team meeting around a long table in a bright loft office",
  "bg-team": "People gathered around a table with maps and a laptop",
  "stat-1": "A ZAQSA engineer smiling at their desk",
  "stat-2": "A ZAQSA engineer pairing with a colleague",
  "stat-3": "A client reviewing a finished project",
  "stat-4": "A ZAQSA team member presenting to a client",
  "cta-group": "A group of colleagues standing together by office windows",
  "contact-team": "Four smiling colleagues posing together",
  "team-founder": "Chinmay Anand, co-founder of ZAQSA",
  "team-drona": "Drona Singh Rajpoot, founder of ZAQSA",
  "team-nishi": "Nishi Kumari, software engineer at ZAQSA",
  "team-surajit": "Surajit Sadhukhan, software engineer at ZAQSA",
};

// Stand-ins for large slots until real team photos are uploaded.
const FALLBACK: Partial<Record<string, { src: string; alt: string }>> = {
  "hero-team": {
    src: transformationOperations,
    alt: "A consulting team using operational data to guide transformation",
  },
  "hero-collab": {
    src: strategySession,
    alt: "Business leaders reviewing a strategy together in a New Delhi office",
  },
  "stack-team": {
    src: transformationOperations,
    alt: "A consulting team using operational data to guide transformation",
  },
  "bg-team": {
    src: strategySession,
    alt: "Business leaders reviewing a strategy together in a New Delhi office",
  },
  "cta-group": {
    src: strategySession,
    alt: "Business leaders reviewing a strategy together in a New Delhi office",
  },
  "contact-team": {
    src: transformationOperations,
    alt: "A consulting team using operational data to guide transformation",
  },
};

// Relevant illustrations for slots that have no uploaded photo yet.
const ART: Partial<Record<string, ArtName>> = {
  "process-1": "whiteboard",
  "process-2": "blueprint",
  "process-3": "code",
  "process-4": "growth",
  "hero-client": "meeting",
  "service-consulting": "icon-compass",
  "service-technology": "icon-cpu",
  "service-business": "icon-briefcase",
  "service-marketing": "icon-megaphone",
  "stat-1": "icon-layers",
  "stat-2": "icon-cpu",
  "stat-3": "icon-boxes",
  "stat-4": "icon-building",
};

const INITIALS: Record<string, string> = {
  "team-founder": "CA",
  "team-drona": "DR",
  "team-nishi": "NK",
  "team-surajit": "SS",
};

export function getPhoto(slot: PhotoSlot): {
  src: string | undefined;
  alt: string;
  art: ArtName | undefined;
  initials: string | undefined;
} {
  const own = byName.get(slot);
  const alt = ALT[slot] ?? "A member of the ZAQSA team";
  if (own) return { src: own, alt, art: undefined, initials: undefined };
  const fallback = FALLBACK[slot];
  if (fallback) return { ...fallback, art: undefined, initials: undefined };
  if (slot.startsWith("team-")) {
    return { src: undefined, alt, art: "monogram", initials: INITIALS[slot] ?? "ZQ" };
  }
  return { src: undefined, alt, art: ART[slot], initials: undefined };
}

/** "Drona Singh Rajpoot" -> "DR"; used when a person has no photo. */
export function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return (
    (parts[0]?.[0] ?? "Z") + (parts.length > 1 ? (parts[1]?.[0] ?? "") : (parts[0]?.[1] ?? ""))
  ).toUpperCase();
}
