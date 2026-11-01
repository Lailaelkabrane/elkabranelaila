import type { TimelineItem } from "@/data/portfolio";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="tl">
      {items.map((t) => (
        <div className="tl-item" key={t.title + t.period}>
          <div className="tl-period">{t.period}</div>
          <h3>{t.title}</h3>
          <div className="org">{t.org}{t.place ? `, ${t.place}` : ""}</div>
          {t.badge && <span className="chip purple">{t.badge}</span>}
          {t.points && <ul>{t.points.map((p) => <li key={p}>{p}</li>)}</ul>}
        </div>
      ))}
    </div>
  );
}
