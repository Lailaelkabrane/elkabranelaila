import type { Project } from "@/data/portfolio";

/** Flow of steps, like a data pipeline diagram. */
export default function Pipeline({ steps }: { steps: Project["pipeline"] }) {
  return (
    <ol className="pipeline">
      {steps.map((s, i) => (
        <li key={s.step} className={i % 2 ? "alt" : ""}>
          <span className="n">{i + 1}</span>
          <b>{s.step}</b>
          <small>{s.tool}</small>
        </li>
      ))}
    </ol>
  );
}
