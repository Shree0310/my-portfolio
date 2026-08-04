import type { Metadata } from "next";
import "./globals.css";
import { Inter, Signika } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { ViewTransitions } from 'next-view-transitions'
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';
import LenisProvider from "@/components/LenisProvider";



const inter = Inter({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] },);

export const metadata: Metadata = {
  title: "Portfolio website template",
  description: "A perfect portfolio website ",
};

export const signika = Signika({
  subsets: ["latin"],
  variable: "--font-signika"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} ${signika.variable} antialiased bg-neutral-200 dark:bg-neutral-700 [--pattern-fg:var(--color-neutral-900)]/5`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <LenisProvider>
              <main className="bg-background text-foreground">
                  <Toaster />
                  <Navbar/>
                  {children}
              </main>
            </LenisProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
