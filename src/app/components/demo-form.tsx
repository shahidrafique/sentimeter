'use client';

import { useState, useRef } from "react";
import Image from "next/image";

export default function DemoForm() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [error, setError] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/shahid.rafique@arbisoft.com", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success === "true") {
        setSuccessMessage(true);
        setError(false);
        form.reset();

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          const msg = document.querySelector(".success-message");
          if (msg) msg.classList.add("message-hide");
          setTimeout(() => setSuccessMessage(false), 400); // wait for animation
        }, 6000);
      } else {
        setError(true);
        setSuccessMessage(false);
      }
    } catch (err) {
      setError(true);
      setSuccessMessage(false);
    }
  };

  return (
    <section className="section demo-form">
      <div className="container">
        <div className="feedback-content">
          <h2 className="section-title">
            Dive deep into your <span>feedback data</span> for valuable insights.
          </h2>
          <p>
            Join us for a conversation to uncover solutions to your challenges and learn why top brands choose our feedback analytics platform.
          </p>
          <p>What to expect:</p>
          <ul className="checklist yellow">
            <li className="checklist-item">
              <span>A quick 15-minute call</span> to discuss your specific requirements.
            </li>
            <li className="checklist-item">
              <span>A Guide to</span> Pricing and Implementation
            </li>
          </ul>
        </div>

        <div className="form-content">
          <Image
            src="/images/sentimeter-logo.svg"
            width={232}
            height={56}
            alt="sentimeter logo"
          />
          <h3 className="section-title">
            See <span>Sentimeter</span> in action
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="fullName" placeholder="Full name*" required />
            </div>
            <div className="form-group">
              <input type="email" name="workEmail" placeholder="Work email*" required />
            </div>
            <div className="form-group">
              <h5>
                What are you looking to achieve with Sentimeter<span>*</span>
              </h5>
              <input type="text" name="message" placeholder="message*" required />
            </div>
            <p className="policy-note">
              By submitting, you agree to Sentimeter's <a href="#">privacy policy</a> and agree to receive emails from Sentimeter. You can opt out anytime.
            </p>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New submission!" />
            <button type="submit" className="button">Schedule your personalized demo</button>

            {successMessage && (
              <p className="success-message">
                Thanks you! We will be in touch with you shortly.
              </p>
            )}
            {error && (
              <p className="error-message">
                Something went wrong. Please try again.
              </p>
            )}
          </form>


          <div className="trusted-brands">
            <p>Trusted by the world's biggest brands</p>
            <div className="logos">
              <Image src="/images/clients/mcdonalds.png" width={48} height={48} alt="Mcdonalds" />
              <Image src="/images/clients/philips.png" width={102} height={23} alt="Philips" />
              <Image src="/images/clients/metro.png" width={102} height={31} alt="Metro" />
              <Image src="/images/clients/total.png" width={110} height={31} alt="Total" />
              <Image src="/images/clients/bata.png" width={102} height={31} alt="Bata" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}