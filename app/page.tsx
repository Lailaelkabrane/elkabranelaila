import Link from "next/link";
import Card from "@/components/Card";
import Donut from "@/components/Donut";
import BarChart from "@/components/BarChart";
import Avatar from "@/components/Avatar";
import PageHeader from "@/components/PageHeader";
import Pipeline from "@/components/Pipeline";
import Icon from "@/components/Icons";
import { profile, aboutKpis, aboutFacts, languageRings, path, internships, skills, projects } from "@/data/portfolio";

const c = (n: string) => `var(--${n})`;

export default function Overview() {
  const topSkills = [...skills].sort((a, b) => b.level - a.level).slice(0, 6);
  const types = ["Professional", "Academic", "Personal"] as const;
  const typeColors = ["purple", "red", "cyan"];
  const typeSegments = types.map((t, i) => ({
    label: t,
    value: Math.round((projects.filter((p) => p.type === t).length / projects.length) * 100),
    count: projects.filter((p) => p.type === t).length,
    color: c(typeColors[i]),
  }));

  return (
    <>
      <PageHeader title="Portfolio" subtitle="Python Developer and Data Analyst, Agadir, Morocco" />

      <div className="grid">
        <Card className="s12">
          <div className="hero">
            <Avatar size={96} />
            <div className="hero-text">
              <h2>{profile.name}</h2>
              <div className="role">{profile.role}</div>
              <p className="lead">{profile.summary}</p>
            </div>
            <div className="hero-actions">
              <Link className="btn" href="/projects">View projects</Link>
              <a className="btn red" href={profile.cv} download><Icon name="download" size={16} /> CV</a>
            </div>
          </div>
        </Card>

        <Card className="s12">
          <div className="kpis">
            {aboutKpis.map((k) => (
              <div className="kpi" key={k.label}>
                <div className="v">
                  {k.value}
                  <span className="delta">{k.delta}</span>
                </div>
                <div className="l">{k.label}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="s5" title="Languages" sub="Self-assessed">
          <div className="rings">
            {languageRings.map((l) => (
              <div key={l.name} style={{ textAlign: "center" }}>
                <Donut size={96} stroke={12} segments={[{ label: l.name, value: l.score, color: c(l.color) }]}>
                  <b style={{ fontSize: 15 }}>{l.name.slice(0, 2).toUpperCase()}</b>
                </Donut>
                <div className="ring-caption"><b style={{ color: "var(--ink)" }}>{l.name}</b><br />{l.level}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="s4" title="Internship experience" sub="Months spent on each">
          <BarChart
            series={[{ name: "Months", color: c("red") }]}
            groups={internships.map((i) => ({ label: i.short ?? i.org, values: [i.months ?? 0] }))}
            max={6}
            ticks={[0, 2, 4, 6]}
            unit="months"
          />
        </Card>

        <Card className="s3" title="About me">
          {aboutFacts.map((h, i) => (
            <div className={`list-row${i === 0 ? " accent" : ""}`} key={h.label}>
              <span>{h.label}</span><span>{h.value}</span>
            </div>
          ))}
        </Card>

        <Card className="s4" title="Core skills" sub="Self-assessed, out of 5">
          <div className="pills">
            {topSkills.map((s) => (
              <div className="pill-row" key={s.name}>
                <div className="pill-track">
                  <div className="pill-fill" style={{ width: `${(s.level / 5) * 100}%` }}>{s.name}</div>
                </div>
                <span className="pill-num">{s.level}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="s4" title="Projects by type" sub={`${projects.length} projects in total`}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Donut size={150} stroke={16} segments={typeSegments}>
              <b>{projects.length}</b><span>projects</span>
            </Donut>
          </div>
          <div className="legend">
            {typeSegments.map((t) => (
              <div className="legend-item" key={t.label}>
                <span className="dot" style={{ background: t.color }} />
                {t.label}<span className="val">{t.count}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="s4" title="Open to" sub="Roles and focus areas">
          <div className="chips" style={{ marginBottom: 18 }}>
            {profile.openTo.map((r, i) => (
              <span key={r} className={`chip ${i === 0 ? "purple" : i === 1 ? "red" : ""}`}>{r}</span>
            ))}
          </div>
          <p style={{ color: "var(--ink-2)" }}>
            Strongest in Python backends, SQL and data analysis, with experience from shipping an API based product end to end.
          </p>
          <div style={{ marginTop: 18 }}>
            <Link className="btn ghost" href="/contact">Get in touch</Link>
          </div>
        </Card>

        <Card className="s12" title="My path" sub="From websites to Python, data and AI">
          <Pipeline steps={path} />
        </Card>

        <Card className="s12" title="Projects" sub="Web, data and AI, from internships and studies">
          <div className="minis">
            {projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="mini">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={`${p.title} logo`} loading="lazy" />
                <b>{p.title}</b>
                <small>{p.type}</small>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
