import { caseStudies } from "@/lib/data";
import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://salmansadiksiddiquee.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((cs) => ({
      url: `${siteUrl}/work/${cs.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
