import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";
import { sitewideSchemas } from "@/lib/schema";

export const metadata = buildMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.language}>
      <body className="pb-20 sm:pb-0">
        <JsonLd data={sitewideSchemas()} />
        <Header />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
