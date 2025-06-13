import Image from "next/image";

export default function DemoForm() {
  return (
    <section className="section demo-form">
      <div className="container">
        <div className="feedback-content">
          <h2 className="section-title">Dive deep into your <span>feedback data</span> for valuable insights.</h2>
          <p>Join us for a conversation to uncover solutions to your challenges and learn why top brands choose our feedback analytics platform.</p>
          <p>What to expect:</p>
          <ul>
            <li><span>A quick 15-minute call</span> to discuss your specific requirements.</li>
            <li><span>A Guide to</span> Pricing and Implementation</li>
          </ul>
        </div>
        <div className="form-content">
          <Image
            src="/images/sentimeter-logo.svg"
            width={232}
            height={56}
            alt="sentimeter logo"
          />
          <h3 className="section-title">See <span>Sentimeter</span> in action</h3>
          <form>
            <div className="form-group">
              <input type="text" name="fullName" placeholder="Full name*" />
            </div>
            <div className="form-group">
              <input type="email" name="workEmail" placeholder="Work email*" />
            </div>
            <div className="form-group">
              <h5>
                What are you looking to achieve with Sentimeter<span>*</span>
              </h5>
              <input type="text" name="message" placeholder="message*" />
            </div>
            <p className="policy-note">
              By submitting, you agree to Sentimeter's <a href="#">privacy policy</a> and agree to receive emails from Sentimeter. You can opt out anytime.
            </p>
            <a href="#" className="button">Schedule your personalized demo </a>
          </form>
          <div className="trusted-brands">
            <p>Trusted by the world's biggest brands</p>
            <div className="logos">
              <Image
                src="/images/clients/mcdonalds.png"
                width={48}
                height={48}
                alt="Mcdonalds"
              />
              <Image
                src="/images/clients/philips.png"
                width={102}
                height={23}
                alt="Philips"
              />
              <Image
                src="/images/clients/metro.png"
                width={102}
                height={31}
                alt="Metro"
              />
              <Image
                src="/images/clients/total.png"
                width={110}
                height={31}
                alt="Total"
              />
              <Image
                src="/images/clients/bata.png"
                width={102}
                height={31}
                alt="Bata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
