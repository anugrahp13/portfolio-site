import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Anugrah Prastyo - Frontend Web Developer",
    template: "%s - Anugrah Prastyo",
  },
  description:
    "Portfolio profesional dari Anugrah Prastyo, menampilkan karya terbaik dalam web development, front end, dan proyek kreatif lainnya.",
  keywords: [
    "portfolio",
    "karya kreatif",
    "Anugrah Prastyo",
    "proyek kreatif",
    "web development",
    "frontend",
    "frontend developer",
    "react developer",
    "next.js developer",
  ],
  authors: [{ name: "Anugrah Prastyo", url: "https://anugrahprastyo.my.id/" }],
  creator: "Anugrah Prastyo",
  openGraph: {
    title: "Anugrah Prastyo - Frontend Web Developer",
    description:
      "Lihat karya terbaik dari Anugrah Prastyo, seorang Frontend Web Developer yang ahli dalam web development dan proyek kreatif.",
    url: "https://anugrahprastyo.my.id/",
    siteName: "Anugrah Prastyo Portfolio",
    images: [
      {
        url: "/image/avatar/avatar.png", // Path relatif ke folder public
        width: 1200,
        height: 630,
        alt: "Anugrah Prastyo Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anugrah Prastyo - Frontend Web Developer",
    description:
      "Lihat karya terbaik dari Anugrah Prastyo, seorang Frontend Web Developer yang ahli dalam web development dan proyek kreatif.",
    images: ["/image/avatar/avatar.png"], // Path relatif ke folder public
    site: "@your_twitter_handle", // Ganti dengan handle Twitter kamu, jika ada
    creator: "@your_twitter_handle", // Ganti dengan handle Twitter kamu, jika ada
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "image/avatar/favicon.png", // Favicon path relatif ke folder public
    shortcut: "/image/avatar/favicon.png",
    apple: "/image/avatar/favicon.png", // Jika ada ikon untuk Apple
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-800 dark:bg-slate-900 dark:text-white transition-colors`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
