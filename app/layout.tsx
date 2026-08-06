import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { auth } from "@/auth";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "MealCraft",
  description: "MealCraft Home Page",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AuthProvider session={session}>
          <Header session={session} />

          <main className="flex-1">{children}</main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}