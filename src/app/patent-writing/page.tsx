import type { Metadata } from "next";
import { PageTemplate } from "@/app/(pages)/PageTemplate";
import { pages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const page = pages["patent-writing"];

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/patent-writing",
  keywords: page.keywords
});

export default function PatentWritingPage() {
  return <PageTemplate page={page} />;
}
