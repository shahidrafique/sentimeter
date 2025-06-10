"use client";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Problems() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        pin: true,
        pinSpacing: true,
        trigger: ".problems",
        start: "50% 50%",
        end: "+=11000",
      },
    });

    tl.from(".problems .problem", {
      scale: 2.5,
    })
      .from(
        ".problems .icons-problem .one",
        {
          x: "-100",
          y: "-100",
          opacity: 0,
        },
        "-=.1"
      )
      .from(
        ".problems .icons-problem .two",
        {
          x: "50",
          y: "-100",
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        ".problems .icons-problem .three",
        {
          x: "200",
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        ".problems .icons-problem .four",
        {
          x: "50",
          y: "100",
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        ".problems .icons-problem .five",
        {
          x: "-40",
          y: "100",
          opacity: 0,
        },
        "-=.5"
      )
      .from(
        ".problems .solution",
        {
          scale: 2,
          opacity: 0,
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
      .from(".problems .icons-solution .one", {
        x: "-100",
        y: "-100",
        opacity: 0,
      })
      .from(
        ".problems .icons-problem .one",
        {
          opacity: 1,
        },
        "-=.5"
      )

      .from(
        ".problems .icons-solution .two",
        {
          x: "50",
          y: "-100",
          opacity: 0,
        },
        "-=.25"
      )
      .from(".problems .icons-problem .two", { opacity: 1 }, "-=.5")
      .from(
        ".problems .icons-solution .three",
        {
          x: "200",
          opacity: 0,
        },
        "-=.25"
      )
      .from(
        ".problems .icons-problem .three",
        {
          opacity: 1,
        },
        "-=.5"
      )
      .from(
        ".problems .icons-solution .four",
        {
          x: "50",
          y: "100",
          opacity: 0,
        },
        "-=.25"
      )
      .from(
        ".problems .icons-problem .four",
        {
          opacity: 1,
        },
        "-=.5"
      )
      .from(
        ".problems .icons-solution .five",
        {
          x: "-40",
          y: "100",
          opacity: 0,
        },
        "-=.25"
      )
      .from(
        ".problems .icons-problem .five",
        {
          opacity: 1,
        },
        "-=.5"
      );

    // Optional cleanup if needed
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section className="section problems">
      <div className="container">
        <h2 className="heading problem">Problems</h2>
        <h2 className="heading solution">Solutions</h2>
        <div className="icons-problem">
          <div className="icon one">
            <Image
              src="/images/home/problems/problem-one.svg"
              width={280}
              height={280}
              alt="Problem One"
            />
          </div>
          <div className="icon two">
            <Image
              src={"/images/home/problems/problem-two.svg"}
              width={376}
              height={376}
              alt="Problem two"
            />
          </div>
          <div className="icon three">
            <Image
              src={"/images/home/problems/problem-three.svg"}
              width={397}
              height={397}
              alt="Problem three"
            />
          </div>
          <div className="icon four">
            <Image
              src={"/images/home/problems/problem-four.svg"}
              width={309}
              height={309}
              alt="Problem four"
            />
          </div>
          <div className="icon five">
            <Image
              src={"/images/home/problems/problem-five.svg"}
              width={313}
              height={313}
              alt="Problem five"
            />
          </div>
        </div>

        <div className="icons-solution">
          <div className="icon one">
            <Image
              src="/images/home/problems/solution-one.svg"
              width={280}
              height={280}
              alt="solution One"
            />
          </div>
          <div className="icon two">
            <Image
              src={"/images/home/problems/solution-two.svg"}
              width={376}
              height={376}
              alt="solution two"
            />
          </div>
          <div className="icon three">
            <Image
              src={"/images/home/problems/solution-three.svg"}
              width={397}
              height={397}
              alt="solution three"
            />
          </div>
          <div className="icon four">
            <Image
              src={"/images/home/problems/solution-four.svg"}
              width={309}
              height={309}
              alt="solution four"
            />
          </div>
          <div className="icon five">
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
