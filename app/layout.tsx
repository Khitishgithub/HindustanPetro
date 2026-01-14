import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "./Components/Footer";
import NavMenu from "./Components/HeaderSection/NavMenu";
import TopBar from "./Components/TopBar";

const montserrat = localFont({
  src: [
    {
      path: "../public/font/Montserrat-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Montserrat-Medium.ttf",
      weight: "700",
      style: "normal",
    },
   
  ],
  variable: "--font-montserrat",
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
        className={`${montserrat.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="fixed top-0 left-0 w-full z-50 mb-4" >
          <TopBar />
          <NavMenu />
        </header>

        <main className="flex-1 pt-40 ">{children}</main>

        <footer className="mt-auto">
          <Footer />
        </footer>

        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
