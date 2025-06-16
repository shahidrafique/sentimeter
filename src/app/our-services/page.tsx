import ScaledImage from "../components/scaled-image";

export default function page() {
  return (
    <article className="our-services">

      {/* Banner */}
      <section className="banner">
        <div className="container">
          <div className="content">
            <h2 className="title">
              <span>Sentimeter</span> Services
            </h2>
            <h3>Tailored Solutions for Every Stage of Your CX Journey</h3>
          </div>
        </div>
      </section>

      {/* Right path for your organization */}
      <section className="section has-bg blue right-path-for-org">
        <div className="card">
          <section className="section strategy-path">
            <div className="container">
              <div className="content">
                <h2 className="section-title">Find Your Ideal CX <br /> Strategy Path</h2>
                <div className="strategy-illustration-container">
                  <ScaledImage
                    src={"/images/illustration-strategy-path-our-services-page.svg"}
                    width={530}
                    height={285}
                    alt="strategy path"
                  />
                  <div className="strategy-path-point">
                    <h5 className="text-green">REVAMP</h5>
                    <p>Transform underperforming feedback programs for ROI</p>
                  </div>
                  <div className="strategy-path-point">
                    <h5 className="text-yellow">SIMPLIFY & LAUNCH</h5>
                    <p>Streamline CX implementation for quick wins</p>
                  </div>
                  <div className="strategy-path-point">
                    <h5 className="text-red">ADOPT CUSTOMER CENTRICITY</h5>
                    <p>Build continuous improvement culture</p>
                  </div>
                  <div className="strategy-path-point">
                    <h5 className="text-blue">LAUNCH STRUCTURED CX</h5>
                    <p>Implement organized feedback systems</p>
                  </div>
                </div>
                <a href="#" className="button">Learn More</a>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Rewamp */}
      <section className="section has-bg green rewamp">
        <div className="content-header">
          <div className="container">
            <h2 className="title">
              <span>REVAMP:</span> Transform Underperforming CX Programs
            </h2>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <div className="content-group has-inner-text-green">
              <div className="section-header">
                <h2>
                  <span>Sentimeter</span> Impact Framework (Core Competence)
                </h2>
              </div>
              <div className="content">
                <p>
                  A structured, actionable framework that bridges CX efforts with business goals, enhancing customer journeys and driving measurable outcomes.
                </p>
                <h5>Key Components:</h5>
                <div className="row">
                  <div className="col">
                    <ScaledImage
                      src={"/images/icon-align-green.svg"}
                      width={92}
                      height={92}
                      alt="icon align"
                    />
                    <p><span>Align</span>Link CX strategies to business KPIs and organizational goals.</p>
                  </div>
                  <div className="col">
                    <ScaledImage
                      src={"/images/icon-analyze-green.svg"}
                      width={92}
                      height={92}
                      alt="icon analyze"
                    />
                    <p><span>Analyze</span> Use AI-driven insights to uncover sentiments and root causes.</p>
                  </div>
                  <div className="col">
                    <ScaledImage
                      src={"/images/icon-act-green.svg"}
                      width={92}
                      height={92}
                      alt="icon act"
                    />
                    <p><span>Act</span> Prioritize and implement data-driven actions for significant customer experience improvements.</p>
                  </div>
                </div>
              </div>
              <div className="section-footer">
                <h5>Why It Matters:</h5>
                <p>Connect CX efforts directly to tangible business results, including:</p>
                <ul className="checklist inline green">
                  <li className="checklist-item">
                    Reduced churn.
                  </li>
                  <li className="checklist-item">
                    Increased customer lifetime value.
                  </li>
                  <li className="checklist-item">
                    Enhanced operational efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-bg green technology-integration">
        <div className="card">
          <div className="container">
            <div className="section-header">
              <h3>
                <span>Technology</span> Integration Services
              </h3>
              <p>
                Assist organizations in integrating Sentimeter's experience management technologies with their existing systems to enhance feedback collection, data flow, and analysis
              </p>
            </div>
            <div className="content">
              <div className="row">
                <div className="col">
                  <ScaledImage
                    src={"/images/icon-system-integration.svg"}
                    width={40}
                    height={40}
                    alt="icon system integration"
                  />
                  <h5>System Integration Consulting</h5>
                  <p>Tailor Sentimeter’s platform to fit seamlessly into existing CRMs, ticketing systems, and communication tools.</p>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/icon-api-development.svg"}
                    width={40}
                    height={40}
                    alt="icon api development"
                  />
                  <h5>API Development and Support</h5>
                  <p>Build and support custom APIs to ensure smooth data synchronization and workflow automation.</p>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/icon-data-migration.svg"}
                    width={40}
                    height={40}
                    alt="icon data migration"
                  />
                  <h5>Data Migration Services</h5>
                  <p>Ensure secure migration of historical feedback data into Sentimeter’s unified hub.</p>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/icon-platform-customization.svg"}
                    width={40}
                    height={40}
                    alt="icon platform customization"
                  />
                  <h5>Platform Customization</h5>
                  <p>Customize dashboards, reports, and workflows to align with unique organizational needs.</p>
                </div>
              </div>
            </div>
            <div className="section-footer">
              <h5>Example integrations:</h5>
              <div className="integration-logos">
                <ScaledImage
                  src={"/images/logo-salesforce.png"}
                  width={68}
                  height={48}
                  alt="logo salesforce"
                  className="logo-salesforce"
                />
                <ScaledImage
                  src={"/images/logo-zendesk.png"}
                  width={57}
                  height={43}
                  alt="logo zendesk"
                  className="logo-zendesk"
                />
                <ScaledImage
                  src={"/images/logo-hubspot.png"}
                  width={122}
                  height={48}
                  alt="logo hubspot"
                  className="logo-hubspot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adopt */}
      <section className="section has-bg yellow adopt">
        <div className="content-header">
          <div className="container">
            <h2 className="title">
              <span>ADOPT:</span> CUSTOMER CENTRICITY
            </h2>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <div className="content-group has-inner-text-yellow">
              <div className="section-header">
                <h2>
                  <span>Strategic</span> Advisory Services
                </h2>
              </div>
              <div className="content">
                <p>Provide expert guidance to design, implement, and enhance customer experience strategies, ensuring alignment with business objectives and measurable results.</p>
                <div className="card-blocks">
                  <div className="card-blocks-item yellow">
                    <div className="row">
                      <ScaledImage
                        src={"/images/icon-maturity-assessment.svg"}
                        width={56}
                        height={56}
                        alt="icon maturity assessment"
                      />
                      <h5>CX Maturity Assessment</h5>
                    </div>
                    <ul className="checklist yellow">
                      <li className="checklist-item">
                        <span>Purpose:</span> Evaluate your organization's current CX capabilities to uncover actionable improvement opportunities.
                      </li>
                      <li className="checklist-item">
                        <span>What You Gain:</span> A clear roadmap to enhance CX maturity across processes, tools, and strategy.
                      </li>
                    </ul>
                  </div>
                  <div className="card-blocks-item yellow">
                    <div className="row">
                      <ScaledImage
                        src={"/images/icon-journey-mapping.svg"}
                        width={56}
                        height={56}
                        alt="icon journey mapping"
                      />
                      <h5>Customer Journey Mapping (Journey-First Approach)</h5>
                    </div>
                    <ul className="checklist yellow">
                      <li className="checklist-item">
                        <span>Purpose:</span> Identify and map unique customer journeys to optimize touchpoints and reduce drop-offs.
                      </li>
                      <li className="checklist-item">
                        <span>What You Gain:</span> Tailored solutions for industry-specific pain points and customer needs.
                      </li>
                    </ul>
                  </div>
                  <div className="card-blocks-item yellow">
                    <div className="row">
                      <ScaledImage
                        src={"/images/icon-governance-framework.svg"}
                        width={56}
                        height={56}
                        alt="icon governance framework"
                      />
                      <h5>Experience Governance Framework</h5>
                    </div>
                    <ul className="checklist yellow">
                      <li className="checklist-item">
                        <span>Purpose:</span> Establish structures and processes for consistent implementation of CX strategies across teams and departments.
                      </li>
                      <li className="checklist-item">
                        <span>What You Gain:</span> A governance playbook to maintain alignment and accountability in CX initiatives.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplify */}
      <section className="section has-bg red-light simplify">
        <div className="content-header">
          <div className="container">
            <h2 className="title">
              <span>SIMPLIFY</span> & LAUNCH
            </h2>
          </div>
        </div>
        <div className="card">
          <div className="container has-col-border">
            <div className="col">
              <div className="content-group has-inner-text-red">
                <div className="section-header">
                  <ScaledImage
                    src={"/images/icon-managed-services.svg"}
                    width={102}
                    height={102}
                    alt="icon managed services"
                  />
                  <h2>Managed Services:</h2>
                  <h4 className="red-100">Simplified CX Implementation</h4>
                </div>
                <div className="content">
                  <p>
                    Provide end-to-end management of customer experience programs to ensure seamless execution, optimization, and actionable insights.
                  </p>
                </div>
              </div>
              </div>
            <div className="col">
              <h5 className="text-center">Key Offerings</h5>
              <div className="managed-services">
                <div className="col">
                  <div className="content">
                    <h5 className="red-100">Program Management</h5>
                    <p>Oversee experience programs, ensuring timely execution and alignment with strategic goals.</p>
                  </div>
                  <div className="content">
                    <h5 className="red-70">Survey Design and Optimization</h5>
                    <p>Create targeted surveys optimized for response rates and insight quality.</p>
                  </div>
                </div>
                <div className="col">
                  <ScaledImage
                    src={"/images/illustration-simplify-key-offerings.svg"}
                    width={424}
                    height={362}
                    alt="illustration simplify key-offerings"
                  />
                </div>
                <div className="col">
                  <div className="content">
                    <h5 className="red-90">Data Analysis and Reporting</h5>
                    <p>Provide detailed analysis and tailored reports that highlight trends, opportunities, and areas for improvement.</p>
                  </div>
                  <div className="content">
                    <h5 className="red-80">Continuous Program Improvement</h5>
                    <p>Regularly review and refine programs to adapt to evolving customer needs and business priorities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch */}
      <section className="section has-bg blue launch">
        <div className="content-header">
          <div className="container">
            <h2 className="title">
              <span>SIMPLIFY</span> & LAUNCH
            </h2>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <div className="content-group has-inner-text-blue">
              <div className="section-header">
                <h2>
                  Sentimeter Impact Framework: <span>Structured Implementation</span>
                </h2>
              </div>
              <div className="content">
                <p>Transform your existing feedback collection into a comprehensive, structured CX program that bridges CX efforts with business goals.</p>
                <h5>Key Components:</h5>
                <div className="row">
                  <div className="col">
                    <ScaledImage
                      src={"/images/icon-align-blue.svg"}
                      width={92}
                      height={92}
                      alt="icon align"
                    />
                    <p><span>Align</span>Link CX strategies to business KPIs and organizational goals.</p>
                  </div>
                  <div className="col">
                    <ScaledImage
                      src={"/images/icon-analyze-blue.svg"}
                      width={92}
                      height={92}
                      alt="icon analyze"
                    />
                    <p><span>Analyze</span> Use AI-driven insights to uncover sentiments and root causes.</p>
                  </div>
                  <div className="col">
                    <ScaledImage
                      src={"/images/icon-act-blue.svg"}
                      width={92}
                      height={92}
                      alt="icon act"
                    />
                    <p><span>Act</span> Prioritize and implement data-driven actions for significant customer experience improvements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-bg blue launch-technology-integration">
        <div className="card">
          <div className="container align-center">
            <div className="col">
              <div className="content-group has-inner-text-blue">
                <ScaledImage
                  src={"/images/icon-technology-integration-enhanced.svg"}
                  width={120}
                  height={120}
                  alt="icon technology integration enhanced"
                />
                <div className="section-header">
                  <h2>Technology Integration: <span>Enhanced Structure</span></h2>
                </div>
                <div className="content">
                  <p>
                    Transform your existing feedback collection into a comprehensive, structured CX program that bridges CX efforts with business goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <ScaledImage
                src={"/images/illustration-technology-integration-enhanced.svg"}
                width={930}
                height={358}
                alt="illustration technology integration enhanced"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sentimeter Specific Framework */}
      <section className="section has-bg specific-framework">
        <div className="card">
          <div className="container">
            <div className="col">
              <ScaledImage
                src={"/images/icon-specific-framework.svg"}
                width={106}
                height={106}
                alt="specific framework"
              />
            </div>
            <div className="col content">
              <div className="section-header">
                <h3>
                  <span>Sentimeter-Specific Frameworks</span>
                </h3>
              </div>
              <div className="content">
                <div className="features">
                  <div className="cards no-border yellow">
                    <div className="card">
                      <div className="icon">
                        <ScaledImage
                          src={"/images/icon-maturity-assessment-circled.svg"}
                          width={86}
                          height={86}
                          alt="icon maturity assessment circled"
                        />
                      </div>
                      <div className="card-content">
                        <h4>CX Maturity Assessment</h4>
                        <p>
                          Evaluate your customer experience strategies to identify growth opportunities.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="icon">
                        <ScaledImage
                          src={"/images/icon-journey-mapping-circled.svg"}
                          width={86}
                          height={86}
                          alt="icon journey mapping circled"
                        />
                      </div>
                      <div className="card-content">
                        <h4>Customer Journey Mapping (Journey-First Approach)</h4>
                        <p>
                          Map customer journeys to pinpoint pain points and deliver tailored solutions.
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="icon">
                        <ScaledImage
                          src={"/images/icon-governance-framework-circled.svg"}
                          width={86}
                          height={86}
                          alt="icon governance framework circled"
                        />
                      </div>
                      <div className="card-content">
                        <h4>Experience Governance Framework</h4>
                        <p>
                          Establish governance processes to maintain CX alignment organization-wide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-footer">
                <p>
                  <span>Transform Your CX Strategy With Sentimeter's Expert Services</span>
                </p>
                <a href="#" className="button button--outline">
                  Book a Consultation Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
