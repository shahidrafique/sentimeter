"use client";

import Script from "next/script";

let resolveReady: (() => void) | null = null;
export const recaptchaReady = new Promise<void>((res) => (resolveReady = res));

declare global {
  interface Window { grecaptcha: any; recaptchaOnLoad: () => void }
}

export default function RecaptchaScript() {
  return (
    <Script
      src="https://www.google.com/recaptcha/api.js?onload=recaptchaOnLoad&render=explicit"
      strategy="afterInteractive"
    />
  );
}

if (typeof window !== "undefined") {
  window.recaptchaOnLoad = () => {
    // grecaptcha is ready to render
    resolveReady?.();
  };
}
