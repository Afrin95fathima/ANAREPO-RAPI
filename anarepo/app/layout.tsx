import type { Metadata } from "next";
import { Geist as GeistSans, Geist_Mono as GeistMono } from "next/font/google";
import { initializeServices } from './utils/init';
import "./globals.css";

// Initialize services on the server side only
if (typeof window === 'undefined') {
  initializeServices().catch(console.error);
}

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANAREPO - AI-Powered GitHub Repository Analysis",
  description: "Evaluate and analyze GitHub repositories with Rapy, your AI assistant for open-source intelligence.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-gray-900">
        {children}
      </body>
    </html>
  );
}
