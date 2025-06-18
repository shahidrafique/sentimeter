import Clients from "../../components/clients";
import Link from "next/link";
import ScaledImage from "@/app/components/scaled-image";
export default function page() {
  return (
    <article className="phase4">
      {/* Sub Header */}
      <section className="sub-header">
        <div className="container">
          <div className="sub-header-left">
            <ScaledImage
              src={"/images/cx/senti-cx.svg"}
              width={240}
              height={96}
              alt="senti cx"
              min={144}
            />
            <div className="page-title">
              <ScaledImage
                src={"/images/icon-cx-phase-4.svg"}
                width={80}
                height={80}
                alt="icon"
                min={30}
              />
              Implement Data-Driven CX Enhancements
            </div>
          </div>
          <div className="sub-header-right">
            <a href="/cx">
              <ScaledImage
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
              <h3>Take Meaningful Action to Improve CX</h3>
              <h2>
                Improve <span>Experiences</span> With Smarter Actions
              </h2>
              <p>
                From prioritizing critical feedback to automating workflows,
                Sentimeter empowers your team to act where it matters most.
                Resolve issues, close the loop with customers, and refine
                experiences at every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Clients />

      {/* Prioritize What Matters Most */}
      <section className="section has-bg blue prioritize-what-matters">
        <div className="card">
          <div className="container has-col-border">
            <div className="col content-group has-inner-text-blue">
              <div className="section-header">
                <h2>
                  <span>Prioritize</span> What Matters Most
                </h2>
              </div>
              <div className="content">
                <p>
                  Overwhelmed by feedback? Sentimeter's AI-powered
                  prioritization ensures you focus on what truly matters by
                  ranking feedback based on urgency and impact.
                </p>
              </div>
              <div className="section-footer">
                <p>
                  <span>Why It Matters:</span> “Focusing on what truly matters
                  lets you create meaningful change without wasting resources.”
                </p>
                <div className="row">
                  <p>See How Prioritization Works</p>
                  <Link href="/demo-form" className="button">
                    Request a Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <h4>Key Features</h4>
              <div className="analyze-features">
                <div className="feature blue">
                  <ScaledImage
                    src={"/images/cx/phase4/icon-priority-ranking.svg"}
                    width={80}
                    height={80}
                    alt="icon priority ranking"
                  />
                  <div className="content">
                    <h5 className="blue-100">Priority Ranking:</h5>
                    <p>
                      Identify feedback with the greatest influence on
                      satisfaction and loyalty.
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <ScaledImage
                    src={"/images/cx/phase4/icon-transactional-analytics.svg"}
                    width={80}
                    height={80}
                    alt="icon transactional analytics"
                  />
                  <div className="content">
                    <h5 className="blue-80">
                      Transactional Analytics (RFM Analysis):
                    </h5>
                    <p>
                      Understand customer behaviors and recovery needs for
                      smarter prioritization.
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <ScaledImage
                    src={"/images/cx/phase4/icon-high-value-customer.svg"}
                    width={80}
                    height={80}
                    alt="icon high value customer"
                  />
                  <div className="content">
                    <h5 className="blue-70">High-Value Customer Focus:</h5>
                    <p>
                      Address feedback from your most impactful customers first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automate workflows */}
      <section className="section has-bg automate-workflows">
        <div className="container">
          <div className="col">
            <ScaledImage
              src={"/images/cx/phase4/screenshot-automated-workflow.png"}
              width={772}
              height={414}
              alt="screenshot automated workflow"
            />
          </div>
          <div className="col content-group has-inner-text-blue">
            <div className="section-header">
              <h2>Automate Workflows for Seamless Action</h2>
            </div>
            <div className="content">
              <p>
                Ensure no feedback is left unaddressed with Sentimeter's
                automated workflows. Streamline processes to track, assign, and
                resolve every concern efficiently.
              </p>
              <ul className="checklist blue">
                <li className="checklist-item">
                  <span>Real-Time Alerts:</span> Instantly flag and prioritize
                  critical feedback.
                </li>
                <li className="checklist-item">
                  <span>Auto-Assign Cases:</span> Route issues to the right
                  teams for faster resolutions.
                </li>
                <li className="checklist-item">
                  <span>Resolution Tracking:</span> Monitor issue progress from
                  start to finish, ensuring accountability.
                </li>
              </ul>
            </div>
            <div className="section-footer">
              <p>
                <span>Why It Matters:</span> “Monitor issue progress from start
                to finish, ensuring accountability.“
              </p>
              <div className="row">
                <p>Explore Workflow Automation</p>
                <Link href="#" className="button">
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate Across Teams Without Chaos */}
      <section className="section has-bg collaborate">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/cx/icon-collaborate.svg"}
                width={111}
                height={111}
                alt="icon collaborate"
              />
            </div>

            <div className="col content">
              <h3>
                <span>Collaborate</span> Across Teams Without Chaos
              </h3>
              <p>
                Break down silos with Sentimeter's unified dashboards. Empower
                CX, marketing, and operations teams to collaborate effectively
                and align on customer priorities.
              </p>
              <h5>Key Features:</h5>
              <div className="row">
                <div className="col">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/cx/icon-dynamic-filtering.svg"}
                      width={88}
                      height={88}
                      alt="icon dynamic filtering"
                    />
                  </div>
                  <h4>Dynamic Filtering</h4>
                  <p>
                    Segment data by sentiment, geography, customer type, or
                    engagement metrics.
                  </p>
                </div>
                <div className="col">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/cx/phase4/icon-unified-dashboard.svg"}
                      width={88}
                      height={88}
                      alt="icon unified dashboard"
                    />
                  </div>
                  <h4>Unified Dashboards</h4>
                  <p>
                    Provide cross-team visibility into feedback and progress.
                  </p>
                </div>
                <div className="col">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/cx/phase4/icon-role-based-insights.svg"}
                      width={88}
                      height={88}
                      alt="icon role based insights"
                    />
                  </div>
                  <h4>Role-Based Insights</h4>
                  <p>
                    Deliver tailored data to ensure every team gets what they
                    need.
                  </p>
                </div>
              </div>
              <p>
                <span>Why It Matters:</span> "When teams collaborate, customer
                experience improves—and everyone wins."
              </p>
              <div className="row">
                <Link href="#" className="link">
                  See How Teams Collaborate
                </Link>
                <Link href="#" className="button button--outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Trust */}
      <section className="section has-bg blue">
        <div className="card">
          <div className="container">
            <div className="content-group has-inner-text-blue">
              <div className="section-header">
                <h2>
                  Close the Loop to <span>Build Trust</span>
                </h2>
              </div>
              <div className="content">
                <p>
                  Show customers that their voices are heard. Sentimeter's
                  recovery management tools ensure you close the loop by
                  addressing concerns and sharing how their feedback drives
                  improvements.
                </p>
                <div className="card-blocks">
                  <div className="card-blocks-item green">
                    <ScaledImage
                      src={"/images/cx/phase4/icon-customer-connect.svg"}
                      width={50}
                      height={50}
                      alt="icon customer connect"
                    />
                    <h5>Customer Connect Box</h5>
                    <p>
                      Engage directly with customers using branded messaging.
                    </p>
                  </div>
                  <div className="card-blocks-item yellow">
                    <ScaledImage
                      src={"/images/cx/phase4/icon-recovery-confirmation.svg"}
                      width={50}
                      height={50}
                      alt="icon recovery confirmation"
                    />
                    <h5>Recovery Confirmation</h5>
                    <p>Automate follow-ups to confirm resolution.</p>
                  </div>
                  <div className="card-blocks-item red">
                    <ScaledImage
                      src={"/images/cx/phase4/icon-feedback-driven.svg"}
                      width={50}
                      height={50}
                      alt="icon recovery confirmation"
                    />
                    <h5>Feedback-Driven Updates</h5>
                    <p>
                      Highlight how customer input leads to tangible
                      improvements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="section-footer">
                <p>
                  <span>Why It Matters:</span> “Closing the loop builds trust,
                  strengthens relationships, and turns customers into
                  advocates.“
                </p>
                <div className="row">
                  <p>Learn How to Close the Loop</p>
                  <Link href="/demo-form" className="button">
                    Request a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Improvement Made Easy */}
      <section className="section has-bg continuous-improvement">
        <div className="container">
          <div className="col content-group has-inner-text-blue">
            <div className="section-header">
              <h2>
                Continuous <span>Improvement</span> Made Easy
              </h2>
            </div>
            <div className="content">
              <p>
                Sentimeter's real-time dashboards and automated reporting keep
                your team on top of progress, enabling constant refinement of
                strategies.
              </p>
              <ul className="checklist blue">
                <li className="checklist-item">
                  <span>Live Dashboards:</span> Monitor metrics like NPS and
                  CSAT in real time.
                </li>
                <li className="checklist-item">
                  <span>Automated Reporting:</span> Generate periodic
                  huddle-ready reports or export CSVs for detailed analysis.
                </li>
                <li className="checklist-item">
                  <span>Ongoing Analysis:</span> Use dynamic filtering and
                  insights to uncover new opportunities for improvement.
                </li>
              </ul>
            </div>
            <div className="section-footer">
              <p>
                <span>Why It Matters:</span> “Continuous improvement ensures
                you're always delivering what your customers need.”
              </p>
              <div className="row">
                <p>Discover Continuous Improvement Tools</p>
                <Link href="#" className="button">
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <ScaledImage
              src={"/images/cx/phase4/illustration-continuous-improvement.svg"}
              width={750}
              height={500}
              alt="illustration continuous improvement"
            />
          </div>
        </div>
      </section>

      {/* Why Improve With Sentimeter? */}
      <section className="section has-bg blue">
        <div className="card">
          <div className="container has-col-border">
            <div className="col content-group has-inner-text-blue analyze-and-refine-left">
              <div className="section-header">
                <h2>
                  Why Improve With <span>Sentimeter?</span>
                </h2>
              </div>
              <div className="content">
                <p>
                  Sentimeter transforms insights into actions by automating
                  processes, prioritizing feedback, and aligning teams to
                  deliver exceptional customer experiences.
                </p>
              </div>
              <div className="section-footer">
                <div className="row">
                  <p>See How Actionable Insights Drive Results</p>
                  <Link href="#" className="button">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col analyze-and-refine-right">
              <h4>Key Features:</h4>
              <ul className="checklist blue">
                <li className="checklist-item">
                  <span>Proactive Feedback Resolution:</span> Prevent issues
                  with real-time alerts and automated workflows.
                </li>
                <li className="checklist-item">
                  <span>Collaborative Dashboards:</span> Unite teams with shared
                  insights and action plans.
                </li>
                <li className="checklist-item">
                  <span>Recovery Management Module:</span> Built-in tools to
                  address grievances quickly and effectively.
                </li>
                <li className="checklist-item">
                  <span>Actionable Data:</span> Use advanced analytics like RFM
                  and dynamic filtering to focus efforts where they matter most.
                </li>
                <li className="checklist-item">
                  <span>Continuous Improvement:</span> Leverage live dashboards
                  and automated reporting to refine strategies in real time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
