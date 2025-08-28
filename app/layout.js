import "./globals.css";
import Navbar from "../components/Navbar.js";
 // ✅ adjust path if different

export const metadata = {
  title: "Omradix Solutions",
  description: "Company Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFF7EC] m-0 p-0">
        {/* Navbar stays on top always */}
        <Navbar />

        {/* Page content */}
        <main className="m-0 p-0">{children}</main>
      </body>
    </html>
  );
}
