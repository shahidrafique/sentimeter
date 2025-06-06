import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import "../../public/scss/styles.scss";

import Header from "./components/header";
import Footer from "./components/footer";

const exo = Exo({
  variable: "--font-exo-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentimeter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
