import Image from "next/image";
import Clients from "../components/clients";
import Link from "next/link";

export default function page() {
  return (
    <article className="cx">
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
          <div className="sub-header-right">Employee Experience Management</div>
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <div className="container">
          <div className="content">
            <h2 className="title">
              <span>Customer Experience:</span> The Key to Retention & Business
              Growth
            </h2>
            <p>
              Enhance Every Customer Touchpoint with Seamless CX — with less
              effort and smarter automation.
            </p>
            <Link href="/demo-form" className="button button--outline">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <Clients />

      {/* Section Phases */}
      <section className="section phases">
        <div className="container">
          <div className="content">
            <h3>
              <span>5 Essential Steps</span> to Optimize
              <br />
              Customer Experience
            </h3>
            <p>
              Understand, engage, and optimize your customer journeys like never
              before. Our solutions empower you to collect actionable insights,
              refine journeys, and continuously improve experiences that matter.
            </p>
          </div>
          <div className="cards-holder">
            <div className="phase-card">
              <div className="icon">
                <Image
                  src={"/images/icon-cx-phase-1.svg"}
                  width={80}
                  height={80}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h4>Accurately Map & Optimize Customer Journeys</h4>
                <p>
                  Lay the groundwork for CX success by mapping customer journeys
                  tailored to your unique business goals. Identify critical
                  paths, align strategies, and uncover actionable insights to
                  transform your customer experiences.
                </p>
                <a href="/cx/phase1" className="button">
                  Read More
                </a>
              </div>
            </div>

            <div className="phase-card">
              <div className="icon">
                <Image
                  src={"/images/icon-cx-phase-2.svg"}
                  width={80}
                  height={80}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h4>Gather Actionable Customer Feedback</h4>
                <p>
                  Reach customers wherever they are—through surveys, social
                  media, chat logs, CRM systems, and more. Our omnichannel
                  feedback tools ensure every voice is heard, helping you
                  understand customer needs deeply and build lasting trust.
                </p>
                <a href="/cx/phase2" className="button green">
                  Read More
                </a>
              </div>
            </div>

            <div className="phase-card">
              <div className="icon">
                <Image
                  src={"/images/icon-cx-phase-3.svg"}
                  width={80}
                  height={80}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h4>Turn Customer Feedback into Data-Driven Insights</h4>
                <p>
                  Turn raw data into powerful insights. Decode emotions, uncover
                  trends, and pinpoint root causes with advanced analytics.
                  Refine your journeys and strategies to stay ahead of customer
                  expectations.
                </p>
                <a href="/cx/phase3" className="button yellow">
                  Read More
                </a>
              </div>
            </div>

            <div className="phase-card">
              <div className="icon">
                <Image
                  src={"/images/icon-cx-phase-4.svg"}
                  width={80}
                  height={80}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h4>Implement Data-Driven CX Enhancements</h4>
                <p>
                  Act on insights with prioritized workflows, automated
                  resolutions, and cross-team collaboration. Enhance customer
                  satisfaction by addressing key pain points and creating
                  memorable experiences.
                </p>
                <a href="/cx/phase4" className="button blue">
                  Read More
                </a>
              </div>
            </div>

            <div className="phase-card">
              <div className="icon">
                <Image
                  src={"/images/icon-cx-phase-5.svg"}
                  width={80}
                  height={80}
                  alt="icon"
                />
              </div>
              <div className="content">
                <h4>Track & Continuously Improve Customer Experience</h4>
                <p>
                  Track your success with live dashboards and ready-made
                  reports. Use insights to iterate, innovate, and consistently
                  raise the bar for customer satisfaction and loyalty.
                </p>
                <a href="/cx/phase5" className="button light-blue">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Single Platform for Centralized Customer Data */}
      <section className="section has-bg red-light single-platform">
        <div className="card">
          <div className="container">
            <div className="single-platform-left">
              <Image
                src={"/images/icon-single-platform.svg"}
                width={85}
                height={85}
                alt="icon single platform"
              />
              <h3>Single Platform for Centralized Customer Data</h3>
              <div className="content">
                <p>
                  A single, intelligent source of customer truth—powered by
                  Sentimeter’s seamless integration across all tools and
                  channels.
                </p>
              </div>
              <Link href="#" className="button">
                Get Started
              </Link>
            </div>
            <div className="single-platform-right">
              <div className="benefit">
                <Image
                  src={"/images/icon-unify-the-voice.svg"}
                  width={73}
                  height={73}
                  alt="icon unify the voice"
                />
                <div className="content">
                  <h5 className="text-green">
                    Unify the Voice of Your Customers
                  </h5>
                  <p>
                    Seamlessly consolidate all structured and unstructured
                    customer feedback—surveys, meeting notes, online reviews,
                    and more—into a single, intelligent platform for a
                    360-degree view of customer sentiment and experience.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <Image
                  src={"/images/icon-data-driven.svg"}
                  width={73}
                  height={73}
                  alt="icon data driven"
                />
                <div className="content">
                  <h5 className="text-yellow">
                    Data-Driven Customer Insight Extraction
                  </h5>
                  <p>
                    Transform raw feedback into deep, contextual understanding.
                    Our AI-driven metadata tagging enables advanced
                    segmentation, trend detection, and quantifiable VoC
                    insights—empowering teams to identify priorities and take
                    action faster.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <Image
                  src={"/images/icon-categorization.svg"}
                  width={73}
                  height={73}
                  alt="icon categorization"
                />
                <div className="content">
                  <h5 className="text-red">
                    Stay Ahead with Intelligent, Adaptive Categorization
                  </h5>
                  <p>
                    Your tailored VoC classification system dynamically detects
                    emerging themes, anomalies, and critical shifts in customer
                    sentiment—ensuring that feedback is not just captured but
                    continuously translated into meaningful business decisions
                    in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Customer Trend Detection */}
      <section className="section has-bg real-time-trend-detection">
        <div className="card">
          <div className="container">
            <div className="col">
              <Image
                src={"/images/icon-real-time.svg"}
                width={96}
                height={96}
                alt="icon real time"
              />
            </div>
            <div className="col">
              <h3>
                <span>Real-Time</span> Customer Trend Detection
              </h3>
              <p>
                Detect emerging patterns and customer sentiment shifts in
                real-time. Identify what’s driving loyalty and retention,
                instantly respond to issues impacting customer experience, and
                gain the intelligence needed to proactively enhance satisfaction
                and engagement.
              </p>
              <Link href="#" className="button button--outline">
                Get Started
              </Link>
            </div>
          </div>
          <div className="card-blocks">
            <div className="card-blocks-item yellow">
              <Image
                src={"/images/icon-predict-and-prevent.svg"}
                width={62}
                height={62}
                alt="icon predict and prevent"
              />
              <h5>Predict & Prevent Churn with Data-Driven CX</h5>
              <p>
                Leverage product usage insights and customer behavior signals to
                predict churn risks and uncover upsell opportunities. Track
                trends, identify anomalies, and empower teams with actionable
                intelligence to drive customer retention and revenue expansion.
              </p>
            </div>
            <div className="card-blocks-item yellow">
              <Image
                src={"/images/icon-leverage-customer-data.svg"}
                width={62}
                height={62}
                alt="icon leverage customer data"
              />
              <h5>Leverage Customer Data for Business Expansion</h5>
              <p>
                Unlock what different customer segments and cohorts truly want.
                Identify demand signals, validate roadmap priorities, and align
                innovation with real customer needs—fueling strategic
                decision-making and revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Create a Data-Driven Customer-Centric Culture */}
      <section className="section has-bg blue customer-centric-culture">
        <div className="card">
          <div className="container">
            <div className="content-group">
              <Image
                src={"/images/icon-centric-culture.svg"}
                width={72}
                height={72}
                alt="icon centric culture"
              />
              <h2>
                <span>Create a Data-Driven Customer-Centric Culture</span>
              </h2>
              <p>
                Break down silos and create a shared, data-driven view of
                customer needs. Identify gaps in your product, logistics, and
                experiences, and make strategic decisions based on real customer
                expectations, not assumptions.
              </p>
              <div className="row">
                <Link href="#" className="button">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="screenshot">
              <Image
                src={"/images/screenshot-customer-centric-culture.png"}
                width={668}
                height={380}
                alt="screenshot customer centric culture"
              />
            </div>
          </div>
          <div className="container">
            <hr />
          </div>
          <div className="card-blocks">
            <div className="card-blocks-item blue">
              <Image
                src={"/images/icon-design-experience.svg"}
                width={48}
                height={72}
                alt="icon design experience"
              />
              <h5>Predict & Prevent Churn with Data-Driven CX</h5>
              <p>
                Leverage product usage insights and customer behavior signals to
                predict churn risks and uncover upsell opportunities. Track
                trends, identify anomalies, and empower teams with actionable
                intelligence to drive customer retention and revenue expansion.
              </p>
            </div>
            <div className="card-blocks-item blue">
              <Image
                src={"/images/icon-convert-cx-insights.svg"}
                width={64}
                height={64}
                alt="icon convert cx insights"
              />
              <h5>Leverage Customer Data for Business Expansion</h5>
              <p>
                Unlock what different customer segments and cohorts truly want.
                Identify demand signals, validate roadmap priorities, and align
                innovation with real customer needs—fueling strategic
                decision-making and revenue growth.
              </p>
            </div>
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

      {/* Transform Customer */}
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
                Transform Your Customer Experience with <span>Sentimeter</span>
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
