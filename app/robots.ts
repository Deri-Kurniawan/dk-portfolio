import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: ["Googlebot", "*"],
      allow: "/",
      disallow: "",
    },
    sitemap: "https://deri.my.id/sitemap.xml",
  };
}
