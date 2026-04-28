import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS_NAME, BUSINESS_TAGLINE } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: BUSINESS_NAME,
  description: BUSINESS_TAGLINE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen bg-gray-50 text-gray-900 antialiased`}>
        <div className="min-h-screen bg-white flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
