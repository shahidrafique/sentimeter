import Image from "next/image";

export default function StrategyPath() {
  return (
    <section className="section strategy-path">
      <div className="container">
        <div className="content">
          <h2 className="section-title">Find Your Ideal CX <br/> Strategy Path</h2>
          <div className="strategy-illustration-container">
            <Image
              src={"/images/illustration-strategy-path.svg"}
              width={530}
              height={285}
              alt="strategy path"
            />
            <div className="strategy-path-point">
              <h5>REVAMP</h5>
              <p>Transform underperforming feedback programs for ROI</p>
            </div>
            <div className="strategy-path-point">
              <h5>SIMPLIFY & LAUNCH</h5>
              <p>Streamline CX implementation for quick wins</p>
            </div>
            <div className="strategy-path-point">
              <h5>ADOPT CUSTOMER CENTRICITY</h5>
              <p>Build continuous improvement culture</p>
            </div>
            <div className="strategy-path-point">
              <h5>LAUNCH STRUCTURED CX</h5>
              <p>Implement organized feedback systems</p>
            </div>
          </div>
          <a href="#" className="button">Learn More</a>
        </div>
      </div>
    </section>
  );
}
