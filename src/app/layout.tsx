import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bestapis.app — The App Store for AI Agents",
  description:
    "Discover the Top 100 APIs of 2026. The ultimate directory for AI agents, fintech, dev tools, and data platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col text-slate-100">{children}</body>
    </html>
  );
}
