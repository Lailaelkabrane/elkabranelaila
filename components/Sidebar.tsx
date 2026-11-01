"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icons";
import Avatar from "./Avatar";

const items = [
  { href: "/", label: "Overview", icon: "home" },
  { href: "/projects", label: "Projects", icon: "layers" },
  { href: "/skills", label: "Skills", icon: "chart" },
  { href: "/experience", label: "Journey", icon: "briefcase" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export default function Sidebar() {
  const pathname = (usePathname() || "/").replace(/\/$/, "") || "/";
  return (
    <nav className="rail" aria-label="Main">
      <Link href="/" className="rail-logo" aria-label="Home"><Avatar size={44} /></Link>
      {items.map((it) => {
        const active = it.href === "/" ? pathname === "/" : pathname.startsWith(it.href);
        return (
          <Link key={it.href} href={it.href} className={`rail-link${active ? " active" : ""}`} aria-current={active ? "page" : undefined}>
            <Icon name={it.icon} />
            <span>{it.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
