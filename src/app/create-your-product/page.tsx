import type { Metadata } from "next";
import { PageTemplate } from "@/app/(pages)/PageTemplate";
import { pages } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const page = pages["create-your-product"];

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/create-your-product",
  keywords: page.keywords
});

export default function CreateYourProductPage() {
  return <PageTemplate page={page} />;
}
