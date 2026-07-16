export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://sunnyelgouna.vercel.app/sitemap.xml",
  };
}
