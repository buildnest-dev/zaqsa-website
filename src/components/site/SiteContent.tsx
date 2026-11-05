import { createContext, useContext, type ReactNode } from "react";
import { SITE_DEFAULTS, type SiteData } from "@/lib/site-content";

const SiteContext = createContext<SiteData>(SITE_DEFAULTS);

/** Gives every component the admin-managed content (or the built-in defaults). */
export function SiteContentProvider({ value, children }: { value: SiteData; children: ReactNode }) {
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export const useSite = () => useContext(SiteContext);
