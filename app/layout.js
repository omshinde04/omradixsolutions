import "./globals.css";

export const metadata = {
  title: "Omradix Solutions",
  description: "Professional Business & Digital Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#1A0033] via-[#2E005F] to-[#4B0082] text-white font-sfpro min-h-screen">
        {children}
      </body>
    </html>
  );
}
