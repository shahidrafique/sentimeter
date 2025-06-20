"use client";
import Image from "next/image";
import Link from "next/link";
import ScaledImage from "../scaled-image";
import Animation from "../animation";

export default function Hero() {
  return (
    <section className="hero section-title">
      <div className="lines">
        <Image
          src="/images/home/lines.svg"
          width={250}
          height={67}
          alt="Laptop"
          className="floating-svg"
        />
      </div>
      <header className="hero-header">
        <div className="container">
          <div className="logo">
            <Image
              src="/images/home/home-logo.svg"
              width={250}
              height={67}
              alt="Laptop"
            />
          </div>
          <div className="button-holder">
            <Link href="#home-form" className="button">
              See sentimeter in action
            </Link>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="col">
          <div className="content">
            <h1>
              <div className="row">
                <span>Unlock</span>
              </div>
              <div className="row">
                <span className="yellow">95%</span>
                <span>
                  of Hidden
                  <br />
                  Customer Insights
                </span>
              </div>
              <div className="row">
                <span>to Drive Immediate</span>
                <span className="yellow">Revenue </span>
              </div>
              <div className="row">
                <span>Gains</span>
              </div>
            </h1>
          </div>
        </div>
        <div className="col">
          <div className="image-holder">
            {/* <ScaledImage
              src="/images/laptop.png"
              width={844}
              height={511}
              alt="Laptop"
              quality={98}
            /> */}

            <Animation />
          </div>
        </div>
      </div>

      <div className="home-nav">
        <nav className="nav nav--home">
          <div className="wrapper">
            <ul>
              <li className="nav__item nav__item--home">
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/text-analysis">AI Text Analytics</Link>
              </li>
              <li className="nav__item">
                <Link href="#">Product</Link>
                <div className="home-sub-nav">
                  <ul>
                    <li>
                      <Link href="/cx">Customer Experience </Link>
                    </li>
                    <li>
                      <Link href="/ex">Employee Experience </Link>
                    </li>
                    <li>
                      <Link href="/recovery-management">
                        CX Strategy & Execution
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav__item">
                <Link href="/pricing-plan">Pricing</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}
