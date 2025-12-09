"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ScaledImage from "../components/scaled-image";
import { recaptchaReady } from "../components/recaptcha-script";

const DEFAULT_ERROR_MESSAGE = "Something went wrong. Please try again.";

export default function page() {
  const faqs = [
    {
      q: "Is Proofline approved by SBP?",
      a: "Proofline is built using SBP Fraud Investigation Circulars as the core compliance framework. The platform supports all SBP requirements including the 2-day preliminary report (≥ Rs 5M cases), 10-day detailed investigation deadlines, and 3-day customer compensation requirements. SBP does not certify third-party software vendors. Instead, they audit banks' fraud investigation processes and documentation. Proofline generates audit-ready documentation that meets SBP's regulatory requirements.",
    },
    {
      q: "Can it integrate with our core banking system?",
      a: "Yes. Proofline is designed to integrate with major Pakistani banking platforms including HBL, UBL, MCB, Faysal Bank core systems, card management platforms, 1LINK, call recording systems, and document management solutions. Integration requirements are assessed during implementation planning, and secure API connectors are configured during deployment. Average integration timeline: 3-4 weeks for most banks.",
    },
    {
      q: "How long does implementation really take?",
      a: "6-8 weeks from Letter of Intent to production deployment for mid-size banks (500-1,500 cases/year). This includes: discovery & requirements, module configuration, system integration & testing, team training, and go-live support. Small banks: 4-6 weeks. Large enterprise banks: 8-12 weeks. For comparison, global vendors require 12-18 months for similar implementations.",
    },
    {
      q: "What if we already use global fraud detection vendors?",
      a: "Proofline is different—it's post-fraud INVESTIGATION, not real-time fraud DETECTION. Global fraud detection platforms prevent fraud at transaction time. Proofline accelerates investigation and resolution AFTER fraud is reported to meet SBP deadlines. They're complementary systems. Many banks run both: detection platforms prevent fraud, Proofline investigates and reports it to SBP.",
    },
    {
      q: "Who is currently using Proofline?",
      a: "Proofline is currently in deployment with leading Pakistani financial institutions. Due to confidentiality agreements, we cannot publicly share client names at this stage. However, the platform is backed by Arbisoft, which has 17 years of experience delivering enterprise software for World Bank, Insurify (100M+ quotes), HyperJar (600K+ users), and other major financial institutions. During your demo, we can arrange confidential discussions with banking professionals who have evaluated Proofline.",
    },
    {
      q: "Can we customize it for our bank's specific workflows?",
      a: "Yes. Proofline is highly configurable. You can define custom case templates, configure SLA rules, create custom workflows, and build custom dashboards. No-code configuration available for standard customizations; custom development available for complex requirements. All customizations maintain SBP compliance.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function mountCaptcha() {
      await recaptchaReady;
      if (cancelled || !captchaRef.current) return;

      if (widgetIdRef.current == null) {
        widgetIdRef.current = window.grecaptcha.render(captchaRef.current, {
          sitekey: process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!,
          theme: "light",
          size: "normal",
        });
      }
    }

    mountCaptcha();
    return () => {
      cancelled = true;
    };
  }, []);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const timeoutRef = useRef<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = widgetIdRef.current;
    const token = id != null ? window.grecaptcha.getResponse(id) : "";
    if (!token) {
      setErrorMessage("Please complete the reCAPTCHA.");
      return;
    }
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/khalid.athar@arbisoft.com",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.success === "true") {
        setSuccessMessage(true);
        setErrorMessage("");
        form.reset();
        if (id != null) window.grecaptcha.reset(id);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = window.setTimeout(() => {
          const msg = document.querySelector(".success-message");
          if (msg) msg.classList.add("message-hide");

          setTimeout(() => setSuccessMessage(false), 400);
        }, 6000);
      } else {
        setErrorMessage(DEFAULT_ERROR_MESSAGE);
        setSuccessMessage(false);
        if (id != null) window.grecaptcha.reset(id);
      }
    } catch (err) {
      setErrorMessage(DEFAULT_ERROR_MESSAGE);
      setSuccessMessage(false);
    }
  };

  return (
    <section className="page-proofline">
      {/* Header */}

      <>
        <header className="header">
          <div className="container">
            <div className="header-left">
              <div className="logo">
                <Link href={"/"}>
                  <ScaledImage
                    src="/images/logo-icon.svg"
                    width={56}
                    height={56}
                    alt="Sentimeter"
                  />
                </Link>
                <div className="line" />
                <strong>Proofline</strong>
              </div>
            </div>
            <div className="header-right">
              <nav className="nav">
                <ul>
                  <li className="nav__item">
                    <Link href="#transformation">Impact</Link>
                  </li>
                  <li className="nav__item">
                    <Link href="#solution">How it works</Link>
                  </li>

                  <li className="nav__item">
                    <Link href="#pricing">Pricing</Link>
                  </li>
                  <li className="nav__item">
                    <Link href="#faq">FAQs</Link>
                  </li>
                </ul>
              </nav>
              <Link href="/demo-form" className="button">
                Request for Demo
              </Link>
            </div>
          </div>

          <div className="menu-button" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
      </>

      {/* Banner */}

      <section className="banner banner--proofline">
        <div className="container dir-col">
          <div className="hero-badge">
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="white" />
                <path
                  d="M24 10L13 21L8 16"
                  stroke="#003B6D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Built by Banking Experts
            </span>
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="white" />
                <path
                  d="M24 10L13 21L8 16"
                  stroke="#003B6D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Engineered by Arbisoft
            </span>
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="white" />
                <path
                  d="M24 10L13 21L8 16"
                  stroke="#003B6D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              SBP Compliant
            </span>
          </div>
          <div className="">
            <h1>
              Meet SBP's Fraud Investigation Deadlines <span>Every Time</span>
            </h1>
            <p className="subheadline">
              Enterprise-grade fraud investigation platform built on global best
              practices, optimized for Pakistan's SBP compliance requirements.
              Complete investigations in &lt;10 days, not 45-90 days.
            </p>
            <div className="cta-group">
              <Link href="/demo-form" className="button">
                Request for Demo
              </Link>

              <p className="cta-subtext">
                ⏱️ 30-minute personalized demo • See real workflows • No
                commitment required
              </p>
            </div>
          </div>

          <div className="regulatory-alert">
            <div className="regulatory-alert-header">
              ⚠️ The Regulatory Squeeze is Tightening
            </div>
            <p>
              State Bank of Pakistan (SBP) mandates clear investigation
              timelines:
            </p>

            <div className="regulatory-timeline">
              <div className="timeline-item">
                <div className="timeline-days">2 Days</div>
                <div className="timeline-label">
                  Preliminary reports for fraud cases ≥ Rs 5M
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-days">10 Days</div>
                <div className="timeline-label">
                  Detailed investigations for fraud cases ≥ Rs 5M
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-days">3 Days</div>
                <div className="timeline-label">
                  Compensate customers if bank fails controls
                </div>
              </div>
            </div>

            <div className="reality-check">
              <strong>Reality:</strong> Most banks take 45-90 days using manual
              processes.
              <br />
              That's not a process problem.{" "}
              <strong>That's a compliance crisis.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}

      <section className="trust-bar">
        <div className="container">
          <div className="trust-item">
            <div className="trust-icon">⚙️</div>
            <p className="trust-label">Backed by Arbisoft</p>
            <div className="trust-desc">
              17 years | 900+ engineers | ISO 27001 certified
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🏦</div>
            <p className="trust-label">Built by Banking Experts</p>
            <div className="trust-desc">
              15+ years fraud investigation experience in Pakistan's banking
              sector
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">✓</div>
            <p className="trust-label">SBP Compliance-Ready</p>
            <div className="trust-desc">
              Designed for 2/10/3-day reporting mandates | Local data residency
            </div>
          </div>
        </div>
      </section>

      {/* Transformation */}

      <section className="transformation-section" id="transformation">
        <div className="container">
          <h2>The Transformation</h2>
        </div>
        <div className="container dir-col">
          <div className="transformation-row">
            <div className="transform transform-before">
              <div className="transform-label">Manual Process</div>
              <div className="transform-value">45-90 days</div>
            </div>
            <div className="transform-arrow">
              <div className="arrow">→</div>
            </div>
            <div className="transform transform-after">
              <div className="transform-label">With Proofline</div>
              <div className="transform-value">&lt;10 days</div>
            </div>
          </div>

          <div className="transformation-row ">
            <div className="transform transform-before">
              <div className="transform-label">Per Investigator</div>
              <div className="transform-value">4-6 cases/day</div>
            </div>
            <div className="transform-arrow">
              <div className="arrow">→</div>
            </div>
            <div className="transform transform-after">
              <div className="transform-label">Per Investigator</div>
              <div className="transform-value">15-25 cases/day</div>
            </div>
          </div>

          <div className="transformation-row ">
            <div className="transform transform-before">
              <div className="transform-label">Productivity Increase</div>
              <div className="transform-value">Baseline</div>
            </div>
            <div className="transform-arrow">
              <div className="arrow">→</div>
            </div>
            <div className="transform transform-after">
              <div className="transform-label">Productivity Increase</div>
              <div className="transform-value">~300%</div>
            </div>
          </div>

          <div className="transformation-row ">
            <div className="transform transform-before">
              <div className="transform-label">TAT Compliance</div>
              <div className="transform-value">30% compliant</div>
            </div>
            <div className="transform-arrow">
              <div className="arrow">→</div>
            </div>
            <div className="transform transform-after">
              <div className="transform-label">TAT Compliance</div>
              <div className="transform-value">98%+ compliant</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="transformation-disclaimer">
            <strong>Disclaimer:</strong> Productivity metrics subject to level
            of integrations and datasets available with the bank. Implementation
            priorities and timelines can differ for various banks.
          </div>
        </div>
      </section>

      {/* Crisis */}
      <section className="crisis-section section has-bg">
        <div className="card">
          <div className="container dir-col">
            <div className="crisis-header">
              <h2>Pakistan's Rs 400 Billion Fraud Crisis</h2>
              <p>
                The numbers are staggering. Your bank cannot afford to be
                unprepared.
              </p>
            </div>

            <div className="container">
              <div className="crisis-card ">
                <div className="crisis-card-stat">Rs 400B+</div>
                <div className="crisis-card-label">Lost Annually to Fraud</div>
                <div className="crisis-card-desc">
                  That's 2.5% of Pakistan's GDP. More than double our recent IMF
                  loan of $7B.
                </div>
              </div>

              <div className="crisis-card ">
                <div className="crisis-card-stat">90%</div>
                <div className="crisis-card-label">
                  Of Chief Compliance Officers
                </div>
                <div className="crisis-card-desc">
                  View cybercrime as the biggest threat to Pakistani banks (PwC
                  2024 Survey).
                </div>
              </div>

              <div className="crisis-card ">
                <div className="crisis-card-stat">PKR 776M</div>
                <div className="crisis-card-label">In SBP Fines (Q1 2024)</div>
                <div className="crisis-card-desc">
                  Imposed for compliance lapses. Missing fraud investigation
                  deadlines carries severe penalties.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Flow */}
      <section className="workflow-section" id="solution">
        <div className="container dir-col">
          <div className="section-header">
            <span className="section-badge">The Solution</span>
            <h2>
              Automated Case Intake to <span>Regulatory Reporting</span>
            </h2>
            <p>Built specifically for Pakistan's SBP compliance requirements</p>
          </div>

          <div className="workflow-flow">
            <div className="flow-stage">
              <div className="flow-stage-title">Automated Case Intake</div>
            </div>

            <div className="flow-arrow">
              <div className="arrow arrow-visual">↓</div>
            </div>

            <div className="flow-stage ">
              <div className="flow-modules container">
                <div className="flow-module">
                  <div className="module-icon">🔍</div>
                  <div className="module-title">Fraud Investigations</div>
                  <ul className="module-features">
                    <li>Centralized evidence hub (5+ systems unified)</li>
                    <li>AI-assisted case intake &amp; analysis</li>
                    <li>Urdu call transcription &amp; analysis</li>
                    <li>Real-time SLA tracking</li>
                    <li>Human-in-the-loop validation</li>
                    <li>Complete audit trails</li>
                  </ul>
                </div>

                <div className="flow-module">
                  <div className="module-icon">⚙️</div>
                  <div className="module-title">FTDH Handling</div>
                  <ul className="module-features">
                    <li>Automated account lien marking</li>
                    <li>Card/channel blocking (RPA)</li>
                    <li>Device blocking &amp; PTA reporting</li>
                    <li>Branch notifications &amp; field interface</li>
                    <li>Inter-bank fraud intelligence sharing</li>
                    <li>Replaces 100s of manual emails (5-10 days → hours)</li>
                  </ul>
                </div>

                <div className="flow-module">
                  <div className="module-icon">⚖️</div>
                  <div className="module-title">Dispute Resolution</div>
                  <ul className="module-features">
                    <li>3D Secure &amp; Non-3DS lifecycle management</li>
                    <li>Visa, MC, UnionPay, PayPak chargebacks</li>
                    <li>Automated workflow routing</li>
                    <li>Recovery tracking &amp; dashboards</li>
                    <li>Industry-standard reporting</li>
                    <li>Multi-network integration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flow-arrow">
              <div className="arrow arrow-visual">↓</div>
            </div>

            <div className="flow-stage flow-reporting animate-on-scroll animated">
              <div className="flow-stage-title">
                Reporting &amp; Dashboards
                <div className="reporting-subtitle">
                  SBP Monthly &amp; Quarterly Compliance Reports
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cradiblity */}

      <section className="credibility-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Who We Are</span>
            <h2>
              Global Best Practices, <span>Pakistan Expertise</span>
            </h2>
            <p>
              The unique combination of banking domain knowledge and
              world-className engineering
            </p>
          </div>
        </div>
        <div className="container">
          <div className="credibility-card ">
            <div className="credibility-icon">🏦</div>
            <h3>Built by Banking Experts</h3>
            <p>
              Proofline is designed by fraud investigation professionals with
              15+ years of experience in Pakistan's banking sector. Every
              workflow, report template, and compliance checkpoint reflects
              real-world expertise from those who've handled thousands of fraud
              cases.
            </p>
            <p>
              We understand SBP circulars because we've lived them. We know the
              pressure of regulatory deadlines because we've faced them.
            </p>
          </div>

          <div className="credibility-card animate-on-scroll animated">
            <div className="credibility-icon">⚙️</div>
            <h3>World-className Engineering</h3>

            <p>
              <strong>Engineered by Arbisoft:</strong> 900+ engineers, 17 years
              of building enterprise software for global clients. Proven
              expertise in financial services technology, security, and
              compliance.
            </p>

            <p>
              Arbisoft has delivered mission-critical systems for major
              financial institutions worldwide. That same engineering excellence
              powers Proofline.
            </p>

            <a
              href="https://arbisoft.com/industries/finance"
              className="credibility-link"
              target="_blank"
            >
              See Arbisoft's fintech portfolio →
            </a>
          </div>
        </div>
      </section>

      {/* Comprison */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Platform Comparison</span>
            <h2>Why Choose Proofline</h2>
            <p>
              Enterprise-grade platform combining global quality with Pakistan
              regulatory expertise
            </p>
          </div>
        </div>
        <div className="container">
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>
                    Manual Process
                    <br />
                    (Excel + Email)
                  </th>
                  <th>Global Platforms</th>
                  <th>Proofline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SBP Compliance (2/10/3-day deadlines)</td>
                  <td className="comparison-no">
                    ❌ Manual tracking, often missed
                  </td>
                  <td className="comparison-warning">
                    ⚠️ Requires extensive customization
                  </td>
                  <td className="comparison-yes">
                    ✅ Built-in SBP circular compliance
                  </td>
                </tr>
                <tr>
                  <td>Implementation Time</td>
                  <td>Immediate (but inefficient)</td>
                  <td>12-18 months</td>
                  <td>6-8 weeks</td>
                </tr>
                <tr>
                  <td>Data Residency Compliance</td>
                  <td className="comparison-yes">✅ Local by default</td>
                  <td className="comparison-no">❌ International servers</td>
                  <td className="comparison-yes">✅ Pakistan data residency</td>
                </tr>
                <tr>
                  <td>Pakistan Banking Workflows</td>
                  <td className="comparison-warning">
                    ⚠️ DIY manual processes
                  </td>
                  <td className="comparison-no">❌ Generic global workflows</td>
                  <td className="comparison-yes">
                    ✅ Pakistan banking expert-built
                  </td>
                </tr>
                <tr>
                  <td>Annual Cost</td>
                  <td>Low software, high labor</td>
                  <td>$200,000 - $300,000</td>
                  <td>$40,000 - $125,000</td>
                </tr>
                <tr>
                  <td>Average Investigation Time</td>
                  <td>45-90 days</td>
                  <td>7-10 days</td>
                  <td>&lt;10 days</td>
                </tr>
                <tr>
                  <td>Support &amp; Maintenance</td>
                  <td>N/A</td>
                  <td>US/Europe timezone</td>
                  <td>Pakistan business hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="container">
          <div className="comparison-footer">
            <p>
              Proofline combines enterprise-grade platform quality with deep
              understanding of Pakistan's regulatory requirements and banking
              workflows.
            </p>
          </div>
        </div>
      </section>

      {/* AI Road Map */}

      <section className="ai-roadmap-section">
        <div className="container dir-col">
          <div className="ai-roadmap-header">
            <h3>AI-Powered Intelligence (Roadmap)</h3>
            <p>
              Proofline's AI engine will transform raw investigation data into
              actionable fraud intelligence
            </p>
          </div>

          <div className="ai-features-grid container">
            <div className="ai-feature-card animate-on-scroll animated">
              <div className="ai-feature-icon">📝</div>
              <h4>Smart Text Analysis</h4>
              <p>
                Automatically extract key details from Urdu/English witness
                statements and call recordings — no manual summarization needed.
              </p>
            </div>

            <div className="ai-feature-card animate-on-scroll animated">
              <div className="ai-feature-icon">🔗</div>
              <h4>Cross-Case Pattern Recognition</h4>
              <p>
                Identify repeat fraud patterns across hundreds of cases. Flag
                when same phone number, account, or device appears in multiple
                investigations.
              </p>
            </div>

            <div className="ai-feature-card animate-on-scroll animated">
              <div className="ai-feature-icon">📊</div>
              <h4>Predictive Fraud Insights</h4>
              <p>
                Visual reports showing fraud hotspots, emerging scam types, and
                high-risk merchant categories — before they become crises.
              </p>
            </div>
          </div>
          <div className="ai-roadmap-footer">
            <p>
              <strong>AI features launching Q2 2026.</strong> Early adopter
              banks get priority beta access and discounted rates.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}

      <section className="pricing-section" id="pricing">
        <div className="container dir-col">
          <div className="section-header">
            <h2>Investment &amp; ROI</h2>
            <p>
              Transparent pricing with measurable returns within 6-12 months
            </p>
          </div>

          <div className="container">
            <div className="pricing-left">
              <h3>Customized Pricing Based On:</h3>
              <ul>
                <li>Annual fraud case volume</li>
                <li>
                  Selected modules (investigation, FTDH, dispute resolution)
                </li>
                <li>Number of user licenses</li>
                <li>Integration complexity with your systems</li>
              </ul>

              <div className="pricing-box">
                <div className="pricing-label">Typical Annual Investment</div>
                <div className="pricing-amount">$40,000 - $125,000</div>
                <div className="pricing-note">
                  Customized based on bank size, case volume, and module
                  selection
                </div>
              </div>

              {/* <a href="#contact" className="pricing-cta-white">
                Request Custom Quote →
              </a> */}
            </div>

            <div className="pricing-right">
              <h3>Expected ROI (6-12 Months)</h3>

              <div className="roi-item animate-on-scroll animated">
                <div className="roi-stat">80-90%</div>
                <div className="roi-desc">
                  Time reduction (45-90 days → &lt;10 days for investigations)
                </div>
              </div>

              <div className="roi-item animate-on-scroll animated">
                <div className="roi-stat">300%</div>
                <div className="roi-desc">
                  Productivity increase (4-6 cases/day → 15-25 cases/day per
                  investigator)
                </div>
              </div>

              <div className="roi-item animate-on-scroll animated">
                <div className="roi-stat">98%+</div>
                <div className="roi-desc">
                  TAT compliance rate vs 30% with manual processes
                </div>
              </div>

              <div className="roi-item animate-on-scroll animated">
                <div className="roi-stat">$150,000+</div>
                <div className="roi-desc">
                  Saved annually in investigator labor costs and avoided SBP
                  penalties
                </div>
              </div>
            </div>
          </div>

          <div className="pricing-footer-disclaimer">
            <p>
              <strong>Pricing and ROI projections based on:</strong> Size and
              scale of financial institution • Level of integrations achieved •
              Optimization of workflows • Current fraud case volumes • Module
              selection and customization requirements
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Everything you need to know about Proofline and SBP compliance
            </p>
          </div>
        </div>
        <div className="container dir-col questions">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "open" : ""}`}
            >
              <div className="faq-question" onClick={() => toggle(index)}>
                <span>{item.q}</span>
                <span className="faq-toggle">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="final-cta-section section" id="contact">
        <div className="section-header">
          <h2>Request Your Demo</h2>
          <p>
            See how Proofline handles SBP-compliant fraud investigations in 30
            minutes
          </p>
        </div>
        <div className="container dir-col">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Full Name *" required />
              </div>

              <div className="form-group">
                <input type="email" placeholder="Work Email *" required />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Bank or Institution Name *"
                  required
                />
              </div>

              <div className="form-group">
                <select required>
                  <option value="">Your Role *</option>
                  <option value="Head of Fraud Risk">Head of Fraud Risk</option>
                  <option value="Chief Compliance Officer">
                    Chief Compliance Officer
                  </option>
                  <option value="Chief Risk Officer">Chief Risk Officer</option>
                  <option value="Operations Head">Operations Head</option>
                  <option value="CFO / Finance">CFO / Finance</option>
                  <option value="CTO / IT Head">CTO / IT Head</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <div ref={captchaRef} className="recaptcha-wrapper"></div>
              </div>

              <button type="submit" className="form-submit">
                Request Demo →
              </button>

              {errorMessage && <p className="error-message">{errorMessage}</p>}

              <div className="form-footer">
                📧{" "}
                <a href="mailto:proofline@sentimeter.io">
                  proofline@sentimeter.io
                </a>{" "}
                | 📞 +92-300-8477741
                <br />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer  */}

      <footer className="footer">
        <div className="container proofline">
          <div className="col col-2">
            <ScaledImage
              src="/images/sentimeter-logo-white.svg"
              width={388}
              height={97}
              className="sentimeter-footer-logo"
              alt="sentimeter footer logo"
            />
            <p>
              Enterprise-grade fraud investigation platform for Pakistan's
              banking sector. Meet SBP's 2/10/3-day fraud investigation
              deadlines every time.
            </p>
            <ul className="contact-list">
              <li>
                <Image
                  src="/images/mail-icon.svg"
                  width={21}
                  height={16}
                  alt="mail icon"
                />
                <a href="mailto:proofline@sentimeter.io">
                  proofline@sentimeter.io
                </a>
              </li>
              <li>
                <Image
                  src="/images/phone-icon.svg"
                  width={21}
                  height={16}
                  alt="phone icon"
                />
                <a href="tell: +923008477741">+92 300 8477741</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="footer-section-title">Product</h3>
            <ul>
              <li>
                <a href="#transformation">How It Works</a>
              </li>
              <li>
                <a href="#pricing">Pricing & ROI</a>
              </li>
              <li>
                <a href="#faq">FAQs</a>
              </li>
              <li>
                <a href="#">Request Demo</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="footer-section-title">Product</h3>

            <ul>
              <li>
                <a href="#">About Arbisoft</a>
              </li>
              <li>
                <a href="#">Fintech Portfolio</a>
              </li>
              <li>
                <a href="#">Security & Compliance</a>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom">
            <div className="legal-section">
              <Image
                src="/images/sentimeter-footer-logo-small.svg"
                width={156}
                height={24}
                alt="Sentimeter logo small"
              />
              <p>
                Copyright 2025 © All rights reserved to <b>Sentimeter</b>
              </p>
            </div>
            <div className="socialmedia-section">
              <ul className="socialmedia-list">
                <li>
                  <a href="#">
                    <ScaledImage
                      src="/images/instagram-icon.svg"
                      width={22}
                      height={22}
                      alt="instagram icon"
                      min={16}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ScaledImage
                      src="/images/twitter-icon.svg"
                      width={22}
                      height={22}
                      alt="twitter icon"
                      min={16}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ScaledImage
                      src="/images/linkedin-icon.svg"
                      width={22}
                      height={22}
                      alt="linkedin icon"
                      min={16}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
