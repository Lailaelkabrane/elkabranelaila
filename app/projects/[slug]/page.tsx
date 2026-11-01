import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "@/components/Card";
import ChartBlock from "@/components/ChartBlock";
import Gallery from "@/components/Gallery";
import Icon from "@/components/Icons";
import PageHeader from "@/components/PageHeader";
import Pipeline from "@/components/Pipeline";
import StackTable from "@/components/StackTable";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <PageHeader title={p.title} subtitle={p.short} />
      <Link href="/projects" className="back">← All projects</Link>

      <div className="grid">
        <Card className="s12">
          <div className="phero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.cover} alt="" />
            <div>
              <div className="chips" style={{ marginBottom: 14 }}>
                <span className={`chip ${p.type === "Professional" ? "purple" : p.type === "Academic" ? "red" : "cyan"}`}>{p.type}</span>
                {p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
              <ul className="checks">
                {p.highlights.map((h) => (
                  <li key={h}><span className="tick"><Icon name="check" size={12} /></span>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <Card className="s12">
          <div className="kpis" style={{ gridTemplateColumns: `repeat(${p.kpis.length}, minmax(0, 1fr))` }}>
            {p.kpis.map((k) => (
              <div className="kpi" key={k.label}>
                <div className="v">{k.value}</div>
                <div className="l">{k.label}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="s12" title="How it works">
          <Pipeline steps={p.pipeline} />
        </Card>

        {p.charts?.map((c) => <ChartBlock chart={c} key={c.title} />)}

        <Card className="s12" title={p.media.some((m) => m.type === "video") ? "Demo and screens" : "Screens"} sub="Click to enlarge">
          <Gallery items={p.media} />
        </Card>

        <Card className="s12" title="Tools and what they were used for">
          <StackTable rows={p.stack} />
        </Card>
      </div>

      <div className="pager">
        <Link href={`/projects/${prev.slug}`} className="card">← {prev.title}</Link>
        <Link href={`/projects/${next.slug}`} className="card">{next.title} →</Link>
      </div>
    </>
  );
}
