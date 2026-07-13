import type { Metadata } from "next";
import { PageTemplate } from "@/app/(pages)/PageTemplate";
import { pages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const page = pages["product-development"];

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/product-development",
  keywords: page.keywords
});

export default function ProductDevelopmentPage() {
  return <PageTemplate page={page} />;
}
