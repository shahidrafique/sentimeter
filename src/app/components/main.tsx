"use client";
import { ReactNode, useEffect } from "react";
import { StringTune } from "@fiddle-digital/string-tune";
import Header from "./header";
import Footer from "./footer";
import { Exo } from "next/font/google";
const exo = Exo({
  variable: "--font-exo-sans",
  subsets: ["latin"],
});
interface MainProps {
  children: ReactNode;
}
export default function Main({ children }: MainProps) {
  useEffect(() => {
    const instance = StringTune.getInstance();
    instance.start(60); // or your preferred FPS
  }, []);

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
