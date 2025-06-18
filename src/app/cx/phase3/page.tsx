import Clients from "../../components/clients";
import Link from "next/link";
import ScaledImage from "@/app/components/scaled-image";
export default function page() {
  return (
    <article className="phase3">
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
                src={"/images/icon-cx-phase-3.svg"}
                width={80}
                height={80}
                alt="icon"
                min={30}
              />
              Turn Customer Feedback into Data-Driven Insights
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
              <h3>Analyze and Refine</h3>
              <h2 className="title">
                Leverage <span>AI-Driven Data</span> Insights for Smarter
                Decisions
              </h2>
              <p>
                Leverage the power of Sentimeter's advanced analytics to decode
                customer emotions, uncover trends, and refine customer journeys.
                With tools that map feedback touchpoints onto your journeys,
                you'll address gaps and drive actionable improvements across
                every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Clients />

      {/* Comprehensive View */}
      <section className="section has-bg yellow comprehensive-view">
        <div className="card">
          <div className="container has-col-border">
            <div className="col content-group has-inner-text-yellow comprehensive-view-left">
              <div className="section-header">
                <h2>
                  Unify Your Data for a <span>Comprehensive View</span>
                </h2>
              </div>
              <div className="content">
                <p>
                  Unify Feedback Channels for a Complete Customer View — emails,
                  surveys, chat logs, social media, and more — into one
                  centralized dashboard. Sentimeter provides a seamless,
                  real-time integration of data streams to simplify
                  decision-making.
                </p>
              </div>
              <div className="section-footer">
                <p>
                  <span>Why It Matters:</span> “Unified data reduces complexity,
                  enabling faster and smarter decisions.”
                </p>
                <div className="row">
                  <p>Turn Data Into Clarity</p>
                  <Link href="#" className="button">
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="comprehensive-view-right">
              <h4>Key Features:</h4>
              <ul className="checklist yellow">
                <li className="checklist-item">
                  <span>Create a Single Source of Truth for CX Data:</span>{" "}
                  Bring every feedback channel together for easier analysis.
                </li>
                <li className="checklist-item">
                  <span>
                    Segment Customer Feedback by Sentiment, Location & Behavior:
                  </span>{" "}
                  Analyze trends by sentiment, geography, or customer segment.
                </li>
                <li className="checklist-item">
                  <span>Multi-Source Data Integration:</span> Connect siloed
                  datasets, including CRMs, social media, chat logs, and call
                  transcripts.
                </li>
                <li className="checklist-item">
                  <span>
                    Custom Dashboards for CX, Marketing & Product Teams:
                  </span>{" "}
                  Tailored insights for CX, marketing, and product teams.
                </li>
                <li className="checklist-item">
                  <span>
                    Access Real-Time Customer Insights Anytime, Anywhere:
                  </span>{" "}
                  Access real-time insights anytime, anywhere.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive View */}
      <section className="section has-bg customer-emotions">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/cx/phase3/icon-emotions.svg"}
                width={133}
                height={133}
                alt="icon emotions"
              />
            </div>

            <div className="col content">
              <h3>
                Uncover <span>Customer Emotions</span> & Identify Key Issues
              </h3>
              <p>
                Go beyond surface-level data. Sentimeter's sentiment analysis
                and root cause tools uncover the "why" behind customer behavior,
                helping you focus on the areas that matter most.
              </p>
              <h5>Key Features:</h5>
              <div className="row">
                <div className="col">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/cx/phase3/icon-ai-powered.svg"}
                      width={88}
                      height={88}
                      alt="icon ai powered"
                    />
                  </div>
                  <h4>AI-Powered Sentiment Analysis for CX</h4>
                  <p>
                    Detect emotions like frustration, satisfaction, and urgency.
                  </p>
                </div>
                <div className="col">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/cx/phase3/icon-identify-system-issue.svg"}
                      width={88}
                      height={88}
                      alt="icon identify system issue"
                    />
                  </div>
                  <h4>Identify & Resolve Systemic CX Issues</h4>
                  <p>Pinpoint systemic issues and address them directly.</p>
                </div>
                <div className="col">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/cx/phase3/icon-understand-behavior.svg"}
                      width={88}
                      height={88}
                      alt="icon understand behavior"
                    />
                  </div>
                  <h4>Understand Customer Behavior Through RFM Analytics</h4>
                  <p>
                    Understand customer behaviors and identify key recovery
                    needs.
                  </p>
                </div>
              </div>
              <p>
                <span>Why It Matters:</span> “Understanding emotions and root
                causes enables you to resolve pain points effectively.“
              </p>
              <div className="row">
                <Link href="#" className="link">
                  Discover Emotional Insights
                </Link>
                <Link href="#" className="button button--outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Analytics */}
      <section className="section has-bg blue predictive-analytics">
        <div className="card">
          <div className="container">
            <div className="content-group has-inner-text-blue">
              <div className="section-header">
                <h2>Predictive Analytics for Smarter Planning</h2>
                <p>
                  Move from reactive to proactive. Sentimeter's predictive tools
                  help you anticipate customer needs, loyalty trends, and
                  potential churn before they happen.
                </p>
              </div>
              <div className="card-blocks">
                <div className="card-blocks-item yellow">
                  <ScaledImage
                    src={"/images/cx/phase3/icon-identify.svg"}
                    width={50}
                    height={50}
                    alt="icon identify"
                  />
                  <h5>Identify At-Risk Customers & Reduce Churn</h5>
                  <p>Identify at-risk customers for targeted interventions.</p>
                </div>
                <div className="card-blocks-item yellow">
                  <ScaledImage
                    src={"/images/cx/phase3/icon-scenario-modeling.svg"}
                    width={50}
                    height={50}
                    alt="icon scenario modeling"
                  />
                  <h5>Scenario Modeling</h5>
                  <p>
                    Simulate initiatives and predict their potential impact.
                  </p>
                </div>
                <div className="card-blocks-item yellow">
                  <ScaledImage
                    src={"/images/cx/phase3/icon-metric-based-insights.svg"}
                    width={50}
                    height={50}
                    alt="icon metric based insights"
                  />
                  <h5>Metric-Based Insights</h5>
                  <p>
                    Use NPS, CSAT, and CES data to focus efforts on the highest
                    ROI areas.
                  </p>
                </div>
              </div>
              <div className="section-footer">
                <p>
                  <span>Why It Matters:</span> “Proactive planning minimizes
                  risks and maximizes opportunities.“
                </p>
                <div className="row">
                  <p>Predict Customer Behavior</p>
                  <Link href="#" className="button">
                    Schedule a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spot Trends, Act Fast */}
      <section className="section spot-trends">
        <div className="container">
          <div className="spot-trends-left">
            <div className="content-group has-inner-text-yellow">
              <div className="section-header">
                <h2>
                  <span>Spot</span> Trends, Act Fast
                </h2>
              </div>
              <div className="content">
                <p>
                  Identify anomalies and trends early to stay agile and
                  proactive. With Sentimeter's anomaly detection tools, you'll
                  address potential risks before they escalate.
                </p>
              </div>
              <div className="section-footer">
                <p>
                  <span>Why It Matters:</span> “Spotting issues early prevents
                  problems from growing into larger challenges.”
                </p>
                <div className="row">
                  <p>Stay Ahead of Trends</p>
                  <Link href="#" className="button">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="spot-trends-right">
            <h5>Key Features:</h5>
            <div className="features-capsule">
              <div className="features-capsule-item">
                <div className="icon">
                  <ScaledImage
                    src={"/images/cx/phase3/icon-trend-identification.svg"}
                    width={50}
                    height={50}
                    alt="icon trend identification"
                  />
                  <h5>Trend Identification</h5>
                </div>
                <div className="content">
                  Spot unusual patterns like spikes in complaints or drops in
                  satisfaction.
                </div>
              </div>
              <div className="features-capsule-item">
                <div className="icon">
                  <ScaledImage
                    src={"/images/cx/phase3/icon-proactive-alerts.svg"}
                    width={50}
                    height={50}
                    alt="icon proactive alerts"
                  />
                  <h5>Proactive Alerts</h5>
                </div>
                <div className="content">
                  Act fast on emerging issues to protect your brand and customer
                  trust.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analyze and Refine */}
      <section className="section has-bg yellow analyze-and-refine">
        <div className="card">
          <div className="container has-col-border">
            <div className="col content-group has-inner-text-yellow analyze-and-refine-left">
              <div className="section-header">
                <h2>
                  Why <span>Analyze and Refine</span> with Sentimeter?
                </h2>
              </div>
              <div className="content">
                <p>
                  Sentimeter transforms raw data into actionable strategies. By
                  connecting feedback to journeys, refining insights, and
                  leveraging predictive tools, businesses can enhance customer
                  experiences at every touchpoint.
                </p>
              </div>
              <div className="section-footer">
                <div className="row">
                  <p>Turn Feedback Into Smarter Strategies</p>
                  <Link href="#" className="button">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="analyze-and-refine-right">
              <h4>Key Features:</h4>
              <ul className="checklist yellow">
                <li className="checklist-item">
                  <span>Enhanced Journey Mapping:</span> Layer feedback onto
                  journeys for unmatched clarity.
                </li>
                <li className="checklist-item">
                  <span>Comprehensive Data Integration:</span> Unify structured
                  and unstructured data from all sources.
                </li>
                <li className="checklist-item">
                  <span>Proactive Insights:</span> Predict and act on trends
                  before they impact loyalty.
                </li>
                <li className="checklist-item">
                  <span>Built-In Recovery Management:</span> Resolve issues
                  seamlessly within the platform.
                </li>
                <li className="checklist-item">
                  <span>Continuous Improvement:</span> Iterate based on evolving
                  insights and customer expectations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
