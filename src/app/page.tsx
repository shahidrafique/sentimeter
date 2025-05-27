import Image from "next/image";
import Hero from "./components/home/hero";
import Clients from "./components/clients";
import Problems from "./components/home/problems";
import PowerInsights from "./components/home/power-insights";
import StrategyPath from "./components/home/strategy-path";
import Senticx from "./components/home/senticx";
import DriveDecisions from "./components/home/drive-decisions";
import Testimonials from "./components/testimonials";
import Compliance from "./components/home/compliance";
import DemoForm from "./components/demo-form";

export default function Home() {
  return (
    <article className="home">
      <Hero />
      <Clients />
      <Problems />
      <PowerInsights />
      <StrategyPath />
      <Senticx />
      <DriveDecisions />
      <Testimonials />
      <Compliance />
      <DemoForm />
    </article>
  );
}
