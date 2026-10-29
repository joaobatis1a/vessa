import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "VESSA — Bonita até do avesso",
  description:
    "Roupas leves de costura aparente, feitas à mão em pequenas tiragens. Conheça a coleção VESSA.",
  openGraph: {
    title: "VESSA — Bonita até do avesso",
    description:
      "Roupas leves de costura aparente, feitas à mão em pequenas tiragens. Conheça a coleção VESSA.",
    url: siteConfig.siteUrl,
    siteName: "VESSA",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VESSA — Bonita até do avesso",
    description:
      "Roupas leves de costura aparente, feitas à mão em pequenas tiragens.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    slogan: siteConfig.tagline,
  };

  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
