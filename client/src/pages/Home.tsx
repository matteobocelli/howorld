/**
 * Home Page
 * Design: Editorial industrial. Left-anchored hero with split layout.
 * Sections: Hero → Value Props → Container Preview → CTA Banner
 * No bento grids, no centered card stacks, no gradient text.
 */
import FadeUp from "@/components/FadeUp";
import QuoteForm from "@/components/QuoteForm";
import { CONTAINERS, SITE, VALUE_PROPS } from "@/lib/siteConfig";
import { ArrowRight, CheckCircle, ChevronRight, Phone } from "lucide-react";
import { Link } from "wouter";

// Container 360 GIF URL (uploaded to webdev static storage)
const CONTAINER_GIF = "/container_360.gif";

// ── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#1C1C1E] overflow-hidden flex items-center">
      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, #fff 39px, #fff 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #fff 39px, #fff 40px)",
        }}
      />

      <div className="container relative z-10 py-24 lg:py-0 lg:min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left: Headline + Form */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Amber rule */}
            <div
              className="animate-fade-up in-view"
              style={{ transitionDelay: "0ms" }}
            >
              <span className="stencil-label">Container Rentals</span>
            </div>

            <h1
              className="animate-fade-up in-view text-white mt-3 mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                transitionDelay: "60ms",
              }}
            >
              Your Stuff,
              <br />
              <span style={{ color: "#D97706" }}>Safe & Secure</span>
              <br />
              On Your Site.
            </h1>

            <p
              className="animate-fade-up in-view text-white/60 text-base leading-relaxed mb-8 max-w-md"
              style={{ transitionDelay: "120ms" }}
            >
              10ft, 20ft, 40ft, and High Cube containers — delivered to your site, wind and watertight, ready to load.
            </p>

            {/* Stats row */}
            <div
              className="animate-fade-up in-view flex items-center gap-6 mb-10"
              style={{ transitionDelay: "180ms" }}
            >
              {[
                { num: "4", label: "Container sizes" },
                { num: "48h", label: "Typical delivery" },
                { num: "100%", label: "Inspected" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="spec-num text-2xl font-bold text-white"
                    style={{ color: "#D97706" }}
                  >
                    {stat.num}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quote form */}
            <div
              className="animate-fade-up in-view"
              style={{ transitionDelay: "240ms" }}
            >
              <QuoteForm />
            </div>
          </div>

          {/* Right: 360° Container GIF */}
          <div className="lg:col-span-6 xl:col-span-7 flex items-center justify-center lg:justify-end">
            <div
              className="animate-fade-up in-view relative w-full max-w-[480px] lg:max-w-none"
              style={{ transitionDelay: "120ms" }}
            >
              {/* Angled clip frame */}
              <div
                className="relative overflow-hidden"
                style={{
                  clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
                  width: "min(460px, calc(100vw - 2rem))",
                  aspectRatio: "1 / 1",
                }}
              >
                <img
                  src={CONTAINER_GIF}
                  alt="360° aerial view of a 20-foot shipping container"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Dark overlay at edges */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1E]/30 via-transparent to-[#1C1C1E]/20 pointer-events-none" />
              </div>

              {/* Floating spec tag */}
              <div
                className="absolute -bottom-4 left-4 bg-[#D97706] text-white px-4 py-2.5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase opacity-80">
                  Shown
                </p>
                <p className="text-xl font-bold leading-tight">20FT Standard</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <div className="w-px h-8 bg-white animate-pulse" />
        <p className="text-[10px] text-white tracking-widest uppercase">Scroll</p>
      </div>
    </section>
  );
}

// ── Value Props Section ───────────────────────────────────────────────────────
function ValuePropsSection() {
  return (
    <section className="bg-[var(--surface)] py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* Left: heading */}
          <div className="lg:col-span-4">
            <FadeUp>
              <span className="amber-rule" />
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                }}
              >
                Why Businesses
                <br />
                Choose Us
              </h2>
            </FadeUp>
          </div>

          {/* Right: value props — 2-col grid, not 3-col strip */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUE_PROPS.map((prop, i) => (
              <FadeUp key={prop.id} delay={(i % 4) as 0 | 1 | 2 | 3 | 4 | 5}>
                <div className="flex gap-4">
                  <div
                    className="shrink-0 w-1 self-stretch"
                    style={{ backgroundColor: "#D97706" }}
                  />
                  <div>
                    <h3
                      className="text-base font-bold mb-1.5"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.125rem" }}
                    >
                      {prop.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{prop.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Container Preview Section ─────────────────────────────────────────────────
function ContainerPreviewSection() {
  return (
    <section className="bg-[var(--background)] py-16 lg:py-24">
      <div className="container">
        <FadeUp>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="amber-rule" />
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                }}
              >
                Available Containers
              </h2>
            </div>
            <Link
              href="/containers"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[var(--amber)] hover:underline"
            >
              View all specs <ChevronRight size={14} />
            </Link>
          </div>
        </FadeUp>

        {/* Horizontal scroll on mobile, 2-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTAINERS.map((c, i) => (
            <FadeUp key={c.id} delay={(i % 4) as 0 | 1 | 2 | 3 | 4 | 5}>
              <Link href={`/containers#${c.id}`} className="block group no-underline">
                <div className="bg-[var(--surface)] p-6 transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5 h-full flex flex-col">
                  {/* Size label */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        color: "#D97706",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {c.label}
                    </span>
                    {c.featured && (
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-[#D97706] text-white"
                      >
                        Popular
                      </span>
                    )}
                  </div>

                  <h3
                    className="font-bold text-base mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.125rem" }}
                  >
                    {c.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                    {c.description}
                  </p>

                  {/* Spec row */}
                  <div className="border-t border-[var(--border)] pt-3 mt-auto">
                    <p className="text-[11px] text-muted-foreground mb-0.5">Exterior</p>
                    <p className="spec-num text-sm font-medium">{c.dimensions.exterior}</p>
                  </div>

                  <div className="flex items-center gap-1 mt-3 text-[var(--amber)] text-xs font-medium group-hover:gap-2 transition-all duration-150">
                    View specs <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <Link href="/containers" className="btn-ghost text-sm py-2.5 px-5">
            View all container specs
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="bg-[#1C1C1E] py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <FadeUp>
              <h2
                className="text-white mb-3"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Ready to Reserve Your Container?
              </h2>
              <p className="text-white/60 text-base max-w-xl">
                Tell us what you need and we'll get back to you within one business day with availability and pricing.
              </p>
            </FadeUp>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <FadeUp delay={1}>
              <Link href="/contact" className="btn-primary">
                Get a Quote <ArrowRight size={16} />
              </Link>
            </FadeUp>
            <FadeUp delay={2}>
              <a href={SITE.phoneHref} className="btn-ghost border-white/20 text-white hover:border-[var(--amber)] hover:text-[var(--amber)]">
                <Phone size={15} /> {SITE.phone}
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Use Cases Strip ───────────────────────────────────────────────────────────
function UseCasesSection() {
  const cases = [
    { label: "Construction Sites", icon: "🏗" },
    { label: "Retail Overflow", icon: "📦" },
    { label: "Residential Storage", icon: "🏠" },
    { label: "Event Staging", icon: "🎪" },
    { label: "Document Archives", icon: "📁" },
    { label: "Workshop Conversion", icon: "🔧" },
  ];

  return (
    <section className="bg-[var(--background)] py-14 border-t border-[var(--border)]">
      <div className="container">
        <FadeUp>
          <p
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            Common Use Cases
          </p>
        </FadeUp>
        <div className="flex flex-wrap gap-3">
          {cases.map((c, i) => (
            <FadeUp key={c.label} delay={(i % 5) as 0 | 1 | 2 | 3 | 4 | 5}>
              <div className="flex items-center gap-2 px-4 py-2.5 border border-[var(--border)] text-sm font-medium text-foreground">
                <span>{c.icon}</span>
                {c.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropsSection />
      <ContainerPreviewSection />
      <UseCasesSection />
      <CTABanner />
    </div>
  );
}
