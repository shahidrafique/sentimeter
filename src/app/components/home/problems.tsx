"use client";
import { useLayoutEffect } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Problems() {
  useLayoutEffect(() => {
    gsap.set(".problems .problem", { scale: 2.5 });
    gsap.set(".problems .icons-problem .p-one", {
      x: "-100",
      y: "-100",
      opacity: 0,
    });
    gsap.set(".problems .icons-problem .p-two", {
      x: "50",
      y: "-100",
      opacity: 0,
    });
    gsap.set(".problems .icons-problem .p-three", {
      x: "200",
      opacity: 0,
    });
    gsap.set(".problems .icons-problem .p-four", {
      x: "50",
      y: "100",
      opacity: 0,
    });
    gsap.set(".problems .icons-problem .p-five", {
      x: "-40",
      y: "100",
      opacity: 0,
    });
    gsap.set(".problems .icons-problem .p-five", {
      x: "-40",
      y: "100",
      opacity: 0,
    });
    gsap.set(".problems .solution", {
      scale: 2,
      opacity: 0,
    });
    gsap.set(".problems .icons-solution .s-one", {
      x: "-100",
      y: "-100",
      opacity: 0,
    });
    gsap.set(".problems .icons-solution .s-two", {
      x: "50",
      y: "-100",
      opacity: 0,
    });
    gsap.set(".problems .icons-solution .s-three", {
      x: "200",
      opacity: 0,
    });
    gsap.set(".problems .icons-solution .s-four", {
      x: "50",
      y: "100",
      opacity: 0,
    });
    gsap.set(".problems .icons-solution .s-five", {
      x: "-40",
      y: "100",
      opacity: 0,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        pin: true,
        pinSpacing: true,
        trigger: ".problems",
        start: "50% 50%",
        end: "+=2000",
      },
    });

    // Start Animation

    tl.to(".problems .problem", {
      scale: 1,
      opacity: 1,
    })

      .to(
        ".problems .icons-problem .p-one",
        {
          x: "0",
          y: "0",
          opacity: 1,
        },
        "-=.1"
      )
      .to(
        ".problems .icons-problem .p-two",
        {
          x: "0",
          y: "0",
          opacity: 1,
        },
        "-=.5"
      )
      .to(
        ".problems .icons-problem .p-three",
        {
          x: "0",
          opacity: 1,
        },
        "-=.5"
      )
      .to(
        ".problems .icons-problem .p-four",
        {
          x: "0",
          y: "0",
          opacity: 1,
        },
        "-=.5"
      )
      .to(
        ".problems .icons-problem .p-five",
        {
          x: "0",
          y: "0",
          opacity: 1,
        },
        "-=.5"
      )
      .to(
        ".problems .solution",
        {
          scale: 1,
          opacity: 1,
        },
        "+=.5"
      )
      .to(
        ".problems .problem",
        {
          opacity: 0,
          scale: 0.5,
        },
        "-=.6"
      )
      .to(".problems .icons-solution .s-one", {
        x: "0",
        y: "0",
        opacity: 1,
      })
      .to(
        ".problems .icons-problem .p-one",
        {
          opacity: 0,
        },
        "-=.5"
      )

      .to(
        ".problems .icons-solution .s-two",
        {
          x: "0",
          y: "0",
          opacity: 1,
        },
        "-=.25"
      )
      .to(".problems .icons-problem .p-two", { opacity: 0 }, "-=.5")
      .to(
        ".problems .icons-solution .s-three",
        {
          x: "0",
          opacity: 1,
        },
        "-=.25"
      )
      .to(
        ".problems .icons-problem .p-three",
        {
          opacity: 0,
        },
        "-=.5"
      )
      .to(
        ".problems .icons-solution .s-four",
        {
          x: "0",
          y: "0",
          opacity: 1,
        },
        "-=.25"
      )
      .to(
        ".problems .icons-problem .p-four",
        {
          opacity: 0,
        },
        "-=.5"
      )
      .to(
        ".problems .icons-solution .s-five",
        {
          x: "-0",
          y: "0",
          opacity: 1,
        },
        "-=.25"
      )
      .to(
        ".problems .icons-problem .p-five",
        {
          opacity: 0,
        },
        "-=.5"
      );

    // Optional cleanup if needed
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []); // Re-run effect on route change

  return (
    <section className="section problems">
      <div className="container">
        <h2 className="heading problem">Problems</h2>
        <h2 className="heading solution">Solutions</h2>
        <div className="icons-problem">
          <div className="icon p-one">
            <Image
              src="/images/home/problems/problem-one.svg"
              width={280}
              height={280}
              alt="Problem One"
            />
          </div>
          <div className="icon p-two">
            <Image
              src={"/images/home/problems/problem-two.svg"}
              width={376}
              height={376}
              alt="Problem two"
            />
          </div>
          <div className="icon p-three">
            <Image
              src={"/images/home/problems/problem-three.svg"}
              width={397}
              height={397}
              alt="Problem three"
            />
          </div>
          <div className="icon p-four">
            <Image
              src={"/images/home/problems/problem-four.svg"}
              width={309}
              height={309}
              alt="Problem four"
            />
          </div>
          <div className="icon p-five">
            <Image
              src={"/images/home/problems/problem-five.svg"}
              width={313}
              height={313}
              alt="Problem five"
            />
          </div>
        </div>

        <div className="icons-solution">
          <div className="icon s-one">
            <Image
              src="/images/home/problems/solution-one.svg"
              width={280}
              height={280}
              alt="solution One"
            />
          </div>
          <div className="icon s-two">
            <Image
              src={"/images/home/problems/solution-two.svg"}
              width={376}
              height={376}
              alt="solution two"
            />
          </div>
          <div className="icon s-three">
            <Image
              src={"/images/home/problems/solution-three.svg"}
              width={397}
              height={397}
              alt="solution three"
            />
          </div>
          <div className="icon s-four">
            <Image
              src={"/images/home/problems/solution-four.svg"}
              width={309}
              height={309}
              alt="solution four"
            />
          </div>
          <div className="icon s-five">
            <Image
              src={"/images/home/problems/solution-five.svg"}
              width={313}
              height={313}
              alt="solution five"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
