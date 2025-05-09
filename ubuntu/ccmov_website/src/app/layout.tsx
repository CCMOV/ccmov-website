import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Corrected import path
import Footer from "@/components/Footer"; // Corrected import path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CCMOV - Academia Centro Corpo em Movimento",
  description: "Sua academia de dança e pilates na Vila Mariana. Aqui você se move!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

