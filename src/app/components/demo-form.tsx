"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { recaptchaReady } from "./recaptcha-script";

const DEFAULT_ERROR_MESSAGE = "Something went wrong. Please try again."

export default function DemoForm() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function mountCaptcha() {
      await recaptchaReady;
      if (cancelled || !captchaRef.current) return;

      if (widgetIdRef.current == null) {
        widgetIdRef.current = window.grecaptcha.render(captchaRef.current, {
          sitekey: process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!,
          theme: "light",
          size: "normal",
        });
      }
    }

    mountCaptcha();
    return () => { cancelled = true; };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if reCAPTCHA is verified
    const id = widgetIdRef.current;
    const token = id != null ? window.grecaptcha.getResponse(id) : "";
    if (!token) {
      setErrorMessage("Please complete the reCAPTCHA.");
      return;
    }
    setErrorMessage("");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/contact@sentimeter.io",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.success === "true") {
        setSuccessMessage(true);
        setErrorMessage("");
        form.reset();
        if (id != null) window.grecaptcha.reset(id);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          const msg = document.querySelector(".success-message");
          if (msg) msg.classList.add("message-hide");
          setTimeout(() => setSuccessMessage(false), 400); // wait for animation
        }, 6000);
      } else {
        setErrorMessage(DEFAULT_ERROR_MESSAGE);
        setSuccessMessage(false);
        if (id != null) window.grecaptcha.reset(id);
      }
    } catch (err) {
      setErrorMessage(DEFAULT_ERROR_MESSAGE);
      setSuccessMessage(false);
    }
  };

  return (
    <section className="section demo-form" id="home-form">
      <div className="container">
        <div className="feedback-content">
          <h2 className="section-title">
            Dive deep into your <span>feedback data</span> for valuable
            insights.
          </h2>
          <p>
            Join us for a conversation to uncover solutions to your challenges
            and learn why top brands choose our feedback analytics platform.
          </p>
          <p>What to expect:</p>
          <ul className="checklist yellow">
            <li className="checklist-item">
              <span>A quick 15-minute call</span> to discuss your specific
              requirements.
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
              <input
                type="text"
                name="fullName"
                placeholder="Full name*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="workEmail"
                placeholder="Work email*"
                required
              />
            </div>
            <div className="form-group">
              <h5>
                What are you looking to achieve with Sentimeter<span>*</span>
              </h5>
              <input
                type="text"
                name="message"
                placeholder="message*"
                required
              />
            </div>
            <p className="policy-note">
              By submitting, you agree to Sentimeter's{" "}
              <a href="#">privacy policy</a> and agree to receive emails from
              Sentimeter. You can opt out anytime.
            </p>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New submission!" />
            <div ref={captchaRef} className="recaptcha-wrapper"></div>
            <button type="submit" className="button">
              Schedule your personalized demo
            </button>

            {successMessage && (
              <p className="success-message">
                Thanks you! We will be in touch with you shortly.
              </p>
            )}
            {errorMessage && (
              <p className="error-message">
                {errorMessage}
              </p>
            )}
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
