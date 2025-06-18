export default function page() {
  return (
    <article className="pricing">
      {/* Pricing Plan */}
      <section className="section has-bg blue pricing-plan">
        <div className="card">
          <div className="container">
            <div className="col">
              <h3 className="text-dark-blue">
                <small className="text-yellow">Pricing Plan</small>
                Flexible Pricing, Tailored to Your Business
              </h3>
              <div>
                <h5 className="text-blue">
                  We Get It: You Want Clarity, Not Forms
                </h5>
                <p>
                  Sentimeter's pricing structure intelligently balances
                  enterprise Voice of Customer needs with cutting-edge
                  technology.
                </p>
              </div>
              <div>
                <h5 className="text-blue">What Influences Your Pricing:</h5>
                <ul className="checklist blue">
                  <li className="checklist-item">
                    Customer feedback volume and source diversity
                  </li>
                  <li className="checklist-item">
                    Cross-channel integration complexity (surveys, calls, chat,
                    social)
                  </li>
                  <li className="checklist-item">
                    Text analytics processing depth and language coverage
                  </li>
                  <li className="checklist-item">
                    Custom reporting and dashboard requirements
                  </li>
                  <li className="checklist-item">
                    Enterprise system integration needs (CRM, ticketing,
                    marketing)
                  </li>
                </ul>
              </div>
              <h5 className="text-black">
                Ready to transform customer feedback into strategic business
                advantage? Get your personalized quote today.
              </h5>
            </div>
            <div className="col">
              <div className="request-pricing-card">
                <h4>Request Pricing</h4>
                <p>We'll get in touch with you shortly.</p>
                <form>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name*"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail*"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone*"
                    required
                  />
                  <input type="text" name="message" placeholder="Message" />
                  <a href="#" className="button">
                    Send Contact Request
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
