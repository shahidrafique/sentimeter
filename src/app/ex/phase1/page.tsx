import Clients from "../../components/clients";
import Link from "next/link";
import ScaledImage from "@/app/components/scaled-image";
export default function page() {
  return (
    <article className="phase1">
      {/* Sub Header */}
      <section className="sub-header">
        <div className="container">
          <div className="sub-header-left">
            <ScaledImage
              src="/images/senti-ex.svg"
              width={240}
              height={96}
              alt="senti ex"
              className="header-logo"
            />
            <div className="page-title">
              <ScaledImage
                src={"/images/icon-phase-1.svg"}
                width={80}
                height={80}
                alt="icon"
              />
              Make Feedback Fearless and Effortless
            </div>
          </div>
          <div className="sub-header-right">
            <a href="/ex">
              <ScaledImage
                src={"/images/blue-back-arrow.svg"}
                width={35}
                height={35}
                alt="back"
              />
              Back to SentiEX
            </a>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <div className="container">
          <div className="col">
            <div className="content">
              <h3>Make Feedback Fearless and Effortless</h3>
              <h2 className="title">
                Create a Safe & Seamless <span>Feedback</span> Culture
              </h2>
              <p>
                Sentimeter empowers organizations to build a culture where
                feedback is effortless, fearless, and actionable. By ensuring
                every voice is heard—securely and inclusively—you can uncover
                the insights needed to drive real employee satisfaction and
                retention.
              </p>
              <Link href="/demo-form" className="button button--outline">
                Request a Demo
              </Link>
            </div>
          </div>
          <div className="col">
            <ScaledImage
              src="/images/image-phase1-header.png"
              width={515}
              height={515}
              alt="senti ex"
            />
          </div>
        </div>
      </section>
      <Clients />
      {/* Comprehensive Feedback */}

      <section className="section has-bg red-light comprehensive-feedback">
        <div className="card">
          <div className="container">
            <div className="comprehensive-feedback-left">
              <div className="section-header">
                <h2>
                  Comprehensive <span>Feedback</span> at Every Corner
                </h2>
                <p>
                  Sentimeter collects feedback across multiple channels, giving
                  you a complete view of the employee experience. Whether
                  through pulse surveys or unsolicited comments, our tools
                  ensure no signal is missed.
                </p>
                <div className="section-footer">
                  <p className="note">
                    <span>Why It Matters:</span> "When feedback is easy to give,
                    employees are eager to share it."
                  </p>
                </div>
                <Link href="/demo-form" className="button">
                  Discover Seamless Feedback Solutions
                </Link>
              </div>
            </div>
            <div className="comprehensive-feedback-right">
              <h3>Key Features:</h3>
              <div className="benefit">
                <ScaledImage
                  src={"/images/icon-comprehensive-1.svg"}
                  width={60}
                  height={60}
                  alt="benefit"
                />
                <p>
                  <span>Global Accessibility:</span> Multi-lingual, multi-modal
                  feedback tools cater to diverse teams across geographies.
                </p>
              </div>
              <div className="benefit">
                <ScaledImage
                  src={"/images/icon-comprehensive-2.svg"}
                  width={60}
                  height={60}
                  alt="benefit"
                />
                <p>
                  <span>Omnichannel Integration:</span> Collect insights from
                  surveys, chat logs, emails, in-app tools, and more.
                </p>
              </div>
              <div className="benefit">
                <ScaledImage
                  src={"/images/icon-comprehensive-3.svg"}
                  width={60}
                  height={60}
                  alt="benefit"
                />
                <p>
                  <span>Rich Media Support:</span> Gather deeper insights with
                  video, image, and voice-based feedback.
                </p>
              </div>
              <div className="benefit">
                <ScaledImage
                  src={"/images/icon-comprehensive-3.svg"}
                  width={60}
                  height={60}
                  alt="benefit"
                />
                <p>
                  <span>Push and Pull Options:</span> Combine proactive surveys
                  with always-available feedback channels for a seamless
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Trust */}
      <section className="section has-bg build-trust">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/image-build-trust-icon.png"}
                width={125}
                height={125}
                alt="benefit"
              />
            </div>

            <div className="col content">
              <div className="section-header">
                <h2>
                  Build <span>Trust</span> Through Anonymity
                </h2>
                <p>
                  Honest feedback is fearless feedback. Sentimeter ensures
                  confidentiality, allowing employees to share their thoughts
                  openly without fear of repercussions.
                </p>
              </div>
              <h4 className="features-heading">Key Features:</h4>
              <div className="features ">
                <div className="cards no-border yellow">
                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/icon-build-trust1.svg"}
                        width={86}
                        height={86}
                        alt="benefit"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Guaranteed Anonymity</h4>
                      <p>
                        Secure systems ensure privacy for fearless
                        participation.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/icon-build-trust2.svg"}
                        width={86}
                        height={86}
                        alt="benefit"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Transparency Tools</h4>
                      <p>
                        Foster trust by demonstrating how feedback drives real
                        improvements.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="icon">
                      <ScaledImage
                        src={"/images/icon-build-trust3.svg"}
                        width={86}
                        height={86}
                        alt="benefit"
                      />
                    </div>
                    <div className="card-content">
                      <h4>Trust-Building Analytics</h4>
                      <p>
                        Build stronger relationships between employees and
                        leadership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-footer">
                <div className="note">
                  <p>
                    <span>Why It Matters: </span>
                    "When feedback is easy to give, employees are eager to share
                    it."
                  </p>
                </div>
                <div className="button button--outline">
                  Create a Safe Feedback Space
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="section automation">
        <div className="container">
          <div className="section-header">
            <h2>Automation That Works for You</h2>
            <p>
              Save time and improve participation with automated surveys and
              response tracking. Sentimeter ensures you ask the right questions
              at the right time.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="col">
            <h5>Key Features:</h5>
            <ul className="checklist yellow">
              <li className="checklist-item">
                <span>Timely Pulse Surveys:</span> Automate feedback collection
                after key moments like onboarding or performance reviews.
              </li>
              <li className="checklist-item">
                <span>Smart Sampling:</span> Avoid survey fatigue with optimized
                distribution strategies.
              </li>
              <li className="checklist-item">
                <span>Real-Time Feedback:</span> Act on insights as they come
                in, with minimal effort.
              </li>
            </ul>
            <div className="section-footer">
              <p className="note">
                <span>Why It Matters:</span> "Automation eliminates friction and
                ensures you capture meaningful feedback every time"
              </p>
              <Link href="/demo-form" className="button">
                Experience Smarter Employee Surveys
              </Link>
            </div>
          </div>
          <div className="col">
            <ScaledImage
              src={"/images/image-automation.png"}
              width={708}
              height={444}
              alt="Automation"
            />
          </div>
        </div>
      </section>

      {/* Proactive */}
      <section className="section has-bg blue proactive">
        <div className="card">
          <div className="container">
            <div className="col">
              <div className="content">
                <section className="section-header">
                  <h2>Proactive Listening Across the Lifecycle</h2>
                  <p>
                    Capture feedback throughout the employee journey with tools
                    tailored to each stage—from recruitment to exit.
                  </p>
                </section>
                <section className="section-footer">
                  <p className="note">
                    <span>Why It Matters:</span> "Understanding employees
                    holistically ensures every stage of their journey is
                    impactful."
                  </p>
                  <Link href={"/demo-form"} className="button">
                    See Lifecycle Insights in Action
                  </Link>
                </section>
              </div>
            </div>
            <div className="col">
              <h5 className="key-features">Key Features</h5>
              <div className="container">
                <div className="col">
                  <ScaledImage
                    src={"/images/ternado.svg"}
                    width={303}
                    height={341}
                    alt="ternado"
                    className="ternado"
                  />
                </div>
                <div className="col features">
                  <div className="cards no-border ">
                    <div className="card">
                      <div className="icon">
                        <ScaledImage
                          src={"/images/icon-proactive-1.svg"}
                          width={60}
                          height={60}
                          alt="ternado"
                        />
                      </div>
                      <div className="content">
                        <h5>Lifecycle Feedback Mapping</h5>
                        <p>
                          Monitor experiences across all touchpoints, including
                          onboarding, training, and performance reviews.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="icon">
                        <ScaledImage
                          src={"/images/icon-proactive-2.svg"}
                          width={60}
                          height={60}
                          alt="ternado"
                        />
                      </div>
                      <div className="content">
                        <h5>End-to-End Analytics</h5>
                        <p>
                          Track trends and patterns to see the bigger picture.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="icon">
                        <ScaledImage
                          src={"/images/icon-proactive-3.svg"}
                          width={60}
                          height={60}
                          alt="ternado"
                        />
                      </div>
                      <div className="content">
                        <h5>Responsive Listening</h5>
                        <p>
                          Stay open to feedback when employees need it most.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sentimeter for Feedback? */}

      <section className="section why">
        <div className="container">
          <section className="section-header">
            <h2>
              Why <span>Sentimeter</span> for Feedback?
            </h2>
          </section>
          <div className="row">
            <div className="col">
              <div className="feature feature-1">
                <div className="content">
                  <h5 className="red-70">Data Security</h5>
                  <p>
                    Guarantee privacy and security for fearless participation.
                  </p>
                </div>
                <div className="icon">
                  <ScaledImage
                    src={"/images/icon-why-1.svg"}
                    width={60}
                    height={60}
                    alt="ternado"
                  />
                </div>
              </div>
              <div className="feature  feature-2">
                <div className="content">
                  <h5 className="red-80">Real-Time Insights</h5>
                  <p>
                    Act quickly with live dashboards and detailed reporting.
                  </p>
                </div>
                <div className="icon">
                  <ScaledImage
                    src={"/images/icon-why-2.svg"}
                    width={60}
                    height={60}
                    alt="ternado"
                  />
                </div>
              </div>
            </div>
            <div className="col why-image">
              <ScaledImage
                src={"/images/image-why.svg"}
                width={366}
                height={366}
                alt="ternado"
              />
            </div>
            <div className="col">
              <div className="feature feature-3">
                <div className="icon">
                  <ScaledImage
                    src={"/images/icon-why-3.svg"}
                    width={60}
                    height={60}
                    alt="ternado"
                  />
                </div>
                <div className="content">
                  <h5 className="red-100">Employee-Centric Design</h5>
                  <p>
                    Build trust and engagement with tools designed for
                    inclusivity.
                  </p>
                </div>
              </div>
              <div className="feature feature-4">
                <div className="icon">
                  <ScaledImage
                    src={"/images/icon-why-4.svg"}
                    width={60}
                    height={60}
                    alt="ternado"
                  />
                </div>
                <div className="content">
                  <h5 className="red-90">Scalable Solutions</h5>
                  <p>
                    Adapt seamlessly from small teams to global enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link href={"/demo-form"} className="button">
            Empower Employees Through Feedback
          </Link>
        </div>
      </section>
    </article>
  );
}
