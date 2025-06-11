"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <>
      {pathname === "/" ? null : (
        <header className="header">
          <div className="container">
            <div className="header-left">
              <Link href="/" className="logo">
                <Image
                  src="/images/logo-icon.svg"
                  width={56}
                  height={56}
                  alt="Sentimeter"
                />
                <b>Senti</b>meter
              </Link>
            </div>
            <div className="header-right">
              <nav className="nav">
                <ul>
                  <li className="nav__item">
                    <Link href="/solution">Solutions</Link>
                  </li>
                  <li className="nav__item">
                    <Link href="/cx">Product</Link>
                  </li>
                  <li className="nav__item">
                    <Link href="/solution">Pricing</Link>
                  </li>
                  <li className="nav__item">
                    <Link href="/text-analysis">Customers</Link>
                  </li>
                  <li className="nav__item">
                    <Link href="/recovery-management">Resources</Link>
                  </li>
                </ul>
              </nav>
              <Link href="/demo-form" className="button">
                Request for Demo
              </Link>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
