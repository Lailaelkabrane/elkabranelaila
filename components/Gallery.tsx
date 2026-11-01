"use client";

import { useCallback, useEffect, useState } from "react";
import type { Project } from "@/data/portfolio";

type Item = Project["media"][number];

/** Thumbnail grid. Click opens a lightbox with arrows; videos play with controls. */
export default function Gallery({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, move]);

  const current = open === null ? null : items[open];

  return (
    <>
      <div className="gallery">
        {items.map((it, i) => (
          <button key={it.src} className="thumb" onClick={() => setOpen(i)} aria-label={`Open ${it.caption}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.type === "video" ? it.poster : it.src} alt={it.caption} loading="lazy" />
            {it.type === "video" && <span className="play" aria-hidden="true">▶</span>}
            <span className="cap">{it.caption}</span>
          </button>
        ))}
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <div className="lb-body" onClick={(e) => e.stopPropagation()}>
            {current.type === "video" ? (
              <video src={current.src} poster={current.poster} controls autoPlay playsInline />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={current.src} alt={current.caption} />
            )}
            <div className="lb-cap">{current.caption}</div>
          </div>
          <button className="lb-btn lb-close" onClick={close} aria-label="Close">×</button>
          {items.length > 1 && (
            <>
              <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous">‹</button>
              <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next">›</button>
            </>
          )}
        </div>
      )}
    </>
  );
}
