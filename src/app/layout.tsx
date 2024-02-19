import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from "./components/navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Next Todo App" };

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="bg-slate-950">
      <body
        className={`${inter.className} text-slate-100 container mx-auto p-1`}>
        <Providers>
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
          <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
            <Navbar />
            {children}
            <SpeedInsights />
          </div>
        </main>
        <Toaster position="top-right"/>
        </Providers>
      </body>
    </html>
  );
}
