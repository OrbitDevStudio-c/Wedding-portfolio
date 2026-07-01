import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import LoadingScreen from "@/components/LoadingScreen";
import NoiseOverlay from "@/components/NoiseOverlay";

export const metadata: Metadata = {
  title: "Alica Patel | Premium Fashion Portfolio",
  description: "A polished feminine portfolio for Alica Patel, fashion designer, model, and CEO of Ravntra.",
  openGraph: {
    title: "Alica Patel | Premium Fashion Portfolio",
    description: "A polished feminine portfolio for Alica Patel, fashion designer, model, and CEO of Ravntra.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased selection:bg-pink selection:text-black">
        <ThemeProvider>
          <LenisProvider>
            <LoadingScreen />
            <NoiseOverlay />
            <CustomCursor />
            <ParticleBackground />
            <main className="flex-grow z-10 relative">
              {children}
            </main>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
