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
    default: "Team Elsa & Jarvis | Building the Future with Autonomous Agents",
    template: "%s | Team Elsa & Jarvis",
  },
  description:
    "Team Elsa & Jarvis - Innovation in Code & AI. Explore our portfolio of AI-powered projects, tools, and resources.",
  keywords: ["AI", "autonomous agents", "software development", "machine learning", "Next.js"],
  authors: [{ name: "Team Elsa & Jarvis" }],
  openGraph: {
    type: "website",
    siteName: "Team Elsa & Jarvis Portfolio",
    title: "Team Elsa & Jarvis | Building the Future with Autonomous Agents",
    description:
      "Team Elsa & Jarvis - Innovation in Code & AI. Explore our portfolio of AI-powered projects, tools, and resources.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Elsa & Jarvis | Building the Future with Autonomous Agents",
    description: "Innovation in Code & AI. Explore our portfolio of AI-powered projects.",
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
