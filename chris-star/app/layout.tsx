import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "700"],
});

const ubuntuSans = Ubuntu_Sans({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ChrisStar",
  description: "Chris Star Portfolio",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${ubuntuSans.variable} antialiased`}
      >
        <NextTopLoader
          color="#4f46e5"
          height={4}
          showSpinner={false}
          crawlSpeed={200}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
