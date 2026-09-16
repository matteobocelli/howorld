/**
 * Home Page
 * Design: Editorial industrial. Left-anchored hero with split layout.
 * Sections: Hero → Container Chooser → Value Props → Reviews → CTA Banner
 * No bento grids, no centered card stacks, no gradient text.
 */
import FadeUp from "@/components/FadeUp";
import QuoteForm from "@/components/QuoteForm";
import { SITE } from "@/lib/siteConfig";
import { ArrowRight, CheckCircle, Phone, Star } from "lucide-react";
import { Link } from "wouter";
import HERO_VIDEO from "../images/hero_video.mp4";
import adi_logo from "../images/adi-logo.jpeg";
import xilinx_logo from "../images/xilinx-logo.jpeg";
import micro_logo from "../images/micro-logo.png";
import memory_logo from "../images/memory-logo.png";

// Hero video — served from public/ folder (bundled with Vercel build)
// const HERO_VIDEO = "https://github.com/mshaynehall1-dev/container-rental-site/releases/download/v1.0-assets/20-footsteelshippingcontaineronjobsite.mp4";

// Container card images (CDN URLs from webdev static assets)
const CARD_IMAGES = {
  adi: adi_logo,

  xilinx: xilinx_logo,
  microcontrollers: micro_logo,
  memory: memory_logo,
};

const products = [
  {
    icon: <CheckCircle size={16} className="text-[#D97706]" />,
    title: "Analog Devices (ADI)",
    body: "High-quality analog and mixed-signal chips delivered within 48 hours for your project needs.",
  },
  {
    icon: <CheckCircle size={16} className="text-[#D97706]" />,
    title: "Xilinx",
    body: "FPGAs and programmable logic devices inspected and tested before delivery to ensure optimal performance.",
  },
  {
    icon: <CheckCircle size={16} className="text-[#D97706]" />,
    title: "Microcontrollers",
    body: "Wide selection of microcontrollers from leading brands, available for quick deployment.",
  },
  {
    icon: <CheckCircle size={16} className="text-[#D97706]" />,
    title: "Memory Modules",
    body: "RAM, SSDs, and storage solutions with guaranteed quality and fast shipping.",
  },
  {
    icon: <CheckCircle size={16} className="text-[#D97706]" />,
    title: "Power Supplies",
    body: "Reliable power modules and adapters suitable for various microelectronics applications.",
  },
  {
    icon: <CheckCircle size={16} className="text-[#D97706]" />,
    title: "Development Boards",
    body: "Ready-to-use development kits for rapid prototyping and testing of your designs.",
  },
];

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

      <div className="container relative z-10 py-16 lg:py-0 lg:min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left: Headline + Value + Proof + Form */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Eyebrow */}
            <div
              className="animate-fade-up in-view"
              style={{ transitionDelay: "0ms" }}
            >
              <span className="stencil-label">
                Your best microelectronics vendor
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up in-view text-white mt-3 mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                transitionDelay: "60ms",
              }}
            >
              Let Us
              <br />
              <span style={{ color: "#D97706" }}>
                Handle All Your Microelectronics Needs At{" "}
                <span className="!text-blue-red">
                  <span className="text-blue-500">HO</span>
                  <span>
                    WORLD LI<span className="text-blue-500">MITED</span>
                  </span>
                </span>
              </span>{" "}
              {/* <br /> */}
              Today With Competitive Prices and Lead Time.
            </h1>

            {/* Value — body copy */}
            <p
              className="animate-fade-up in-view text-white/70 text-base leading-relaxed mb-2 max-w-md"
              style={{ transitionDelay: "100ms" }}
            >
              We offer brand-new, genuine microelectronics such as SSDs, RAM,
              and various other components for all leading brands. Trust in our
              quality and authenticity for your tech needs.
            </p>

            {/* Trust line */}
            <p
              className="animate-fade-up in-view text-red-500 text-sm font-semibold mb-2 max-w-md"
              style={{
                transitionDelay: "120ms",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              Fast delivery. New & Original Goods. No hidden surprises.
            </p>

            {/* Service area */}
            <p
              className="animate-fade-up in-view text-white/45 text-xs mb-8 max-w-md"
              style={{ transitionDelay: "140ms" }}
            >
              Unit G06 Acton Business Centre, School Road, London, England, NW10
              6TD
            </p>

            {/* Proof points */}
            <div
              className="animate-fade-up in-view grid grid-cols-3 gap-4 mb-10"
              style={{ transitionDelay: "180ms" }}
            >
              {products.map(p => (
                <div key={p.title} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    {p.icon}
                    <p
                      className="text-white text-xs font-bold leading-tight"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "0.875rem",
                      }}
                    >
                      {p.title}
                    </p>
                  </div>
                  <p className="text-white/40 text-[11px] leading-snug">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Form */}
            <div
              className="animate-fade-up in-view"
              style={{ transitionDelay: "240ms" }}
            >
              {/* <QuoteForm /> */}
            </div>
          </div>

          {/* Right: Hero Video */}
          <div className="lg:col-span-6 xl:col-span-7 flex items-center justify-center lg:justify-end">
            <div
              className="animate-fade-up in-view relative w-full max-w-[560px] lg:max-w-none"
              style={{ transitionDelay: "120ms" }}
            >
              {/* Angled clip frame */}
              <div
                className="relative overflow-hidden"
                style={{
                  clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
                  width: "min(560px, calc(100vw - 2rem))",
                  aspectRatio: "20 / 10",
                }}
              >
                <video
                  src={HERO_VIDEO}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ display: "block" }}
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
                  Best
                </p>
                <p className="text-xl font-bold leading-tight">
                  In Offering Standard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <div className="w-px h-8 bg-white animate-pulse" />
        <p className="text-[10px] text-white tracking-widest uppercase">
          Scroll
        </p>
      </div>
    </section>
  );
}

// ── Container Chooser Section ─────────────────────────────────────────────────
const CONTAINER_CARDS = [
  {
    id: "10ft",
    label: "10-Foot",
    name: "10-Foot Container",
    tagline: "Compact storage for homes, renovations, and tight spaces.",
    dimensions: {
      exterior: "10′ L × 8′ W × 8′6″ H",
      interior: "9′5″ L × 7′8″ W × 7′10″ H",
    },
    capacity: "~560 cu ft — fits a studio apartment",
    bestUses: [
      "Home storage",
      "Renovations",
      "Small businesses",
      "Tight access sites",
    ],
    img: CARD_IMAGES["10ft"],
  },
  {
    id: "20ft",
    label: "20-Foot",
    name: "20-Foot Container",
    tagline:
      "The most popular option for jobsites, businesses, and general storage.",
    dimensions: {
      exterior: "20′ L × 8′ W × 8′6″ H",
      interior: "19′4″ L × 7′8″ W × 7′10″ H",
    },
    capacity: "~1,170 cu ft — fits a 2–3 bedroom home",
    bestUses: [
      "Construction jobsites",
      "Business inventory",
      "General storage",
      "Seasonal overflow",
    ],
    img: CARD_IMAGES["20ft"],
    popular: true,
  },
  {
    id: "40ft",
    label: "40-Foot",
    name: "40-Foot Container",
    tagline:
      "Maximum storage for commercial inventory, equipment, and large projects.",
    dimensions: {
      exterior: "40′ L × 8′ W × 8′6″ H",
      interior: "39′5″ L × 7′8″ W × 7′10″ H",
    },
    capacity: "~2,350 cu ft — fits a 4–5 bedroom home",
    bestUses: [
      "Commercial inventory",
      "Large equipment",
      "Retail overflow",
      "Long-term storage",
    ],
    img: CARD_IMAGES["40ft"],
  },
  {
    id: "40hc",
    label: "40-Foot HC",
    name: "40-Foot High Cube",
    tagline: "Extra height and capacity for oversized storage needs.",
    dimensions: {
      exterior: "40′ L × 8′ W × 9′6″ H",
      interior: "39′5″ L × 7′8″ W × 8′10″ H",
    },
    capacity: "~2,700 cu ft — 1 foot taller than standard",
    bestUses: [
      "Oversized items",
      "Tall equipment",
      "Pallet storage",
      "Workshop conversion",
    ],
    img: CARD_IMAGES["40hc"],
  },
];

const MICROELECTRONICS_CARDS = [
  {
    id: "adi",
    label: "ADI",
    name: "Analog Devices",
    tagline:
      "Precision analog and mixed-signal components for your microelectronics projects.",
    dimensions: {
      exterior: "12′ L × 8′ W × 8′6″ H",
      interior: "11′5″ L × 7′8″ W × 7′10″ H",
    },
    capacity: "~600 cu ft — ideal for component storage and testing labs",
    bestUses: [
      "Signal processing modules",
      "Sensor interface components",
      "High-precision amplifiers",
      "Prototyping microelectronics",
    ],
    img: CARD_IMAGES["adi"],
  },
  {
    id: "xilinx",
    label: "Xilinx",
    name: "Xilinx FPGA Storage",
    tagline:
      "Secure storage for FPGA development boards, prototyping, and testing equipment.",
    dimensions: {
      exterior: "10′ L × 8′ W × 8′6″ H",
      interior: "9′5″ L × 7′8″ W × 7′10″ H",
    },
    capacity: "~560 cu ft — fits multiple FPGA boards and accessories",
    bestUses: [
      "Development and testing of FPGAs",
      "Prototyping labs",
      "Hardware inventory",
      "Electronics R&D",
    ],
    img: CARD_IMAGES["xilinx"],
  },
  {
    id: "microcontrollers",
    label: "Microcontrollers",
    name: "Microcontroller Modules",
    tagline:
      "Dedicated space for microcontroller units, development kits, and peripherals.",
    dimensions: {
      exterior: "8′ L × 6′ W × 8′6″ H",
      interior: "7′5″ L × 5′8″ W × 7′10″ H",
    },
    capacity: "~300 cu ft — perfect for component storage and assembly",
    bestUses: [
      "Embedded system development",
      "Prototyping",
      "Electronics assembly",
      "Sensor integration",
    ],
    img: CARD_IMAGES["microcontrollers"],
  },
  {
    id: "memory",
    label: "Memory Modules",
    name: "Memory & Storage",
    tagline:
      "Storage solutions for microcontrollers, development boards, and data logging.",
    dimensions: {
      exterior: "8′ L × 6′ W × 8′6″ H",
      interior: "7′5″ L × 5′8″ W × 7′10″ H",
    },
    capacity: "~350 cu ft — accommodates RAM, SSDs, and flash memory",
    bestUses: [
      "Data logging",
      "Firmware storage",
      "Testing and development",
      "Data center microelectronics",
    ],
    img: CARD_IMAGES["memory"],
  },
  // Add more products if needed
];

function ContainerChooserSection() {
  return (
    <section className="bg-[var(--background)] py-16 lg:py-24">
      <div className="container">
        <FadeUp>
          <div className="mb-12">
            <span className="amber-rule" />
            <h2
              className="mt-3"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Our Main Brands
              {/* <br /> */}
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {MICROELECTRONICS_CARDS.map((c, i) => (
            <FadeUp key={c.id} delay={(i % 4) as 0 | 1 | 2 | 3 | 4 | 5}>
              <div className="flex flex-col bg-[var(--surface)] overflow-hidden h-full group hover:-translate-y-1 transition-transform duration-200">
                {/* Photo */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "3/2" }}
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full  group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Popular badge */}
                  {/* {c.popular && (
                    <div
                      className="absolute top-3 right-3 bg-[#D97706] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Most Popular
                    </div>
                  )} */}
                  {/* Size label overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span
                      className="text-white font-bold"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "1.5rem",
                      }}
                    >
                      {c.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {c.tagline}
                  </p>

                  {/* Dimensions */}
                  {/* <div className="mb-3">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                      Dimensions
                    </p>
                    <p className="spec-num text-xs font-medium">
                      {c.dimensions.exterior}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Interior: {c.dimensions.interior}
                    </p>
                  </div> */}

                  {/* Capacity */}
                  {/* <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                      Approximate Capacity
                    </p>
                    <p className="text-xs font-medium">{c.capacity}</p>
                  </div> */}

                  {/* Best uses */}
                  <div className="mb-5 flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                      Best Uses
                    </p>
                    <ul className="space-y-1">
                      {c.bestUses.map(use => (
                        <li
                          key={use}
                          className="flex items-center gap-2 text-xs text-foreground"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#D97706] shrink-0" />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="mt-auto flex items-center justify-center gap-2 bg-[#1C1C1E] text-white text-sm font-semibold py-3 px-4 hover:bg-[#D97706] transition-colors duration-200"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "1rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Get Pricing <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Reviews Section ───────────────────────────────────────────────────────────
// const REVIEWS = [
//   {
//     id: 1,
//     stars: 5,
//     quote:
//       "Fast delivery and exactly what we needed. The container was clean and in great shape.",
//     name: "Sarah M.",
//     context: "Homeowner, Renovation Project",
//   },
//   {
//     id: 2,
//     stars: 5,
//     quote:
//       "We've used them on three jobsites now. Reliable, on time, and no hassle. Will keep coming back.",
//     name: "James T.",
//     context: "General Contractor",
//   },
//   {
//     id: 3,
//     stars: 5,
//     quote:
//       "Needed a 40-footer on short notice. They had it on-site the next morning. Couldn't ask for better service.",
//     name: "Linda R.",
//     context: "Business Owner",
//   },
// ];

const REVIEWS = [
  {
    id: 1,
    stars: 5,
    quote:
      "The microelectronics I purchased were of top quality and arrived quickly. Perfect for my DIY projects.",
    name: "Alice W.",
    context: "Procurement Mgr.",
  },
  {
    id: 2,
    stars: 5,
    quote:
      "I've ordered microchips and components multiple times. Always reliable, fast shipping, and excellent customer service.",
    name: "Brian K.",
    context: "Component Buyer",
  },
  {
    id: 3,
    stars: 5,
    quote:
      "Needed precision microelectronics for my prototyping. They had exactly what I needed in stock and shipped promptly.",
    name: "Catherine L.",
    context: "Procurement Specialist",
  },
];

function ReviewsSection() {
  return (
    <section className="bg-[var(--surface)] py-16 lg:py-20 border-t border-[var(--border)]">
      <div className="container">
        <FadeUp>
          <div className="mb-10">
            <span className="amber-rule" />
            <h2
              className="mt-3"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              What Our Customers Say
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <FadeUp key={r.id} delay={(i % 3) as 0 | 1 | 2 | 3 | 4 | 5}>
              <div className="bg-[var(--background)] p-6 border-l-2 border-[#D97706] flex flex-col gap-4 h-full">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      fill="#D97706"
                      className="text-[#D97706]"
                    />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm leading-relaxed text-foreground flex-1">
                  "{r.quote}"
                </p>
                {/* Attribution */}
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "1rem",
                    }}
                  >
                    {r.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {r.context}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Value Props Section ───────────────────────────────────────────────────────
function ValuePropsSection() {
  // const props = [
  //   { title: "Delivered to Your Door", body: "We drop off and pick up — no need to arrange transport. Just tell us where and when." },
  //   { title: "Wind & Watertight", body: "Every container is inspected before delivery. Your belongings stay dry and secure." },
  //   { title: "Flexible Terms", body: "Rent by the month or longer. No long-term contracts required." },
  //   { title: "Multiple Sizes", body: "10ft, 20ft, 40ft, and High Cube — the right fit for every job." },
  // ];

  const props = [
    {
      title: "Fast Delivery to Your Business",
      body: "We deliver microelectronic components directly to your location.",
    },
    {
      title: "Secure & Reliable Supply",
      body: "All products are inspected for quality before delivery. Your electronic components arrive in perfect condition.",
    },
    {
      title: "Flexible Ordering Terms",
      body: "Order by the piece, batch, or on a recurring basis.",
    },
    {
      title: "Wide Range of Products",
      body: "From microchips to circuit boards — the right components for every project.",
    },
  ];

  return (
    <section className="bg-[var(--background)] py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          <div className="lg:col-span-4">
            <FadeUp>
              <span className="amber-rule" />
              <h2
                className="mt-3"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 700,
                }}
              >
                Why Businesses
                <br />
                Choose Us
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {props.map((prop, i) => (
              <FadeUp key={prop.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4 | 5}>
                <div className="flex gap-4">
                  <div
                    className="shrink-0 w-1 self-stretch"
                    style={{ backgroundColor: "#D97706" }}
                  />
                  <div>
                    <h3
                      className="font-bold mb-1.5"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "1.125rem",
                      }}
                    >
                      {prop.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prop.body}
                    </p>
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
                  fontWeight: 700,
                }}
              >
                Ready to Reserve Your Container?
              </h2>
              <p className="text-white/60 text-base max-w-xl">
                Tell us what you need and we'll get back to you within one
                business day with availability and pricing.
              </p>
            </FadeUp>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <FadeUp delay={1}>
              <Link href="/contact" className="btn-primary">
                Reach Out To Us <ArrowRight size={16} />
              </Link>
            </FadeUp>
            <FadeUp delay={2}>
              <a
                href={SITE.phoneHref}
                className="btn-ghost border-white/20 text-white hover:border-[var(--amber)] hover:text-[var(--amber)]"
              >
                <Phone size={15} /> {SITE.phone}
              </a>
            </FadeUp>
          </div>
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
      <ContainerChooserSection />
      <ValuePropsSection />
      <ReviewsSection />
      <CTABanner />
    </div>
  );
}
