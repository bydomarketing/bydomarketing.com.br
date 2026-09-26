"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function HeaderShell({ overHero = false, children }: { overHero?: boolean; children: ReactNode }) {
  const [scrolled, setScrolled] = useState(!overHero);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const headerClassName = overHero ? `header-overhero${scrolled ? " is-scrolled" : ""}` : undefined;

  return <header className={headerClassName}>{children}</header>;
}
