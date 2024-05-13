import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@/lib/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-screen flex-col overflow-x-hidden", inter.className)}>
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
