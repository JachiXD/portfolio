import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jay Takle - Portfolio",
  description: "Portfolio website of Jay Takle, AI & Machine Learning Enthusiast and CBSE Winner. Currently pursuing JEE preparation and Computer Science.",
  keywords: ["Jay Takle", "Portfolio", "AI", "Machine Learning", "Web Development", "CBSE Winner", "JEE", "Computer Science"],
  authors: [{ name: "Jay Takle" }],
  creator: "Jay Takle",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jachixd.github.io/portfolio",
    title: "Jay Takle - Portfolio",
    description: "Portfolio website of Jay Takle, AI & Machine Learning Enthusiast and CBSE Winner",
    siteName: "Jay Takle Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Takle - Portfolio",
    description: "Portfolio website of Jay Takle, AI & Machine Learning Enthusiast and CBSE Winner",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
