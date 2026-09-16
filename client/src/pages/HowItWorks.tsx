/**
 * How It Works Page — numbered process steps, FAQ accordion.
 * Design: Alternating full-bleed and contained sections, large step numbers.
 */
import FadeUp from "@/components/FadeUp";
import { SITE } from "@/lib/siteConfig";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

// const STEPS = [
//   {
//     num: "01",
//     title: "Request a Quote",
//     body: "Fill out our quick form or give us a call. Tell us the container size, how long you need it, and where it's going. We'll get back to you within one business day.",
//     action: { label: "Get a Quote", href: "/contact" },
//   },
//   {
//     num: "02",
//     title: "Confirm & Schedule",
//     body: "Once you approve the quote, we'll confirm the delivery date and time window. We'll also go over site access requirements — clearance height, surface type, and placement area.",
//     action: null,
//   },
//   {
//     num: "03",
//     title: "We Deliver & Place",
//     body: "Our driver delivers the container using a tilt-bed or flatbed truck. We'll place it exactly where you need it. Most deliveries take under an hour from arrival.",
//     action: null,
//   },
//   {
//     num: "04",
//     title: "Use It, Then Call Us",
//     body: "Load it, lock it, and use it as long as you need. When you're done, call us to schedule pickup. No penalties for early returns — just let us know.",
//     action: null,
//   },
// ];

const STEPS = [
  {
    num: "01",
    title: "Request a Quote",
    body: "Fill out our quick form or contact us directly. Tell us the type and quantity of microelectronic components you need, along with your delivery timeline. We’ll respond within one business day.",
    action: { label: "Get a Quote", href: "/contact" },
  },
  {
    num: "02",
    title: "Confirm & Schedule",
    body: "After you approve the quote, we’ll confirm delivery schedules and ensure all technical specifications are aligned. We’ll also review any site or handling requirements.",
    action: null,
  },
  {
    num: "03",
    title: "Prepare & Ship",
    body: "We carefully prepare and package your components to ensure they arrive in perfect condition. Shipping is coordinated to meet your project timeline.",
    action: null,
  },
  {
    num: "04",
    title: "Receive & Use",
    body: "Once delivered, integrate the components into your production process. Need support? Call us anytime for technical assistance or future orders.",
    action: null,
  },
];

// const FAQS = [
//   {
//     q: "How much notice do you need for delivery?",
//     a: "We typically need 24–48 hours notice for delivery. For same-day or next-day requests, call us directly and we'll do our best to accommodate.",
//   },
//   {
//     q: "What surface does the container need to be placed on?",
//     a: "Containers should be placed on a flat, firm surface — gravel, asphalt, or concrete work well. Soft ground like mud or grass may require additional support (railroad ties or cribbing). We can advise during the quote process.",
//   },
//   {
//     q: "How long are your rental terms?",
//     a: "We offer month-to-month rentals with no long-term commitment required. We also offer discounted rates for 3-month, 6-month, and annual rentals. Contact us for current pricing.",
//   },
//   {
//     q: "Are the containers secure?",
//     a: "All containers come with standard door hardware including lock bars and hasps. We recommend adding a high-security padlock (not included). The containers are wind and watertight and structurally sound.",
//   },
//   {
//     q: "Can I modify or customize the container?",
//     a: "Modifications such as adding shelving, lighting, or ventilation are possible on a case-by-case basis. Please discuss this during the quote process. Structural modifications are not permitted on rental units.",
//   },
//   {
//     q: "What is your service area?",
//     a: `We serve ${SITE.serviceArea}. Contact us if you're unsure whether your location is covered.`,
//   },
//   {
//     q: "What happens if I need to extend my rental?",
//     a: "Just give us a call before your rental period ends and we'll extend it. We'll prorate billing to your new end date.",
//   },
// ];

const FAQS = [
  {
    q: "How much notice do you need for order fulfillment?",
    a: "We typically require 24–48 hours notice to process and ship your microelectronic components. For urgent requests, contact us directly and we'll do our best to accommodate.",
  },
  {
    q: "What packaging is used for shipping microelectronics?",
    a: "Components are packaged with anti-static materials and in accordance with industry standards to ensure safe transport and handling. Special packaging requests can be discussed during the order process.",
  },
  {
    q: "What are your minimum order quantities?",
    a: "We cater to both small and large orders. Minimum quantities vary depending on the component type. Please contact us for specific details and pricing.",
  },
  {
    q: "Are the components authentic and tested?",
    a: "Absolutely. All components are sourced from trusted manufacturers, and we perform rigorous testing and inspection to ensure quality and authenticity before shipment.",
  },
  {
    q: "Can I request custom specifications or datasheets?",
    a: "Yes. We can provide detailed datasheets, and if you need custom specifications, discuss your requirements with our technical team during the order process.",
  },
  {
    q: "What is your service area?",
    a: `We serve ${SITE.serviceArea}. Contact us if you're unsure whether your location is covered.`,
  },
  {
    q: "What if I need to modify or return components?",
    a: "Due to industry standards, modifications are generally not permitted once components are shipped. Returns are subject to our return policy—please contact us for details.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--border)]">
      <button
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-semibold text-base group-hover:text-[var(--amber)] transition-colors duration-150"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-4" : "max-h-0"}`}
        style={{ transitionTimingFunction: "var(--ease-out-snappy)" }}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="container">
          <FadeUp>
            <span className="stencil-label">The Process</span>
            <h1
              className="text-white mt-3"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              How It Works
            </h1>
            <p className="text-white/60 mt-3 max-w-xl text-base">
              From quote to delivery in four straightforward steps. No
              surprises, no hidden fees.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-[var(--background)] py-16 lg:py-24">
        <div className="container">
          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <FadeUp key={step.num} delay={(i % 4) as 0 | 1 | 2 | 3 | 4 | 5}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-12 border-b border-[var(--border)] last:border-0 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step number */}
                  <div className="lg:col-span-2 flex items-start">
                    <span
                      className="text-7xl font-bold leading-none select-none"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        color: "#D97706",
                        opacity: 0.25,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6">
                    <h2
                      className="text-2xl lg:text-3xl font-bold mb-3"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {step.title}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                      {step.body}
                    </p>
                    {step.action && (
                      <div className="mt-5">
                        <Link
                          href={step.action.href}
                          className="btn-primary text-sm py-2.5 px-5"
                        >
                          {step.action.label} <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-[var(--surface)] py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <FadeUp>
                <span className="amber-rule" />
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  }}
                >
                  Frequently
                  <br />
                  Asked Questions
                </h2>
                <p className="text-sm text-muted-foreground mt-3 max-w-xs">
                  Still have questions? Message us.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="btn-ghost mt-5 text-sm py-2.5 px-5 inline-flex"
                >
                  {SITE.email}
                </a>
              </FadeUp>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FadeUp delay={1}>
                {FAQS.map(faq => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
