import type { Metadata } from "next";
import { PageTemplate } from "@/app/(pages)/PageTemplate";
import { pages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const page = pages.technologies;

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/technologies",
  keywords: page.keywords
});

export default function TechnologiesPage() {
  return <PageTemplate page={page} />;
}
