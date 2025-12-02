import type { Metadata } from "next";
import "./globals.css";
import "../../public/scss/styles.scss";
import RecaptchaScript from "./components/recaptcha-script";
import Main from "./components/main";
import { Exo, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose what you need
});

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
        <RecaptchaScript />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
