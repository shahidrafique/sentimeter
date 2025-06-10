import Image from "next/image";
import Link from "next/link";

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
      <section className="section has-bg blue">
        <div className="card">
          <div className="container">
            <div className="col">
              <Image
                src={"/images/illustration-unify-insights.png"}
                width={726}
                height={524}
                alt="unify insights"
              />
            </div>
            <div className="col content">
              <div className="content-group has-inner-text-blue-light">
                <div className="section-symbol">
                  <Image
                    src={"/images/icon-unify-insights.svg"}
                    width={77}
                    height={77}
                    alt="unify insights"
                  />
                </div>
                <h3>
                  <small>Omnichannel Feedback Integration</small>
                  Unify Customer Insights Across <span>All Channels</span>
                </h3>
                <p>
                  Siloed feedback analysis leads to missed opportunities and critical blind spots. <span>Seamlessly integrate</span> data from surveys, social media, call transcripts, regulatory reports, and market insights to gain a comprehensive, <span>actionable view of customer sentiment</span> and <span>business impact.</span>
                </p>
                <a href="#" className="button">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform text */}
      <section className="section has-bg green">
        <div className="card">
          <div className="container">
            <div className="col content">
              <div className="content-group has-inner-text-green">
                <div className="section-symbol">
                  <Image
                    src={"/images/icon-transform-text.svg"}
                    width={77}
                    height={77}
                    alt="transform text"
                  />
                </div>
                <h3>
                  <small>Advanced Natural Language Understanding</small>
                  Transform Text into <span>Actionable</span> Intelligence
                </h3>
                <p>
                  Our state-of-the-art NLP engine extracts meaning from unstructured text, identifying <span>who</span> is speaking, <span>what</span> they are discussing, and <span>how</span> they feel. By converting raw text into structured insights, we empower you to make data-driven decisions with confidence.
                </p>
                <a href="#" className="button">Learn More</a>
              </div>
            </div>
            <div className="col">
              <Image
                src={"/images/illustration-transform-text.png"}
                width={726}
                height={524}
                alt="unify insights"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meaningful Action */}
      <section className="section has-bg red-light">
        <div className="card">
          <div className="container">
            <div className="col">
              <Image
                src={"/images/illustration-meaningful-action.png"}
                width={726}
                height={524}
                alt="meaningful action"
              />
            </div>
            <div className="col content">
              <div className="content-group has-inner-text-red">
                <div className="section-symbol">
                  <Image
                    src={"/images/icon-meaningful-action.svg"}
                    width={77}
                    height={77}
                    alt="meaningful action"
                  />
                </div>
                <h3>
                  <small>Advanced Natural Language Understanding</small>
                  Transform Text into <span>Actionable</span> Intelligence
                </h3>
                <p>
                  Our state-of-the-art NLP engine extracts meaning from unstructured text, identifying <span>who</span> is speaking, <span>what</span> they are discussing, and <span>how</span> they feel. By converting raw text into structured insights, we empower you to make data-driven decisions with confidence.
                </p>
                <a href="#" className="button">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entity Extraction */}
      <section className="section has-bg yellow">
        <div className="card">
          <div className="container">
            <div className="col content">
              <div className="content-group has-inner-text-yellow">
                <div className="section-symbol">
                  <Image
                    src={"/images/icon-entity-extraction.svg"}
                    width={77}
                    height={77}
                    alt="entity extraction"
                  />
                </div>
                <h3>
                  <small>Advanced Natural Language Understanding</small>
                  Transform Text into <span>Actionable</span> Intelligence
                </h3>
                <p>
                  Our state-of-the-art NLP engine extracts meaning from unstructured text, identifying <span>who</span> is speaking, <span>what</span> they are discussing, and <span>how</span> they feel. By converting raw text into structured insights, we empower you to make data-driven decisions with confidence.
                </p>
                <a href="#" className="button">Learn More</a>
              </div>
            </div>
            <div className="col">
              <Image
                src={"/images/illustration-entity-extraction.png"}
                width={726}
                height={524}
                alt="entity extraction"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prioritize */}
      <section className="section has-bg blue">
        <div className="card">
          <div className="container">
            <div className="col">
              <Image
                src={"/images/illustration-prioritize.png"}
                width={726}
                height={524}
                alt="prioritize"
              />
            </div>
            <div className="col content">
              <div className="content-group has-inner-text-blue">
                <div className="section-symbol">
                  <Image
                    src={"/images/icon-prioritize.svg"}
                    width={77}
                    height={77}
                    alt="prioritize"
                  />
                </div>
                <h3>
                  <small>Advanced Natural Language Understanding</small>
                  Transform Text into <span>Actionable</span> Intelligence
                </h3>
                <p>
                  Our state-of-the-art NLP engine extracts meaning from unstructured text, identifying <span>who</span> is speaking, <span>what</span> they are discussing, and <span>how</span> they feel. By converting raw text into structured insights, we empower you to make data-driven decisions with confidence.
                </p>
                <a href="#" className="button">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
