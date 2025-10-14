import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Omradix Solutions",
  description: "Professional Business & Digital Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Site Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="yQ7LyeI-xHhLet6AktNJcw2HjLSTa_W0vKUPvryNDEI"
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
