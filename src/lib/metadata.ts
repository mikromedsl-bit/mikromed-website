import type { Metadata } from "next";
import { globalKeywords, siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = []
}: MetadataInput): Metadata {
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    keywords: Array.from(new Set([...keywords, ...globalKeywords])),
    alternates: {
      canonical: `${siteConfig.url}${path}`
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/mineral-technology-hero.png",
          width: 1200,
          height: 675,
          alt: "Visual astratto di tecnologie minerali"
        }
      ],
      locale: "it_IT",
      type: "website"
    }
  };
}
