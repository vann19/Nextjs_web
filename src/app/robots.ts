import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login/"],
    },
    sitemap: "https://Fansyaode19.com/sitemap.xml",
  };
}
