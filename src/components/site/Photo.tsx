import { useRef, type CSSProperties } from "react";
import { getPhoto, type PhotoSlot } from "@/lib/photos";
import { useOnceInView } from "@/lib/motion";
import { Art } from "@/components/site/Art";
import { cn } from "@/lib/utils";

/**
 * A photo slot. Uses the uploaded file for `slot` when present, otherwise a soft blue
 * placeholder. Settles in (scale 1.06 -> 1, fade) when it scrolls into view.
 */
export function Photo({
  slot,
  className,
  round = false,
  ratio,
  eager = false,
  settle = true,
  style,
  url,
  initials: initialsOverride,
}: {
  slot: PhotoSlot;
  className?: string;
  round?: boolean;
  ratio?: string;
  eager?: boolean;
  settle?: boolean;
  style?: CSSProperties;
  /** Admin-uploaded picture; wins over the photo bundled with the website. */
  url?: string | undefined;
  initials?: string | undefined;
}) {
  const found = getPhoto(slot);
  const src = url || found.src;
  const { alt, art } = found;
  const initials = initialsOverride ?? found.initials;
  const ref = useRef<HTMLDivElement>(null);
  useOnceInView(ref, (element) => element.classList.add("is-in"));

  return (
    <div
      ref={ref}
      className={cn("photo", settle && "photo-settle", round && "photo-round", className)}
      style={{ ...(ratio ? { aspectRatio: ratio } : null), ...style }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
        />
      ) : art ? (
        <div className="photo-art" role="img" aria-label={alt}>
          <Art name={art} {...(initials ? { initials } : {})} />
        </div>
      ) : (
        <div className="photo-empty" role="img" aria-label={alt}>
          <span>Add photo here</span>
        </div>
      )}
    </div>
  );
}
