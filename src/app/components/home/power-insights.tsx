import Image from "next/image";

export default function PowerInsights() {
  return (
    <section className="section power-insights">
      <div className="container dir-col align-center">
        <h2 className="section-title">
          <span>AI-Powered</span> Insights,
          <br />
          Human-Led Growth
        </h2>
        <div className="channels-feedback-container">
          <a href="#" className="button button--dark without-icon">Channels of Feedback</a>
          <Image
            src="/images/ai-powered-insights.png"
            width={1790}
            height={388}
            alt="AI powered insights"
          />
        </div>
        <a href="#" className="button button--dark">Get Started</a>
      </div>
    </section>
  );
}
