import Image from "next/image";
import Clients from "../../components/clients";
import Link from "next/link";
export default function page() {
  return (
    <article className="phase5">
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

      {/* Ready-Made Reports That Write Themselves */}
      <section className="section has-bg blue ready-made-reports">
        <div className="card">
          <div className="container">
            <div className="col content-group has-inner-text-blue">
              <h2>
                Ready-Made <span>Reports</span> That Write Themselves
              </h2>
              <p>
                Gone are the days of manually compiling data. Sentimeter’s
                pre-built templates offer actionable insights tailored to your
                team’s needs, ensuring you stay focused on what matters most.
              </p>
              <p>
                <span>Why It Matters:</span> “Spend less time compiling reports
                and more time driving smarter decisions.”
              </p>
              <div className="row">
                <a href="#" className="link">
                  <span>See Ready-Made</span>
                  <span>Reports in Action</span>
                </a>
                <Link href="#" className="button">
                  Book a Demo
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="analyze-features">
                <div className="feature blue">
                  <Image
                    src={"/images/cx/phase5/icon-pre-build-template.svg"}
                    width={50}
                    height={50}
                    alt="icon pre-build template"
                  />
                  <div className="content">
                    <h5 className="blue-100">Pre-Built Templates:</h5>
                    <p>Ready-to-go reports for NPS, CSAT, CES, and more.</p>
                  </div>
                </div>
                <div className="feature">
                  <Image
                    src={"/images/cx/phase5/icon-automated-updates.svg"}
                    width={50}
                    height={50}
                    alt="icon automated updates"
                  />
                  <div className="content">
                    <h5 className="blue-80">Automated Updates:</h5>
                    <p>Keep reports fresh with real-time data integration.</p>
                  </div>
                </div>
                <div className="feature">
                  <Image
                    src={"/images/cx/phase5/icon-periodic-summaries.svg"}
                    width={50}
                    height={50}
                    alt="icon periodic summaries"
                  />
                  <div className="content">
                    <h5 className="blue-70">Periodic Summaries:</h5>
                    <p>Generate huddle-ready PDF reports to align teams.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards Built for Every Team */}
      <section className="section has-bg collaborate">
        <div className="card">
          <div className="container">
            <div className="col">
              <Image
                src={"/images/cx/icon-collaborate.svg"}
                width={111}
                height={111}
                alt="icon collaborate"
              />
            </div>

            <div className="col content">
              <h3>
                <span>Dashboards</span> Built for Every Team
              </h3>
              <p>
                Empower every department with dashboards that deliver what they
                need most. Sentimeter’s role-specific insights make data
                accessible, actionable, and impactful.
              </p>
              <h5>Key Features:</h5>
              <div className="row">
                <div className="col">
                  <div className="icon">
                    <Image
                      src={"/images/cx/icon-dynamic-filtering.svg"}
                      width={88}
                      height={88}
                      alt="icon dynamic filtering"
                    />
                  </div>
                  <h4>Dynamic Filters</h4>
                  <p>Segment data by sentiment, geography, or customer type.</p>
                </div>
                <div className="col">
                  <div className="icon">
                    <Image
                      src={"/images/cx/phase5/icon-customizeable-view.svg"}
                      width={88}
                      height={88}
                      alt="icon customizeable view"
                    />
                  </div>
                  <h4>Customizable Views</h4>
                  <p>
                    Dashboards tailored to the unique goals of CX, marketing,
                    and product teams.
                  </p>
                </div>
                <div className="col">
                  <div className="icon">
                    <Image
                      src={"/images/cx/phase5/icon-csv-exports.svg"}
                      width={88}
                      height={88}
                      alt="icon csv exports"
                    />
                  </div>
                  <h4>CSV Exports</h4>
                  <p>
                    Generate datasheets filtered by custom criteria for offline
                    analysis and distribution.
                  </p>
                </div>
              </div>
              <p>
                <span>Why It Matters:</span> “Custom dashboards turn insights
                into strategies everyone can use.“
              </p>
              <div className="row">
                <Link href="#" className="link">
                  <span>Explore</span>
                  <span>Custom Dashboards</span>
                </Link>
                <Link href="/demo-form" className="button button--outline">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights on the Go */}
      <section className="section has-bg automate-workflows">
        <div className="container">
          <div className="col">
            <Image
              src={"/images/cx/phase5/screenshot-insights.png"}
              width={754}
              height={446}
              alt="screenshot insights"
            />
          </div>
          <div className="col content-group has-inner-text-blue">
            <h2>
              <span>Insights</span> on the Go
            </h2>
            <p>
              Your data should work wherever you are. Sentimeter’s
              mobile-friendly dashboards keep you agile, ensuring informed
              decisions anytime, anywhere.
            </p>
            <ul className="checklist blue">
              <li className="checklist-item">
                <span>Mobile Accessibility:</span> Access real-time insights on
                the move.
              </li>
              <li className="checklist-item">
                <span>Optimized Dashboards:</span> Fast, intuitive interfaces
                for quick decision-making.
              </li>
            </ul>
            <p>
              <span>Why It Matters:</span> "Agile decisions need agile tools.
              Stay ahead wherever you are.”
            </p>
            <div className="row">
              <a href="#" className="link">
                <span>Take Your</span>
                <span>Insights Mobile</span>
              </a>
              <Link href="#" className="button">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* See the Full Customer Journey */}
      <section className="section has-bg continuous-improvement">
        <div className="container align-center">
          <div className="col content-group has-inner-text-blue">
            <h2>
              See the Full <span>Customer Journey</span>
            </h2>
            <p>
              Customer experiences span multiple channels—your insights should,
              too. Sentimeter unifies every interaction into a cohesive view for
              better strategies.
            </p>
            <ul className="checklist blue">
              <li className="checklist-item">
                <span>Omnichannel Tracking:</span> Connect insights from social
                media, emails, in-store visits, apps, and more.
              </li>
              <li className="checklist-item">
                <span>Cross-Channel Analytics:</span> Uncover trends and refine
                customer journeys holistically.analysis.
              </li>
            </ul>
            <p>
              <span>Why It Matters:</span> “A complete view of the journey helps
              you improve every step.“
            </p>
            <div className="row">
              <a href="#" className="link">
                <span>Explore Omnichannel</span>
                <span>Tracking</span>
              </a>
              <Link href="#" className="button">
                Book a Demo
              </Link>
            </div>
          </div>
          <div className="col">
            <Image
              src={"/images/cx/phase5/illustration-customer-journey.svg"}
              width={566}
              height={566}
              alt="illustration customer journey"
            />
          </div>
        </div>
      </section>

      {/* Share Insights Securely */}
      <section className="section share-insights-securely">
        <div className="container">
          <div className="share-insights-securely-left">
            <div className="content-group has-inner-text-yellow">
              <h2>
                <span>Share</span> Insights Securely
              </h2>
              <p>
                Data security isn’t optional. Sentimeter ensures your reports
                and dashboards are both secure and accessible to the right
                stakeholders.
              </p>
              <p>
                <span>Why It Matters:</span> "Trust starts with keeping your
                data secure and accessible only to authorized users.”
              </p>
              <div className="row">
                <Link href="#" className="link">
                  <span>Learn About</span>
                  <span>Secure Sharing</span>
                </Link>
                <Link href="#" className="button">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="share-insights-securely-right">
            <h5>Key Features:</h5>
            <div className="features-capsule">
              <div className="features-capsule-item">
                <div className="icon">
                  <Image
                    src={"/images/cx/phase5/icon-role-based-permissions.svg"}
                    width={50}
                    height={50}
                    alt="icon role based permissions"
                  />
                  <h5>Role-Based Permissions</h5>
                </div>
                <div className="content">
                  <span>Role-Based Permissions:</span> Control access based on
                  roles and responsibilities.
                </div>
              </div>
              <div className="features-capsule-item">
                <div className="icon">
                  <Image
                    src={"/images/cx/phase5/icon-global-compliance.svg"}
                    width={50}
                    height={50}
                    alt="icon-global-compliance"
                  />
                  <h5>Global Compliance</h5>
                </div>
                <div className="content">
                  <span>Global Compliance:</span> Built-in adherence to GDPR,
                  ISO 27001, and other privacy standards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prove ROI and Predict the Future */}
      <section className="section has-bg blue">
        <div className="card">
          <div className="container">
            <div className="content-group has-inner-text-blue">
              <h2>
                Prove <span>ROI and Predict</span> the Future
              </h2>
              <p>
                Move beyond the present. Sentimeter’s advanced tools help you
                forecast trends, measure success, and connect actions to
                measurable business outcomes.
              </p>
              <div className="card-blocks">
                <div className="card-blocks-item green">
                  <Image
                    src={"/images/cx/phase5/icon-churn-predictors.svg"}
                    width={50}
                    height={50}
                    alt="icon churn predictors"
                  />
                  <h5>Churn Predictors</h5>
                  <p>Spot at-risk customers before it’s too late.</p>
                </div>
                <div className="card-blocks-item yellow">
                  <Image
                    src={"/images/cx/phase5/icon-roi-calculators.svg"}
                    width={50}
                    height={50}
                    alt="icon roi calculators"
                  />
                  <h5>ROI Calculators</h5>
                  <p>Link customer insights directly to business impact.</p>
                </div>
                <div className="card-blocks-item red">
                  <Image
                    src={"/images/cx/phase5/icon-scenario-modeling-red.svg"}
                    width={50}
                    height={50}
                    alt="icon scenario modeling"
                  />
                  <h5>Scenario Modeling</h5>
                  <p>Test initiatives and predict their outcomes.</p>
                </div>
              </div>
              <p>
                <span>Why It Matters:</span> “Proving ROI isn’t just about
                numbers—it’s about building trust in your strategy.“
              </p>
              <div className="row">
                <a href="#" className="link">
                  <span>Learn How to</span>
                  <span>Close the Loop</span>
                </a>
                <Link href="#" className="button">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Continuous Improvement Matters */}
      <section className="section has-bg continuous-improvement">
        <div className="container">
          <div className="col">
            <Image
              src={
                "/images/cx/phase5/illustration-why-continuous-improvement-matters.svg"
              }
              width={541}
              height={541}
              alt="illustration why continuous improvement matters"
            />
          </div>
          <div className="col content-group has-inner-text-blue">
            <h2>
              Why <span>Continuous Improvement</span> Matters
            </h2>
            <ul className="checklist blue">
              <li className="checklist-item">
                Build stronger customer relationships through iterative
                feedback.
              </li>
              <li className="checklist-item">
                Empower smarter, faster decisions with actionable insights.
              </li>
              <li className="checklist-item">
                Foster a culture of innovation by continuously refining
                strategies.
              </li>
            </ul>
            <div className="row">
              <a href="#" className="link">
                <span>See How Reporting</span>
                <span>Fuels Innovation</span>
              </a>
              <Link href="#" className="button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
