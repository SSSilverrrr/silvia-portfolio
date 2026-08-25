"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { MouseEvent } from "react";

const playgroundTopIntent = "silvia:playground-top";

export function Header({ active = "home" }: { active?: "home" | "about" | "case-study" | "playground" | "contact" }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/playground" || window.sessionStorage.getItem(playgroundTopIntent) !== "1") return;

    window.sessionStorage.removeItem(playgroundTopIntent);
    const resetToTop = () => {
      window.history.replaceState(window.history.state, "", "/playground");
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    resetToTop();
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      resetToTop();
      secondFrame = window.requestAnimationFrame(resetToTop);
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
    };
  }, [pathname]);

  const handlePlaygroundClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/playground") {
      window.history.scrollRestoration = "manual";
      window.sessionStorage.setItem(playgroundTopIntent, "1");
      return;
    }

    event.preventDefault();
    window.sessionStorage.removeItem(playgroundTopIntent);
    window.history.replaceState(window.history.state, "", "/playground");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return <header className="template-header">
    <Link href="/" className="template-mark" aria-label="Silvia Zheng home"><span /><span /><span /></Link>
    <nav aria-label="Primary navigation">
      <Link className={active === "home" ? "is-active" : ""} href="/"><i>⌂</i> Home</Link>
      <Link className={active === "about" ? "is-active" : ""} href="/about"><i>✱</i> About</Link>
      <Link className={active === "case-study" ? "is-active" : ""} href="/case-study"><i>▣</i> Case study</Link>
      <Link className={active === "playground" ? "is-active" : ""} href="/playground" scroll onClick={handlePlaygroundClick}><i>◩</i> Playground</Link>
    </nav>
    <div className="template-actions">
      <a className="contact-detail" href="mailto:zhengsilvia981@163.com"><b>EM</b><em>zhengsilvia981@163.com</em></a>
      <a className="contact-detail" href="tel:+8613823307126"><b>PH</b><em>+86 138 2330 7126</em></a>
      <Link className="contact-action" href="/contact">Contact</Link>
    </div>
  </header>;
}
