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

export const metadata: Metadata = {
  title: "Salman Sadik Siddiquee | Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack with expertise in building scalable web applications using React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "Web Development",
  ],
  authors: [{ name: "Salman Sadik Siddiquee" }],
  openGraph: {
    title: "Salman Sadik Siddiquee | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack",
    type: "website",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
