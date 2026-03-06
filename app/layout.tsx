import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaweb — Binnenkort beschikbaar",
  description:
    "Jaweb is een software development agency in opbouw. We bouwen digitale producten en oplossingen op maat. Neem alvast contact op via e-mail of telefoon.",
  keywords: ["Jaweb", "software development", "software agency", "webdesign", "webdevelopment", "digitale producten", "op maat", "België"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    title: "Jaweb — Binnenkort beschikbaar",
    description:
      "Jaweb is een software development agency in opbouw. We bouwen digitale producten en oplossingen op maat. Neem alvast contact op via e-mail of telefoon.",
    siteName: "Jaweb",
  },
  twitter: {
    card: "summary",
    title: "Jaweb — Binnenkort beschikbaar",
    description:
      "Jaweb is een software development agency in opbouw. We bouwen digitale producten en oplossingen op maat. Neem alvast contact op via e-mail of telefoon.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
