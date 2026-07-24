import type { MetadataRoute } from "next";
import { evidenceSectors } from "@/data/scientificEvidence";
import { siteConfig } from "@/data/site";

const staticRoutes = [
  "",
  "/patents",
  "/evidenze-scientifiche",
  "/applications",
  "/collaborate",
  "/services",
  "/regulatory-claims",
  "/product-development",
  "/patent-writing",
  "/partnerships",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const evidenceSectorRoutes = evidenceSectors.map(
    (sector) => `/evidenze-scientifiche/${sector.slug}`
  );

  return [...staticRoutes, ...evidenceSectorRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/evidenze-scientifiche") ? 0.8 : 0.7
  }));
}
