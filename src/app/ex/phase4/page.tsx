"use client";

import Image from "next/image";
import Clients from "../../components/clients";
import Link from "next/link";
export default function page() {
  return (
    <article className="ex-phase4">
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
              <h2 className="title">Turn Insights Into Action</h2>
              <p>
                Ensure your organization thrives with actionable insights
                delivered through Sentimeter’s advanced reporting tools and
                real-time dashboards. Transform employee feedback into
                measurable strategies, fostering continuous improvement and
                employee satisfaction.
              </p>
              <Link href="#" className="button button--outline">
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
                <h3>
                  Ready-Made <span> Reports</span> That Empower Action
                </h3>
                <p>
                  Stop wasting time on manual data compilation. Sentimeter’s
                  pre-built templates provide tailored insights designed to keep
                  you focused on building a thriving workplace.
                </p>
                <p className="note">
                  <span>Why It Matters:</span> “Less time compiling data means
                  more time focusing on strategies that matter.”
                </p>
                <div className="row">
                  <p>See Ready-Made Reports in Action</p>
                  <Link href="#" className="button">
                    Request a Demo
                  </Link>
                </div>
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
                <Image
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
            <Image
              src={"/images/ex/phase4/dashboard-illustration.svg"}
              width={732}
              height={443}
              alt="Reports"
            />
          </div>
          <div className="col col-right">
            <div className="right-content">
              <h3>
                <span>Dashboards Built</span> for Every Team
              </h3>
              <p>
                Empower managers and HR professionals with role-specific
                dashboards tailored to their unique goals. Sentimeter ensures
                the right insights are delivered to the right people.
              </p>

              <div className="row">
                <div className="col">
                  <div className="icon">
                    <Image
                      src={"/images/ex/phase4/dashboard-icon-1.svg"}
                      width={86}
                      height={86}
                      alt="benefit"
                    />
                  </div>
                  <h4>Dynamic Filters</h4>
                  <p>Segment data by department, sentiment, or tenure.</p>
                </div>

                <div className="col">
                  <div className="icon">
                    <Image
                      src={"/images/ex/phase4/dashboard-icon-2.svg"}
                      width={86}
                      height={86}
                      alt="benefit"
                    />
                  </div>
                  <h4>Custom Views</h4>
                  <p>
                    Personalize dashboards to match HR, leadership, and
                    team-specific objectives.
                  </p>
                </div>

                <div className="col">
                  <div className="icon">
                    <Image
                      src={"/images/ex/phase4/dashboard-icon-3.svg"}
                      width={86}
                      height={86}
                      alt="benefit"
                    />
                  </div>
                  <h4>CSV Exports</h4>
                  <p>
                    Export datasheets filtered by specific criteria for deeper
                    analysis.
                  </p>
                </div>
              </div>

              <p className="note">
                <span>Why It Matters:</span> “Less time compiling data means
                more time focusing on strategies that matter.”
              </p>
              <div className="button-holder">
                <p>See Ready-Made Reports in Action</p>
                <Link href="#" className="button">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section has-bg insights">
        <div className="card">
          <div className="container">
            <div className="col">
              <Image
                src={"/images/ex/phase4/insights-icon.svg"}
                width={125}
                height={125}
                alt="benefit"
              />
            </div>

            <div className="col content">
              <h3>
                <span>Insights</span> Anytime, Anywhere
              </h3>
              <p>
                Agility is key. Sentimeter’s mobile-friendly dashboards allow
                decision-makers to stay informed and act swiftly, no matter
                where they are.
              </p>

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

              <p className="note">
                <span>Why It Matters: </span>
                "Identifying root causes helps organizations address challenges
                proactively and build trust."
              </p>

              <div className="row">
                <h5>Take Your Insights Anywhere</h5>
                <Link href={"#"} className="button button--outline">
                  Discover Sentiment Analytics for EX
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay */}
      <section className="section overlay">
        <div className="container">
          <div className="col content">
            <div className="content-group has-inner-text-blue">
              <h3>
                See the Full Employee <span>Lifecycle</span>
              </h3>
              <p>
                Just like experiences span across touchpoints, employee insights
                should be holistic. Sentimeter provides a unified view of
                engagement and feedback across every stage of the lifecycle.
              </p>

              <p className="note">
                <span> Why It Matters:</span> "A complete view of the lifecycle
                enables smarter, more impactful strategies.”
              </p>
              <div className="row">
                <p>Explore Lifecycle Analytic</p>
                <Link href="#" className="button">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="col col-right">
            <h4>Key Features:</h4>
            <div className="features">
              <div className="feature">
                <div className="icon">
                  <Image
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
                  <Image
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
    </article>
  );
}
