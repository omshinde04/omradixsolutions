import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "OmRadix Solutions | Web Development & Digital IT Agency",
  description:
    "OmRadix Solutions offers modern web development, e-commerce, UI/UX, branding, and IT services to help businesses grow digitally.",
  keywords:
    "OmRadix Solutions, web development, IT agency, e-commerce solutions, UI/UX design, business website, digital marketing, branding, responsive websites",
  authors: [{ name: "OmRadix Solutions", url: "https://www.omradixsolutions.in" }],
  creator: "OmRadix Solutions",
  publisher: "OmRadix Solutions",
  metadataBase: new URL("https://www.omradixsolutions.in"),
  openGraph: {
    title: "OmRadix Solutions | Web Development & IT Solutions",
    description:
      "Empowering your business with top-tier web development, e-commerce, and digital solutions.",
    url: "https://www.omradixsolutions.in",
    siteName: "OmRadix Solutions",
    images: [
      {
        url: "https://www.omradixsolutions.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OmRadix Solutions — Web Development & IT Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmRadix Solutions | Web Development & IT Solutions",
    description:
      "OmRadix Solutions builds responsive websites, e-commerce platforms, and provides IT & digital solutions to grow your business.",
    creator: "@OmRadixSolutions",
    images: ["https://www.omradixsolutions.in/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.omradixsolutions.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="yQ7LyeI-xHhLet6AktNJcw2HjLSTa_W0vKUPvryNDEI"
        />

        {/* ✅ Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Robots & Indexing */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* ✅ Theme & Viewport */}
        <meta name="theme-color" content="#4B0082" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />

        {/* ✅ Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OmRadix Solutions",
              url: "https://www.omradixsolutions.in",
              logo: "https://www.omradixsolutions.in/logo.png",
              sameAs: [
                "https://www.facebook.com/omradixsolutions",
                "https://www.instagram.com/omradixsolutions",
                "https://www.linkedin.com/company/omradixsolutions",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9373545169",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Marathi", "Hindi"],
              },
            }),
          }}
        />
      </head>

      <body
        suppressHydrationWarning
        className="bg-gradient-to-b from-[#1A0033] via-[#2E005F] to-[#4B0082] text-white font-sfpro min-h-screen"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
