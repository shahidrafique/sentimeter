import Link from "next/link";
import ScaledImage from "../components/scaled-image";

export default function page() {
  return (
    <article className="text-analysis">
      {/* Banner */}
      <section className="banner">
        <div className="container">
          <div className="content">
            <h2>
              <small>Text Analytics</small>
              Smarter Text Analysis for Smarter <span>Business Decisions</span>
            </h2>
            <Link href="#" className="button button--outline">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Unify insights */}
      <section className="section has-bg blue alternate-content-section">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/illustration-unify-insights.png"}
                width={726}
                height={524}
                alt="unify insights"
              />
            </div>
            <div className="col content">
              <div className="content-group has-inner-text-blue-light">
                <div className="section-symbol">
                  <ScaledImage
                    src={"/images/icon-unify-insights.svg"}
                    width={77}
                    height={77}
                    alt="unify insights"
                  />
                </div>
                <div className="section-header">
                  <h3>
                    <small>Omnichannel Feedback Integration</small>
                    Unify Customer Insights Across <span>All Channels</span>
                  </h3>
                </div>
                <div className="content">
                  <p>
                    Siloed feedback analysis leads to missed opportunities and
                    critical blind spots. <span>Seamlessly integrate</span> data
                    from surveys, social media, call transcripts, regulatory
                    reports, and market insights to gain a comprehensive,{" "}
                    <span>actionable view of customer sentiment</span> and{" "}
                    <span>business impact.</span>
                  </p>
                </div>
                <div className="section-footer">
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform text */}
      <section className="section has-bg green alternate-content-section">
        <div className="card">
          <div className="container">
            <div className="col content">
              <div className="content-group has-inner-text-green">
                <div className="section-symbol">
                  <ScaledImage
                    src={"/images/icon-transform-text.svg"}
                    width={77}
                    height={77}
                    alt="transform text"
                  />
                </div>
                <div className="section-header">
                  <h3>
                    <small>Advanced Natural Language Understanding</small>
                    Transform Text into <span>Actionable</span> Intelligence
                  </h3>
                </div>
                <div className="content">
                  <p>
                    Our state-of-the-art NLP engine extracts meaning from
                    unstructured text, identifying <span>who</span> is speaking,{" "}
                    <span>what</span> they are discussing, and <span>how</span>{" "}
                    they feel. By converting raw text into structured insights,
                    we empower you to make data-driven decisions with
                    confidence.
                  </p>
                </div>
                <div className="section-footer">
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <ScaledImage
                src={"/images/illustration-transform-text.png"}
                width={636}
                height={523}
                alt="unify insights"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meaningful Action */}
      <section className="section has-bg red-light alternate-content-section">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/illustration-meaningful-action.png"}
                width={565}
                height={495}
                alt="meaningful action"
              />
            </div>
            <div className="col content">
              <div className="content-group has-inner-text-red">
                <div className="section-symbol">
                  <ScaledImage
                    src={"/images/icon-meaningful-action.svg"}
                    width={77}
                    height={77}
                    alt="meaningful action"
                  />
                </div>
                <div className="section-header">
                  <h3>
                    <small>Emotion, Effort, and Intent Analysis</small>
                    Go Beyond <span>Sentiment</span> to <span>Drive</span>{" "}
                    Meaningful Action
                  </h3>
                </div>
                <div className="content">
                  <p>
                    <span>Uncover</span> the deeper layers of customer feedback
                    by analyzing expressed <span>intent</span>, perceived{" "}
                    <span>effort</span>, and underlying <span>emotions</span>.
                    Gain the <span>insights</span> needed to reduce churn,
                    eliminate friction points, and close the feedback loop with
                    precision.
                  </p>
                </div>
                <div className="section-footer">
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entity Extraction */}
      <section className="section has-bg yellow alternate-content-section">
        <div className="card">
          <div className="container">
            <div className="col content">
              <div className="content-group has-inner-text-yellow">
                <div className="section-symbol">
                  <ScaledImage
                    src={"/images/icon-entity-extraction.svg"}
                    width={77}
                    height={77}
                    alt="entity extraction"
                  />
                </div>
                <div className="section-header">
                  <h3>
                    <small>Named Entity Recognition (NER)</small>
                    Enhance Business Understanding with Intelligent{" "}
                    <span>Entity Extraction</span>
                  </h3>
                </div>
                <div className="content">
                  <p>
                    Uncover hidden relationships and critical insights as our
                    machine learning model identifies{" "}
                    <span>
                      people, organizations, locations, dates, products, job
                      titles, currencies, social handles, hashtags, and more
                    </span>
                    . Customize entity detection with your own lists for even
                    more precise and domain-specific insights.
                  </p>
                </div>
                <div className="section-footer">
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <ScaledImage
                src={"/images/illustration-entity-extraction.png"}
                width={628}
                height={457}
                alt="entity extraction"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prioritize */}
      <section className="section has-bg blue alternate-content-section">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/illustration-prioritize.png"}
                width={574}
                height={457}
                alt="prioritize"
              />
            </div>
            <div className="col content">
              <div className="content-group has-inner-text-blue">
                <div className="section-symbol">
                  <ScaledImage
                    src={"/images/icon-prioritize.svg"}
                    width={77}
                    height={77}
                    alt="prioritize"
                  />
                </div>
                <div className="section-header">
                  <h3>
                    <small>Intelligent Categorization</small>
                    Identify and <span>Prioritize</span> What Matters Most
                  </h3>
                </div>
                <div className="content">
                  <p>
                    Leverage advanced machine learning and query-based
                    classification to systematically sort incoming feedback into{" "}
                    <span>actionable categories</span>. Uncover key themes,
                    surface critical insights, and drive informed
                    decision-making with precision.
                  </p>
                </div>
                <div className="section-footer">
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="section has-bg ai-solutions">
        <div className="card">
          <div className="container align-center dir-col">
            <ScaledImage
              src={"/images/icon-ai-solutions.svg"}
              width={104}
              height={104}
              alt="icon ai solutions"
            />
            <p>Tailored Customization</p>
            <h3>AI Solutions Designed for Your Business Needs</h3>
            <p>
              Our expert text analytics and AI team fine-tunes your system by
              customizing entity recognition, refining sentiment analysis,
              optimizing categorization, and enhancing topic detection. We also
              develop and train custom machine learning models tailored to your
              unique business challenges.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
