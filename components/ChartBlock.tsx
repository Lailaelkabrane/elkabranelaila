import Card from "./Card";
import Donut from "./Donut";
import BarChart from "./BarChart";
import type { Chart, Color } from "@/data/portfolio";

const v = (c: Color) => `var(--${c})`;

export default function ChartBlock({ chart }: { chart: Chart }) {
  const span = `s${chart.span ?? 6}`;
  if (chart.kind === "bars") {
    return (
      <Card className={span} title={chart.title} sub={chart.sub}>
        <BarChart
          series={chart.series.map((s) => ({ name: s.name, color: v(s.color) }))}
          groups={chart.groups}
          max={chart.max}
          ticks={chart.ticks}
          unit={chart.unit}
        />
      </Card>
    );
  }
  return (
    <Card className={span} title={chart.title} sub={chart.sub}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Donut size={150} stroke={16} segments={chart.segments.map((s) => ({ ...s, color: v(s.color) }))}>
          {chart.centre && (<><b>{chart.centre.big}</b><span>{chart.centre.small}</span></>)}
        </Donut>
      </div>
      <div className="legend">
        {chart.segments.map((s) => (
          <div className="legend-item" key={s.label}>
            <span className="dot" style={{ background: v(s.color) }} />
            {s.label}<span className="val">{s.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
