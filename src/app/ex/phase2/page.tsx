"use client";

import { useState } from "react";
import Image from "next/image";
import Clients from "../../components/clients";
import Link from "next/link";
export default function page() {
  const [activeStage, setActiveStage] = useState(0);
  return (
    <article className="ex-phase2">
      {/* Sub Header */}
      <section className="sub-header">
        <div className="container">
          <div className="sub-header-left">
            <Image
              src="/images/senti-ex.svg"
              width={240}
              height={96}
              alt="senti ex"
            />
          </div>
          <div className="sub-header-right">Back to SentiEX</div>
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <div className="container">
          <div className="col">
            <div className="content">
              <h2 className="title">
                Understand Employee <span>Relationships</span>
              </h2>
              <p>
                Transform the way you understand and support your employees’
                journey to success. At Sentimeter, we guide you in crafting
                tailored employee lifecycle maps that align with your
                organization’s unique culture and processes. This isn’t just a
                map; it’s a strategic framework for uncovering opportunities,
                addressing pain points, and elevating employee experience (EX)
                at every stage.
              </p>
              <Link href="#" className="button button--outline">
                Request a Demo
              </Link>
            </div>
          </div>
          <div className="col">
            <Image
              src="/images/ex/phase2/ex-phase2-header.svg"
              width={515}
              height={515}
              alt="senti ex"
            />
          </div>
        </div>
      </section>

      {/* Clients */}
      <Clients />

      {/* Lifecycle */}
      <section className="section has-bg green lifecycle">
        <div className="card">
          <div className="container">
            <section className="section-header green">
              <h2>
                Why Start with Employee <span>Lifecycle Mapping?</span>
              </h2>
            </section>
          </div>
          <div className="container">
            <div className="features">
              <div className="cards">
                {/* Col Start */}
                <section className="card">
                  <div className="icon">
                    <Image
                      src={"/images/ex/phase2/lifecycle-icon-1.svg"}
                      width={72}
                      height={72}
                      alt="Senti CX"
                    />
                  </div>
                  <div className="card-content">
                    <h4>See the Whole Picture</h4>
                    <p>
                      Understand how employees interact with your organization
                      from recruitment to offboarding.
                    </p>
                  </div>
                </section>
                {/* Col Start */}

                <section className="card  red">
                  <div className="icon">
                    <Image
                      src={"/images/ex/phase2/lifecycle-icon-2.svg"}
                      width={72}
                      height={72}
                      alt="Senti CX"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Identify Key Moments</h4>
                    <p>
                      Pinpoint critical milestones, friction points, and
                      opportunities for meaningful engagement.
                    </p>
                  </div>
                </section>
                {/* Col Start */}
                <section className="card yellow">
                  <div className="icon">
                    <Image
                      src={"/images/ex/phase2/lifecycle-icon-3.svg"}
                      width={72}
                      height={72}
                      alt="Senti CX"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Drive Strategic Action</h4>
                    <p>
                      Use insights to craft targeted strategies that enhance
                      retention, satisfaction, and loyalty.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section has-bg blue approach">
        <div className="card">
          <div className="container">
            <section className="section-header green">
              <h2>
                The Lifecycle-First Approach: <span>4 Stages</span> to Success
              </h2>
            </section>
          </div>
          <div className="container">
            <div className="progress-bar">
              {["Stage 1", "Stage 2", "Stage 3", "Stage 4"].map(
                (label, index) => (
                  <div
                    key={index}
                    className={`${"step"} ${
                      activeStage === index ? "active" : ""
                    }`}
                    onClick={() => setActiveStage(index)}
                  >
                    {label}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="container">
            {activeStage === 0 && (
              <section className="stage stage1">
                <div className="col">
                  <h3>Understand the Employee Lifecycle</h3>
                  <p>
                    Lay the foundation for an impactful employee experience by
                    defining and visualizing the journey.
                  </p>
                  <Link href={"#"} className="button button--tertiary">
                    Explore More
                  </Link>
                </div>
                <div className="col">
                  <Image
                    src={"/images/ex/phase2/stage1-illustration.svg"}
                    width={1050}
                    height={574}
                    alt="Stage 1"
                  />
                </div>
              </section>
            )}
            {activeStage === 1 && (
              <section className="stage stage2">
                {" "}
                <div className="col">
                  <h3>Analyze Feedback Architecture</h3>
                  <p>
                    Evaluate the current feedback ecosystem to understand where
                    insights are being captured.
                  </p>
                  <Link href={"#"} className="button button--tertiary">
                    Explore More
                  </Link>
                </div>
                <div className="col">
                  <Image
                    src={"/images/ex/phase2/stage2-illustration.svg"}
                    width={1050}
                    height={574}
                    alt="Stage 1"
                  />
                </div>
              </section>
            )}
            {activeStage === 2 && (
              <section className="stage stage3">
                {" "}
                <div className="col">
                  <h3>Close Gaps and Prioritize Actions</h3>
                  <p>
                    Bridge the gaps and focus on high-impact areas for
                    measurable improvements.
                  </p>
                  <Link href={"#"} className="button button--tertiary">
                    Explore More
                  </Link>
                </div>
                <div className="col">
                  <Image
                    src={"/images/ex/phase2/stage3-illustration.svg"}
                    width={1050}
                    height={574}
                    alt="Stage 1"
                  />
                </div>
              </section>
            )}
            {activeStage === 3 && (
              <section className="stage stage4">
                {" "}
                <div className="col">
                  <h3>Validate and Iterate Continuously</h3>
                  <p>
                    Ensure strategies are aligned and refine them over time.
                  </p>
                  <Link href={"#"} className="button button--tertiary">
                    Explore More
                  </Link>
                </div>
                <div className="col">
                  <Image
                    src={"/images/ex/phase2/stage4-illustration.svg"}
                    width={1050}
                    height={574}
                    alt="Stage 1"
                  />
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      {/* Transform Employee */}
      <section className="section has-bg mapping">
        <div className="card">
          <div className="container">
            <div className="content">
              <Image
                src={"/images/ex/phase2/mapping-icon.png"}
                width={124}
                height={124}
                alt="core pillars"
              />
              <section className="section-header yellow">
                <h2>
                  Why <span>Lifecycle</span> Mapping Matters
                </h2>
                <p>
                  Employee lifecycle mapping is more than just a framework—it’s
                  a foundation for continuous improvement. By understanding your
                  employees’ journey, you can proactively design interventions
                  that boost morale, engagement, and long-term loyalty.
                </p>
              </section>
              <section className="section-footer">
                <div className="note">
                  <p className="text-yellow">
                    Start Mapping Your Employee Lifecycle Today
                  </p>
                  <Link href="#" className="button button--outline">
                    Request a Demo
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
