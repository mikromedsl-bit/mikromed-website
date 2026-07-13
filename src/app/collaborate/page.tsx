import type { Metadata } from "next";
import { PageTemplate } from "@/app/(pages)/PageTemplate";
import { pages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const page = pages.collaborate;

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/collaborate",
  keywords: page.keywords
});

export default function CollaboratePage() {
  return <PageTemplate page={page} />;
}
