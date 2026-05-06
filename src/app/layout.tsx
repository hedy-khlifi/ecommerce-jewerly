// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/provider/ThemeProvider";
import { CartProvider } from "@/provider/CardProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fakhfakh-jewerly.vercel.app"),

  title: "FakhFakh Jewelry",
  description:
    "Pierres précieuses, pierres fines, joaillerie et créations sur-mesure.",

  openGraph: {
    title: "FakhFakh Jewelry - Luxury Tunisian Jewelry",
    description: "Discover exceptional craftsmanship and timeless elegance.",
    url: "https://fakhfakh-jewerly.vercel.app",
    siteName: "FakhFakh Jewelry",
    images: [
      {
        url: "https://fakhfakh-jewerly.vercel.app/profilepic.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Jewelry",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FakhFakh Jewelry",
    description: "Luxury Tunisian handcrafted jewelry",
    images: ["https://fakhfakh-jewerly.vercel.app/profilepic.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
