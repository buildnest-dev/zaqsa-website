import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SERVICES } from "@/lib/content";

const doc = (value: unknown) => ({ fields: { json: { stringValue: JSON.stringify(value) } } });

async function freshModule() {
  vi.resetModules();
  return import("@/lib/site-content");
}

describe("getSiteContent", () => {
  beforeEach(() => vi.useRealTimers());
  afterEach(() => vi.unstubAllGlobals());

  it("falls back to the built-in content when Firestore is unreachable", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    const { getSiteContent } = await freshModule();
    const site = await getSiteContent();
    expect(site.services).toHaveLength(SERVICES.length);
    expect(site.home.titleLine1).toBe("We engineer ideas");
  });

  it("uses what the admin published and keeps defaults for the rest", async () => {
    const published: Record<string, unknown> = {
      services: { items: [{ ...SERVICES[0]!, title: "Edited title", photo: "https://img/x.jpg" }] },
      team: { people: [{ id: "priya", name: "Priya", role: "Designer", group: "engineer" }] },
      home: { titleLine1: "Hello" },
    };
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string) => {
        const key = url.split("/").pop()!;
        return published[key]
          ? new Response(JSON.stringify(doc(published[key])))
          : new Response("{}", { status: 404 });
      }),
    );
    const { getSiteContent } = await freshModule();
    const site = await getSiteContent();
    expect(site.services).toHaveLength(1);
    expect(site.services[0]?.title).toBe("Edited title");
    expect(site.team[0]?.slot).toBe("team-priya");
    expect(site.home.titleLine1).toBe("Hello");
    expect(site.home.titleLine2).toBe("into scalable software.");
    expect(site.company.phone).toBe("+91 9570752983");
  });
});
