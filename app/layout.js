import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; // ✅ Correct import path

export const metadata = {
  title: "Omradix Solutions",
  description: "Professional Business & Digital Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-gradient-to-b from-[#1A0033] via-[#2E005F] to-[#4B0082] text-white font-sfpro min-h-screen"
      >
        {children}

        {/* ✅ Add Vercel Analytics tracking here */}
        <Analytics />
      </body>
    </html>
  );
}
