"use client";

import ScaledImage from "../../components/scaled-image";
import Clients from "../../components/clients";
import Link from "next/link";
export default function page() {
  return (
    <article className="ex-phase4">
      {/* Sub Header */}
      <section className="sub-header">
        <div className="container">
          <div className="sub-header-left">
            <ScaledImage
              src="/images/senti-ex.svg"
              width={240}
              height={96}
              alt="senti ex"
            />
            <div className="page-title">
              <ScaledImage
                src={"/images/icon-phase-4.svg"}
                width={80}
                height={80}
                alt="icon"
              />
              Turn Insights Into Action
            </div>
          </div>
          <div className="sub-header-right">
            <a href="/ex">
              <ScaledImage
                src={"/images/blue-back-arrow.svg"}
                width={35}
                height={35}
                alt="back"
              />
              Back to SentiEX
            </a>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <div className="container">
          <div className="col">
            <div className="content">
              <h2 className="title">Turn Insights Into Action</h2>
              <p>
                Ensure your organization thrives with actionable insights
                delivered through Sentimeter’s advanced reporting tools and
                real-time dashboards. Transform employee feedback into
                measurable strategies, fostering continuous improvement and
                employee satisfaction.
              </p>
              <Link href="/demo-form" className="button button--outline">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <Clients />

      {/* Reports */}
      <section className="section has-bg blue reports">
        <div className="card">
          <div className="container">
            <div className="col">
              <div className="left-content">
                <section className="section-header blue">
                  <h2>
                    Ready-Made <span> Reports</span> That Empower Action
                  </h2>
                  <p>
                    Stop wasting time on manual data compilation. Sentimeter’s
                    pre-built templates provide tailored insights designed to
                    keep you focused on building a thriving workplace.
                  </p>
                </section>
                <section className="section-footer">
                  <p className="note">
                    <span>Why It Matters:</span> “Less time compiling data means
                    more time focusing on strategies that matter.”
                  </p>
                  <div className="button-wrapper">
                    <p>See Ready-Made Reports in Action</p>
                    <Link href="/demo-form" className="button">
                      Request a Demo
                    </Link>
                  </div>
                </section>
              </div>
            </div>
            <div className="col features">
              <h4>Key Features:</h4>
              <div className="image-container">
                <ul>
                  <li>
                    <div className="feature">
                      <p className="content">
                        <span className="blue-100">Pre-Built Templates</span>{" "}
                        Ready-to-go reports for eNPS, employee engagement, and
                        well-being metrics.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="feature">
                      <p className="content">
                        <span className="blue-90">Periodic Summaries</span>{" "}
                        Generate PDF reports to present at leadership huddles or
                        team meetings.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="feature">
                      <p className="content">
                        <span className="blue-80">Automated Updates</span> Stay
                        aligned with real-time data integration for consistent
                        monitoring.
                      </p>
                    </div>
                  </li>
                </ul>
                <ScaledImage
                  src={"/images/ex/phase4/reports-illustration.svg"}
                  width={516}
                  height={350}
                  alt="Reports"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="section dashboard">
        <div className="container">
          <div className="col col-left">
            <ScaledImage
              src={"/images/ex/phase4/dashboard-illustration.svg"}
              width={732}
              height={443}
              alt="Reports"
            />
          </div>
          <div className="col col-right">
            <div className="right-content">
              <div className="section-header blue">
                <h2>
                  <span>Dashboards Built</span> for Every Team
                </h2>
                <p>
                  Empower managers and HR professionals with role-specific
                  dashboards tailored to their unique goals. Sentimeter ensures
                  the right insights are delivered to the right people.
                </p>
              </div>

              <div className="features">
                <div className="cards no-border light-blue">
                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/ex/phase4/dashboard-icon-1.svg"}
                        width={86}
                        height={86}
                        alt="benefit"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Dynamic Filters</h4>
                      <p>Segment data by department, sentiment, or tenure.</p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/ex/phase4/dashboard-icon-2.svg"}
                        width={86}
                        height={86}
                        alt="benefit"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Custom Views</h4>
                      <p>
                        Personalize dashboards to match HR, leadership, and
                        team-specific objectives.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/ex/phase4/dashboard-icon-3.svg"}
                        width={86}
                        height={86}
                        alt="benefit"
                      />
                    </div>
                    <div className="card-content">
                      <h4>CSV Exports</h4>
                      <p>
                        Export datasheets filtered by specific criteria for
                        deeper analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <section className="section-footer">
                <p className="note">
                  <span>Why It Matters:</span> “Less time compiling data means
                  more time focusing on strategies that matter.”
                </p>
                <div className="button-wrapper">
                  <p>Explore Custom Dashboards</p>
                  <Link href="/demo-form" className="button">
                    Learn More
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section has-bg insights">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/ex/phase4/insights-icon.svg"}
                width={125}
                height={125}
                alt="benefit"
              />
            </div>

            <div className="col content">
              <section className="section-header yellow">
                <h2>
                  <span>Insights</span> Anytime, Anywhere
                </h2>
                <p>
                  Agility is key. Sentimeter’s mobile-friendly dashboards allow
                  decision-makers to stay informed and act swiftly, no matter
                  where they are.
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
              </ul>

              <section className="section-footer yellow">
                <p className="note">
                  <span>Why It Matters: </span>
                  "Identifying root causes helps organizations address
                  challenges proactively and build trust."
                </p>

                <div className="button-wrapper">
                  <p>Take Your Insights Anywhere</p>
                  <Link href={"#"} className="button button--outline">
                    Schedule a Demo
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* lifecycle */}
      <section className="section lifecycle">
        <div className="container">
          <div className="col content">
            <section className="section-header blue">
              <h2>
                See the Full Employee <span>Lifecycle</span>
              </h2>
              <p>
                Just like experiences span across touchpoints, employee insights
                should be holistic. Sentimeter provides a unified view of
                engagement and feedback across every stage of the lifecycle.
              </p>

              <section className="section-footer">
                <p className="note">
                  <span> Why It Matters:</span> "A complete view of the
                  lifecycle enables smarter, more impactful strategies.”
                </p>
                <div className="button-wrapper">
                  <p>Explore Lifecycle Analytic</p>
                  <Link href="#" className="button">
                    Learn more
                  </Link>
                </div>
              </section>
            </section>
          </div>
          <div className="col col-right">
            <h4 className="features-heading text-center">Key Features:</h4>
            <div className="features">
              <div className="feature">
                <div className="icon">
                  <ScaledImage
                    src={"/images/ex/phase4/emp-life-icon-1.svg"}
                    width={32}
                    height={32}
                    alt="benefit"
                  />
                  Lifecycle Tracking
                </div>
                <div className="content">
                  <span>Lifecycle Mapping:</span> Visualize feedback touchpoints
                  from recruitment to offboarding.
                </div>
              </div>

              <div className="feature">
                <div className="icon">
                  <ScaledImage
                    src={"/images/ex/phase4/emp-life-icon-2.svg"}
                    width={32}
                    height={32}
                    alt="benefit"
                  />
                  Holistic Analytics
                </div>
                <div className="content">
                  <span>Feedback Gap Identification:</span> Highlight missing
                  data to ensure a complete picture of workforce sentiment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section secure-sharing has-bg blue">
        <section className="card">
          <div className="container">
            <div className="col col-left">
              <h4 className="features-heading text-center">Key Features:</h4>
              <ScaledImage
                src={"/images/ex/phase4/secure-sharing-illustration.svg"}
                width={571}
                height={365}
                alt="Secure Sharing"
              />
            </div>
            <div className="col">
              <section className="section-header blue">
                <h2>
                  Secure Sharing for <span> Trusted Insights</span>
                  <p>
                    Ensure all data remains secure and accessible to the right
                    people with Sentimeter’s robust permissions and compliance
                    features.
                  </p>
                </h2>
              </section>
              <section className="section-footer blue">
                <div className="note">
                  <span>Why It Matters:</span> “Protecting feedback builds trust
                  and ensures ethical data usage.”
                </div>
                <div className="button-wrapper">
                  <p>Learn About Secure Sharing</p>
                  <Link href="/demo-form" className="button">
                    Request a Demo
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>

      {/* prove Impact */}
      <section className="section prove-impact has-bg blue">
        <section className="card">
          <div className="container dir-col">
            <div className="col">
              <section className="section-header">
                <h2>Prove Impact and Shape the Future</h2>
                <p>
                  Sentimeter doesn’t just help you track metrics; it connects
                  feedback to business outcomes, enabling you to showcase the
                  value of a strong employee experience.
                </p>
              </section>
              <div className="features">
                <div className="cards">
                  {/* Card */}
                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/ex/phase4/prove-impact-icon-1.svg"}
                        width={72}
                        height={72}
                        alt="prove impact"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Retention Predictors</h4>
                      <p>
                         Identify employees at risk of disengagement and
                        turnover.
                      </p>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="card yellow">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/ex/phase4/prove-impact-icon-2.svg"}
                        width={72}
                        height={72}
                        alt="prove impact"
                      />
                    </div>
                    <div className="card-content">
                      <h4>ROI Calculators</h4>
                      <p>
                        Quantify the business impact of engagement initiatives.
                      </p>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="card red">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/ex/phase4/prove-impact-icon-3.svg"}
                        width={72}
                        height={72}
                        alt="prove impact"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Scenario Modeling</h4>
                      <p>Simulate initiatives to predict future outcomes. </p>
                    </div>
                  </div>
                </div>
              </div>

              <section className="section-footer">
                <div className="note">
                  <span>Why It Matters:</span> "Data-backed actions build trust
                  and demonstrate the power of employee engagement.
                </div>
                <div className="button-wrapper">
                  <p>Discover Predictive Analytics</p>
                  <Link href="/demo-form" className="button">
                     Book a Demo
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>

      {/* Continuous */}
      <section className="section continuous has-bg ">
        <div className="card">
          <div className="container">
            <div className="col col-icon">
              <ScaledImage
                src={"/images/ex/phase4/growing.png"}
                width={95}
                height={95}
                alt="Secure Sharing"
              />
            </div>
            <div className="col col-content">
              <section className="section-header yellow">
                <h2>
                  Why <span>Continuous Improvement</span> Matters for EX
                </h2>
              </section>
              <section className="features">
                <div className="cards no-border">
                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/ex/phase4/continuous-icon-1.svg"}
                        width={72}
                        height={72}
                        alt="Secure Sharing"
                      />
                    </div>
                    <div className="card-content">
                      <p>
                        Foster a culture of innovation and engagement with
                        feedback-driven strategies.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/ex/phase4/continuous-icon-2.svg"}
                        width={72}
                        height={72}
                        alt="Secure Sharing"
                      />
                    </div>
                    <div className="card-content">
                      <p>
                        Build loyalty and productivity by acting on iterative
                        insights.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/ex/phase4/continuous-icon-3.svg"}
                        width={72}
                        height={72}
                        alt="Secure Sharing"
                      />
                    </div>
                    <div className="card-content">
                      <p>
                        Detect patterns related to leadership effectiveness,
                        workload, or company culture.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section-footer">
                <div className="button-wrapper">
                  <Link href="#" className="button button--outline">
                    See How Reporting Fuels Innovation
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
