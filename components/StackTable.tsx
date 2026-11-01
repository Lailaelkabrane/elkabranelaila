import type { Project } from "@/data/portfolio";

/** What was used, and what it was used for. Rows with `confirm` show a flag until verified. */
export default function StackTable({ rows }: { rows: Project["stack"] }) {
  return (
    <div className="stack">
      {rows.map((r) => (
        <div className="stack-row" key={r.layer + r.tool}>
          <span className="chip">{r.layer}</span>
          <b>{r.tool}</b>
          <span className="use">{r.use}</span>
          {r.confirm && <span className="chip flag" title="Best guess, please verify">to confirm</span>}
        </div>
      ))}
    </div>
  );
}
