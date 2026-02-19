import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breeh AI - AI Dental Receptionist",
  description:
    "The AI-powered dental receptionist that never misses a call, books appointments 24/7, and helps practices recover lost revenue.",
};

export const viewport: Viewport = {
  themeColor: "#645CDA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
