/**
 * Event Checkout Configuration
 *
 * Edit this file to set up a new event. The checkout page reads everything
 * from here — name, pricing, features, schedule, etc.
 *
 * Set any optional section to `null` to hide it from the page entirely.
 */

export interface SponsorTier {
  id: string;
  name: string;
  price: number;
  seats: number;
  raffleTickets: number;
  perks: string;
}

export interface RafflePackage {
  id: string;
  tickets: number;
  price: number;
}

export interface EventConfigType {
  name: string;
  tagline: string;
  date: string;
  time: string;
  location: string;
  image: string | null;
  stripeApiUrl: string;
  tickets: { price: number; label: string; description: string; maxPerOrder: number } | null;
  sponsors: { tiers: SponsorTier[] } | null;
  raffle: { packages: RafflePackage[]; maxPerPackage: number } | null;
  dipOff: {
    label: string;
    description: string;
    note: string;
    categories: { id: string; label: string }[];
  } | null;
  donation: { enabled: boolean; label: string; description: string } | null;
  auction: { apiUrl: string; siteUrl: string; previewCount: number; donateEmail: string } | null;
  extras: { id: string; label: string; description: string }[];
  schedule: { time: string; title: string; description: string }[] | null;
  highlights: { title: string; description: string }[] | null;
  documents: { label: string; url: string }[] | null;
}

export const eventConfig: EventConfigType = {
  // ── Basic Info ──────────────────────────────────────────────
  name: "3rd Annual Fall Fundraiser",
  tagline: "Join us for a full meal, the Dip-Off Competition, live music, silent auction, and more!",
  date: "Saturday, November 14, 2026",
  time: "5:00 PM - 8:00 PM",
  location: "Memory Lane Events, 78 Walnut Grove Road, Eldon, MO",
  image: "https://cdn.shelterinastorm.org/images/2025-FallFundraiser-Front-1.png",

  // ── Stripe / Payment API ───────────────────────────────────
  stripeApiUrl: "https://api.shelterinastorm.org/api/v2/OtherProduct",

  // ── Tickets ────────────────────────────────────────────────
  // Set to null to disable ticket sales
  tickets: {
    price: 50,
    label: "Admission Ticket",
    description: "Includes a full meal, dip tasting, and all evening activities",
    maxPerOrder: 20,
  },

  // ── Sponsor Packages ───────────────────────────────────────
  // Set to null to disable sponsorship options
  // `seats` = admission tickets included, `raffleTickets` = raffle entries included
  sponsors: {
    tiers: [
      { id: "diamond", name: "Diamond Sponsor", price: 4000, seats: 8, raffleTickets: 50, perks: "Logo promoted on social media & at event · 1 reserved table (8 seats)" },
      { id: "gold",    name: "Gold Sponsor",    price: 2000, seats: 4, raffleTickets: 40, perks: "Logo promoted on social media & at event" },
      { id: "silver",  name: "Silver Sponsor",  price: 1000, seats: 2, raffleTickets: 30, perks: "Logo promoted on social media & at event" },
      { id: "bronze",  name: "Bronze Sponsor",  price: 500,  seats: 0, raffleTickets: 20, perks: "Logo or last name promoted on social media & at event" },
    ],
  },

  // ── Raffle Ticket Packages ─────────────────────────────────
  // Set to null to disable raffle sales. Buyers choose how many of each package.
  raffle: {
    packages: [
      { id: "r5",  tickets: 5,  price: 20 },
      { id: "r20", tickets: 20, price: 40 },
      { id: "r50", tickets: 50, price: 100 },
    ],
    maxPerPackage: 20,
  },

  // ── Dip-Off Competition ────────────────────────────────────
  // Set to null to hide competition entry
  dipOff: {
    label: "Enter the Dip-Off Competition",
    description: "Compete with your favorite dip recipe! Choose one or more categories below.",
    note: "After you register, we'll email you more details about the competition.",
    categories: [
      { id: "cheesy",         label: "Cheesy" },
      { id: "veggie-legume",  label: "Veggie / Legume" },
      { id: "salsa-chutney",  label: "Salsa / Chutney" },
    ],
  },

  // ── Optional Donation ──────────────────────────────────────
  // Set to null to hide the donation field on the registration form
  donation: {
    enabled: true,
    label: "Add a Donation",
    description: "Support Shelter in a Storm with an additional gift (optional)",
  },

  // ── Silent Auction ─────────────────────────────────────────
  // Set to null to hide the auction preview section
  auction: {
    apiUrl: "http://auction.shelterinastorm.org/api/items",
    siteUrl: "http://auction.shelterinastorm.org",
    previewCount: 6,
    donateEmail: "audrey@shelterinastorm.org",
  },

  // ── Extra Checkboxes ───────────────────────────────────────
  // Add or remove as needed; empty array = none shown
  extras: [
    { id: "coverFees", label: "Cover Processing Fees", description: "Help us maximize funds for our cause" },
  ],

  // ── Event Schedule ─────────────────────────────────────────
  // Set to null to hide the schedule section
  schedule: [
    { time: "5:00 PM", title: "Doors & Cash Bar Open",   description: "Refreshments available" },
    { time: "6:00 PM", title: "Full Meal & Dip Tasting",  description: "Enjoy dinner and sample the Dip-Off entries" },
    { time: "7:15 PM", title: "Dip-Off Winner Announced", description: "Winner crowned" },
  ],

  // ── Event Highlights ───────────────────────────────────────
  // Set to null to hide the highlights section
  highlights: [
    { title: "Dip-Off Competition", description: "Register to compete with your favorite dip recipe" },
    { title: "Full Meal",           description: "Enjoy a delicious dinner" },
    { title: "Chocolate Fountain",  description: "A sweet treat for everyone" },
    { title: "Cash Bar",            description: "Refreshments available all evening" },
    { title: "Silent Auction",      description: "Bid on unique items and experiences" },
    { title: "Raffles",             description: "Win great prizes" },
    { title: "Live Music",          description: "Live entertainment throughout the evening" },
  ],

  // ── Legal Documents ────────────────────────────────────────
  // Set to null to hide the documents section in the review step
  documents: [
    { label: "Official Prize Rules",  url: "https://app.box.com/s/2c461qyql0cai1lxu4hb2xv21nbh4uxi" },
    { label: "Ticket Refund Policy",  url: "https://app.box.com/s/95tz5hmqf1cptuea1ttd249pteyik2qf" },
  ],
};
