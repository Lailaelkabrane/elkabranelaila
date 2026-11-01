import Icon from "./Icons";
import Avatar from "./Avatar";
import LangToggle from "./LangToggle";
import { profile } from "@/data/portfolio";

export default function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="topbar">
      <div className="card title-card">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="topbar-right">
        <LangToggle />
        <div className="card pill">
          <span>{profile.location}</span>
          <Icon name="pin" size={14} />
        </div>
        <a className="card round" href={`mailto:${profile.email}`} aria-label="Email">
          <Icon name="mail" size={18} />
        </a>
        <Avatar size={40} />
      </div>
    </header>
  );
}
