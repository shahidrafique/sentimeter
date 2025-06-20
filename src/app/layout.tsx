import type { Metadata } from "next";
import "./globals.css";
import "../../public/scss/styles.scss";
import Main from "./components/main";
import { Exo } from "next/font/google";
const exo = Exo({
  variable: "--font-exo-sans",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no",
};

export const metadata: Metadata = {
  title:
    "Sentimeter.io - Customer Experience Management Software &amp; Solutions",
  description:
    "Sentimeter.io - Customer Experience Management Software &amp; Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo.variable} font-sans`}>
        <Main>{children}</Main>;
      </body>
    </html>
  );
}
