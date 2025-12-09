import ScaledImage from "./components/scaled-image";
export default function Landing() {
  return (
    <article className="landing-page">
      <header className="header">
        <div className="container">
          <div className="logo">
            <ScaledImage
              src="/images/logo-icon.svg"
              width={56}
              height={56}
              alt="Sentimeter"
            />
            <span>
              <b>Senti</b>meter
            </span>
          </div>
        </div>
      </header>
      <section className="products">
        <section className="cx product">
          <div className="content">
            <p className="sub-title">CUSTOMER EXPERIENCE</p>
            <h3 className="title">SENTIMETER CX</h3>
            <p className="description">
              Turn customer feedback into loyalty and growth
            </p>
          </div>
          <div className="line"></div>
          <div className="clients">
            <p className="clients-head">TRUSTED BY:</p>
            <div className="logos">
              <ScaledImage
                src="/images/mc.png"
                width={77}
                height={77}
                alt="McDonald's"
              />
              <ScaledImage
                src="/images/ecs.png"
                width={77}
                height={77}
                alt="ecs"
              />
              <ScaledImage
                src="/images/total.png"
                width={77}
                height={77}
                alt="total"
              />
              <ScaledImage
                src="/images/bata.png"
                width={77}
                height={77}
                alt="bata"
              />
              <ScaledImage
                src="/images/metro.png"
                width={77}
                height={77}
                alt="metro"
              />
            </div>
            <p className="plus">+12 Brands</p>
          </div>

          <a href="/sentimeter" className="explore">
            EXPLORE CX →
          </a>
        </section>

        <section className="proofline product">
          <div className="content">
            <p className="sub-title">FRAUD INVESTIGATION</p>
            <h3 className="title">PROOFLINE</h3>
            <p className="description">
              Turn 45-day TAT violations into less than 10-day SBP compliance
            </p>
          </div>
          <div className="line"></div>
          <div className="clients">
            <p className="clients-head">FOR BANKS FACING:</p>
            <ul className="features-list">
              <li>Rs 400B fraud crisis </li>
              <li>SBP reporting deadlines</li>
              <li> Manual investigation backlogs</li>
            </ul>
          </div>

          <a href="/proofline" className="explore">
            EXPLORE PROOFLINE →
          </a>
        </section>
      </section>
      <section className="section section has-bg blue who-we-are">
        <div className="card">
          <div className="container">
            <div className="col">
              <h2>Who We Are</h2>
              <h4>Enterprise Software for Pakistan's Growth Economy</h4>
            </div>
            <div className="col">
              <p>
                Sentimeter is an Arbisoft company founded in 2018 with a
                mission: help Pakistan's leading organizations turn operational
                challenges into competitive advantages through intelligent
                software.
              </p>
              <p>
                We started with customer experience management, serving brands
                like <b>McDonald's, Total, Metro,</b> and<b> Bata</b> across
                food, retail, fuel, and fashion sectors. In 2024, we expanded
                into financial services with <b>Proofline </b> — a fraud
                investigation platform purpose-built for Pakistan's banking
                sector and State Bank of Pakistan (SBP) compliance requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <h3>
            Different industries. Different challenges. Same engineering rigor.
          </h3>
        </div>
      </section>
    </article>
  );
}
