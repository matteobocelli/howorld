/**
 * Service Areas Page — placeholder
 * Design: Consistent with site-wide industrial editorial style.
 */
import FadeUp from "@/components/FadeUp";
import { SITE } from "@/lib/siteConfig";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

// const PLACEHOLDER_AREAS = [
//   { region: "[City]", description: "Primary service area — same-day and next-day delivery available." },
//   { region: "[County]", description: "Full county coverage with standard 48-hour delivery windows." },
//   { region: "[Surrounding Areas]", description: "Extended service area — contact us to confirm availability and lead times." },
// ];

const PLACEHOLDER_AREAS = [
  {
    region: "Worldwide",
    description:
      "We deliver our microelectronics components globally, with reliable shipping options to nearly any location.",
  },
  {
    region: "North America",
    description:
      "Full coverage across North America with standard delivery times. Same-day and next-day options available for select regions.",
  },
  {
    region: "Europe, Asia, and Oceania",
    description:
      "International shipping with estimated lead times based on destination. Contact us for specific delivery details.",
  },
];
export default function ServiceAreas() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-[#1C1C1E] py-20 lg:py-28">
        <div className="container">
          <FadeUp>
            <span
              className="text-[#D97706] text-xs font-bold uppercase tracking-widest"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Where We Deliver
            </span>
            <h1
              className="text-white mt-3"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.05,
              }}
            >
              Service Areas
            </h1>
            <p className="text-white/60 mt-4 max-w-xl text-base leading-relaxed">
              We deliver clean, inspected containers directly to your site.
              Below are the areas we currently serve — contact us if you don't
              see your location listed.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Areas List */}
      <section className="bg-[var(--background)] py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Area cards */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {PLACEHOLDER_AREAS.map((area, i) => (
                <FadeUp
                  key={area.region}
                  delay={(i % 3) as 0 | 1 | 2 | 3 | 4 | 5}
                >
                  <div className="flex gap-5 p-6 border border-[var(--border)] hover:border-[#D97706] transition-colors duration-200">
                    <div className="shrink-0 mt-1">
                      <MapPin size={20} className="text-[#D97706]" />
                    </div>
                    <div>
                      <h2
                        className="font-bold mb-1.5"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "1.5rem",
                        }}
                      >
                        {area.region}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}

              <FadeUp delay={3}>
                <div className="flex gap-5 p-6 bg-[#1C1C1E] text-white">
                  <div className="shrink-0 mt-1">
                    <MapPin size={20} className="text-[#D97706]" />
                  </div>
                  <div>
                    <h2
                      className="font-bold mb-1.5"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "1.5rem",
                      }}
                    >
                      Don't See Your Area?
                    </h2>
                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                      Send us a message and we'll let you know.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#D97706] text-white text-sm font-bold px-5 py-2.5 hover:bg-[#B45309] transition-colors duration-200"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "1rem",
                        }}
                      >
                        Contact Us <ArrowRight size={14} />
                      </Link>
                      <a
                        href={SITE.phoneHref}
                        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#D97706] transition-colors duration-200"
                      >
                        <Phone size={14} /> {SITE.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-5">
              <FadeUp delay={1}>
                <div className="sticky top-24 flex flex-col gap-6">
                  <div className="p-6 bg-[var(--surface)] border border-[var(--border)]">
                    <h3
                      className="font-bold mb-4"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "1.25rem",
                      }}
                    >
                      Delivery Information
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {[
                        {
                          label: "Standard Lead Time",
                          value: "3–7 business days",
                        },
                        {
                          label: "Express Shipping",
                          value:
                            "Available for select regions — contact us to confirm",
                        },
                        { label: "Delivery Hours", value: "Mon–Fri, 9am–6pm" },
                        {
                          label: "Worldwide Shipping",
                          value: "Yes — delivery times vary by destination",
                        },
                        {
                          label: "Order Placement",
                          value:
                            "Order confirmation and shipping details provided within 24 hours",
                        },
                      ].map(item => (
                        <li
                          key={item.label}
                          className="flex flex-col gap-0.5 pb-3 border-b border-[var(--border)] last:border-0 last:pb-0"
                        >
                          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                            {item.label}
                          </span>
                          <span className="text-sm font-medium">
                            {item.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 border-l-2 border-[#D97706] bg-[var(--surface)]">
                    <p
                      className="text-sm font-bold mb-1"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "1rem",
                      }}
                    >
                      For any enquiry?
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      Email us for same-day availability and pricing.
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="inline-flex items-center gap-2 text-[#D97706] font-bold text-sm hover:underline"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "1rem",
                      }}
                    >
                      <Phone size={14} /> {SITE.phone}
                    </a>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
