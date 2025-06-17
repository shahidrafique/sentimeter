import Image from "next/image";
import ScaledImage from "../scaled-image";

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
                <ScaledImage
                  src="/images/convert-icon.svg"
                  width={110}
                  height={110}
                  alt="convert icon"
                  min={40}
                />
              </div>
              <p>Convert customer feedback to actionable insights instantly</p>
            </div>
            <div className="steps-col">
              <div className="image-wrapper">
                <ScaledImage
                  src="/images/deliver-icon.svg"
                  width={110}
                  height={110}
                  alt="deliver icon"
                  min={40}
                />
              </div>
              <p>Deliver exactly what customers want, not assumptions</p>
            </div>
            <div className="steps-col">
              <div className="image-wrapper">
                <ScaledImage
                  src="/images/blend-icon.svg"
                  width={110}
                  height={110}
                  alt="blend icon"
                  min={40}
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
