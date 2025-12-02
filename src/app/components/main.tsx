"use client";

import { ReactNode, useEffect } from "react";
import { StringTune } from "@fiddle-digital/string-tune";
import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  useEffect(() => {
    const instance = StringTune.getInstance();
    instance.start(60);
  }, []);

  const pathname = usePathname();
  const hideHeader = ["/proofline/", "/landing/"].includes(pathname);

  return (
    <>
      {!hideHeader && <Header />}

      <main>{children}</main>

      {/* <Footer /> */}
      {!hideHeader && <Footer />}
    </>
  );
}
