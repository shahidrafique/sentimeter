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

        <section className="senticx-slider">
          <input type="radio" name="slider" id="slide1" defaultChecked />
          <input type="radio" name="slider" id="slide2" />
          <input type="radio" name="slider" id="slide3" />
          <input type="radio" name="slider" id="slide4" />
          <div className="slides">
            <div className="slide" id="s1">
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
                  Analyze feedback segments and key satisfaction metrics for
                  actionable customer insights.
                </div>
              </div>
            </div>
            <div className="slide" id="s2">
              <p>Slide 2 Content: Dashboard Visualization</p>
            </div>
            <div className="slide" id="s3">
              <p>Slide 3 Content: Metrics and Insights</p>
            </div>
            <div className="slide" id="s4">
              <p>Slide 4 Content: Metrics and Insights</p>
            </div>
          </div>
          <ul className="nav ">
            <li>
              <label htmlFor="slide1">
                <div className="number">01</div>
                <div className="text">Overview</div>
              </label>
            </li>
            <li>
              <label htmlFor="slide2">
                <div className="number">02</div>
                <div className="text">Comparison</div>
              </label>
            </li>
            <li>
              <label htmlFor="slide3">
                <div className="number">03</div>
                <div className="text">Customer Recovery</div>
              </label>
            </li>
            <li>
              <label htmlFor="slide4">
                <div className="number">04</div>
                <div className="text">Text Analysis</div>
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
