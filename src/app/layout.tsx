import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = createMetadata({
  title: "Mikromed Europa S.L.",
  description:
    "Brevetti, prodotti e collaborazioni per mercati regolati: tecnologie proprietarie, prodotti Mikromed, consulenza regolatoria e supporto tecnico brevettuale."
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
