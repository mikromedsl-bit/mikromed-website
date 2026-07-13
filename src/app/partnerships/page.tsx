import type { Metadata } from "next";
import { PageTemplate } from "@/app/(pages)/PageTemplate";
import { pages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const page = pages.partnerships;

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/partnerships",
  keywords: page.keywords
});

export default function PartnershipsPage() {
  return <PageTemplate page={page} />;
}
