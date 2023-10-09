export const FOOTER_DATA = {
  title: "Modsen Currency Tracker",
  quote:
    "Since then, the company has grown organically to. Starsup is the world's largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.",
  footerSections: [
    {
      title: "General",
      links: ["Market", "Service"],
    },
    {
      title: "Product",
      links: ["Sparks", "Snaps"],
    },
    {
      title: "Community",
      links: ["Ideas", "Streams"],
    },
  ],
  get copyright() {
    const currentYear = new Date().getFullYear();
    return `Startsup © ${currentYear}-${currentYear + 1}, All Rights Reserved`;
  },
};
