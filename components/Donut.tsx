import type { ReactNode } from "react";

export type Segment = { label: string; value: number; color: string };

/**
 * Flat donut with round caps and small gaps, as in the reference.
 * `segments` values are percentages of the full ring (0 to 100).
 */
export default function Donut({
  segments,
  size = 120,
  stroke = 14,
  children,
}: {
  segments: Segment[];
  size?: number;
  stroke?: number;
  children?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const gap = segments.length > 1 ? 6 : 0;
  let cursor = 0;

  return (
    <div className="ring-wrap" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img"
        aria-label={segments.map((s) => `${s.label} ${s.value}%`).join(", ")}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--track)" strokeWidth={stroke} />
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {segments.map((s) => {
            const span = (c * s.value) / 100;
            const len = Math.max(0.01, span - gap - stroke);
            const start = cursor + gap / 2 + stroke / 2;
            cursor += span;
            return (
              <circle
                key={s.label}
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={s.color}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${len} ${c}`}
                strokeDashoffset={-start}
              >
                <title>{`${s.label}: ${s.value}%`}</title>
              </circle>
            );
          })}
        </g>
      </svg>
      {children && <div className="ring-center">{children}</div>}
    </div>
  );
}
