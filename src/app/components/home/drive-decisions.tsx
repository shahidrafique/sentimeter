import Image from "next/image";

export default function DriveDecisions() {
  return (
    <section className="section section has-bg blue drive-decisions">
      <div className="card">
        <div className="container dir-col">
          <h2 className="section-title">Drive decisions with <span>Sentimeter's</span>
            <br />
            data-driven insights
          </h2>
          <a href="#" className="button">Get Demo</a>
          <div className="steps-row">
            <div className="steps-col">
              <div className="image-wrapper">
                <Image
                  src="/images/convert-icon.svg"
                  width={110}
                  height={110}
                  alt="convert icon"
                />
              </div>
              <p>Convert customer feedback to actionable insights instantly</p>
            </div>
            <div className="steps-col">
              <div className="image-wrapper">
                <Image
                  src="/images/deliver-icon.svg"
                  width={110}
                  height={110}
                  alt="deliver icon"
                />
              </div>
              <p>Deliver exactly what customers want, not assumptions</p>
            </div>
            <div className="steps-col">
              <div className="image-wrapper">
                <Image
                  src="/images/blend-icon.svg"
                  width={110}
                  height={110}
                  alt="blend icon"
                />
              </div>
              <p>Blend superior CX with measurable ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
