import { notFound, permanentRedirect } from "next/navigation";
import { getQrRedirect, qrRedirects } from "@/data/scientificEvidence";

type QrRedirectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return qrRedirects.map((redirect) => ({
    slug: redirect.slug
  }));
}

export default async function QrRedirectPage({ params }: QrRedirectPageProps) {
  const { slug } = await params;
  const redirect = getQrRedirect(slug);

  if (!redirect) {
    notFound();
  }

  permanentRedirect(redirect.destination);
}
