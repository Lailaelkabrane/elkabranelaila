"use client";

import { useState } from "react";
import Icon from "./Icons";

/** Read-only field styled like a settings form. Copies the value on click. */
export default function CopyField({ label, value, href, icon }: { label: string; value: string; href?: string; icon: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 1400);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <div className="field">
      <label>{label}</label>
      <div className="field-box">
        <span className="fic"><Icon name={icon} size={16} /></span>
        <input readOnly value={value} aria-label={label} onFocus={(e) => e.currentTarget.select()} />
        {href && (
          <a className="fbtn" href={href} target="_blank" rel="noreferrer" aria-label={`Open ${label}`}><Icon name="external" size={15} /></a>
        )}
        <button className="fbtn" onClick={copy} aria-label={`Copy ${label}`}>{done ? <Icon name="check" size={15} /> : "Copy"}</button>
      </div>
    </div>
  );
}
