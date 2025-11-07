import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar/Navbar";
import { ViewTransitions } from 'next-view-transitions'


const inter = Inter({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] },);

export const metadata: Metadata = {
  title: "Portfolio website template",
  description: "A perfect portfolio website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} antialiased bg-neutral-200 dark:bg-neutral-700`}
        >
          <Navbar/>
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
