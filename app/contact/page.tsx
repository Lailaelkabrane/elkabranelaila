import Card from "@/components/Card";
import Icon from "@/components/Icons";
import CopyField from "@/components/CopyField";
import PageHeader from "@/components/PageHeader";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" subtitle="Open to Python, data and full stack roles" />
      <div className="grid">
        <Card className="s4 profile-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="profile-photo" src={profile.photo} alt={profile.name} />
          <h2>{profile.name}</h2>
          <div className="role">{profile.role}</div>
          <div className="chips" style={{ justifyContent: "center", margin: "14px 0 20px" }}>
            {profile.languages.map((l) => (
              <span className="chip" key={l.name}>{l.name} · {l.level}</span>
            ))}
          </div>
          <a className="btn" href={profile.cv} download><Icon name="download" size={16} /> Download CV</a>
        </Card>

        <Card className="s8" title="Contact information">
          <div className="fields">
            <CopyField label="Full name" value={profile.name} icon="user" />
            <CopyField label="Location" value={profile.location} icon="pin" />
            <CopyField label="Email" value={profile.email} icon="mail" href={`mailto:${profile.email}`} />
            <CopyField label="Phone" value={profile.phone} icon="phone" href={`tel:${profile.phone.replace(/\s/g, "")}`} />
            <CopyField label="LinkedIn" value={profile.linkedin.replace("https://www.", "")} icon="linkedin" href={profile.linkedin} />
            <CopyField label="GitHub" value={profile.github.replace("https://", "")} icon="github" href={profile.github} />
            <CopyField label="Response time" value="Usually within 24 hours" icon="clock" />
            <CopyField label="Open to" value="Python, Data, Full Stack" icon="chart" />
          </div>
        </Card>
      </div>
    </>
  );
}
