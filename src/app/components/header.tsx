"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ScaledImage from "./scaled-image";
export default function Header() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("customer");
  return (
    <>
      {pathname === "/" ? null : (
        <header className="header">
          <div className="container">
            <div className="header-left">
              <Link href="/" className="logo">
                <ScaledImage
                  src="/images/logo-icon.svg"
                  width={56}
                  height={56}
                  alt="Sentimeter"
                  min={30}
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
                    <div className="sub-nav">
                      <div className="container">
                        <div className="left-tabs">
                          <a
                            href="#"
                            className={activeTab === "customer" ? "active" : ""}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveTab("customer");
                            }}
                          >
                            Customer Experience
                          </a>
                          <a
                            href="#"
                            className={activeTab === "employee" ? "active" : ""}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveTab("employee");
                            }}
                          >
                            Employee Experience
                          </a>
                        </div>

                        <div className="right-nav">
                          <nav className="nav-links">
                            {/* Employee Experience menu */}
                            {activeTab === "employee" && (
                              <div className="sentiex">
                                <div className="logo">
                                  <Image
                                    src="/images/senti-ex.svg"
                                    width={237}
                                    height={88}
                                    alt="senti ex"
                                  />
                                </div>
                                <ul>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Explore SentiEX
                                      </div>
                                      <div className="link-sub-title">
                                        Revolutionize employee engagement
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Make Feedback Fearless and Effortless
                                      </div>
                                      <div className="link-sub-title">
                                        Create a safe & seamless feedback
                                        culture
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Understand employee relationship
                                      </div>
                                      <div className="link-sub-title">
                                        Decode feedback into insights
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Actionable Insights
                                      </div>
                                      <div className="link-sub-title">
                                        Turn Data into Actionable Insights
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Turn insights into action
                                      </div>
                                      <div className="link-sub-title">
                                        Ensure your organization with actionable
                                        insights
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">Pricing</div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            )}

                            {/* Customer Experience menu */}
                            {activeTab === "customer" && (
                              <div className="senticx">
                                <div className="logo">
                                  <Image
                                    src="/images/senti-ex.svg"
                                    width={237}
                                    height={88}
                                    alt="senti ex"
                                  />
                                </div>
                                <ul>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Explore SentiCX
                                      </div>
                                      <div className="link-sub-title">
                                        CX at the core of Retention & growth
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Map Customer Journey with precision
                                      </div>
                                      <div className="link-sub-title">
                                        Build a strong foundation
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Capture Insights Everywhere
                                      </div>
                                      <div className="link-sub-title">
                                        Collect Feedback that matters
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Actionable Insights
                                      </div>
                                      <div className="link-sub-title">
                                        Turn Data into Actionable Insights
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Take Meaningful Action to Improve CX
                                      </div>
                                      <div className="link-sub-title">
                                        Improve Experience wih smarter ctions
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Report and Iterte
                                      </div>
                                      <div className="link-sub-title">
                                        Drive continuous improvement
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Net Promoter Score (NPs)
                                      </div>
                                      <div className="link-sub-title">
                                        CX at the core of Retention & growth
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Recovery Management
                                      </div>
                                      <div className="link-sub-title">
                                        Empower your recover strategy
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="link-title">
                                        Text Analysis
                                      </div>
                                      <div className="link-sub-title">
                                        Smarter Text Analysis for Smarter
                                        Business Decisions
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </nav>
                        </div>
                      </div>
                    </div>
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
