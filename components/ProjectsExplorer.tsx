"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/portfolio";

const types = ["All", "Professional", "Academic", "Personal"] as const;

export default function ProjectsExplorer() {
  const [type, setType] = useState<(typeof types)[number]>("All");
  const list = projects.filter((p) => type === "All" || p.type === type);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Project type">
        {types.map((t) => {
          const n = t === "All" ? projects.length : projects.filter((p) => p.type === t).length;
          return (
            <button key={t} role="tab" aria-selected={type === t} className={`filter${type === t ? " on" : ""}`} onClick={() => setType(t)}>
              {t} <span>{n}</span>
            </button>
          );
        })}
      </div>

      <div className="grid">
        {list.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="card pcard s4">
            <div className="pcover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.cover} alt="" loading="lazy" />
              <span className={`chip ${p.type === "Professional" ? "purple" : p.type === "Academic" ? "red" : "cyan"}`}>{p.type}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.short}</p>
            <div className="pkpis">
              {p.kpis.slice(0, 3).map((k) => (
                <div key={k.label}><b>{k.value}</b><span>{k.label}</span></div>
              ))}
            </div>
            <div className="chips">{p.tags.slice(0, 4).map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
