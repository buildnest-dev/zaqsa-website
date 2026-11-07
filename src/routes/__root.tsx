import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/site/Nav";
import { SiteContentProvider } from "@/components/site/SiteContent";
import { getSiteContent } from "@/lib/site-content";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Footer } from "@/components/site/Footer";
import { AskZaqsa } from "@/components/site/AskZaqsa";
import { ConnectionBanner, ErrorPage, NotFoundPage } from "@/components/site/ErrorPages";

function NotFoundComponent() {
  return <NotFoundPage />;
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return <ErrorPage error={error} reset={reset} />;
}

function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const range = document.documentElement.scrollHeight - window.innerHeight;
        const progress = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0;
        progressRef.current?.style.setProperty("--scroll-progress", String(progress));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  loader: () => getSiteContent(),
  head: ({ loaderData }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ZAQSA — Business & Technology Consulting" },
      {
        name: "description",
        content:
          "Business intelligence, technology execution and measurable progress from one accountable team in New Delhi.",
      },
      { name: "author", content: "ZAQSA" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#f6f8ff" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&family=Hanken+Grotesk:wght@300..800&family=Geist+Mono:wght@400..600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://zaqsa.com/#organization",
          name: "ZAQSA",
          url: "https://zaqsa.com",
          logo: "https://zaqsa.com/icon-512.png",
          description:
            "ZAQSA is a New Delhi software and digital-solutions company: management software for schools, hospitals and small businesses, plus AI automation, web development and digital marketing.",
          email: "zyqotech@gmail.com",
          telephone: "+91 9570752983",
          founder: (loaderData?.team ?? [
            { name: "Drona Singh Rajpoot", role: "Founder", group: "founder" },
            { name: "Chinmay Anand", role: "Co-Founder", group: "founder" },
          ])
            .filter((person) => person.group === "founder")
            .map((person) => ({
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              worksFor: { "@id": "https://zaqsa.com/#organization" },
            })),
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mahavir Enclave",
            addressLocality: "New Delhi",
            postalCode: "110045",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const site = Route.useLoaderData();
  const { pathname } = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteContentProvider value={site}>
        <div className={pathname === "/" ? "site-shell home-theme" : "site-shell interior-theme"}>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <SmoothScroll />
          <Nav />
          <div id="content" key={pathname} className="route-transition">
            <Outlet />
          </div>
          <Footer />
          <AskZaqsa />
          <ConnectionBanner />
        </div>
      </SiteContentProvider>
    </QueryClientProvider>
  );
}
