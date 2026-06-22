import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";
import WhatsAppTracker from "@/components/analytics/WhatsAppTracker";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";
import { sitewideSchemas } from "@/lib/schema";

export const metadata = buildMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2T3DRDJGJP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2T3DRDJGJP');
          `}
        </Script>
        <WhatsAppTracker />
        <JsonLd data={sitewideSchemas()} />
        <Header />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
