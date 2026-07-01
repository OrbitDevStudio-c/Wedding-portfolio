import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alica Patel | Designer, Creator & Visionary",
  description: "Step into the world of Alica Patel. A premium editorial portfolio showcasing her values, designs, journeys, and vision for the future. Built with luxury and elegance.",
  keywords: ["Alica Patel", "Portfolio", "Fashion Designer", "Model", "Ravntra Founder", "Luxury Portfolio", "Matrimonial Introduction"],
  authors: [{ name: "Alica Patel" }],
  openGraph: {
    title: "Alica Patel | Designer, Creator & Visionary",
    description: "Step into the world of Alica Patel. A premium editorial portfolio showcasing her values, designs, journeys, and vision for the future.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-base text-text-main noise-overlay selection:bg-primary/20 selection:text-primary">
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
