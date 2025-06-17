import Image from "next/image";
import ScaledImage from "../scaled-image";

export default function Compliance() {
  return (
    <section className="section compliance">
      <div className="container dir-col">
        <div className="compliance-header">
          <h2 className="section-title">Enterprise Security with Top Compliance Standards</h2>
          <div className="awards-container">
            <ScaledImage
              src="/images/compliance-awards/aicpa.png"
              width={157}
              height={157}
              alt="aicpa"
            />
            <ScaledImage
              src="/images/compliance-awards/gdpr.png"
              width={157}
              height={157}
              alt="gdpr"
            />
            <ScaledImage
              src="/images/compliance-awards/iso-27001.png"
              width={157}
              height={157}
              alt="iso-27001"
            />
            <ScaledImage
              src="/images/compliance-awards/amazon-ec2.png"
              width={157}
              height={157}
              alt="amazon-ec2"
            />
            <ScaledImage
              src="/images/compliance-awards/amazozn-s3.png"
              width={157}
              height={157}
              alt="amazozn-s3"
            />
          </div>
        </div>
        <div className="compliance-blocks">
          <div className="box">
            <h3 className="title">SOC2 Type II Certified</h3>
            <div className="copy">Industry-leading security and confidentiality standards</div>
          </div>
          <div className="box">
            <h3 className="title">Full GDPR (DSGVO) Compliance</h3>
            <div className="copy">Meeting all European data protection requirements</div>
          </div>
          <div className="box">
            <h3 className="title">US-Based Data Centers</h3>
            <div className="copy">US-Based Data Centers: Control where your data is stored globally</div>
          </div>
          <div className="box">
            <h3 className="title">Advanced Permission Controls</h3>
            <div className="copy">Secure collaboration with granular access management</div>
          </div>
        </div>
      </div>
    </section>
  );
}
