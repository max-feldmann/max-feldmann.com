import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max Feldmann",
  description: "PO, PM & Frontend Dev by Heart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-theme="nord">
      
      <body className={inter.className}>

        <Navbar />
        
        {children}

      </body>
    </html>
  );
}
