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
            <Link href="#" className="button button--outline">
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
              <h3>Elevate Employee Experience with</h3>
              <h2>Data-Driven Precision</h2>
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
              <Link href="#" className="button">
                Explore Why Sentimeter
              </Link>
            </div>
            <div className="employee-experience-right">
              <h3>Key Benefits:</h3>
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
                <a href="#" className="button">
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
                <h4>Make Feedback Fearless and Effortless</h4>
                <p>
                  Simplify feedback with automated surveys while ensuring
                  anonymity for honest responses.
                </p>
                <a href="#" className="button green">
                  Discover Seamless Feedback Tools
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
                <h4>Make Feedback Fearless and Effortless</h4>
                <p>
                  Simplify feedback with automated surveys while ensuring
                  anonymity for honest responses.
                </p>
                <a href="#" className="button yellow">
                  Discover Seamless Feedback Tools
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
                <h4>Make Feedback Fearless and Effortless</h4>
                <p>
                  Simplify feedback with automated surveys while ensuring
                  anonymity for honest responses.
                </p>
                <a href="#" className="button light-blue">
                  Discover Seamless Feedback Tools
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
            <h3>Empowering Employee Experience at Every Stage</h3>
            <h4>
              From recruitment to retention, Sentimeter drives engagement and
              actionable insights.
            </h4>
            <div className="row">
              <div className="col">
                <div className="col-content">
                  <div className="icon">
                    <Image
                      src={"/images/employee-icon-1.svg"}
                      width={86}
                      height={86}
                      alt="icon"
                    />
                  </div>
                  <h4>Omnichannel Surveys</h4>
                  <p>
                    Meet employees where they are with tools they already use.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="col-content">
                  <div className="icon">
                    <Image
                      src={"/images/employee-icon-2.svg"}
                      width={86}
                      height={86}
                      alt="icon"
                    />
                  </div>
                  <h4>Guaranteed Anonymity</h4>
                  <p>Build trust with fearless feedback mechanisms.</p>
                </div>
              </div>
              <div className="col">
                <div className="col-content">
                  <div className="icon">
                    <Image
                      src={"/images/employee-icon-3.svg"}
                      width={86}
                      height={86}
                      alt="icon"
                    />
                  </div>
                  <h4>Advanced Analytics</h4>
                  <p>
                    Decode trends, emotions, and root causes with AI-powered
                    insights.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="col-content">
                  <div className="icon">
                    <Image
                      src={"/images/employee-icon-4.svg"}
                      width={86}
                      height={86}
                      alt="icon"
                    />
                  </div>
                  <h4>Real-Time Dashboards</h4>
                  <p>Monitor feedback and act on live data.</p>
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
            <h3>Empowering Employee Experience at Every Stage</h3>
            <h4>
              From recruitment to retention, Sentimeter drives engagement and
              actionable insights.
            </h4>
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
              <h3>Feedback That Powers Transformation</h3>
              <h4>
                Sentimeter turns employee feedback into meaningful actions,
                helping you
              </h4>
              <ul>
                <li>Enhance satisfaction and retention rates.</li>
                <li>Build a more inclusive and engaging workplace culture.</li>
                <li>
                  Align employee experience strategies with business objectives.
                </li>
              </ul>
              <p>
                “A happy, engaged workforce isn’t just better for employees—it
                drives business success.”
              </p>
              <Link href="#" className="button">
                See Success Stories
              </Link>
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
                src={"/images/core-pillar.png"}
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
