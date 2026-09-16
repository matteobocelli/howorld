/**
 * SITE CONFIGURATION — Replace all placeholder values with real company data.
 * This single file controls all contact info, social links, and branding
 * across every page of the site.
 */

export const SITE = {
  // ── Company Identity ──────────────────────────────────────────────────────
  name: "HOWORLD",
  tagline: "Best in delivering New & Original Components.",
  legalName: "HOWORLD LIMITED",

  // ── Contact ───────────────────────────────────────────────────────────────
  phone: "+447438898686",
  phoneHref: "tel:+447438898686",
  email: "sales@howorldlimited.com",
  emailHref: "mailto:sales@howorldlimited.com",

  // ── Address ───────────────────────────────────────────────────────────────
  address: {
    street: " Unit G06 Acton Business Centre, School Road",
    city: "London",
    state: "England",
    zip: "NW10 6TD",
    full: "Unit G06 Acton Business Centre, School Road, London, England, NW10 6TD",
  },

  // ── Website ───────────────────────────────────────────────────────────────
  url: "https://www.howorldlimited.com",
  urlDisplay: "www.howorldlimited.com",

  // ── Social Media ──────────────────────────────────────────────────────────
  social: {
    facebook: "https://facebook.com/[yourpage]",
    youtube: "https://youtube.com/@[yourchannel]",
    instagram: "https://instagram.com/[yourhandle]",
  },

  // ── Business Hours ────────────────────────────────────────────────────────
  hours: {
    weekdays: "Mon – Fri: 7:00 AM – 5:00 PM",
    saturday: "Sat: 8:00 AM – 12:00 PM",
    sunday: "Sun: Closed",
  },

  // ── Service Area ──────────────────────────────────────────────────────────
  serviceArea:
    "Unit G06 Acton Business Centre, School Road, London, England, NW10 6TD",
};

// ── Container Inventory ────────────────────────────────────────────────────
// export const CONTAINERS = [
//   {
//     id: "10ft",
//     label: "10FT",
//     name: "10-Foot Standard",
//     dimensions: {
//       exterior: "10' × 8' × 8'6\"",
//       interior: "9'4\" × 7'8\" × 7'10\"",
//       doorOpening: "7'8\" × 7'5\"",
//     },
//     capacity: "~1,172 cu ft",
//     weightEmpty: "2,645 lbs",
//     maxPayload: "21,671 lbs",
//     description:
//       "Ideal for small storage needs, residential use, or tight job sites where space is limited.",
//     uses: ["Residential storage", "Small job sites", "Seasonal overflow"],
//     available: true,
//     priceFrom: "Contact for pricing",
//   },
//   {
//     id: "20ft",
//     label: "20FT",
//     name: "20-Foot Standard",
//     dimensions: {
//       exterior: "20' × 8' × 8'6\"",
//       interior: "19'4\" × 7'8\" × 7'10\"",
//       doorOpening: "7'8\" × 7'5\"",
//     },
//     capacity: "~1,172 cu ft",
//     weightEmpty: "4,850 lbs",
//     maxPayload: "47,900 lbs",
//     description:
//       "Our most popular unit. Versatile enough for construction, retail overflow, or long-term storage.",
//     uses: [
//       "Construction sites",
//       "Retail overflow",
//       "Document storage",
//       "Equipment",
//     ],
//     available: true,
//     priceFrom: "Contact for pricing",
//     featured: true,
//   },
//   {
//     id: "40ft",
//     label: "40FT",
//     name: "40-Foot Standard",
//     dimensions: {
//       exterior: "40' × 8' × 8'6\"",
//       interior: "39'5\" × 7'8\" × 7'10\"",
//       doorOpening: "7'8\" × 7'5\"",
//     },
//     capacity: "~2,390 cu ft",
//     weightEmpty: "8,380 lbs",
//     maxPayload: "59,040 lbs",
//     description:
//       "Maximum ground-level storage. Perfect for large inventories, event staging, or industrial use.",
//     uses: [
//       "Large inventory",
//       "Event staging",
//       "Industrial storage",
//       "Warehousing",
//     ],
//     available: true,
//     priceFrom: "Contact for pricing",
//   },
//   {
//     id: "40hc",
//     label: "40FT HC",
//     name: "40-Foot High Cube",
//     dimensions: {
//       exterior: "40' × 8' × 9'6\"",
//       interior: "39'5\" × 7'8\" × 8'10\"",
//       doorOpening: "7'8\" × 8'5\"",
//     },
//     capacity: "~2,694 cu ft",
//     weightEmpty: "8,598 lbs",
//     maxPayload: "58,598 lbs",
//     description:
//       "One extra foot of height makes a significant difference for tall equipment, shelving systems, or palletized goods.",
//     uses: [
//       "Tall equipment",
//       "Shelving systems",
//       "Palletized goods",
//       "Workshop conversion",
//     ],
//     available: true,
//     priceFrom: "Contact for pricing",
//   },
// ];

export const CONTAINERS = [
  {
    newsId: "update-001",
    headline: "Breakthrough in Semiconductor Fabrication",
    summary:
      "A new lithography technique has been developed that increases chip density by 20%, promising faster and more efficient microprocessors.",
    datePublished: "2024-04-25",
    source: "Electronics Weekly",
    relevanceScore: 9.8,
    tags: ["Semiconductors", "Manufacturing", "Innovation"],
  },
  {
    newsId: "update-002",
    headline: "Major Investment in AI Chip Production",
    summary:
      "Leading chipmaker announces a $2 billion investment to expand AI chip manufacturing capacity, aiming to meet rising demand in autonomous vehicles and data centers.",
    datePublished: "2024-04-24",
    source: "TechNews",
    relevanceScore: 9.5,
    tags: ["AI Chips", "Investment", "Manufacturing"],
  },
  {
    newsId: "update-003",
    headline: "New Memory Technologies Achieve Breakthroughs",
    summary:
      "Researchers develop a new type of non-volatile memory that promises faster speeds and lower power consumption for mobile devices.",
    datePublished: "2024-04-23",
    source: "EE Times",
    relevanceScore: 9.3,
    tags: ["Memory", "Research", "Mobile Devices"],
  },
  {
    newsId: "update-004",
    headline: "Quantum Computing Chips Enter Commercial Development",
    summary:
      "Several companies have announced prototypes of quantum processors that could revolutionize cryptography and complex problem solving.",
    datePublished: "2024-04-22",
    source: "Quantum Daily",
    relevanceScore: 9.7,
    tags: ["Quantum Computing", "Research", "Cryptography"],
  },
  {
    newsId: "update-005",
    headline: "Advancements in Flexible Electronics",
    summary:
      "New materials enable the production of flexible, foldable electronic devices, opening new possibilities in wearable technology.",
    datePublished: "2024-04-21",
    source: "Flexible Electronics News",
    relevanceScore: 9.4,
    tags: ["Flexible Electronics", "Materials", "Wearables"],
  },
];

export const MICROELECTRONICS_NEWS = [
  {
    newsId: "news-001",
    headline: "Semiconductor Industry Breakthrough in 3nm Process",
    summary:
      "Leading fabs have achieved commercial 3nm chip production, promising faster and more power-efficient devices.",
    datePublished: "2024-04-25",
    sourceName: "Electronics Weekly",
    sourceUrl: "https://electronicsweekly.com/article/3nm-breakthrough",
    category: "Manufacturing",
    tags: ["Semiconductors", "Process", "Innovation"],
    relevanceScore: 9.8,
  },
  {
    newsId: "news-002",
    headline: "Major Investment in AI Chip R&D",
    summary:
      "Top chip manufacturers announce a combined $5B investment to accelerate AI hardware development.",
    datePublished: "2024-04-24",
    sourceName: "TechNews",
    sourceUrl: "https://technews.com/article/ai-chip-investment",
    category: "Investment",
    tags: ["AI", "Chips", "R&D"],
    relevanceScore: 9.5,
  },
  {
    newsId: "news-003",
    headline: "New Memory Tech Promises Faster Mobile Storage",
    summary:
      "Researchers develop a new non-volatile memory with faster read/write speeds suitable for smartphones.",
    datePublished: "2024-04-23",
    sourceName: "EE Times",
    sourceUrl: "https://eetimes.com/article/new-memory-tech",
    category: "Research",
    tags: ["Memory", "Mobile", "Research"],
    relevanceScore: 9.3,
  },
  {
    newsId: "news-004",
    headline: "Quantum Chips Enter Commercial Trials",
    summary:
      "Quantum processors from multiple vendors are now in pilot testing for cryptography and complex simulations.",
    datePublished: "2024-04-22",
    sourceName: "Quantum Daily",
    sourceUrl: "https://quantumdaily.com/article/quantum-chips-trials",
    category: "Quantum Computing",
    tags: ["Quantum", "Cryptography", "Processors"],
    relevanceScore: 9.7,
  },
  {
    newsId: "news-005",
    headline: "Flexible Electronics for Wearables Made Possible",
    summary:
      "New flexible materials enable foldable smart devices, opening opportunities in health tech and fashion.",
    datePublished: "2024-04-21",
    sourceName: "Flexible Electronics News",
    sourceUrl: "https://flexibleelectronics.com/article/foldable-devices",
    category: "Materials",
    tags: ["Flexible", "Wearables", "Materials"],
    relevanceScore: 9.4,
  },
];

// ── Why Us / Value Props ───────────────────────────────────────────────────
export const VALUE_PROPS = [
  {
    id: "delivery",
    title: "Delivered to Your Site",
    body: "We handle transport and placement. You tell us where — we handle the rest.",
  },
  {
    id: "flexible",
    title: "Flexible Rental Terms",
    body: "Month-to-month or long-term. Scale up or down as your project demands.",
  },
  {
    id: "condition",
    title: "Wind & Watertight",
    body: "Every unit is inspected before delivery. Secure, weatherproof, and ready to load.",
  },
  {
    id: "support",
    title: "Local Support",
    body: "Real people, real answers. Call us during business hours and reach someone who knows your order.",
  },
];
