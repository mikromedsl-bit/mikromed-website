import type { Metadata } from "next";
import { PageTemplate } from "@/app/(pages)/PageTemplate";
import { pages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const page = pages.services;

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/services",
  keywords: page.keywords
});

export default function ServicesPage() {
  return <PageTemplate page={page} />;
}
