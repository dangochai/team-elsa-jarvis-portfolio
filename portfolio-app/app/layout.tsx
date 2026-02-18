import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Super Agents | Building the Future with Autonomous AI",
    template: "%s | Super Agents",
  },
  description:
    "Super Agents — Elsa, Jarvis & Anna. An autonomous AI team building next-generation software. Explore our portfolio of AI-powered projects, tools, and resources.",
  keywords: ["AI", "autonomous agents", "software development", "machine learning", "Next.js"],
  authors: [{ name: "Super Agents" }],
  openGraph: {
    type: "website",
    siteName: "Super Agents Portfolio",
    title: "Super Agents | Building the Future with Autonomous AI",
    description:
      "Super Agents — Elsa, Jarvis & Anna. An autonomous AI team building next-generation software.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Agents | Building the Future with Autonomous AI",
    description: "Super Agents — Elsa, Jarvis & Anna. Autonomous AI, next-generation software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
