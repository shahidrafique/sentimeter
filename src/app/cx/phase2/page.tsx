import Clients from "../../components/clients";
import Link from "next/link";
import ScaledImage from "@/app/components/scaled-image";
export default function page() {
  return (
    <article className="phase2">
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
                src={"/images/icon-cx-phase-2.svg"}
                width={80}
                height={80}
                alt="icon"
                min={30}
              />
              Understand Employee Relationships
            </div>
          </div>
          <div className="sub-header-right">
            <a href="/cx">
              <ScaledImage
                src={"/images/blue-back-arrow.svg"}
                width={35}
                height={35}
                alt="back"
                min={20}
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
              <h3>Collect Feedback That Matters</h3>
              <h2 className="title">
                <span>Collect Customer</span> Insights Across Every Touchpoint
              </h2>
              <p>
                Transform Every Customer Interaction into Business Growth.
                Sentimeter makes feedback collection seamless, ensuring every
                voice is heard and no signal is missed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Clients />

      {/* Feedback */}
      <section className="section has-bg green feedback">
        <div className="card">
          <div className="container has-col-border">


            <div className="col content-group has-inner-text-green">
              <div className="section-header">
                <h2>
                  <span>Feedback</span> That Covers Every Corner
                </h2>
              </div>
              <p>
                Complete Your Customer Experience Puzzle with AI-Powered
                Insights. Sentimeter consolidates feedback from every channel,
                providing a complete view of your customer’s journey.
              </p>
              <div className="section-footer">
                <p>
                  <span>Why It Matters:</span>
                  <i>
                    “Listening everywhere helps you understand what your customers really need.“
                  </i>
                </p>
                <div className="row dir-col">
                  <p>Discover Smarter Feedback Collection</p>
                  <Link href="#" className="button">
                    Schedule a Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="col">
              <h4>Key Features:</h4>
              <ul className="checklist green">
                <li className="checklist-item">
                  <span>Multi-Region Customer Feedback Collection:</span>{" "}
                    Multi-lingual, multi-modal feedback collection ensures
                    inclusivity across regions.
                </li>
                <li className="checklist-item">
                  <span>
                      Omnichannel Feedback Collection for Holistic Insights:
                    </span>{" "}
                    Gather insights from surveys, social media, emails, CRM
                    systems, chat logs, support calls, and more.
                </li>
                <li className="checklist-item">
                  <span>
                      Leverage Passive Feedback for Deeper Customer Insights:
                    </span>{" "}
                    Include passive inputs like online reviews and social
                    mentions for deeper insights.
                </li>
                <li className="checklist-item">
                  <span>
                      Enhance Feedback with Video, Images & Voice Notes:
                    </span>{" "}
                    Collect rich feedback through videos, images, and voice
                    notes.
                </li>
                <li className="checklist-item">
                  <span>
                      Integrate with CRM & Support Systems Effortlessly:
                    </span>{" "}
                    Works with tools you love, like Salesforce, Zendesk, and
                    HubSpot.
                </li>
                <li className="checklist-item">
                  <span>Track NPS, CSAT & CES for Customer Success:</span>{" "}
                    Track NPS for customer loyalty, CSAT for satisfaction, and
                    CES for process simplicity.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ai-powered */}
      <section className="section has-bg ai-powered">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/cx/phase2/image-smart-survey.png"}
                width={125}
                height={125}
                alt="benefit"
              />
            </div>

            <div className="col content">
              <h3>
                AI-Powered <span>Smart Surveys</span> for Authentic Feedback
              </h3>
              <p>
                No one likes survey fatigue. Sentimeter delivers the right
                questions at the right time, encouraging authentic responses
                that drive meaningful insights.
              </p>
              <h5>Key Features:</h5>
              <div className="row">
                <div className="col">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/cx/phase2/smart-survey-icon-1.svg"}
                      width={86}
                      height={86}
                      alt="benefit"
                    />
                  </div>
                  <h4>Deliver Surveys at Optimal Moments for Accuracy</h4>
                  <p>
                    Deliver surveys after purchases, store visits, or support
                    calls.
                  </p>
                </div>

                <div className="col">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/cx/phase2/smart-survey-icon-2.svg"}
                      width={86}
                      height={86}
                      alt="benefit"
                    />
                  </div>
                  <h4>
                    Collect Instant Customer Insights for Better Decisions
                  </h4>
                  <p>Collect input via in-store tablets and mobile apps.</p>
                </div>

                <div className="col">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/cx/phase2/smart-survey-icon-3.svg"}
                      width={86}
                      height={86}
                      alt="benefit"
                    />
                  </div>
                  <h4>Optimize Survey Reach & Reduce Response Fatigue</h4>
                  <p>Reduce survey fatigue while optimizing reach.</p>
                </div>
                <div className="col">
                  <div className="icon">
                    <ScaledImage
                      src={"/images/cx/phase2/smart-survey-icon-4.svg"}
                      width={86}
                      height={86}
                      alt="benefit"
                    />
                  </div>
                  <h4>Methodology in Action</h4>
                  <p>
                    Our hybrid push-pull feedback approach ensures comprehensive
                    data collection.
                  </p>
                </div>
              </div>
              <p>
                <span>Why It Matters: </span>
                <i>
                  “Timely surveys bring in authentic answers without survey
                  fatigue.“
                </i>
              </p>
              <div className="row-button">
                <p>Experience Smarter Surveys</p>
                <div className="button button--outline">Schedule a Call</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* omni-channel */}
      <section className="section has-bg green omni-channel">
        <div className="card">
          <div className="container">
            <h3>
              <ScaledImage
                src={"/images/logo-senticx.svg"}
                width={197}
                height={72}
                alt="Senti CX"
                min={120}
              />
              enables omnichannel engagement
            </h3>
          </div>
          <div className="container">
            {/* Col Start */}
            <div className="col">
              <section className="content-card">
                <h5>solicit feedback</h5>
                <div className="icon">
                  <ScaledImage
                    src={"/images/cx/phase2/omnichannel-icon-1.svg"}
                    width={72}
                    height={72}
                    alt="Senti CX"
                  />
                </div>
                <div className="content">
                  <h4>Encourage Proactive Customer Feedback Engagement</h4>
                  <p>
                    When you have questions, get answers! Proactive outreach
                    encourages timely feedback so you can act quickly on
                    insights you gain. From advanced planning to last-minute
                    invites, SogoCX keeps up.
                  </p>
                </div>
              </section>
            </div>
            {/* Col Start */}
            <div className="col">
              <section className="content-card">
                <h5>welcome insights 24/7</h5>
                <div className="icon">
                  <ScaledImage
                    src={"/images/cx/phase2/omnichannel-icon-2.svg"}
                    width={72}
                    height={72}
                    alt="Senti CX"
                  />
                </div>
                <div className="content">
                  <h4>Foster Continuous Customer Feedback & Interaction</h4>
                  <p>
                    Many CX programs focus only on outreach and disregard the
                    questions and concerns customers have between touchpoints.
                    From ticketing systems to chatbots, welcome all feedback,
                    all the time.
                  </p>
                </div>
              </section>
            </div>
            {/* Col Start */}
            <div className="col">
              <section className="content-card">
                <h5>streamline workflows</h5>
                <div className="icon">
                  <ScaledImage
                    src={"/images/cx/phase2/omnichannel-icon-3.svg"}
                    width={72}
                    height={72}
                    alt="Senti CX"
                  />
                </div>
                <div className="content">
                  <h4>Streamline Feedback Workflows with Automation</h4>
                  <p>
                    From POS to customer service interactions, collect feedback
                    at key moments in the customer journey and keep it coming in
                    regularly with automated workflows and integrations.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* customer-feedback */}
      <section className="section customer-feedback">
        <div className="container">
          <div className="col">
            <div className="content">
              <h2>Link Customer Feedback with Real-World Actions</h2>
              <p>
                What customers say is just the start. Sentimeter connects
                feedback with real-world behavior, turning data into actionable
                strategies.
              </p>

              <ul>
                <li className="green">
                  <p>
                    <span>
                      Analyze Customer Actions for Data-Driven Strategies:
                    </span>{" "}
                    Link feedback to purchase history and engagement metrics.
                  </p>
                </li>
                <li className="yellow">
                  <p>
                    <span>
                      Track Product Performance with SKU-Level Analytics:
                    </span>{" "}
                    Track performance trends for individual products or
                    services.
                  </p>
                </li>
                <li className="red">
                  <p>
                    <span>Focus on Insights That Drive Business Growth:</span>{" "}
                    Focus on feedback that impacts your business the most.
                  </p>
                </li>
              </ul>

              <p className="note">
                <span>Why It Matters:</span> “Understanding employees
                holistically ensures every stage of their journey is impactful.“
              </p>
              <div className="row">
                <p>See How Feedback Fuels Smarter Actions</p>
                <Link href={"#"} className="button">
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <ScaledImage
              src={"/images/cx/phase2/image-customer-feedback.svg"}
              width={500}
              height={500}
              alt="ternado"
              className="ternado"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
