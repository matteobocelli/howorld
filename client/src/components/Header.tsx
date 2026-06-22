/**
 * Header — scroll-aware nav that transitions from transparent to opaque white.
 * Design: IBM Plex Sans 500, amber sliding underline on active links.
 * Mobile: hamburger drawer.
 */
import { SITE } from "@/lib/siteConfig";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/containers", label: "Containers" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Container cross-section logo mark
function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer container rectangle */}
      <rect x="2" y="8" width="28" height="16" rx="1" fill="#D97706" />
      {/* Door seam — center vertical line */}
      <line x1="16" y1="8" x2="16" y2="24" stroke="#fff" strokeWidth="1.5" />
      {/* Corner castings */}
      <rect x="2" y="8" width="4" height="4" rx="0.5" fill="#fff" fillOpacity="0.25" />
      <rect x="26" y="8" width="4" height="4" rx="0.5" fill="#fff" fillOpacity="0.25" />
      <rect x="2" y="20" width="4" height="4" rx="0.5" fill="#fff" fillOpacity="0.25" />
      <rect x="26" y="20" width="4" height="4" rx="0.5" fill="#fff" fillOpacity="0.25" />
      {/* Corrugation lines */}
      <line x1="8" y1="9" x2="8" y2="23" stroke="#fff" strokeWidth="0.75" strokeOpacity="0.3" />
      <line x1="12" y1="9" x2="12" y2="23" stroke="#fff" strokeWidth="0.75" strokeOpacity="0.3" />
      <line x1="20" y1="9" x2="20" y2="23" stroke="#fff" strokeWidth="0.75" strokeOpacity="0.3" />
      <line x1="24" y1="9" x2="24" y2="23" stroke="#fff" strokeWidth="0.75" strokeOpacity="0.3" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm"
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <LogoMark size={32} />
              <span
                className="font-bold text-lg leading-none"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  color: "#1C1C1E",
                }}
              >
                {SITE.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${location === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-[var(--amber)] transition-colors duration-150"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                <Phone size={14} />
                {SITE.phone}
              </a>
              <Link href="/contact" className="btn-primary text-sm py-2 px-4">
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 -mr-2 text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-snappy)" }}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--border)]">
            <span
              className="font-bold text-base"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {SITE.name}
            </span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-6 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-base font-medium border-b border-[var(--border)] last:border-0 transition-colors duration-150 ${
                  location === link.href
                    ? "text-[var(--amber)]"
                    : "text-foreground hover:text-[var(--amber)]"
                }`}
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 mt-auto pb-8 flex flex-col gap-3">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Phone size={14} />
              {SITE.phone}
            </a>
            <Link href="/contact" className="btn-primary text-center justify-center">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
