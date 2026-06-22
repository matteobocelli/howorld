/**
 * Footer — contact info, nav links, social icons (Facebook, YouTube, Instagram).
 * Design: Dark charcoal background, amber accents, IBM Plex Sans.
 */
import { SITE } from "@/lib/siteConfig";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

// Social icon SVGs (brand-accurate, logo-only)
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="Facebook">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="YouTube">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="Instagram">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/containers", label: "Containers" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-white">
      {/* Top section */}
      <div className="container py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="8" width="28" height="16" rx="1" fill="#D97706" />
                <line x1="16" y1="8" x2="16" y2="24" stroke="#fff" strokeWidth="1.5" />
                <rect x="2" y="8" width="4" height="4" rx="0.5" fill="#fff" fillOpacity="0.25" />
                <rect x="26" y="8" width="4" height="4" rx="0.5" fill="#fff" fillOpacity="0.25" />
                <rect x="2" y="20" width="4" height="4" rx="0.5" fill="#fff" fillOpacity="0.25" />
                <rect x="26" y="20" width="4" height="4" rx="0.5" fill="#fff" fillOpacity="0.25" />
                <line x1="8" y1="9" x2="8" y2="23" stroke="#fff" strokeWidth="0.75" strokeOpacity="0.3" />
                <line x1="12" y1="9" x2="12" y2="23" stroke="#fff" strokeWidth="0.75" strokeOpacity="0.3" />
                <line x1="20" y1="9" x2="20" y2="23" stroke="#fff" strokeWidth="0.75" strokeOpacity="0.3" />
                <line x1="24" y1="9" x2="24" y2="23" stroke="#fff" strokeWidth="0.75" strokeOpacity="0.3" />
              </svg>
              <span
                className="font-bold text-lg"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
              >
                {SITE.name}
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              {SITE.tagline}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#D97706] transition-colors duration-150"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#D97706] transition-colors duration-150"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#D97706] transition-colors duration-150"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div className="lg:col-span-3 lg:col-start-6">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {FOOTER_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-[#D97706] transition-colors duration-150"
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={SITE.phoneHref}
                className="flex items-start gap-2.5 text-sm text-white/70 hover:text-[#D97706] transition-colors duration-150"
              >
                <Phone size={14} className="mt-0.5 shrink-0" />
                {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="flex items-start gap-2.5 text-sm text-white/70 hover:text-[#D97706] transition-colors duration-150"
              >
                <Mail size={14} className="mt-0.5 shrink-0" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>{SITE.address.full}</span>
              </div>
            </div>
            <div className="mt-5 text-xs text-white/40 leading-relaxed">
              <p>{SITE.hours.weekdays}</p>
              <p>{SITE.hours.saturday}</p>
              <p>{SITE.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <a
            href={SITE.url}
            className="text-xs text-white/35 hover:text-white/60 transition-colors duration-150"
          >
            {SITE.urlDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
