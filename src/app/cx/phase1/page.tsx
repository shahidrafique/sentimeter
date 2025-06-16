"use client";
import { useState } from "react";
import Image from "next/image";
import Clients from "../../components/clients";
import Link from "next/link";
import ScaledImage from "@/app/components/scaled-image";
export default function page() {
  const [activeStage, setActiveStage] = useState(0);
  return (
    <article className="phase1">
      {/* Sub Header */}
      <section className="sub-header">
        <div className="container">
          <div className="sub-header-left">
            <Image
              src={"/images/senti-ex.svg"}
              width={240}
              height={96}
              alt="senti ex"
            />
            <div className="page-title">
              <Image
                src={"/images/icon-cx-phase-1.svg"}
                width={80}
                height={80}
                alt="icon"
              />
              Accurately Map & Optimize Customer Journeys
            </div>
          </div>
          <div className="sub-header-right">
            <a href="/cx">
              <Image
                src={"/images/blue-back-arrow.svg"}
                width={35}
                height={35}
                alt="back"
              />
              Back to SentiCX
            </a>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <div className="container">
          <div className="col">
            <div className="content">
              <h3>Create a Data-Driven CX Strategy</h3>
              <h4>Transform the way you understand your customers’ paths to success.</h4>
              <p>
                At Sentimeter, we guide you in crafting customer journeys tailored to your organization’s unique processes. This isn’t just a map; it’s a strategic blueprint for uncovering insights, addressing drop-offs, and elevating experiences.
              </p>
              <Link href="/demo-form" className="button button--outline">
                Request a Demo
              </Link>
            </div>
          </div>
          <div className="col">
            <ScaledImage
              src={"/images/cx/phase1/image-phase1-header.png"}
              width={500}
              height={453}
              alt="image phase1 header"
            />
          </div>
        </div>
      </section>
      <Clients />

      {/* Customer Journey Mapping  */}
      <section className="section has-bg customer-journey-mapping">
        <div className="card">
          <div className="container dir-col">
            <ScaledImage
              src={"/images/cx/phase1/icon-customer-journey-maping.svg"}
              width={88}
              height={88}
              alt="icon customer journey maping"
            />
            <h3>
              <span>Customer Journey Mapping:</span>
              The Key to CX Success
            </h3>
          </div>
          <div className="container">
            <section className="features">
              <section className="cards no-border yellow">
                <div className="card">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/cx/phase1/icon-gain.svg"}
                      width={86}
                      height={86}
                      alt="icon gain"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Gain a Holistic View of Customer Interactions</h4>
                    <p>
                      Understand how customers interact with your brand at every
                      stage.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/icon-build-trust2.svg"}
                      width={86}
                      height={86}
                      alt="benefit"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Identify & Resolve Customer Friction Points</h4>
                    <p>
                      Foster trust by demonstrating how feedback drives real
                      improvements.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/icon-build-trust3.svg"}
                      width={86}
                      height={86}
                      alt="benefit"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Trust-Building Analytics</h4>
                    <p>
                      Build stronger relationships between employees and
                      leadership.
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </section>

      {/* Journey-First Approach  */}
      <section className="section has-bg red-light journey-first-approach">
        <h4 className="section-title">
          The Journey-First Approach: <span>9 Key Steps to Success</span>
        </h4>
        <div className="card">
          <div className="progress-steps">
            {[
              "Step 1",
              "Step 2",
              "Step 3",
              "Step 4",
              "Step 5",
              "Step 6",
              "Step 7",
              "Step 8",
              "Step 9",
            ].map((label, index) => (
              <div
                key={index}
                className={`${"step"} ${activeStage === index ? "active" : ""}`}
                onClick={() => setActiveStage(index)}
              >
                <div className="icon">
                  <Image
                    src={`/images/cx/phase1/journey-icon-step${index + 1}-${
                      activeStage === index ? "white" : "red"
                    }.png`}
                    width={46}
                    height={46}
                    alt="journey icon step1 white"
                  />
                </div>
                {label}
              </div>
            ))}
          </div>

          <div className="container">
            {activeStage === 0 && (
              <section className="step-content step1">
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-icon-step1-red.png"}
                    width={113}
                    height={113}
                    alt="journey icon step1 red"
                  />
                  <h3>Identify Customer Journeys</h3>
                  <p>
                    Start by identifying all the ways customers interact with
                    your business, from signing up to resolving issues.
                    Collaborate with stakeholders to ensure no pathway is
                    missed.
                  </p>
                  <h5>Example Journeys:</h5>
                  <ul className="checklist red">
                    <li className="checklist-item">
                      <span>FinTech:</span> Account sign-up, bill payment,
                      transaction disputes.
                    </li>
                    <li className="checklist-item">
                      <span>Retail:</span> Online purchases, in-store
                      experiences, returns.
                    </li>
                    <li className="checklist-item">
                      <span>SaaS:</span> Free trials, subscription renewals,
                      technical support.
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-illustration-step1.svg"}
                    width={408}
                    height={408}
                    alt="journey illustration step1"
                  />
                </div>
              </section>
            )}
            {activeStage === 1 && (
              <section className="step-content step2">
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-icon-step2-red.png"}
                    width={113}
                    height={113}
                    alt="journey icon step2 red"
                  />
                  <h3>Define Journey-Specific Stages</h3>
                  <p>
                    Break each journey into its unique steps. Go beyond generic
                    stages like "Awareness" or "Purchase" to capture what truly
                    happens at each touchpoint.
                  </p>
                  <h5>Example Stages for an Online Purchase Flow:</h5>
                  <ul className="checklist red">
                    <li className="checklist-item">Homepage Visit</li>
                    <li className="checklist-item">Browsing Products</li>
                    <li className="checklist-item">Adding Items to Basket</li>
                    <li className="checklist-item">Checkout/Payment</li>
                    <li className="checklist-item">Delivery or Collection</li>
                  </ul>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-illustration-step2.svg"}
                    width={580}
                    height={536}
                    alt="journey illustration step2"
                  />
                </div>
              </section>
            )}
            {activeStage === 2 && (
              <section className="step-content step3">
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-icon-step3-red.png"}
                    width={113}
                    height={113}
                    alt="journey icon step3 red"
                  />
                  <h3>Create High-Level Process Flows</h3>
                  <p>
                    Visualize every journey with process flows that outline key
                    stages, decision points, and potential drop-offs. Use tools
                    like Lucidchart or Miro to build a clear roadmap.
                  </p>
                  <h5>Example Flow for Checkout/Payment:</h5>
                  <ul className="checklist red">
                    <li className="checklist-item">Homepage Visit</li>
                    <li className="checklist-item">Browsing Products</li>
                    <li className="checklist-item">Add to Basket</li>
                    <li className="checklist-item">Checkout</li>
                    <li className="checklist-item">Payment Successful</li>
                  </ul>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-illustration-step3.svg"}
                    width={488}
                    height={446}
                    alt="journey illustration step3"
                  />
                </div>
              </section>
            )}
            {activeStage === 3 && (
              <section className="step-content step4">
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-icon-step4-red.png"}
                    width={113}
                    height={113}
                    alt="journey icon step4 red"
                  />
                  <h3>Identify Potential Drop-Off Points</h3>
                  <p>
                    Drop-off points are moments where customers leave the
                    journey without achieving their goal. These insights are
                    critical to:
                  </p>
                  <ul className="checklist red">
                    <li className="checklist-item">
                      <span>Reduce Friction:</span> Improve processes that cause
                      frustration.
                    </li>
                    <li className="checklist-item">
                      <span>Boost Conversions:</span> Minimize lost
                      opportunities.
                    </li>
                    <li className="checklist-item">
                      <span>Enhance Satisfaction:</span> Resolve customer pain
                      points proactively.
                    </li>
                  </ul>
                  <h5>Example Drop-Off Points:</h5>
                  <ul className="checklist red">
                    <li className="checklist-item">
                      Browsing without adding items to the basket.
                    </li>
                    <li className="checklist-item">
                      Abandoning the cart due to unclear pricing or payment
                      options.
                    </li>
                    <li className="checklist-item">
                      Support calls ending unresolved due to long wait times.
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-illustration-step4.svg"}
                    width={488}
                    height={446}
                    alt="journey illustration step4"
                  />
                </div>
              </section>
            )}
            {activeStage === 4 && (
              <section className="step-content step5">
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-icon-step5-red.png"}
                    width={113}
                    height={113}
                    alt="journey icon step5 red"
                  />
                  <h3>Overlay Feedback Touchpoints</h3>
                  <p>
                    Map out where and how customer feedback is currently
                    collected. This includes both:
                  </p>
                  <ul className="checklist red">
                    <li className="checklist-item">
                      <span>Solicited Feedback:</span> Surveys, feedback
                      requests, post-purchase emails.
                    </li>
                    <li className="checklist-item">
                      <span>Unsolicited Feedback:</span> Social media reviews,
                      support call transcripts, chatbot interactions.
                    </li>
                  </ul>
                  <h5>
                    Example Feedback Touchpoints for an Online Purchase Journey:
                  </h5>
                  <ul className="checklist red">
                    <li className="checklist-item">
                      Homepage Visit → Social Media Reviews (Unsolicited)
                    </li>
                    <li className="checklist-item">
                      Checkout → Post-Purchase Survey (Solicited)
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-illustration-step5.svg"}
                    width={488}
                    height={446}
                    alt="journey illustration step5"
                  />
                </div>
              </section>
            )}
            {activeStage === 5 && (
              <section className="step-content step6">
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-icon-step6-red.png"}
                    width={113}
                    height={113}
                    alt="journey icon step6 red"
                  />
                  <h3>Identify Feedback Gaps</h3>
                  <p>
                    At each stage, ask, “How do we understand what customers
                    think and feel here?” If there’s no clear answer, you’ve
                    found a gap.
                  </p>
                  <h5>How to Address Feedback Gaps:</h5>
                  <ul className="checklist red">
                    <li className="checklist-item">
                      Add potential feedback touchpoints to your journey map.
                    </li>
                    <li className="checklist-item">
                      Clearly distinguish existing feedback mechanisms from
                      gaps.interactions.
                    </li>
                    <li className="checklist-item">
                      Focus on methods that capture both quantitative and
                      qualitative insights.
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-illustration-step6.svg"}
                    width={488}
                    height={446}
                    alt="journey illustration step6"
                  />
                </div>
              </section>
            )}
            {activeStage === 6 && (
              <section className="step-content step7">
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-icon-step7-red.png"}
                    width={113}
                    height={113}
                    alt="journey icon step7 red"
                  />
                  <h3>Close the Gaps in Understanding</h3>
                  <p>
                    Once gaps are identified, determine the best way to close
                    them without overloading your customers.
                  </p>
                  <h5>Key Actions:</h5>
                  <ul className="checklist red">
                    <li className="checklist-item">
                      Introduce new feedback touchpoints to address blind spots.
                    </li>
                    <li className="checklist-item">
                      Ensure seamless integration with existing systems.
                    </li>
                    <li className="checklist-item">
                      Test and refine collection methods to optimize response
                      rates.
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-illustration-step7.svg"}
                    width={488}
                    height={446}
                    alt="journey illustration step7"
                  />
                </div>
              </section>
            )}
            {activeStage === 7 && (
              <section className="step-content step8">
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-icon-step8-red.png"}
                    width={113}
                    height={113}
                    alt="journey icon step8 red"
                  />
                  <h3>Prioritize Customer Journeysng</h3>
                  <p>
                    Not all journeys have equal importance. Prioritize based on
                    business impact, customer impact, and implementation
                    feasibility.
                  </p>
                  <h5>Prioritization Framework:</h5>
                  <ul className="checklist red">
                    <li className="checklist-item">
                      <span>Business Impact:</span> Revenue potential, cost
                      reduction, strategic alignment.
                    </li>
                    <li className="checklist-item">
                      <span>Customer Impact:</span> Volume affected, pain point
                      severity, satisfaction impact.
                    </li>
                    <li className="checklist-item">
                      <span>Feasibility:</span> Resources, technical complexity,
                      dependencies, timeline.
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/cx/phase1/journey-illustration-step8.svg"}
                    width={488}
                    height={446}
                    alt="journey illustration step8"
                  />
                </div>
              </section>
            )}
            {activeStage === 8 && (
              <section className="step-content step9">
                <ScaledImage
                  src={"/images/cx/phase1/journey-icon-step9-red.png"}
                  width={113}
                  height={113}
                  alt="journey icon step9 red"
                />
                <h3>Validate with Stakeholders</h3>
                <p>
                  Validation ensures your mapping reflects actual customer
                  interactions, accurate pain points, and opportunities. It also
                  fosters cross-department collaboration and alignment.
                </p>
                <h5>How to Validate:</h5>
                <div className="row">
                  <div className="col">
                    <ScaledImage
                      src={"/images/cx/phase1/icon-review-with-team.svg"}
                      width={86}
                      height={86}
                      alt="icon review with team"
                    />
                    <h5>Review with Teams:</h5>
                    <p>
                      Share drafts with department heads and process owners.
                    </p>
                  </div>
                  <div className="col">
                    <ScaledImage
                      src={"/images/cx/phase1/icon-facilitate-workshops.svg"}
                      width={86}
                      height={86}
                      alt="icon review with team"
                    />
                    <h5>Facilitate Workshops:</h5>
                    <p>Collaborate to fill gaps or refine stages.</p>
                  </div>
                  <div className="col">
                    <ScaledImage
                      src={"/images/cx/phase1/icon-incorporate-feedback.svg"}
                      width={86}
                      height={86}
                      alt="icon incorporate feedback"
                    />
                    <h5>Incorporate Feedback:</h5>
                    <p>
                      Adjust maps based on stakeholder input and updated
                      insights.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      {/* Dive Deeper Into the Journey-First Approach */}
      <section className="section">
        <div className="container align-center">
          <div className="content-group has-inner-text-red">
            <h2>
              Dive Deeper Into the <span>Journey-First</span> Approach
            </h2>
            <p>
              Want to see the full methodology? Explore our comprehensive{" "}
              <span>Journey-First Approach Guide</span> to uncover:
            </p>
          </div>
          <ul className="checklist red">
            <li className="checklist-item">
              <span>Detailed Frameworks:</span> Step-by-step instructions for
              mapping, analyzing, and optimizing journeys.
            </li>
            <li className="checklist-item">
              <span>Examples Across Industries:</span> From retail to SaaS, see
              real-world applications.
            </li>
            <li className="checklist-item">
              <span>Proven Strategies:</span> Insights to drive satisfaction and
              business growth.
            </li>
            <li className="checklist-item">Download the Full Guide</li>
          </ul>
        </div>
      </section>

      {/* Business Impact */}
      <section className="section has-bg business-impact">
        <div className="card">
          <div className="container align-center">
            <div className="content-group has-inner-text-yellow">
              <div className="section-header">
                <ScaledImage
                  src={"/images/cx/phase1/icon-business-impact.png"}
                  width={118}
                  height={118}
                  alt="icon business impact"
                />
                <h2>
                  <span>The Business Impact of Customer Journey Mapping</span>
                </h2>
              </div>
              <p>
                Customer journey mapping isn’t just about visualizing—it’s about
                understanding and improving. This foundational exercise enables
                you to see your business through your customers’ eyes, identify
                hidden opportunities, and create strategies that matter.
              </p>
              <div className="section-footer">
                <p>
                  <span>Begin Your Customer Journey Optimization Now</span>
                </p>
                <Link href="/demo-form" className="button button--outline">
                  Request a Demo
                </Link>
              </div>
            </div>
            <div className="col">
              <ScaledImage
                src={"/images/cx/phase1/illustration-business-impact.svg"}
                width={500}
                height={500}
                alt="illustration business impact"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
