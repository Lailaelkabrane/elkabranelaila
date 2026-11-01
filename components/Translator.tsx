"use client";

import { useEffect } from "react";
import { fr, frRules } from "@/data/fr";

/**
 * Translates the visible page to French without touching the content files.
 * Looks every text (and placeholder, alt, aria-label) up in data/fr.ts.
 * Anything not listed there simply stays in English.
 */
const ATTRS = ["placeholder", "alt", "aria-label", "title"];

function tr(text: string): string {
  const key = text.trim();
  if (!key) return text;
  let out = fr[key];
  if (out === undefined) {
    for (const [re, fn] of frRules) {
      const m = key.match(re);
      if (m) { out = fn(m); break; }
    }
  }
  if (out === undefined) return text;
  const lead = text.match(/^\s*/)![0];
  const trail = text.match(/\s*$/)![0];
  return lead + out + trail;
}

export default function Translator() {
  useEffect(() => {
    const orig = new WeakMap<Node, { en: string; fr: string }>();
    let observer: MutationObserver | null = null;
    let lang = "fr";
    try { lang = localStorage.getItem("lang") || "fr"; } catch {}

    const doText = (n: Text) => {
      const rec = orig.get(n);
      if (rec && n.nodeValue === rec.fr) return;
      const en = n.nodeValue ?? "";
      const out = tr(en);
      if (out !== en) { orig.set(n, { en, fr: out }); n.nodeValue = out; }
    };
    const doEl = (el: Element) => {
      for (const a of ATTRS) {
        const v = el.getAttribute(a);
        if (!v) continue;
        const key = "data-fr-" + a;
        if (el.getAttribute(key) === v) continue; // already translated by us
        const out = tr(v);
        if (out !== v) { el.setAttribute("data-en-" + a, v); el.setAttribute(key, out); el.setAttribute(a, out); }
      }
    };
    const walk = (root: Node) => {
      if (root.nodeType === 3) { doText(root as Text); return; }
      if (root.nodeType !== 1) return;
      const el = root as Element;
      if (el.closest("script,style")) return;
      doEl(el);
      el.querySelectorAll("*").forEach(doEl);
      const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let n: Node | null;
      while ((n = w.nextNode())) doText(n as Text);
    };
    const restore = () => {
      const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let n: Node | null;
      while ((n = w.nextNode())) {
        const rec = orig.get(n);
        if (rec && n.nodeValue === rec.fr) { n.nodeValue = rec.en; orig.delete(n); }
      }
      document.querySelectorAll("[data-fr-placeholder],[data-fr-alt],[data-fr-aria-label],[data-fr-title]").forEach((el) => {
        for (const a of ATTRS) {
          const en = el.getAttribute("data-en-" + a);
          if (en !== null) { el.setAttribute(a, en); el.removeAttribute("data-en-" + a); el.removeAttribute("data-fr-" + a); }
        }
      });
    };
    const start = () => {
      stop();
      walk(document.body);
      observer = new MutationObserver((muts) => {
        for (const m of muts) {
          if (m.type === "characterData") doText(m.target as Text);
          else if (m.type === "attributes") doEl(m.target as Element);
          else m.addedNodes.forEach(walk);
        }
      });
      observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    };
    const stop = () => { observer?.disconnect(); observer = null; };
    const apply = (l: string) => {
      lang = l;
      document.documentElement.lang = l;
      if (l === "fr") start(); else { stop(); restore(); }
    };
    const onChange = (e: Event) => apply((e as CustomEvent<string>).detail);

    window.addEventListener("langchange", onChange);
    // wait a moment so React has finished hydrating before the text is changed
    const t = window.setTimeout(() => apply(lang), 400);
    return () => { window.clearTimeout(t); window.removeEventListener("langchange", onChange); stop(); };
  }, []);

  return null;
}
