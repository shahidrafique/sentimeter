import Image from "next/image";
import Clients from "../components/clients";
import Link from "next/link";

export default function page() {
  return (
    <article className="cx">
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
          <div className="sub-header-right">Employee Experience Management</div>
        </div>
      </section>
      <section className="banner">
        <div className="container">
          <div className="content">
            <h2 className="title">
              Revolutionize Employee Engagement with <span>Sentimeter</span>
            </h2>
            <p>
              Listen. Understand. Act. Empower your workforce with insights that
              drive loyalty, productivity, and satisfaction.
            </p>
            <Link href="/demo-form" className="button button--outline">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <Clients />

      {/* Employee Experience */}
      <section className="section has-bg blue employee-experience">
        <div className="card">
          <div className="container">
            <div className="employee-experience-left">
              <section className="section-header">
                <h3>Elevate Employee Experience with</h3>
                <h2>Data-Driven Precision</h2>
              </section>
              <div className="content">
                <p>Get a quick snapshot of your organization’s</p>

                <ul>
                  <li>NPS,</li>
                  <li>total feedback,and</li>
                  <li> key performance indicators</li>
                </ul>
                <p>
                  providing immediate insight into feedback segments, and case
                  management metrics for a high-level pulse on customer
                  satisfaction.
                </p>
              </div>
              <section className="section-footer">
                <Link href="#" className="button">
                  Explore Why Sentimeter
                </Link>
              </section>
            </div>
            <div className="employee-experience-right">
              <h3 className="features-heading">Key Benefits:</h3>
              <div className="benefit">
                <Image
                  src={"/images/icon-benefit-1.svg"}
                  width={60}
                  height={60}
                  alt="benefit"
                />
                <p>
                  Capture feedback at every stage of the employee lifecycle.
                </p>
              </div>

              <div className="benefit">
                <Image
                  src={"/images/icon-benefit-2.svg"}
                  width={60}
                  height={60}
                  alt="benefit"
                />
                <p>
                  Capture feedback at every stage of the employee lifecycle.
                </p>
              </div>

              <div className="benefit">
                <Image
                  src={"/images/icon-benefit-3.svg"}
                  width={60}
                  height={60}
                  alt="benefit"
                />
                <p>
                  Capture feedback at every stage of the employee lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Phases */}
      <section className="section phases">
        <div className="container">
          <div className="content">
            <h3>
              Transform Employee Experience <br />
              in <span>4 Essential Phases</span>
            </h3>
            <p>
              Sentimeter’s structured approach empowers your organization to
              listen, understand, and act on employee feedback, creating a
              thriving workplace culture.
            </p>
          </div>
          <div className="cards-holder">
            <div className="phase-card">
              <div className="icon">
                <Image
                  src={"/images/icon-phase-1.svg"}
                  width={80}
                  height={80}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h4>Make Feedback Fearless and Effortless</h4>
                <p>
                  Simplify feedback with automated surveys while ensuring
                  anonymity for honest responses.
                </p>
                <a href="/ex/phase1" className="button">
                  Discover Seamless Feedback Tools
                </a>
              </div>
            </div>

            <div className="phase-card">
              <div className="icon">
                <Image
                  src={"/images/icon-phase-2.svg"}
                  width={80}
                  height={80}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h4>Understand Employee Relationships</h4>
                <p>
                  Visualize trends and insights across the employee lifecycle to
                  optimize every touchpoint.
                </p>
                <a href="/ex/phase2" className="button green">
                  Explore Lifecycle Insights
                </a>
              </div>
            </div>

            <div className="phase-card">
              <div className="icon">
                <Image
                  src={"/images/icon-phase-3.svg"}
                  width={80}
                  height={80}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h4>Decode Feedback Into Insights</h4>
                <p>
                  Leverage advanced analytics to uncover sentiment, identify
                  root causes, and refine strategies.
                </p>
                <a href="/ex/phase3" className="button yellow">
                  Uncover Data Insights
                </a>
              </div>
            </div>

            <div className="phase-card">
              <div className="icon">
                <Image
                  src={"/images/icon-phase-4.svg"}
                  width={80}
                  height={80}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h4>Turn Insights Into Action</h4>
                <p>
                  Close the loop with impactful actions that drive employee
                  engagement, retention, and loyalty.
                </p>
                <a href="/ex/phase4" className="button light-blue">
                  See Impact in Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Employee Experience */}
      <section className="section has-bg empowering-employee">
        <div className="card">
          <div className="container">
            <section className="section-header">
              <h3>Empowering Employee Experience at Every Stage</h3>
              <h4>
                From recruitment to retention, Sentimeter drives engagement and
                actionable insights.
              </h4>
            </section>
            <div className="features">
              <div className="cards no-border">
                <div className="card">
                  <div className="icon">
                    <Image
                      src={"/images/employee-icon-1.svg"}
                      width={86}
                      height={86}
                      alt="icon"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Omnichannel Surveys</h4>
                    <p>
                      Meet employees where they are with tools they already use.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <Image
                      src={"/images/employee-icon-2.svg"}
                      width={86}
                      height={86}
                      alt="icon"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Guaranteed Anonymity</h4>
                    <p>Build trust with fearless feedback mechanisms.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <Image
                      src={"/images/employee-icon-3.svg"}
                      width={86}
                      height={86}
                      alt="icon"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Advanced Analytics</h4>
                    <p>
                      Decode trends, emotions, and root causes with AI-powered
                      insights.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <Image
                      src={"/images/employee-icon-4.svg"}
                      width={86}
                      height={86}
                      alt="icon"
                    />
                  </div>
                  <div className="card-content">
                    <h4>Real-Time Dashboards</h4>
                    <p>Monitor feedback and act on live data.</p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="#" className="button button--outline">
              Discover Sentimeter’s Features
            </Link>
          </div>
        </div>
      </section>

      {/* Supporting Team */}
      <section className="section has-bg blue supporting-team">
        <div className="card">
          <div className="container">
            <div className="section-header">
              <h3>Supporting Your Team Across the Employee Lifecycle</h3>
              <h4>
                Sentimeter ensures every stage of the employee journey is
                seamless, engaging, and productive.
              </h4>
            </div>
            <div className="image-holder">
              <Image
                src={"/images/supporting-team-process.png"}
                width={1136}
                height={338}
                alt="icon"
              />
            </div>

            <Link href="#" className="button">
              Explore Lifecycle Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Section Power Transformation */}
      <section className="section power-transformation">
        <div className="container">
          <div className="col">
            <div className="content">
              <div className="section-header">
                <h3>Feedback That Powers Transformation</h3>
                <h4>
                  Sentimeter turns employee feedback into meaningful actions,
                  helping you
                </h4>
              </div>

              <ul className="checklist yellow">
                <li className="checklist-item">
                  Enhance satisfaction and retention rates.
                </li>
                <li className="checklist-item">
                  Build a more inclusive and engaging workplace culture.
                </li>
                <li className="checklist-item">
                  Align employee experience strategies with business objectives.
                </li>
              </ul>
              <div className="section-footer">
                <p className="note">
                  “A happy, engaged workforce isn’t just better for employees—it
                  drives business success.”
                </p>
                <Link href="#" className="button">
                  See Success Stories
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <Image
              src={"/images/image-power-transformation.png"}
              width={799}
              height={387}
              alt="power transformation"
            />
          </div>
        </div>
      </section>

      {/* Smart Survery */}
      <section className="section has-bg smart-survey">
        <div className="card">
          <div className="container">
            <div className="col">
              <div className="content">
                <h3>Smarter Surveys for Better Insights</h3>
                <p>
                  Go beyond collecting data to deliver actionable insights that
                  matter.
                </p>
                <Link href="#" className="button">
                  Learn More About Smarter Surveys
                </Link>
              </div>
            </div>
            <div className="col">
              <h4>Core Pillars</h4>
              <Image
                src={"/images/core-pillars.svg"}
                width={792}
                height={412}
                alt="core pillars"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="section has-bg blue real-results">
        <div className="card">
          <div className="container">
            <div className="col image-holder">
              <Image
                src={"/images/image-real-results.png"}
                width={887}
                height={476}
                alt="core pillars"
              />
            </div>
            <div className="col">
              <div className="content">
                <h3>Real Results, Real Impact</h3>
                <p>
                  Leading organizations trust Sentimeter to elevate their
                  employee experience and foster growth.
                </p>
                <Link href="#" className="button">
                  Learn More About Smarter Surveys
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Employee */}
      <section className="section has-bg transform-employee">
        <div className="card">
          <div className="container">
            <div className="content">
              <Image
                src={"/images/icon-transform-employee.svg"}
                width={87}
                height={75}
                alt="core pillars"
              />
              <h3>
                Transform Your Employee Experience with <span>Sentimeter</span>
              </h3>
              <p>
                Begin building a more engaged, satisfied, and productive
                workforce with Sentimeter.
              </p>
              <Link href="#" className="button button--outline">
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
