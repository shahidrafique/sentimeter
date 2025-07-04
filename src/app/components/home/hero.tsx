"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Animation from "../animation";
import { StringTune, StringSplit } from "@fiddle-digital/string-tune";

export default function Hero() {
  useEffect(() => {
    const stringTune = StringTune.getInstance();
    stringTune.use(StringSplit);
    // stringTune.use(StringMagnetic);
    stringTune.start(60); // Start with 60 FPS
  }, []);

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
        <div className="col image">
          <div className="image-holder">
            <Animation />
          </div>
        </div>
        <div className="col contents">
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
      </div>

      <div className="home-nav">
        <nav className="nav nav--home">
          <div className="wrapper">
            <ul>
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
