"use client";

import { useEffect, useState } from "react";

/** EN / FR switch shown in the top bar. The choice is remembered in the browser. */
export default function LangToggle() {
  const [lang, setLang] = useState("fr");
  useEffect(() => {
    try { setLang(localStorage.getItem("lang") || "fr"); } catch {}
  }, []);
  const set = (l: string) => {
    setLang(l);
    try { localStorage.setItem("lang", l); } catch {}
    window.dispatchEvent(new CustomEvent("langchange", { detail: l }));
  };
  return (
    <div className="card pill lang" role="group" aria-label="Language" translate="no">
      <button type="button" className={lang === "en" ? "on" : ""} onClick={() => set("en")} aria-pressed={lang === "en"}>EN</button>
      <button type="button" className={lang === "fr" ? "on" : ""} onClick={() => set("fr")} aria-pressed={lang === "fr"}>FR</button>
    </div>
  );
}
