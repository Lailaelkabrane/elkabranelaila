"use client";

import { useState } from "react";

type Series = { name: string; color: string };
type Group = { label: string; values: number[] };

const W = 520;
const H = 230;
const PAD = { l: 34, r: 8, t: 14, b: 32 };

/** Flat grouped bar chart with rounded data ends, hover tooltip and a legend. */
export default function BarChart({
  groups,
  series,
  max = 5,
  ticks = [0, 1, 2, 3, 4, 5],
  unit = "/ 5",
}: {
  groups: Group[];
  series: Series[];
  max?: number;
  ticks?: number[];
  unit?: string;
}) {
  const [hover, setHover] = useState<{ g: number; s: number } | null>(null);
  const plotW = W - PAD.l - PAD.r;
  const plotH = H - PAD.t - PAD.b;
  const groupW = plotW / groups.length;
  const barW = 30;
  const gap = 6;
  const clusterW = series.length * barW + (series.length - 1) * gap;
  const y = (v: number) => PAD.t + plotH - (v / max) * plotH;

  const barPath = (x: number, v: number) => {
    const top = y(v);
    const bottom = PAD.t + plotH;
    const rad = Math.min(6, (bottom - top) / 2);
    return `M${x},${bottom} V${top + rad} Q${x},${top} ${x + rad},${top} H${x + barW - rad} Q${x + barW},${top} ${x + barW},${top + rad} V${bottom} Z`;
  };

  let tip: { x: number; y: number; text: string; value: string } | null = null;
  if (hover) {
    const v = groups[hover.g].values[hover.s];
    const x = PAD.l + groupW * hover.g + (groupW - clusterW) / 2 + hover.s * (barW + gap) + barW / 2;
    tip = { x, y: y(v) - 6, text: `${groups[hover.g].label}, ${series[hover.s].name}`, value: `${v} ${unit}` };
  }

  return (
    <div>
      <div className={`bars${hover ? " hovering" : ""}`}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img"
          aria-label={groups.map((g) => `${g.label}: ${g.values.map((v, i) => `${series[i].name} ${v}`).join(", ")}`).join(". ")}>
          {ticks.map((t) => (
            <g key={t}>
              <line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} stroke="var(--line)" strokeWidth="1" />
              <text x={PAD.l - 8} y={y(t) + 3} textAnchor="end" fontSize="14" fill="var(--muted)">{t}</text>
            </g>
          ))}
          {groups.map((g, gi) => {
            const x0 = PAD.l + groupW * gi + (groupW - clusterW) / 2;
            return (
              <g key={g.label}>
                {g.values.map((v, si) => (
                  <path
                    key={si}
                    className={`bar${hover && hover.g === gi && hover.s === si ? " on" : ""}`}
                    d={barPath(x0 + si * (barW + gap), v)}
                    fill={series[si].color}
                    onMouseEnter={() => setHover({ g: gi, s: si })}
                    onMouseLeave={() => setHover(null)}
                  />
                ))}
                <text x={PAD.l + groupW * gi + groupW / 2} y={H - 8} textAnchor="middle" fontSize="14" fill="var(--ink-2)">
                  {g.label}
                </text>
              </g>
            );
          })}
        </svg>
        {tip && (
          <div className="tip" style={{ left: `${(tip.x / W) * 100}%`, top: `${(tip.y / H) * 100}%` }}>
            {tip.text}: <b>{tip.value}</b>
          </div>
        )}
      </div>
      <div className="legend row">
        {series.map((s) => (
          <div className="legend-item" key={s.name}>
            <span className="dot" style={{ background: s.color }} />
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}
