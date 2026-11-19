import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "CleanSpace",
  tagline: "Regular and deep home cleaning in Toronto, Vaughan and Richmond Hill.",
  category: "Home cleaning",
  schemaType: "LocalBusiness",
  area: "Toronto, Vaughan and Richmond Hill, ON",
  siteUrl: "https://clean-space-ca.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#9854fe" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Home cleaning in the GTA",
    headline: "Regular and deep cleans for houses, apartments and condos",
    subhead: "CleanSpace is a home cleaning service led by Tetiana, also called Tanya, offering regular and deep cleans for houses, apartments and condos in Toronto, Vaughan and Richmond Hill, one time or recurring. Send an Instagram message to ask about availability.",
    images: [
      { src: "/images/post-1.jpg", alt: "A before and after of a cleaned kitchen sink by CleanSpace", width: 1080, height: 1080 },
      { src: "/images/post-2.jpg", alt: "A before and after of a cleaned bathtub by CleanSpace", width: 1080, height: 1080 },
      { src: "/images/post-3.jpg", alt: "A before and after cleaning result from CleanSpace", width: 1080, height: 1080 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Regular and deep cleaning",
    "Houses, apartments and condos",
    "Toronto, Vaughan and Richmond Hill",
    "Ukrainian, English and Russian",
  ],

  about: {
    title: "Welcome to CleanSpace",
    body: [
      "CleanSpace is a home cleaning service led by Tetiana, also called Tanya. A posted introduction says she moved to Canada two years ago, began working in cleaning almost right away, and now has two years of professional cleaning experience. Services include regular cleaning and deep cleaning for houses, apartments and condos, as a one-time visit or on a recurring schedule.",
      "The work area includes Toronto, Vaughan and Richmond Hill. Languages spoken are Ukrainian, English and Russian, as posted on the Instagram bio. Send an Instagram message to ask about availability.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A before and after of a cleaned kitchen sink by CleanSpace", width: 1080, height: 1080 },
  },

  menu: {
    label: "Services",
    title: "How we can help",
    variant: "list",
    showPrices: false,
    priceNote: "Send an Instagram message for availability and pricing.",
    groups: [
      {
        title: "Cleaning",
        items: [
          { name: "Regular cleaning" },
          { name: "Deep cleaning" },
          { name: "Houses, apartments and condos" },
          { name: "One-time or recurring cleans" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1080, alt: "A before and after of a cleaned kitchen sink by CleanSpace", caption: "A kitchen sink, before and after", href: "https://www.instagram.com/p/DfltExSRe7N/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1080, alt: "A before and after of a cleaned bathtub by CleanSpace", caption: "A bathtub, before and after", href: "https://www.instagram.com/p/Dfc1w9mR-5I/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1080, alt: "A before and after cleaning result from CleanSpace", caption: "Before and after", href: "https://www.instagram.com/p/DfRAz4iOMmo/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1080, alt: "A before and after home cleaning by CleanSpace", caption: "A home clean, before and after", href: "https://www.instagram.com/p/DedVs6It3IB/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "__clean.space__",
    embeds: ["https://www.instagram.com/p/Dfc1w9mR-5I/", "https://www.instagram.com/p/DfRAz4iOMmo/", "https://www.instagram.com/p/DedVs6It3IB/"],
  },

  order: {
    label: "How to book",
    title: "Ask about availability",
    intro: "Send an Instagram message to ask about availability. CleanSpace serves Toronto, Vaughan and Richmond Hill.",
    headerCtaLabel: "Book now",
    dmMessage: "Hi CleanSpace! I would like to book a cleaning.\nArea:\nHome type:\nRegular or deep clean:\nPreferred day:",
    links: [
      { label: "Message on Instagram", href: "https://ig.me/m/__clean.space__" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send an Instagram message to ask about availability." },
    { q: "What areas do you serve?", a: "Toronto, Vaughan and Richmond Hill." },
    { q: "What kinds of cleaning do you offer?", a: "Regular cleaning and deep cleaning for houses, apartments and condos, as a one-time visit or on a recurring schedule." },
    { q: "What languages do you speak?", a: "Ukrainian, English and Russian, as posted on the Instagram bio." },
  ],

  contact: {
    title: "Contact",
    area: "Toronto, Vaughan and Richmond Hill, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/__clean.space__/" },
    ],
  },

  seo: {
    title: "CleanSpace | Home cleaning in Toronto, Vaughan and Richmond Hill",
    description: "Regular and deep home cleaning for houses, apartments and condos in Toronto, Vaughan and Richmond Hill, one time or recurring. Book by Instagram DM.",
    keywords: ["CleanSpace", "home cleaning Toronto", "cleaning Vaughan", "deep cleaning Richmond Hill"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
