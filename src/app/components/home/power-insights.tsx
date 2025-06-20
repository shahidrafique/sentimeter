"use client";

import { useEffect, useState } from "react";
import ScaledImage from "../scaled-image";

export default function PowerInsights() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Run on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc = isMobile
    ? "/images/ai-powered-insights-mobile.svg"
    : "/images/ai-powered-insights.svg";

  return (
    <section className="section power-insights">
      <div className="container dir-col align-center">
        <h2 className="section-title">
          <span>AI-Powered</span> Insights,
          <br />
          Human-Led Growth
        </h2>
        <div className="channels-feedback-container">
          <ScaledImage
            src={imageSrc}
            width={1790}
            height={388}
            alt="AI powered insights"
          />
        </div>
        <a href="/demo-form" className="button button--dark">
          Get Started
        </a>
      </div>
    </section>
  );
}
