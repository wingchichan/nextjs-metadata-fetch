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

export const metadata = {
  title: "Next,js Blog",
  description: "A simple blog built with Next.js",
  openGraph: {
    title: "Next.js Blog",
    description: "A simple blog built with Next.js",
    type: "website",
    url: "https://next-comments-postgres.vercel.app/",
    images: ["nextjsBlog.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <h1>NextJS Blog</h1>
        {children}
      </body>
    </html>
  );
}
