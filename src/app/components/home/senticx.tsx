import Image from "next/image";

export default function Senticx() {
  return (
    <section className="section senticx">
      <div className="container">
        <div className="section-header">
          <div className="logos-container">
            <Image
              src="/images/senti-cx-white.svg"
              width={193}
              height={95}
              alt="Senticx logo"
            />
            <span className="vertical-bar" />
            <Image
              src="/images/senti-ex-white.svg"
              width={123}
              height={61}
              className="sentiex-logo"
              alt="Sentiex logo"
            />
          </div>
          <a href="#">
            Explore More
            <Image
              src="/images/arrow-right-white.svg"
              width={16}
              height={15}
              alt="arrow right"
            />
          </a>
        </div>
        <div className="senticx-overview-container">
          <div className="content-left">
            Track NPS, feedback, and essential KPIs instantly.
          </div>
          <Image
            src="/images/senticx-dashboard.png"
            width={1092}
            height={737}
            alt="Senticx dashboard insights"
          />
          <div className="content-right">
            Analyze feedback segments and key satisfaction metrics for actionable customer insights.
          </div>
        </div>
        <div className="overview-steps">
          <ul>
            <li className="active">
              <div className="number">01</div>
              <div className="text">Overview</div>
            </li>
            <li>
              <div className="number">02</div>
              <div className="text">Overview</div>
            </li>
            <li>
              <div className="number">03</div>
              <div className="text">Overview</div>
            </li>
            <li>
              <div className="number">04</div>
              <div className="text">Overview</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
