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
  perks: string;
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
  raffle: { singlePrice: number; bundleSize: number; bundlePrice: number; maxPerPerson: number } | null;
  auction: { apiUrl: string; siteUrl: string; previewCount: number } | null;
  extras: { id: string; label: string; description: string }[];
  schedule: { time: string; title: string; description: string }[] | null;
  highlights: { title: string; description: string }[] | null;
  documents: { label: string; url: string }[] | null;
}

export const eventConfig: EventConfigType = {
  // ── Basic Info ──────────────────────────────────────────────
  name: "3rd Annual Fall Fundraiser",
  tagline: "Join us for dinner, bake-off competition, live music, and silent auction!",
  date: "Saturday, November 7, 2026",
  time: "5:00 PM - 8:00 PM",
  location: "Memory Lane Events, 78 Walnut Grove Road, Eldon, MO",
  image: "https://cdn.shelterinastorm.org/images/2025-FallFundraiser-Front-1.png",

  // ── Stripe / Payment API ───────────────────────────────────
  stripeApiUrl: "https://api.shelterinastorm.org/api/v2/OtherProduct",

  // ── Tickets ────────────────────────────────────────────────
  // Set to null to disable ticket sales
  tickets: {
    price: 50,
    label: "Regular Admission",
    description: "Includes dinner, bake-off tasting, and all activities",
    maxPerOrder: 10,
  },

  // ── Sponsor Packages ───────────────────────────────────────
  // Set to null to disable sponsorship options
  sponsors: {
    tiers: [
      { id: "bronze", name: "Bronze Sponsor", price: 500,  seats: 2, perks: "Logo/Name on event materials" },
      { id: "silver", name: "Silver Sponsor", price: 1000, seats: 4, perks: "Logo/Name on event materials" },
      { id: "gold",   name: "Gold Sponsor",   price: 2000, seats: 8, perks: "Premium visibility + Logo/Name" },
    ],
  },

  // ── Drawing / Raffle Entries ───────────────────────────────
  // Set to null to disable raffle entries
  raffle: {
    singlePrice: 10,
    bundleSize: 3,
    bundlePrice: 20,
    maxPerPerson: 50,
  },

  // ── Silent Auction ─────────────────────────────────────────
  // Set to null to hide the auction preview section
  auction: {
    apiUrl: "http://auction.shelterinastorm.org/api/items",
    siteUrl: "http://auction.shelterinastorm.org",
    previewCount: 6,
  },

  // ── Extra Checkboxes ───────────────────────────────────────
  // Add or remove as needed; empty array = none shown
  extras: [
    { id: "bakeOff",   label: "Enter Bake-Off Competition", description: "Bring 48 homemade mini cupcakes or mini cheesecakes" },
    { id: "coverFees", label: "Cover Processing Fees",      description: "Help us maximize funds for our cause" },
  ],

  // ── Event Schedule ─────────────────────────────────────────
  // Set to null to hide the schedule section
  schedule: [
    { time: "5:00 PM", title: "Cash Bar Opens",            description: "Refreshments available" },
    { time: "6:00 PM", title: "Dinner & Bake-off Tasting", description: "Enjoy a delicious meal and vote for your favorites" },
    { time: "7:15 PM", title: "Bake-off Trophy Awarded",   description: "Winner announced" },
  ],

  // ── Event Highlights ───────────────────────────────────────
  // Set to null to hide the highlights section
  highlights: [
    { title: "Dinner",              description: "Enjoy a delicious meal" },
    { title: "Bake-off Competition", description: "Taste amazing baked goods and vote for your favorites" },
    { title: "Live Music",          description: "Live entertainment throughout the evening" },
    { title: "Silent Auction",      description: "Bid on unique items and experiences" },
  ],

  // ── Legal Documents ────────────────────────────────────────
  // Set to null to hide the documents section in the review step
  documents: [
    { label: "Official Prize Rules",  url: "https://app.box.com/s/2c461qyql0cai1lxu4hb2xv21nbh4uxi" },
    { label: "Ticket Refund Policy",  url: "https://app.box.com/s/95tz5hmqf1cptuea1ttd249pteyik2qf" },
  ],
};
