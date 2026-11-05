import { COMPANY, CORE_SERVICES, SERVICES, TEAM, type Service } from "@/lib/content";

/**
 * Content the admin site can change. Each area lives in one Firestore document at
 * `site/<key>` (public read, admin-only write) holding its data as JSON text. Whatever the admin
 * has not published yet, or anything that fails to load, falls back to the content written in
 * `content.ts`, so the website always renders.
 */
export type SitePerson = {
  id: string;
  name: string;
  role: string;
  group: "founder" | "engineer";
  slot: `team-${string}`;
  photo?: string;
};
export type SiteService = Service & { photo?: string };
export type SiteHome = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  audienceLabel: string;
  primaryCta: string;
  familyTitle: string;
  familyIntro: string;
};
export type SiteData = {
  company: typeof COMPANY;
  team: SitePerson[];
  services: SiteService[];
  core: (typeof CORE_SERVICES)[number][];
  home: SiteHome;
  /** Where each area came from ("firestore", "none" or an error), to make a bad setup easy to spot. */
  status?: Record<string, string>;
};

export const HOME_DEFAULT: SiteHome = {
  kicker: "Software · AI · Cloud · Digital engineering",
  titleLine1: "We engineer ideas",
  titleLine2: "into scalable software.",
  description:
    "Software, websites, apps and digital marketing — planned, built and run by one accountable team.",
  audienceLabel: "Software & digital growth for",
  primaryCta: "Start a conversation",
  familyTitle: "One company, eight ways to grow.",
  familyIntro:
    "Pick the area closest to your work. Every ZAQSA team shares the same engineers, the same standards and the same accountable point of contact.",
};

export const SITE_DEFAULTS: SiteData = {
  company: COMPANY,
  team: TEAM.map((person) => ({ id: person.slot.replace("team-", ""), ...person })),
  services: SERVICES,
  core: [...CORE_SERVICES],
  home: HOME_DEFAULT,
};

const FIRESTORE =
  "https://firestore.googleapis.com/v1/projects/zaqsa2026-44d9f/databases/(default)/documents/site";
const TTL_MS = 60_000;

const status: Record<string, string> = {};

async function readDoc<T>(key: string): Promise<T | null> {
  try {
    const response = await fetch(`${FIRESTORE}/${key}`, { signal: AbortSignal.timeout(4000) });
    if (!response.ok) {
      status[key] = `http ${response.status}`;
      return null;
    }
    const body = (await response.json()) as { fields?: { json?: { stringValue?: string } } };
    const text = body.fields?.json?.stringValue;
    status[key] = text ? "firestore" : "empty";
    return text ? (JSON.parse(text) as T) : null;
  } catch (problem) {
    status[key] = `error ${problem instanceof Error ? problem.message : String(problem)}`;
    return null;
  }
}

let cache: { at: number; data: SiteData } | undefined;
let inflight: Promise<SiteData> | undefined;

async function load(): Promise<SiteData> {
  const [company, team, services, core, home] = await Promise.all([
    readDoc<SiteData["company"]>("company"),
    readDoc<{ people: (Omit<SitePerson, "slot"> & { slot?: SitePerson["slot"] })[] }>("team"),
    readDoc<{ items: SiteService[] }>("services"),
    readDoc<{ items: SiteData["core"] }>("core"),
    readDoc<SiteHome>("home"),
  ]);
  return {
    company: company ? { ...COMPANY, ...company } : COMPANY,
    team: team?.people?.length
      ? (team.people.map((person) => ({
          ...person,
          slot: (person.slot ?? `team-${person.id}`) as SitePerson["slot"],
        })) as SitePerson[])
      : SITE_DEFAULTS.team,
    services: services?.items?.length ? services.items : SERVICES,
    core: core?.items?.length ? core.items : SITE_DEFAULTS.core,
    home: home ? { ...HOME_DEFAULT, ...home } : HOME_DEFAULT,
    status: { ...status },
  };
}

/** Fresh content, cached for a minute per server/browser so pages stay fast. */
export async function getSiteContent(): Promise<SiteData> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
  inflight ??= load()
    .then((data) => {
      cache = { at: Date.now(), data };
      return data;
    })
    .finally(() => {
      inflight = undefined;
    });
  return cache?.data ?? inflight;
}
