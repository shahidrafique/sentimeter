"use client";

import Image from "next/image";
import Clients from "../../components/clients";
import Link from "next/link";
export default function page() {
  return (
    <article className="ex-phase3">
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
              <h3 className="subtitle">Decode Feedback Into Insights</h3>
              <h2 className="title">
                Transform Employee Feedback Into{" "}
                <span> Strategic Insights</span>
              </h2>
              <p>
                Sentimeter enables organizations to analyze feedback, uncover
                trends, and refine strategies that enhance engagement and
                satisfaction. By integrating feedback across the employee
                lifecycle, Sentimeter provides actionable insights to address
                challenges and create a thriving workplace.
              </p>
              <Link href="#" className="button button--outline">
                Request a Demo
              </Link>
            </div>
          </div>
          <div className="col">
            <Image
              src="/images/ex/phase3/ex-phase3-header.svg"
              width={782}
              height={389}
              alt="senti ex"
            />
          </div>
        </div>
      </section>

      {/* Clients */}
      <Clients />

      {/* holistic */}
      <section className="section has-bg green holistic">
        <div className="card">
          <div className="container">
            <div className="col">
              <div className="section-header yellow">
                <h2>
                  Unify Feedback for
                  <span> Holistic Insights.</span>
                </h2>
                <p>
                  Sentimeter collects feedback across multiple channels, giving
                  you a complete view of the employee experience. Whether
                  through pulse surveys or unsolicited comments, our tools
                  ensure no signal is missed.
                </p>
              </div>
              <section className="section-footer">
                <p className="note">
                  <span>Why It Matters:</span> “Unified feedback reduces
                  complexity, helping leaders focus on impactful actions.”
                </p>
                <div className="button-wrapper">
                  <Link href="#" className="button button--yellow">
                    Request a Demo
                  </Link>
                </div>
              </section>
            </div>
            <div className="col features">
              <h4>Key Features:</h4>
              <ul>
                <li>
                  <div className="feature">
                    <div className="icon">
                      <Image
                        src="/images/ex/phase3/holistic-icon-1.svg"
                        width={72}
                        height={84}
                        alt="Holistic"
                      />
                    </div>
                    <p className="content">
                      <span className="yellow-100">Lifecycle Integration:</span>{" "}
                      Gather insights from onboarding, training, performance
                      reviews, and exit interviews.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="feature">
                    <div className="icon">
                      <Image
                        src="/images/ex/phase3/holistic-icon-2.svg"
                        width={72}
                        height={84}
                        alt="Holistic"
                      />
                    </div>
                    <p className="content">
                      <span className="yellow-90">
                        Omnichannel Feedback Collection:
                      </span>{" "}
                      Combine surveys, peer reviews, and in-app feedback in one
                      unified dashboard.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="feature">
                    <div className="icon">
                      <Image
                        src="/images/ex/phase3/holistic-icon-3.svg"
                        width={72}
                        height={84}
                        alt="Holistic"
                      />
                    </div>
                    <p className="content">
                      <span className="yellow-80">Dynamic Filtering:</span>{" "}
                      Segment feedback by role, department, tenure, or
                      geography.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="feature">
                    <div className="icon">
                      <Image
                        src="/images/ex/phase3/holistic-icon-4.svg"
                        width={72}
                        height={84}
                        alt="Holistic"
                      />
                    </div>
                    <p className="content">
                      <span className="yellow-70">
                        Role-Specific Dashboards:
                      </span>{" "}
                      Tailored analytics for HR, managers, and executives to
                      make informed decisions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="feature">
                    <div className="icon">
                      <Image
                        src="/images/ex/phase3/holistic-icon-5.svg"
                        width={72}
                        height={84}
                        alt="Holistic"
                      />
                    </div>
                    <p className="content">
                      <span className="yellow-60">Employee Manager App:</span>{" "}
                      Equip managers with real-time feedback alerts and
                      actionable insights on the go.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Decode */}
      <section className="section has-bg decode">
        <div className="card">
          <div className="container">
            <div className="col col-icon">
              <Image
                src={"/images/ex/phase3/decode-icon.png"}
                width={125}
                height={125}
                alt="benefit"
              />
            </div>

            <div className="col content">
              <section className="section-header yellow">
                <h2>
                  Decode <span>Sentiments</span> and Identify Root Causes
                </h2>
                <p>
                  Move beyond metrics to uncover the "why" behind employee
                  sentiments with advanced analytics tools.
                </p>
              </section>
              <h5 className="features-heading">Key Features:</h5>
              <div className="features">
                <div className="cards no-border">
                  <div className="card">
                    <div className="icon">
                      <Image
                        src={"/images/ex/phase3/decode-icon-1.svg"}
                        width={86}
                        height={86}
                        alt="benefit"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Sentiment Analysis</h4>
                      <p>
                        Gauge emotions like frustration, motivation, or
                        satisfaction.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="icon">
                      <Image
                        src={"/images/ex/phase3/decode-icon-2.svg"}
                        width={86}
                        height={86}
                        alt="benefit"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Root Cause Analysis (RCA)</h4>
                      <p>
                        Pinpoint recurring challenges affecting morale and
                        productivity.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="icon">
                      <Image
                        src={"/images/ex/phase3/decode-icon-3.svg"}
                        width={86}
                        height={86}
                        alt="benefit"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Behavioral Insights</h4>
                      <p>
                        Detect patterns related to leadership effectiveness,
                        workload, or company culture.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="icon">
                      <Image
                        src={"/images/ex/phase3/decode-icon-4.svg"}
                        width={86}
                        height={86}
                        alt="benefit"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Built-In Recovery Management</h4>
                      <p>
                        Resolve grievances in real-time to rebuild trust and
                        address challenges effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <section className="section-footer yellow">
                <div className="note">
                  <span>Why It Matters: </span>
                  "Identifying root causes helps organizations address
                  challenges proactively and build trust."
                </div>
                <div className="button-wrapper">
                  <Link href={"#"} className="button button--outline">
                    Discover Sentiment Analytics for EX
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay */}
      <section className="section overlay">
        <div className="container">
          <div className="col col-left">
            <section className="section-header blue-dark">
              <h2>
                <span>Overlay Feedback Across the Employee Lifecycle</span>
              </h2>
              <p>
                Map feedback insights to critical stages of the employee
                lifecycle, addressing gaps to strengthen engagement strategies.
              </p>
            </section>
            <section className="section-footer">
              <p className="note">
                <span>Why It Matters:</span> "Overlaying feedback ensures every
                stage of the lifecycle supports growth and satisfaction."
              </p>
              <div className="button-wrapper">
                <p>Close Feedback Gaps Across the Lifecycle</p>
                <Link href={"#"} className="button">
                  Discover Sentiment Analytics for EX
                </Link>
              </div>
            </section>
          </div>
          <div className="col col-right">
            <h4 className="features-heading">Key Features:</h4>
            <div className="features">
              <div className="feature">
                <div className="icon">
                  <Image
                    src={"/images/ex/phase3/overlay-icon-1.svg"}
                    width={32}
                    height={32}
                    alt="benefit"
                  />
                  Lifecycle Mapping
                </div>
                <div className="content">
                  <span>Lifecycle Mapping:</span> Visualize feedback touchpoints
                  from recruitment to offboarding.
                </div>
              </div>

              <div className="feature">
                <div className="icon">
                  <Image
                    src={"/images/ex/phase3/overlay-icon-2.svg"}
                    width={32}
                    height={32}
                    alt="benefit"
                  />
                  Feedback Gap Identification
                </div>
                <div className="content">
                  <span>Feedback Gap Identification:</span> Highlight missing
                  data to ensure a complete picture of workforce sentiment.
                </div>
              </div>

              <div className="feature">
                <div className="icon">
                  <Image
                    src={"/images/ex/phase3/overlay-icon-3.svg"}
                    width={32}
                    height={32}
                    alt="benefit"
                  />
                  Responsive Touchpoints
                </div>
                <div className="content">
                  <span>Responsive Touchpoints:</span> Tailor interventions to
                  address issues at key stages of the employee lifecycle.
                </div>
              </div>

              <div className="feature">
                <div className="icon">
                  <Image
                    src={"/images/ex/phase3/overlay-icon-4.svg"}
                    width={32}
                    height={32}
                    alt="benefit"
                  />
                  Employee Manager App
                </div>
                <div className="content">
                  <span>Employee Manager App:</span> Provide managers with tools
                  to monitor feedback and engagement trends seamlessly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leverage  */}

      <section className="section has-bg blue leverage">
        <div className="card">
          <div className="container">
            <div className="section-header">
              <h2>Leverage Predictive Analytics for Workforce Optimization</h2>
              <p>
                Stay ahead of challenges with predictive tools that anticipate
                workforce needs and risks.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="features">
              <div className="cards">
                <section className="card  yellow">
                  <div className="icon">
                    <Image
                      src={"/images/ex/phase3/leverage-icon-1.svg"}
                      width={72}
                      height={72}
                      alt="Senti CX"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Attrition Predictors</h4>
                    <p>
                      Identify at-risk employees early and deploy tailored
                      interventions.
                    </p>
                  </div>
                </section>

                <section className="card yellow">
                  <div className="icon">
                    <Image
                      src={"/images/ex/phase3/leverage-icon-2.svg"}
                      width={72}
                      height={72}
                      alt="Senti CX"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Scenario Modeling</h4>
                    <p>
                      Simulate the impact of potential engagement strategies to
                      optimize outcomes.
                    </p>
                  </div>
                </section>

                <section className="card  yellow">
                  <div className="icon">
                    <Image
                      src={"/images/ex/phase3/leverage-icon-3.svg"}
                      width={72}
                      height={72}
                      alt="Senti CX"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Engagement Score Trends</h4>
                    <p>
                      Track key metrics like NPS, CSAT, and CES to forecast
                      workforce health.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="container dir-col">
            <section className="section-footer">
              <p className="note">
                <span> Why It Matters:</span> "Predictive analytics empowers HR
                teams to mitigate risks and sustain workforce resilience."
              </p>
              <div className="button-wrapper">
                <p>Predict Workforce Trends</p>
                <Link href={"#"} className="button ">
                  Discover Sentiment Analytics for EX
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="section trends">
        <div className="container">
          <div className="col content">
            <section className="section-header blue-dark">
              <h2>
                <span>Spot Trends, Act Decisively</span>
              </h2>
              <p>
                Detect and act on trends with real-time insights to keep your
                workforce engaged and agile.
              </p>
            </section>

            <ul className="checklist yellow">
              <li className="checklist-item">
                <span>Real-Time Alerts:</span> Flag spikes in disengagement or
                emerging concerns for immediate resolution.
              </li>
              <li className="checklist-item">
                <span>Trend Analysis:</span> Monitor shifts in engagement or
                satisfaction across departments and geographies.
              </li>
              <li className="checklist-item">
                <span>Metric Tracking (NPS, CSAT, CES):</span> Evaluate
                workforce health and engagement consistently.
              </li>
            </ul>

            <section className="section-footer">
              <p className="note">
                <span>Why It Matters:</span> "Quick action ensures a healthier
                and more engaged workforce."
              </p>
              <div className="button-wrapper">
                <p>Stay Ahead of Workforce Trends</p>
                <Link href="#" className="button">
                  Experience Smarter Employee Surveys
                </Link>
              </div>
            </section>
          </div>
          <div className="col image-container">
            <Image
              src={"/images/ex/phase3/spot-illustrations.svg"}
              width={689}
              height={437}
              alt="Automation"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
