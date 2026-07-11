import { CursorEffect } from "@/components/cursor-effect";
import { ThemeProvider } from "@/components/theme-provider";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://salmansadiksiddiquee.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Salman Sadik Siddiquee | Full-Stack Product Engineer",
    template: "%s | Salman Sadik Siddiquee",
  },
  description:
    "Full-stack engineer (React/Next.js, Node, TypeScript) shipping AI products in production: RAG pipelines, SSE streaming, structured outputs, and billing. 1M+ articles generated, 100k+ users, ~$390K processed.",
  keywords: [
    "Full-Stack Engineer",
    "AI Products",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "RAG",
    "LLM",
    "Remote Developer",
    "Bangladesh",
  ],
  authors: [{ name: "Salman Sadik Siddiquee", url: siteUrl }],
  creator: "Salman Sadik Siddiquee",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Salman Sadik Siddiquee",
    title: "Salman Sadik Siddiquee | Full-Stack Product Engineer",
    description:
      "AI products in production: RAG, SSE streaming, structured outputs, billing. 1M+ articles generated, 100k+ users, ~$390K processed.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salman Sadik Siddiquee | Full-Stack Product Engineer",
    description:
      "AI products in production: RAG, SSE streaming, structured outputs, billing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
