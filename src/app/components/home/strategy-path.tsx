import Image from "next/image";

export default function StrategyPath() {
  return (
    <section className="section strategy-path">
      <div className="container">
        <div className="content">
          <h2 className="section-title">Find Your Ideal CX <br/> Strategy Path</h2>
          <div className="strategy-illustration-container">
            <Image
              src="/images/strategy-path.png"
              width={1370}
              height={411}
              alt="strategy path"
            />
          </div>
          <a href="#" className="button">Learn More</a>
        </div>
      </div>
    </section>
  );
}
