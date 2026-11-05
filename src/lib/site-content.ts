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
  "https://firestore.googleapis.com/v1/projects/zaqsa2026-44d9f/databases/(default)/documents/site?pageSize=20";
const TTL_MS = 60_000;
const RETRY_MS = 5_000;
const TIMEOUT_MS = 6_000;

type Fetched = { docs: Record<string, unknown>; status: Record<string, string>; ok: boolean };

/** One request for every area (cheaper than one per area, and one connection to set up). */
async function fetchAll(): Promise<Fetched> {
  const started = Date.now();
  try {
    const response = await fetch(FIRESTORE, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!response.ok) {
      return { docs: {}, ok: false, status: { error: `http ${response.status}` } };
    }
    const body = (await response.json()) as {
      documents?: { name: string; fields?: { json?: { stringValue?: string } } }[];
    };
    const docs: Record<string, unknown> = {};
    const status: Record<string, string> = { ms: String(Date.now() - started) };
    for (const entry of body.documents ?? []) {
      const key = entry.name.split("/").pop() ?? "";
      const text = entry.fields?.json?.stringValue;
      if (!text) continue;
      try {
        docs[key] = JSON.parse(text);
        status[key] = "firestore";
      } catch {
        status[key] = "bad json";
      }
    }
    return { docs, status, ok: true };
  } catch (problem) {
    const message = problem instanceof Error ? problem.message : String(problem);
    return { docs: {}, ok: false, status: { error: message, ms: String(Date.now() - started) } };
  }
}

function build({ docs, status }: Fetched): SiteData {
  const company = docs["company"] as SiteData["company"] | undefined;
  const team = docs["team"] as
    { people?: (Omit<SitePerson, "slot"> & { slot?: SitePerson["slot"] })[] } | undefined;
  const services = docs["services"] as { items?: SiteService[] } | undefined;
  const core = docs["core"] as { items?: SiteData["core"] } | undefined;
  const home = docs["home"] as SiteHome | undefined;
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
    status,
  };
}

let cache: { until: number; data: SiteData; ok: boolean } | undefined;
let inflight: Promise<SiteData> | undefined;

/**
 * Fresh content, cached for a minute per server/browser. A failed load never replaces content
 * that loaded earlier, and is retried after a few seconds, so one slow request cannot leave a
 * server showing the built-in version.
 */
export async function getSiteContent(): Promise<SiteData> {
  if (cache && Date.now() < cache.until) return cache.data;
  inflight ??= fetchAll()
    .then((result) => {
      if (result.ok || !cache?.ok) {
        cache = {
          until: Date.now() + (result.ok ? TTL_MS : RETRY_MS),
          data: build(result),
          ok: result.ok,
        };
      } else {
        cache = { ...cache, until: Date.now() + RETRY_MS };
      }
      return cache.data;
    })
    .finally(() => {
      inflight = undefined;
    });
  return inflight;
}
