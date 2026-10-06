import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://kayalachagamparamakudi.com"),
  title: "Kayal Achagam | Official Website",
  description:
    "Official website of Kayal Achagam Centre, Paramakudi — Providing Printing Services, Document Processing, E-Services, Online Payments, Publications, and Tamil Heritage Merchandise.",
  keywords: [
    "Kayal Achagam",
    "Kayal Achagam Centre",
    "Paramakudi Printing",
    "Tamil E-Services",
    "Xerox Paramakudi",
    "PAN Card Passport Paramakudi",
    "Tamil Publications",
    "Paramakudi E-Services"
  ],
  authors: [{ name: "Kayal Achagam Editorial Team" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kayal Achagam | Official Website",
    description: "Official Printing, Publishing & Community E-Services Centre in Paramakudi, Tamil Nadu.",
    url: "https://kayalachagamparamakudi.com",
    siteName: "Kayal Achagam Centre",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
