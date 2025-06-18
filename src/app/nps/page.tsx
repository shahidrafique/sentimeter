import Image from "next/image";
import StrategyPath from "../components/home/strategy-path";
import ScaledImage from "../components/scaled-image";

export default function page() {
  return (
    <article className="nps">
      {/* Banner */}
      <section className="banner">
        <div className="container">
          <div className="content">
            <h2 className="title">Hero Banner</h2>
          </div>
        </div>
      </section>

      {/* NPS Survey Platform */}
      <section className="section nps-survey-platform">
        <div className="container">
          <p className="header-copy">
            Sentimeter's advanced NPS® survey platform enables businesses to
            analyze customer sentiment, extract loyalty drivers, and fuel
            growth. Here's how:
          </p>
          <div className="nps-platform-points">
            <div className="col">
              <div className="content">
                <h5 className="text-blue">Grow</h5>
                <p>
                  Turn insights into action—enhance customer satisfaction and
                  business performance.
                </p>
              </div>
              <div className="content">
                <h5 className="text-red">Improve</h5>
                <p>
                  Continuously optimize your NPS® strategy—track, analyze, and
                  improve.
                </p>
              </div>
            </div>
            <div className="col">
              <ScaledImage
                src={"/images/illustration-nps-survey-platform.svg"}
                width={370}
                height={370}
                alt="illustration nps survey platform"
              />
            </div>
            <div className="col">
              <div className="content">
                <h5 className="text-green">Listen</h5>
                <p>
                  Capture insights from every interaction—understand the full
                  customer journey.
                </p>
              </div>
              <div className="content">
                <h5 className="text-yellow">Analyze</h5>
                <p>
                  Empower brand advocates—leverage promoter feedback to attract
                  new customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* np-features */}
      <section className="section has-bg blue nps-features">
        <div className="card">
          <div className="container">
            <h3>
              <span>NPS®</span> Survey Platform Must-have Features
            </h3>
            <div className="card-blocks">
              <div className="card-blocks-item blue">
                <div className="row">
                  <ScaledImage
                    src={"/images/nps-icon-add-segment.svg"}
                    width={92}
                    height={82}
                    alt="nps icon add segment"
                  />
                  <h5>Add Dynamic Lists & segment</h5>
                </div>
                <p>
                  Effortlessly segment your respondents with dynamic lists,
                  allowing for precise audience categorization based on custom
                  criteria. Gain deep insights into customer personas and
                  streamline follow-ups to enhance engagement and retention.
                </p>
              </div>
              <div className="card-blocks-item blue">
                <div className="row">
                  <ScaledImage
                    src={"/images/nps-icon-automate.svg"}
                    width={92}
                    height={82}
                    alt="nps icon automate"
                  />
                  <h5>Automate & get things done</h5>
                </div>
                <p>
                  Streamline your NPS® surveys with full automation—schedule,
                  distribute, and track results effortlessly. Set custom survey
                  frequencies, automate follow-ups, and benchmark your Net
                  Promoter Score℠ against industry standards for continuous
                  improvement.
                </p>
              </div>
              <div className="card-blocks-item blue">
                <div className="row">
                  <ScaledImage
                    src={"/images/nps-icon-analyze.svg"}
                    width={92}
                    height={82}
                    alt="nps icon analyze"
                  />
                  <h5>Analyze real-time dynamic Dashboard</h5>
                </div>
                <p>
                  Track your Net Promoter Score℠ in real time with an
                  interactive dashboard. Analyze segmented responses from
                  promoters, passives, and detractors, apply smart filters, and
                  extract actionable insights effortlessly.
                </p>
              </div>
              <div className="card-blocks-item blue">
                <div className="row">
                  <ScaledImage
                    src={"/images/nps-icon-share.svg"}
                    width={92}
                    height={82}
                    alt="nps-icon-share"
                  />
                  <h5>Share follow-up questions & emails</h5>
                </div>
                <p>
                  Uncover the "why" behind customer feedback with tailored
                  follow-up questions. Leverage open-ended responses for richer
                  insights and automate personalized emails for promoters,
                  passives, and detractors—ensuring a complete feedback loop.
                </p>
              </div>
              <div className="card-blocks-item blue">
                <div className="row">
                  <ScaledImage
                    src={"/images/nps-icon-distribute.svg"}
                    width={92}
                    height={82}
                    alt="nps icon distribute"
                  />
                  <h5>Distribute easily via SMS, Email, In-app</h5>
                </div>
                <p>
                  Reach customers effortlessly by embedding NPS® surveys within
                  your app, sending targeted email surveys, or delivering
                  SMS-based feedback requests. Ensure a seamless experience for
                  both your customers and your team.
                </p>
              </div>
              <div className="card-blocks-item blue">
                <div className="row">
                  <ScaledImage
                    src={"/images/nps-icon-conduct-sentiment.svg"}
                    width={92}
                    height={82}
                    alt="nps icon conduct sentiment"
                  />
                  <h5>Conduct Sentiment Analysis & view Wordcloud</h5>
                </div>
                <p>
                  Leverage AI-powered sentiment analysis to decode customer
                  emotions with precision. Visualize key insights with dynamic
                  word clouds, providing a clear snapshot of loyalty trends and
                  customer perception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sentimeter Specific Framework */}
      <section className="section has-bg nps-business-routine">
        <div className="card">
          <div className="container">
            <div className="row">
              <ScaledImage
                src={"/images/icon-dashboard.svg"}
                width={90}
                height={90}
                alt="icon dashboard"
              />
              <h3>
                <span>NPS® Platform</span> that blends into your business
                routine
              </h3>
            </div>
            <div className="col content">
              <div className="features">
                <div className="cards no-border yellow">
                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/icon-loop.svg"}
                        width={86}
                        height={86}
                        alt="icon loop"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Close the loop with Response Management</h4>
                      <p>
                        Centralize customer feedback management with a
                        streamlined workflow. Assign tickets, track progress,
                        and ensure resolution—seamlessly integrating NPS®
                        insights into your daily operations.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/icon-setup.svg"}
                        width={86}
                        height={86}
                        alt="icon setup"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Set-up your NPS® Survey Platform at one go</h4>
                      <p>
                        Customize every aspect of your NPS® survey—incorporate
                        your brand identity, tailor email content, and preview
                        surveys instantly to ensure a professional, engaging
                        experience.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/icon-integrate.svg"}
                        width={86}
                        height={86}
                        alt="icon integrate"
                      />
                    </div>
                    <div className="card-content">
                      <h4>
                        Integrate with your existing system using Workflows &
                        Alerts
                      </h4>
                      <p>
                        Automate response management with intelligent alerts and
                        rule-based assignments. Ensure timely follow-ups,
                        enhance customer support efficiency, and proactively
                        address concerns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="more-to-nps">
          <h3>
            What's more to our
            <span className="text-blue">NPS®</span>{" "}
            <span className="text-dark-blue">Survey Platform?</span>
          </h3>
          <p>
            Discover the essential features that make our NPS® survey platform a
            game-changer in customer experience management.
          </p>
        </div>
      </section>

      {/* Segment Audience */}
      <section className="section has-bg green alternate-content-section">
        <div className="card">
          <div className="container">
            <div className="col content">
              <div className="content-group has-inner-text-green">
                <div className="section-symbol">
                  <ScaledImage
                    src={"/images/icon-segment-audience.svg"}
                    width={84}
                    height={84}
                    alt="icon segment audience"
                  />
                </div>
                <div className="section-header">
                  <h3>
                    <span>Segment audience</span> with custom fields
                  </h3>
                </div>
                <div className="content">
                  <p>
                    Uncover deeper insights by sorting your Net Promoter Score℠
                    using custom fields like location, date of feedback
                    submission, etc. Segment your customers instantly and adopt
                    different follow-up strategies. With our NPS® platform, it's
                    as easy as things can get.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <ScaledImage
                src={"/images/illustration-segment-audience.png"}
                width={500}
                height={452}
                alt="illustration segment audience"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collect feedback periodically */}
      <section className="section has-bg yellow alternate-content-section">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/illustration-collect-feedback-periodically.png"}
                width={542}
                height={476}
                alt="illustration collect feedback periodically"
              />
            </div>
            <div className="col content">
              <div className="content-group has-inner-text-yellow">
                <div className="section-symbol">
                  <ScaledImage
                    src={"/images/icon-collect-feedback.svg"}
                    width={84}
                    height={84}
                    alt="icon collect feedback"
                  />
                </div>
                <div className="section-header">
                  <h3>
                    Collect <span>feedback</span> periodically
                  </h3>
                </div>
                <div className="content">
                  <p>
                    Schedule surveys for periodic intervals. Configure the
                    survey settings once and forget about it. Set up a cyclic
                    feedback system. Automate the process; save your time and
                    efforts with our NPS® survey platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Throttle your surveysce */}
      <section className="section has-bg red-light alternate-content-section">
        <div className="card">
          <div className="container">
            <div className="col content">
              <div className="content-group has-inner-text-red">
                <div className="section-symbol">
                  <ScaledImage
                    src={"/images/icon-throttle-surveys.svg"}
                    width={84}
                    height={84}
                    alt="icon throttle surveys"
                  />
                </div>
                <div className="section-header">
                  <h3>
                    Throttle your <span>surveys</span>
                  </h3>
                </div>
                <div className="content">
                  <p>
                    Don't bombard your customers with one NPS® survey after
                    another. Why annoy them? Use Sentimeter's NPS® survey
                    platform's Throttling feature to ensure no respondent is
                    surveyed until a configured time. Enter the days, 90 for
                    example, and the batch of respondents will be surveyed only
                    after a quarter.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <ScaledImage
                src={"/images/illustration-throttle-your-surveys.png"}
                width={641}
                height={371}
                alt="illustration throttle your surveys"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Identify and Prioritize What Matters Most */}
      <section className="section has-bg blue alternate-content-section">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/illustration-identify-and-prioritize.png"}
                width={602}
                height={476}
                alt="illustration identify and prioritize"
              />
            </div>
            <div className="col content">
              <div className="content-group has-inner-text-blue">
                <div className="section-symbol">
                  <ScaledImage
                    src={"/images/icon-identify-and-prioritize.svg"}
                    width={84}
                    height={84}
                    alt="icon identify and prioritize"
                  />
                </div>
                <div className="section-header">
                  <h3>
                    Identify and <span>Prioritize</span> What Matters Most
                  </h3>
                </div>
                <div className="content">
                  <p>
                    Gain a 360-degree view of your customer's journey—track
                    every interaction, identify pain points, and refine your
                    NPS® strategy for maximum impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
