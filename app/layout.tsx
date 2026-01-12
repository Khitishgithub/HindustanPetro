import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "./Components/Footer";
import NavMenu from "./Components/HeaderSection/NavMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hindustan Petro By Products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="fixed top-0 left-0 w-full z-50">
          <NavMenu />
        </header>

        <main className="flex-1 pt-20">{children}</main>

        <footer className="mt-auto">
          <Footer />
        </footer>

        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
