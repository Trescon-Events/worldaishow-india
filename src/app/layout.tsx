import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "./components/ScrollToTop";
import { AOSInit } from "./components/AOSInit";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "World AI Show: The Enterprise Edition | Mumbai 2027",
  description:
    "The premier cross-functional executive conference addressing the architecture, systems integration, agentic governance, and verifiable ROI of enterprise AI. 20–21 April 2027 · Mumbai, India · 2 Days.",
  icons: {
    icon: "/mumbai/enterprise/favicon.png",
  },
  openGraph: {
    title: "World AI Show: The Enterprise Edition | Mumbai 2027",
    description:
      "Where AI becomes the operating model. Mumbai | 20–21 April 2027 | 2 Days. Organised by Trescon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-space-grotesk bg-bg text-text">
        <AOSInit />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
