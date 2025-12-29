import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CultureOS",
  description: "The Operating System for Modern Company Culture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "bg-black text-foreground antialiased overflow-x-hidden")}>
        <div className="mx-auto max-w-md min-h-screen bg-background relative shadow-2xl overflow-hidden">
          {/* Mobile container simulation */}
          {children}
        </div>
      </body>
    </html>
  );
}
