import { useEffect, useRef, type CSSProperties } from "react";
import { useSite } from "@/components/site/SiteContent";
import { initialsOf } from "@/lib/photos";
import { Photo } from "@/components/site/Photo";

/**
 * The two founders as a fanned pair of portrait cards. A coloured glow follows the pointer
 * around each card edge (idea from the 21st.dev glow-card grid and the fanned-card hero),
 * and the cards straighten up on hover. Real photos replace the monograms automatically.
 */
export function FounderDeck() {
  const deck = useRef<HTMLDivElement>(null);
  const { team } = useSite();
  const founders = team.filter((person) => person.group === "founder");

  useEffect(() => {
    const root = deck.current;
    if (!root) return;
    const onMove = (event: PointerEvent) => {
      root.querySelectorAll<HTMLElement>(".fcard").forEach((card) => {
        const box = card.getBoundingClientRect();
        const x = (event.clientX - (box.left + box.width / 2)) / (box.width / 2);
        const y = (event.clientY - (box.top + box.height / 2)) / (box.height / 2);
        card.style.setProperty("--px", x.toFixed(3));
        card.style.setProperty("--py", y.toFixed(3));
      });
    };
    document.addEventListener("pointermove", onMove);
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={deck} className="fdeck" aria-label="ZAQSA founders">
      <span className="fdeck-ring" aria-hidden="true" />
      {founders.map((person, index) => (
        <figure key={person.slot} className="fcard" style={{ "--i": index } as CSSProperties}>
          <div className="fcard-inner">
            <Photo
              slot={person.slot}
              url={person.photo}
              initials={initialsOf(person.name)}
              ratio="4 / 5"
              settle={false}
              className="fcard-photo"
            />
            <figcaption>
              <strong>{person.name}</strong>
              <span>{person.role}</span>
            </figcaption>
          </div>
        </figure>
      ))}
      <span className="fdeck-chip fdeck-chip-a">New Delhi, India</span>
      <span className="fdeck-chip fdeck-chip-b">Building since day one</span>
    </div>
  );
}
