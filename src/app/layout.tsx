import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "ETH Phoenix — Ethereum, AI & Film Festival | Phoenix, AZ 2026",
  description:
    "Ethereum hackathon, AI film festival, and startup pitch competition — Phoenix, AZ, Sept 25–27, 2026. Get early access to ETH Phoenix.",
  openGraph: {
    title: "ETH Phoenix: Where Ethereum, AI & Film Converge",
    description:
      "Three days in Phoenix. One hackathon, one film festival, one pitch competition. Builders, creators, and investors — September 25–27, 2026.",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
