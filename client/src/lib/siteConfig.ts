/**
 * SITE CONFIGURATION — Replace all placeholder values with real company data.
 * This single file controls all contact info, social links, and branding
 * across every page of the site.
 */

export const SITE = {
  // ── Company Identity ──────────────────────────────────────────────────────
  name: "[COMPANY NAME]",
  tagline: "Steel-grade reliability. Delivered to your door.",
  legalName: "[COMPANY LEGAL NAME LLC]",

  // ── Contact ───────────────────────────────────────────────────────────────
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "info@[yourdomain].com",
  emailHref: "mailto:info@[yourdomain].com",

  // ── Address ───────────────────────────────────────────────────────────────
  address: {
    street: "123 Yard Drive",
    city: "Your City",
    state: "ST",
    zip: "00000",
    full: "123 Yard Drive, Your City, ST 00000",
  },

  // ── Website ───────────────────────────────────────────────────────────────
  url: "https://www.[yourdomain].com",
  urlDisplay: "www.[yourdomain].com",

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
  serviceArea: "[Your City] and surrounding areas within [XX] miles",
};

// ── Container Inventory ────────────────────────────────────────────────────
export const CONTAINERS = [
  {
    id: "10ft",
    label: "10FT",
    name: "10-Foot Standard",
    dimensions: {
      exterior: "10' × 8' × 8'6\"",
      interior: "9'4\" × 7'8\" × 7'10\"",
      doorOpening: "7'8\" × 7'5\"",
    },
    capacity: "~1,172 cu ft",
    weightEmpty: "2,645 lbs",
    maxPayload: "21,671 lbs",
    description:
      "Ideal for small storage needs, residential use, or tight job sites where space is limited.",
    uses: ["Residential storage", "Small job sites", "Seasonal overflow"],
    available: true,
    priceFrom: "Contact for pricing",
  },
  {
    id: "20ft",
    label: "20FT",
    name: "20-Foot Standard",
    dimensions: {
      exterior: "20' × 8' × 8'6\"",
      interior: "19'4\" × 7'8\" × 7'10\"",
      doorOpening: "7'8\" × 7'5\"",
    },
    capacity: "~1,172 cu ft",
    weightEmpty: "4,850 lbs",
    maxPayload: "47,900 lbs",
    description:
      "Our most popular unit. Versatile enough for construction, retail overflow, or long-term storage.",
    uses: ["Construction sites", "Retail overflow", "Document storage", "Equipment"],
    available: true,
    priceFrom: "Contact for pricing",
    featured: true,
  },
  {
    id: "40ft",
    label: "40FT",
    name: "40-Foot Standard",
    dimensions: {
      exterior: "40' × 8' × 8'6\"",
      interior: "39'5\" × 7'8\" × 7'10\"",
      doorOpening: "7'8\" × 7'5\"",
    },
    capacity: "~2,390 cu ft",
    weightEmpty: "8,380 lbs",
    maxPayload: "59,040 lbs",
    description:
      "Maximum ground-level storage. Perfect for large inventories, event staging, or industrial use.",
    uses: ["Large inventory", "Event staging", "Industrial storage", "Warehousing"],
    available: true,
    priceFrom: "Contact for pricing",
  },
  {
    id: "40hc",
    label: "40FT HC",
    name: "40-Foot High Cube",
    dimensions: {
      exterior: "40' × 8' × 9'6\"",
      interior: "39'5\" × 7'8\" × 8'10\"",
      doorOpening: "7'8\" × 8'5\"",
    },
    capacity: "~2,694 cu ft",
    weightEmpty: "8,598 lbs",
    maxPayload: "58,598 lbs",
    description:
      "One extra foot of height makes a significant difference for tall equipment, shelving systems, or palletized goods.",
    uses: ["Tall equipment", "Shelving systems", "Palletized goods", "Workshop conversion"],
    available: true,
    priceFrom: "Contact for pricing",
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
