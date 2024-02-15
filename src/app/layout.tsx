import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Next Todo App" };

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-1`}>
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
          <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
