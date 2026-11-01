"use client";

import { useMemo, useState } from "react";
import Card from "./Card";
import Icon from "./Icons";
import { skills, categories, categoryColor } from "@/data/portfolio";

export default function SkillsExplorer() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string[]>([]);

  const toggle = (c: string) =>
    setActive((a) => (a.includes(c) ? a.filter((x) => x !== c) : [...a, c]));

  const filtered = useMemo(
    () =>
      skills.filter(
        (s) =>
          (active.length === 0 || active.includes(s.category)) &&
          (s.name + " " + s.note).toLowerCase().includes(query.toLowerCase()),
      ),
    [query, active],
  );

  return (
    <div className="grid">
      <div className="s4">
        <Card title="Filter">
          <label className="search">
            <Icon name="search" size={18} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tools" aria-label="Search tools" />
          </label>
          <div style={{ marginTop: 12 }}>
            {categories.map((c) => {
              const on = active.includes(c);
              return (
                <div key={c} className={`check${on ? " on" : ""}`} role="checkbox" aria-checked={on} tabIndex={0}
                  onClick={() => toggle(c)}
                  onKeyDown={(e) => (e.key === " " || e.key === "Enter") && (e.preventDefault(), toggle(c))}>
                  <span className="box">{on && <Icon name="check" size={12} />}</span>
                  {c}
                </div>
              );
            })}
          </div>
        </Card>
      </div>
      <div className="s8">
        <Card title={`Tools and methods (${filtered.length})`} sub="Meter shows self-assessed confidence out of 5">
          {filtered.length === 0 && <p style={{ color: "var(--muted)" }}>No match.</p>}
          {filtered.map((s) => (
            <div className="skill-row" key={s.name}>
              <span className="nm">{s.name}</span>
              <span className="nt">{s.note}</span>
              <span className={`chip ${categoryColor[s.category] === "red" ? "red" : ""}`}>{s.category}</span>
              <span className="meter" role="img" aria-label={`${s.level} out of 5`}>
                <i className={categoryColor[s.category]} style={{ width: `${(s.level / 5) * 100}%` }} />
              </span>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
