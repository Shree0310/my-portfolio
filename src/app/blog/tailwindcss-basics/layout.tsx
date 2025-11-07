import type { Metadata } from "next";
import "../../globals.css";
import { Inter } from "next/font/google";
import NewPortfolio from "@/Components/NewPortfolio";

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
  return <NewPortfolio className="px-10 md:pt-20 md:pb-10 min-h-screen prose">{children}</NewPortfolio>

}
