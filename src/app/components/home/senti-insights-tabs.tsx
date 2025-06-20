"use client";

import React, { useState } from "react";
import Link from "next/link";
import ScaledImage from "../scaled-image";

const SentiInsightsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"sentiCxTab" | "sentiExTab">(
    "sentiCxTab"
  );

  return (
    <section className="section senti-insights-tabs">
      <div className="container">
        <div className="section-header">
          <div className="tab-buttons">
            <button
              className={activeTab === "sentiCxTab" ? "active" : ""}
              onClick={() => setActiveTab("sentiCxTab")}
            >
              <ScaledImage
                src={"/images/senti-cx-white.svg"}
                width={193}
                height={95}
                alt="Senticx logo"
                min={100}
              />
            </button>
            <span className="vertical-bar" />
            <button
              className={activeTab === "sentiExTab" ? "active" : ""}
              onClick={() => setActiveTab("sentiExTab")}
            >
              <ScaledImage
                src={"/images/senti-ex-white.svg"}
                width={193}
                height={95}
                alt="Sentiex logo"
                min={100}
              />
            </button>
          </div>
          <Link href="/demo-form">
            Explore More
            <ScaledImage
              src={"/images/arrow-right-white.svg"}
              width={16}
              height={15}
              alt="arrow right"
            />
          </Link>
        </div>

        {activeTab === "sentiCxTab" && (
          <div className="tab">
            <section className="senticx-slider">
              <input
                type="radio"
                name="cxSlider"
                id="cxSlide1"
                defaultChecked
              />
              <input type="radio" name="cxSlider" id="cxSlide2" />
              <input type="radio" name="cxSlider" id="cxSlide3" />
              <input type="radio" name="cxSlider" id="cxSlide4" />
              <div className="slides">
                <div className="slide" id="cx-s1">
                  <div className="slide-content">
                    <div className="content-left">
                      <p>Track NPS, feedback, and essential KPIs instantly.</p>
                    </div>
                    <ScaledImage
                      src={"/images/senti-insights/cx-overview.png"}
                      width={1092}
                      height={737}
                      alt="Senticx dashboard insights"
                    />
                    <div className="content-right">
                      <p>
                        Analyze feedback segments and key satisfaction metrics
                        for actionable customer insights.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide" id="cx-s2">
                  <div className="slide-content">
                    <div className="content-left"> </div>
                    <ScaledImage
                      src={"/images/senti-insights/cx-comparison.png"}
                      width={1092}
                      height={737}
                      alt="Senticx dashboard insights"
                    />
                    <div className="content-right">
                      <p>
                        Gain insights into key performance metrics and top
                        feedback themes for a quick overview of overall
                        strengths and improvement areas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide" id="cx-s3">
                  <div className="slide-content">
                    <div className="content-left">
                      <p>
                        Easily review customer comments, contact details, and
                        transaction history to categorize concerns and follow up
                        on unresolved feedback.
                      </p>
                    </div>
                    <ScaledImage
                      src={"/images/senti-insights/cx-customer-recovery.png"}
                      width={1092}
                      height={737}
                      alt="Senticx dashboard insights"
                    />
                    <div className="content-right"> </div>
                  </div>
                </div>
                <div className="slide" id="cx-s4">
                  <div className="slide-content">
                    <div className="content-left">
                      <p>
                        Track customer sentiment over time, highlighting trends
                        across key areas like product availability, pricing, and
                        service.
                      </p>
                    </div>
                    <ScaledImage
                      src={"/images/senti-insights/cx-text-analysis.png"}
                      width={1092}
                      height={737}
                      alt="Senticx dashboard insights"
                    />
                    <div className="content-right">
                      <p>
                        Identify top concerns and appreciation points to drive
                        targeted actions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="nav">
                <li>
                  <label htmlFor="cxSlide1">
                    <div className="number">01</div>
                    <div className="text">Overview</div>
                  </label>
                </li>
                <li>
                  <label htmlFor="cxSlide2">
                    <div className="number">02</div>
                    <div className="text">Comparison</div>
                  </label>
                </li>
                <li>
                  <label htmlFor="cxSlide3">
                    <div className="number">03</div>
                    <div className="text">Customer Recovery</div>
                  </label>
                </li>
                <li>
                  <label htmlFor="cxSlide4">
                    <div className="number">04</div>
                    <div className="text">Text Analysis</div>
                  </label>
                </li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === "sentiExTab" && (
          <div className="tab">
            <section className="sentiex-slider">
              <input
                type="radio"
                name="exSlider"
                id="exSlide1"
                defaultChecked
              />
              <input type="radio" name="exSlider" id="exSlide2" />
              <input type="radio" name="exSlider" id="exSlide3" />
              <div className="slides">
                <div className="slide" id="ex-s1">
                  <div className="slide-content">
                    <div className="content-left">
                      <p>
                        Turn employee feedback into real action with our
                        people-first experience platform.
                      </p>
                    </div>
                    <ScaledImage
                      src={"/images/senti-insights/ex-satisfaction.png"}
                      width={1092}
                      height={737}
                      alt="Senticx dashboard insights"
                    />
                    <div className="content-right">
                      <p>
                        From quick pulse checks to in-depth iOS reviews, SentiEX
                        delivers the insights you need—without the hassle.
                      </p>

                      <p>
                        Our intuitive tools simplify feedback, helping you
                        create polished reports and drive meaningful change.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide" id="ex-s2">
                  <div className="slide-content">
                    <div className="content-left">
                      <p>
                        Discover how each department performs in communication,
                        leadership, and trust.
                      </p>
                    </div>
                    <ScaledImage
                      src={"/images/senti-insights/ex-department.png"}
                      width={1092}
                      height={737}
                      alt="Senticx dashboard insights"
                    />
                    <div className="content-right">
                      <p>
                        SentiEX highlights key strengths and areas for growth
                        with easy-to-read scores—turning employee feedback into
                        clear, actionable insights.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide" id="ex-s3">
                  <div className="slide-content">
                    <div className="content-left">
                      <p>
                        Track store-level performance across key metrics like
                        communication, respect, and leadership.
                      </p>
                    </div>
                    <ScaledImage
                      src={"/images/senti-insights/ex-store.png"}
                      width={1092}
                      height={737}
                      alt="Senticx dashboard insights"
                    />
                    <div className="content-right">
                      <p>
                        SentiEX empowers regional managers with real-time
                        insights to boost team morale and create a consistent
                        employee experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="nav">
                <li>
                  <label htmlFor="exSlide1">
                    <div className="number">01</div>
                    <div className="text">Satisfaction</div>
                  </label>
                </li>
                <li>
                  <label htmlFor="exSlide2">
                    <div className="number">02</div>
                    <div className="text">Department</div>
                  </label>
                </li>
                <li>
                  <label htmlFor="exSlide3">
                    <div className="number">03</div>
                    <div className="text">Store</div>
                  </label>
                </li>
              </ul>
            </section>
          </div>
        )}
      </div>
    </section>
  );
};

export default SentiInsightsTabs;
