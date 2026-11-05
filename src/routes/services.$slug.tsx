import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GlassButton, PageHero, Reveal, SectionHead } from "@/components/site/primitives";
import { CATEGORY_LABEL, ENGAGEMENT_STEPS } from "@/lib/content";
import { useSite } from "@/components/site/SiteContent";
import { getSiteContent } from "@/lib/site-content";
import { NotFoundPage } from "@/components/site/ErrorPages";
import { Photo } from "@/components/site/Photo";
import { getPhoto } from "@/lib/photos";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: async ({ params }) => {
    const service = (await getSiteContent()).services.find((s) => s.id === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [{ title: "Service not found | ZAQSA" }, { name: "robots", content: "noindex" }],
      };
    const s = loaderData.service;
    return seo(
      `${s.title} | ZAQSA Services`,
      `${s.blurb} ${s.items.slice(0, 5).join(", ")} and more from ZAQSA, New Delhi.`,
    );
  },
  notFoundComponent: ServiceNotFound,
  component: Page,
});

function ServiceNotFound() {
  return <NotFoundPage what="service" />;
}

function Page() {
  const { service: s } = Route.useLoaderData();
  const photoSlot = `service-photo-${s.id}` as const;
  const { services } = useSite();
  const hasPhoto = Boolean(s.photo) || Boolean(getPhoto(photoSlot).src);
  const others = services.filter((x) => x.id !== s.id && x.category === s.category).slice(0, 3);
  return (
    <main>
      <PageHero
        eyebrow={`Services · ${CATEGORY_LABEL[s.category]}`}
        title={s.title}
        intro={s.intro}
      />

      {hasPhoto && (
        <section className="pt-2 pb-4">
          <div className="container-z">
            <Reveal>
              <div className="service-photo">
                <Photo slot={photoSlot} url={s.photo} />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="container-z grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <SectionHead eyebrow="What's included" title="Capabilities" intro={s.blurb} />
          <Reveal className="service-capabilities">
            <ul className="service-capabilities-list grid gap-x-8 border-t border-border sm:grid-cols-2">
              {s.items.map((it, index) => (
                <li
                  key={it}
                  style={{ animationDelay: `${index * 45}ms` }}
                  className="flex items-center gap-3 border-b border-border py-4 text-foreground/85"
                >
                  <span aria-hidden className="size-1 flex-none bg-primary" />
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container-z grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <SectionHead
            eyebrow="Who it's for"
            title="Built for your situation."
            intro={s.detail.who}
          />
          <Reveal>
            <p className="eyebrow text-primary">Typical engagements</p>
            <ul className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">
              {s.detail.engagements.map((e, i) => (
                <li
                  key={e}
                  className="engagement-step bg-background p-5"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <span className="text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-foreground/85">{e}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="outcomes-band border-y border-border py-24">
        <div className="container-z">
          <SectionHead eyebrow="What you can expect" title="Outcomes we work towards." />
          <div className="mt-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {s.outcomes.map((o, i) => (
              <Reveal
                key={o}
                delay={i * 60}
                className="border-b border-border py-8 sm:px-6 sm:first:pl-0 lg:border-r lg:last:border-r-0"
              >
                <span className="text-xs text-primary">0{i + 1}</span>
                <p className="mt-6 text-lg">{o}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-z">
          <SectionHead eyebrow="How we deliver" title="Diagnose. Design. Deliver. Evolve." />
          <ol className="process-timeline mt-12 grid gap-px border border-border bg-border md:grid-cols-4">
            {ENGAGEMENT_STEPS.map((st, index) => (
              <Reveal
                as="li"
                key={st.title}
                delay={index * 90}
                className="group min-h-64 bg-background p-7"
              >
                <span className="text-xs text-primary">{st.number}</span>
                <h3 className="mt-10 text-xl font-semibold">{st.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{st.blurb}</p>
              </Reveal>
            ))}
          </ol>
          {s.id === "election-campaign" && (
            <Reveal
              delay={150}
              className="mt-12 border border-primary/40 p-6 text-sm text-muted-foreground"
            >
              <p className="eyebrow text-primary">Our boundaries</p>
              <p className="mt-3">
                No voter manipulation. No discriminatory targeting. No deceptive messaging. No
                microtargeting. All work follows applicable election laws and model code of conduct.
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container-z grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <SectionHead eyebrow="Common questions" title="Before you ask." />
          <div className="border-t border-border">
            {s.detail.faqs.map((f) => (
              <Reveal key={f.q} className="border-b border-border py-6">
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container-z">
          {others.length > 0 && (
            <>
              <p className="eyebrow text-primary">Related services</p>
              <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-3">
                {others.map((o, index) => (
                  <Reveal
                    as="article"
                    key={o.id}
                    delay={index * 100}
                    className="related-service-card bg-background"
                  >
                    <Link
                      to="/services/$slug"
                      params={{ slug: o.id }}
                      className="block h-full p-6 transition-colors hover:bg-card hover:text-primary"
                    >
                      <span className="text-lg font-semibold">{o.title}</span>
                      <p className="mt-2 text-sm text-muted-foreground">{o.blurb}</p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </>
          )}
          <Reveal delay={160} className="mt-12 flex flex-wrap gap-4">
            <GlassButton to="/contact">Start a conversation</GlassButton>
            <GlassButton to="/services" variant="glass">
              All services
            </GlassButton>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
