import Image from "next/image";
import ScaledImage from "../components/scaled-image";

export default function page() {
  return (
    <article className="recovery-management">

      {/* Banner */}
      <section className="banner">
        <div className="container">
          <div className="content">
            <h2 className="title">
              Straightforward <span>Communication with Sentimeter:</span> Empower Your Recovery Strategy
            </h2>
            <p>
              Timely communication, effective collaboration, and structured resolution are at the heart of Sentimeter’s case management module. Address complaints across channels, resolve issues efficiently, and build trust by closing the loop effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Collect Feedback */}
      <section className="section has-bg blue collect-feedback">
        <div className="card">
          <div className="container has-col-border">
            <div className="col content-group has-inner-text-blue">
              <div className="section-header">
                <h2>
                  <small>The Complaint</small>
                  <span>Collect Feedback</span> Across Multiple Channels
                </h2>
              </div>
              <div className="content">
              <p>Sentimeter ensures no signal is missed by gathering feedback from diverse channels and mediums.</p>
              </div>
              <div className="section-footer">
                <p><span>Why It Matters:</span> “Collecting feedback effectively is the foundation of building actionable recovery strategies.”</p>
                <div className="row">
                  <p>Discover Seamless Feedback Collection</p>
                  <a href="#" className="button">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col">
              <h4>Key Features:</h4>
              <div className="row">
                <div className="col">
                  <div className="feature has-icon-right">
                    <ScaledImage
                      src={"/images/icon-feedback-integration.svg"}
                      width={34}
                      height={34}
                      className="icon"
                      alt="feedback integration"
                    />
                    <p><span className="text-green">Omnichannel Feedback Integration:</span> Capture feedback from surveys, social media, CRM systems, emails, and call centers.</p>
                  </div>
                  <div className="feature has-icon-right">
                    <ScaledImage
                      src={"/images/icon-rich-metadata.svg"}
                      width={34}
                      height={34}
                      className="icon"
                      alt="rich metadata"
                    />
                    <p><span className="text-red">Rich Metadata:</span> Include details like customer name, contact info, geographic data, and timestamps.</p>
                  </div>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/illustration-collect-feedback-features.svg"}
                    width={230}
                    height={308}
                    alt="collect feedback features"
                    min={100}
                  />
                </div>
                <div className="col">
                  <div className="feature">
                    <ScaledImage
                      src={"/images/icon-feedback-access.svg"}
                      width={34}
                      height={34}
                      className="icon"
                      alt="feedback access"
                    />
                    <p><span className="text-yellow">Comprehensive Feedback Access:</span> Review all feedback, including solicited and unsolicited inputs, across customer journeys and touchpoints.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* automate-responses */}
      <section className="section has-bg automate-responses">
        <div className="card">
          <div className="container">
            <div className="content-group has-inner-text-yellow">
              <h2>
                <small>Response</small>
                <span>Automate Responses</span> for Quick Resolution
              </h2>
              <p>Sentimeter accelerates response times with automation and intelligent prioritization.</p>
              <div className="automate-responses-row">
                <div className="automate-responses-point">
                  <ScaledImage
                    src={"/images/icon-alert.svg"}
                    width={50}
                    height={50}
                    alt="icon alert"
                  />
                  <div className="text">
                    <h4>Real-Time Alerts</h4>
                    <p>Push notifications, SMS, and email alerts for instant response to detractor feedback.</p>
                  </div>
                </div>
                <div className="automate-responses-point">
                  <ScaledImage
                    src={"/images/icon-assignment.svg"}
                    width={50}
                    height={50}
                    alt="icon assignment"
                  />
                  <div className="text">
                    <h4>Rules-Based Assignment</h4>
                    <p>Automatically assign cases to Directly Responsible Individuals (DRIs) for swift action.</p>
                  </div>
                </div>
                <div className="automate-responses-point">
                  <ScaledImage
                    src={"/images/icon-complaint.svg"}
                    width={50}
                    height={50}
                    alt="icon complaint"
                  />
                  <div className="text">
                    <h4>Complaint Status Tracking</h4>
                    <p>Monitor complaint progress with statuses like open, resolved, or escalated.</p>
                  </div>
                </div>
              </div>
              <p><span>Why It Matters:</span> “Automated response mechanisms reduce resolution time and ensure quick attention to customer concerns.”</p>
              <div className="row">
                <a href="#" className="link">
                  <span>Experience Automated</span>
                  <span>Response Solutions</span>
                </a>
                <a href="#" className="button button--outline">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* assign-tickets */}
      <section className="section assign-tickets">
        <div className="container has-col-border align-center">
          <div className="col">
            <ScaledImage
              src={"/images/assign-tasks-filter.svg"}
              width={244}
              height={373}
              alt="assign tasks filter"
            />
            <div className="filter-point-container">
              <div className="filter-point priority">
                <ScaledImage
                  src={"/images/filter-icon-priority.svg"}
                  width={48}
                  height={48}
                  alt="priority filter"
                />
                <div className="text">
                  <span>Priority Filters:</span> Organize tickets by detractors, promoters, recency, or other criteria.
                </div>
              </div>
              <div className="filter-point dynamic">
                <ScaledImage
                  src={"/images/filter-icon-dynamic.svg"}
                  width={48}
                  height={48}
                  alt="dynamic filter"
                />
                <div className="text">
                  <span>Priority Filters:</span> Organize tickets by detractors, promoters, recency, or other criteria.
                </div>
              </div>
              <div className="filter-point assignment">
                <ScaledImage
                  src={"/images/filter-icon-assignment.svg"}
                  width={48}
                  height={48}
                  alt="assignment filter"
                />
                <div className="text">
                  <span>Priority Filters:</span> Organize tickets by detractors, promoters, recency, or other criteria.
                </div>
              </div>
            </div>
          </div>
          <div className="col content-group has-inner-text-blue">
            <div className="section-header">
              <h2>
                <small>Ticketing</small><span>Assign Tickets</span> to Individuals or Teams
              </h2>
            </div>
            <div className="content">
              <p>Sentimeter's robust ticketing capabilities streamline issue management with precision.</p>
            </div>
            <div className="section-footer">
              <p><span>Why It Matters:</span> “Structured ticketing processes improve accountability and resolution efficiency.”</p>
              <div className="row">
                <p>Simplify Ticketing with Sentimeter</p>
                <a href="#" className="button">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="section has-bg blue communication">
        <div className="card">
          <div className="container align-center">
            <div className="content-group has-inner-text-blue">
              <div className="section-header">
                <h2>
                  <small>Communication</small> Prioritize and Personalize Responses
                </h2>
              </div>
              <div className="content">
                <p>Sentimeter enables teams to tailor communication for a better recovery experience.</p>
                <div className="card-blocks">
                  <div className="card-blocks-item green">
                    <ScaledImage
                      src={"/images/icon-connect.svg"}
                      width={50}
                      height={50}
                      alt="icon connect"
                    />
                    <h5>Connect Box Technology</h5>
                    <p>Engage in one-way or two-way SMS or email communication directly from the case management module.</p>
                  </div>
                  <div className="card-blocks-item red">
                    <ScaledImage
                      src={"/images/icon-escalation.svg"}
                      width={50}
                      height={50}
                      alt="icon escalation"
                    />
                    <h5>Escalation Tools</h5>
                    <p>Seamlessly escalate issues beyond designated individuals when necessary.</p>
                  </div>
                  <div className="card-blocks-item yellow">
                    <ScaledImage
                      src={"/images/icon-confirmation.svg"}
                      width={50}
                      height={50}
                      alt="icon confirmation"
                    />
                    <h5>Feedback Confirmation</h5>
                    <p>Close the loop with customer satisfaction confirmation.</p>
                  </div>
                </div>
              </div>
              <div className="section-footer">
                <p><span>Why It Matters:</span> “Personalized communication strengthens trust and enhances recovery experiences.”</p>
                <div className="row">
                  <p>Engage Effectively with Connect Box</p>
                  <a href="#" className="button">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="section resolution">
        <div className="container has-col-border">
          <div className="col content-group has-inner-text-blue">
            <div className="section-header">
              <h2>
                <small>Resolution</small> <span>Win Over</span> Customers Through Swift Action
              </h2>
            </div>
            <div className="content">
              <p>Sentimeter's recovery tools help resolve complaints quickly while building long-term trust.</p>
              <ul className="checklist blue">
                <li className="checklist-item">
                  <span>Complaint Status Visibility:</span> Track resolutions, monitor first response times, and ensure transparent progress updates.
                </li>
                <li className="checklist-item">
                  <span>360-Degree Feedback Integration:</span> Incorporate customer satisfaction checks post-resolution for improved processes.
                </li>
                <li className="checklist-item">
                  <span>Average Recovery Metrics:</span> Monitor recovery rate and time for continuous improvement.
                </li>
              </ul>
            </div>
            <div className="section-footer">
              <p><span>Why It Matters:</span> “Quick and efficient resolution fosters loyalty and prevents churn.”</p>
              <div className="row">
                <p>Transform Resolutions into Relationships</p>
                <a href="#" className="button">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <ScaledImage
              src={"/images/illustration-win-over.svg"}
              width={596}
              height={596}
              alt="win over"
            />
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="section has-bg blue analyze">
        <div className="card">
          <div className="container has-col-border">
            <div className="col content-group has-inner-text-blue">
              <div className="section-header">
                <h2>
                  <small>Analyze</small> <span>Track Trends</span> to Spot Future Issues
                </h2>
              </div>
              <div className="content">
                <p>
                  Sentimeter's analytics suite empowers teams to learn from past feedback and prevent recurring challenges.
                </p>
              </div>
              <div className="section-footer">
                <p><span>Why It Matters:</span> “Analyzing trends ensures continuous improvement and builds a proactive recovery strategy.”</p>
                <div className="row">
                  <p>Transform Resolutions into Relationships</p>
                  <a href="#" className="button">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col">
              <h4>Key Features:</h4>
              <div className="analyze-features">
                <div className="feature green">
                  <ScaledImage
                    src={"/images/icon-performance.svg"}
                    width={80}
                    height={80}
                    alt="icon performance"
                  />
                  <div className="content">
                    <h5>Performance Analytics</h5>
                    <p>Monitor KPIs like average recovery time, first response rate, and unresolved issues.</p>
                  </div>
                </div>
                <div className="feature yellow">
                  <ScaledImage
                    src={"/images/icon-trend.svg"}
                    width={80}
                    height={80}
                    alt="icon trend"
                  />
                  <div className="content">
                    <h5>Trend Analysis</h5>
                    <p>Detect patterns across feedback to identify systemic issues and improvement opportunities.</p>
                  </div>
                </div>
                <div className="feature red">
                  <ScaledImage
                    src={"/images/icon-scenario.svg"}
                    width={80}
                    height={80}
                    alt="icon scenario"
                  />
                  <div className="content">
                    <h5>Scenario Modeling</h5>
                    <p>Simulate the impact of proposed changes for proactive decision-making.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why-choose */}
      <section className="section has-bg why-choose">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/icon-recovery.svg"}
                width={103}
                height={103}
                alt="recovery management"
              />
            </div>

            <div className="col content">
              <h3>Why <span>Choose</span> Sentimeter for Recovery Management?</h3>
              <p>
                Sentimeter transforms feedback into action with advanced case management tools:
              </p>

              <div className="row">
                <div className="col">
                  <ScaledImage
                    src={"/images/icon-integrated-ticketing.svg"}
                    width={52}
                    height={52}
                    alt="integrated ticketing"
                  />
                  <div className="content">
                    <h5>Integrated Ticketing</h5>
                    <p>
                      Streamline issue management with automated workflows.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/icon-proactive-alert.svg"}
                    width={52}
                    height={52}
                    alt="proactive alert"
                  />
                  <div className="content">
                    <h5>Proactive Alerts</h5>
                    <p>
                      Empower teams with real-time notifications.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/icon-dynamic-reporting.svg"}
                    width={52}
                    height={52}
                    alt="dynamic reporting"
                  />
                  <div className="content">
                    <h5>Dynamic Reporting</h5>
                    <p>
                      Track performance metrics to continuously refine recovery strategies.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/icon-secure-system.svg"}
                    width={52}
                    height={52}
                    alt="secure system"
                  />
                  <div className="content">
                    <h5>Secure Systems</h5>
                    <p>
                      Ensure compliance and protect sensitive customer data.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/icon-close-loop.svg"}
                    width={52}
                    height={52}
                    alt="close-loop"
                  />
                  <div className="content">
                    <h5>Close the Loop</h5>
                    <p>
                      Build trust by communicating actions back to customers.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
