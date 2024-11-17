import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "TCE -  SCOPE - 2025",
  description:
    " International Conference on Sustainable Computingand Optimized Practices for Excellence (Hybrid mode)",
};
export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
