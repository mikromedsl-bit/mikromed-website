import type { Metadata } from "next";
import { globalKeywords, siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  includeGlobalKeywords?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  includeGlobalKeywords = true
}: MetadataInput): Metadata {
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    keywords: Array.from(new Set(includeGlobalKeywords ? [...keywords, ...globalKeywords] : keywords)),
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
          url: "/images/mikromed-logo.png",
          width: 1200,
          height: 1200,
          alt: "Mikromed Europa S.L. logo"
        }
      ],
      locale: "it_IT",
      type: "website"
    }
  };
}
