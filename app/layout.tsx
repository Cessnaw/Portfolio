import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cess — Firmware Developer",
  description:
    "Firmware developer working on Sharp MFP embedded systems — embedded C/C++, on-device web UI, and certificate management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg font-sans text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}