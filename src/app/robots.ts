export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://new cityelgouna.vercel.app/sitemap.xml",
  };
}
