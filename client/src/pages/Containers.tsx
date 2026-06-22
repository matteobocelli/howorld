/**
 * Containers Page — full spec tables for all 4 container types.
 * Design: Left-anchored headings, spec-num monospace for dimensions,
 * amber rule section markers, no cards-for-cards-sake.
 */
import FadeUp from "@/components/FadeUp";
import { CONTAINERS, SITE } from "@/lib/siteConfig";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";

function ContainerSpec({ container }: { container: (typeof CONTAINERS)[0] }) {
  return (
    <div id={container.id} className="scroll-mt-20 py-12 lg:py-16 border-b border-[var(--border)] last:border-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left: Label + Description */}
        <div className="lg:col-span-4">
          <FadeUp>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-5xl font-bold leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#D97706" }}
              >
                {container.label}
              </span>
              {container.featured && (
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-[#D97706] text-white">
                  Most Popular
                </span>
              )}
            </div>
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {container.name}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {container.description}
            </p>
            {/* Use cases */}
            <div className="flex flex-col gap-2">
              {container.uses.map((use) => (
                <div key={use} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={13} className="text-[var(--amber)] shrink-0" />
                  {use}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                Quote This Size <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Right: Spec table */}
        <div className="lg:col-span-8">
          <FadeUp delay={1}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th
                    colSpan={2}
                    className="text-left py-2.5 px-4 bg-[var(--surface)] text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  >
                    Specifications
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Exterior Dimensions", container.dimensions.exterior],
                  ["Interior Dimensions", container.dimensions.interior],
                  ["Door Opening", container.dimensions.doorOpening],
                  ["Capacity", container.capacity],
                  ["Tare Weight (Empty)", container.weightEmpty],
                  ["Max Payload", container.maxPayload],
                  ["Rental Pricing", container.priceFrom],
                ].map(([label, value], i) => (
                  <tr
                    key={label}
                    className={i % 2 === 0 ? "bg-white" : "bg-[var(--surface)]"}
                  >
                    <td className="py-3 px-4 text-muted-foreground w-1/2 border-b border-[var(--border)]">
                      {label}
                    </td>
                    <td className="py-3 px-4 border-b border-[var(--border)]">
                      <span className={label === "Rental Pricing" ? "text-[var(--amber)] font-semibold" : "spec-num font-medium"}>
                        {value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

export default function Containers() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="container">
          <FadeUp>
            <span className="stencil-label">Our Fleet</span>
            <h1
              className="text-white mt-3"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              Container Specifications
            </h1>
            <p className="text-white/60 mt-3 max-w-xl text-base">
              All units are wind and watertight, structurally sound, and inspected before delivery. Contact us for current availability and pricing.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Quick jump nav */}
      <div className="bg-[var(--surface)] border-b border-[var(--border)] sticky top-16 z-30">
        <div className="container">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {CONTAINERS.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="shrink-0 px-4 py-1.5 text-sm font-semibold text-muted-foreground hover:text-[var(--amber)] transition-colors duration-150 border-b-2 border-transparent hover:border-[var(--amber)]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Container specs */}
      <div className="bg-[var(--background)]">
        <div className="container">
          {CONTAINERS.map((c) => (
            <ContainerSpec key={c.id} container={c} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[var(--surface)] py-14 border-t border-[var(--border)]">
        <div className="container">
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Not sure which size is right?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Call us and we'll help you choose based on your load and site.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                  Request a Quote
                </Link>
                <a href={SITE.phoneHref} className="btn-ghost text-sm py-2.5 px-5">
                  <Phone size={14} /> {SITE.phone}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
