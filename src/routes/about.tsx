import { createFileRoute } from "@tanstack/react-router";
import { GlassButton, Reveal } from "@/components/site/primitives";
import { COMPANY } from "@/lib/content";
import { useSite } from "@/components/site/SiteContent";
import { initialsOf } from "@/lib/photos";
import { Photo } from "@/components/site/Photo";
import { AboutHero } from "@/components/site/heroes";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About ZAQSA — Founders and Engineering Team",
      "ZAQSA is a New Delhi technology and business solutions company founded by Drona Singh Rajpoot and Chinmay Anand. Meet the founders and the engineering team.",
    ),
  component: Page,
});

const BLOCKS = [
  [
    "Who we are",
    "A young, multidisciplinary technology and business solutions company based in New Delhi.",
  ],
  ["What we believe", "Technology becomes meaningful when it solves something real."],
  [
    "How we think",
    "Understand the problem first. Choose tools second. Build honestly, then improve.",
  ],
  [
    "What we explore",
    "AI, data, software, automation, IoT — and the future technologies just beyond them.",
  ],
  [
    "Where we are going",
    "Toward an ecosystem where different ideas, disciplines and people build useful things together.",
  ],
];

function TeamGrid({ group }: { group: "founder" | "engineer" }) {
  const { team } = useSite();
  const people = team.filter((person) => person.group === group);
  return (
    <ul className="team-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person, index) => (
        <Reveal as="li" key={person.name} delay={index * 80} className="team-card">
          <div className="team-photo">
            <Photo
              slot={person.slot}
              url={person.photo}
              initials={initialsOf(person.name)}
              ratio="4 / 5"
            />
          </div>
          <div className="team-meta">
            <strong>{person.name}</strong>
            <span>{person.role}</span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

function Page() {
  return (
    <main>
      <AboutHero />
      <section className="py-20 sm:py-24" aria-labelledby="team-h">
        <div className="container-z">
          <Reveal>
            <p className="eyebrow text-teal">The people behind ZAQSA</p>
            <h2
              id="team-h"
              className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-[-.02em]"
            >
              Our founders
            </h2>
          </Reveal>
          <TeamGrid group="founder" />

          <Reveal>
            <h2 className="mt-20 text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-[-.02em]">
              Our engineering team
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Real engineers. Real conversations. The people who build what you ask for.
            </p>
          </Reveal>
          <TeamGrid group="engineer" />
        </div>
      </section>
      <section className="bg-paper py-20 text-paper-foreground sm:py-28">
        <div className="container-z">
          <Reveal>
            <p className="eyebrow text-teal">What guides us</p>
          </Reveal>
          <ul className="mt-6 grid gap-x-10 md:grid-cols-2">
            {BLOCKS.map(([title, description], index) => (
              <Reveal
                as="li"
                key={title}
                delay={index * 60}
                className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-paper-border py-8"
              >
                <span className="text-xs text-paper-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-medium">{title}</h3>
                  <p className="mt-2 leading-relaxed text-paper-muted">{description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={220} className="mt-8">
            <GlassButton to="/contact" variant="ink">
              Talk to ZAQSA
            </GlassButton>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
