/**
 * About Page — company story, values, service area.
 * Design: Asymmetric two-column layout, large pull-quote, amber rule markers.
 */
import FadeUp from "@/components/FadeUp";
import { SITE } from "@/lib/siteConfig";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

// const VALUES = [
//   {
//     title: "Reliability First",
//     body: "We don't deliver a container that isn't ready. Every unit is inspected for structural integrity, door function, and weatherproofing before it leaves our yard.",
//   },
//   {
//     title: "Transparent Pricing",
//     body: "No surprise fees at pickup. The price we quote is the price you pay. Delivery, placement, and pickup are included in our standard rate.",
//   },
//   {
//     title: "Local Knowledge",
//     body: "We know the roads, the permit requirements, and the site conditions in our service area. That local knowledge means fewer delays and smoother deliveries.",
//   },
//   {
//     title: "Responsive Service",
//     body: "When you call, you reach someone who knows your order. We don't route you through a national call center.",
//   },
// ];

const VALUES = [
  {
    title: "Reliability First",
    body: "We supply microelectronic components that meet strict quality standards. Every batch is inspected for functionality, consistency, and compliance before delivery.",
  },
  {
    title: "Transparent Pricing",
    body: "No hidden fees or surprise charges. The price we quote is the price you pay, including shipping and handling. Our quotes are clear and upfront.",
  },
  {
    title: "Technical Expertise",
    body: "We understand the nuances of microelectronics, from specifications to compliance standards. This expertise ensures you get the right components for your application.",
  },
  {
    title: "Responsive Support",
    body: "When you reach out, you speak with knowledgeable staff who understand your needs. We prioritize quick, personalized assistance over automated responses.",
  },
];
export default function About() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="container">
          <FadeUp>
            <span className="stencil-label">Our Story</span>
            <h1
              className="text-white mt-3"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              About {SITE.name} LIMITED
            </h1>
          </FadeUp>
        </div>
      </div>

      {/* Mission section */}
      <div className="bg-[var(--background)] py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeUp>
                <span className="amber-rule" />
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  }}
                >
                  Built on the Belief That
                  <br />
                  Storage Should Be Simple
                </h2>
              </FadeUp>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeUp delay={1}>
                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  {SITE.name} LIMITED was founded with a straightforward
                  mission: provide businesses and individuals with reliable,
                  affordable electronic components without the runaround.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  We’ve supplied microelectronics to distributors and retailers
                  worldwide. Each project is unique, but our commitment remains
                  the same: delivering the right components, at the right time,
                  and to the right place.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our inventory is maintained to the highest quality standards.
                  Our team of experts is ready to assist you with technical
                  support and order inquiries at all times.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div className="bg-[var(--surface)] py-14 border-t border-b border-[var(--border)]">
        <div className="container">
          <FadeUp>
            <blockquote className="max-w-3xl">
              <p
                className="text-3xl lg:text-4xl font-bold leading-tight text-foreground"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                "Supplying the right microelectronics to your site should feel
                seamless and straightforward, not like an ongoing challenge."
              </p>
              <footer className="mt-4 stencil-label">— {SITE.name}</footer>
            </blockquote>
          </FadeUp>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[var(--background)] py-16 lg:py-24">
        <div className="container">
          <FadeUp>
            <span className="amber-rule" />
            <h2
              className="mb-10"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
              }}
            >
              What We Stand For
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {VALUES.map((v, i) => (
              <FadeUp key={v.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4 | 5}>
                <div className="flex gap-4">
                  <div className="shrink-0 w-1 self-stretch bg-[#D97706]" />
                  <div>
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Service area + CTA */}
      <div className="bg-[#1C1C1E] py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <FadeUp>
                <span className="stencil-label">Service Area</span>
                <h2
                  className="text-white mt-2 mb-3"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  }}
                >
                  We Deliver Anywhere Around the Globe.
                </h2>
                <p className="text-white/60 text-sm max-w-md">
                  Not sure if we cover your location? Send us a mail.
                </p>
              </FadeUp>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <FadeUp delay={1}>
                <Link href="/contact" className="btn-primary">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
