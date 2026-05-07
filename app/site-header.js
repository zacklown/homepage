'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { socialLinks } from "./site-data";

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14 5h5v5M10 14 19 5M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export default function SiteHeader({ brandHref, brandLabel }) {
  const mobileQuery = "(max-width: 720px)";
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileQuery);

    const syncViewportState = () => {
      const nextIsMobile = mediaQuery.matches;
      setIsMobile(nextIsMobile);

      if (!nextIsMobile) {
        setIsCollapsed(false);
        setIsMenuOpen(false);
      }
    };

    const syncHeaderState = () => {
      if (!mediaQuery.matches) {
        setIsCollapsed(false);
        setIsMenuOpen(false);
        return;
      }

      const collapseAt = 96;
      const expandAt = 48;
      const nextCollapsed = isCollapsed
        ? window.scrollY > expandAt
        : window.scrollY > collapseAt;

      setIsCollapsed(nextCollapsed);

      if (!nextCollapsed) {
        setIsMenuOpen(false);
      }
    };

    syncViewportState();
    syncHeaderState();

    window.addEventListener("scroll", syncHeaderState, { passive: true });
    mediaQuery.addEventListener("change", syncViewportState);

    return () => {
      window.removeEventListener("scroll", syncHeaderState);
      mediaQuery.removeEventListener("change", syncViewportState);
    };
  }, [isCollapsed]);

  const handleMenuToggle = () => {
    if (!isCollapsed) {
      return;
    }

    setIsMenuOpen((current) => !current);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={[
        "site-header",
        isMobile && isCollapsed ? "site-header-collapsed" : "",
        isMenuOpen ? "site-header-open" : ""
      ].filter(Boolean).join(" ")}
    >
      <div className="site-header-main">
        <Link className="brand" href={brandHref} onClick={handleMenuClose}>
          {brandLabel}
        </Link>
        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="site-header-toggle"
          onClick={handleMenuToggle}
          type="button"
        >
          <MenuIcon />
        </button>
      </div>
      <div className="site-header-panel">
        <nav className="site-nav" aria-label="Primary">
          <Link href="/" onClick={handleMenuClose}>Home</Link>
          <Link href="/projects" onClick={handleMenuClose}>Projects</Link>
          <a className="nav-external" href={socialLinks.personalBlog} onClick={handleMenuClose} target="_blank" rel="noreferrer">
            Personal blog
            <ExternalLinkIcon />
          </a>
          <a className="nav-external" href={socialLinks.professionalBlog} onClick={handleMenuClose} target="_blank" rel="noreferrer">
            Professional blog
            <ExternalLinkIcon />
          </a>
        </nav>
        <a className="button button-primary header-resume-link" href="/Zack%20Lown%20resume.pdf" download onClick={handleMenuClose}>
          Download resume
        </a>
      </div>
    </header>
  );
}
