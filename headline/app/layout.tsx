import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const poppins = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headline",
  description: "Agência 360º",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
