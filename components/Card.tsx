import type { ReactNode } from "react";

export default function Card({
  title,
  sub,
  className = "",
  children,
}: {
  title?: string;
  sub?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`card ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}
      {sub && <p className="card-sub">{sub}</p>}
      {children}
    </section>
  );
}
