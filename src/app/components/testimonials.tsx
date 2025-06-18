"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import QuotesIcon from "@/app/components/icons/QuotesIcon";
import ScaledImage from "./scaled-image";

const testimonials = [
  {
    image: "/images/testimonials/testimonial-mcdonalds.png",
    text: `With Sentimeter our customer engagement jumped by 10 folds in the first quarter alone. And helped reduce our complaint processing time from days to seconds.`,
    author: "Aamir Malik",
    role: "Director",
    quotesColor: "#DA4436",
    roleColor: "#DA4436",
  },
  {
    image: "/images/testimonials/testimonial-total.png",
    text: `Sentimeter helped give insight on who our customers are, what they want from us. And how we need to revamp our retail strategy countrywide.`,
    author: "Olivier Sabirie",
    role: "CEO",
    quotesColor: "#E21E36",
    roleColor: "#E21E36",
  },
  {
    image: "/images/testimonials/testimonial-metro.png",
    text: `They’ve helped me give daily visibility on how our divisions and stores are performing. And what we needs to improve department-wise, and the exact impact of those changes.`,
    author: "Marek Minkiewicz",
    role: "CEO",
    quotesColor: "#FFE338",
    roleColor: "#1C3C79",
  },
  {
    image: "/images/testimonials/testimonial-bata.png",
    text: `We outperformed other countries in NPS project in the region in terms in our turnaround time for deployment. They were like our partners, allowing us to move very quickly across all our business divisions. `,
    author: "Mudassir Ajmal",
    role: "CEO",
    quotesColor: "#EF1C24",
    roleColor: "#EF1C24",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="section has-bg testimonials">
      <div className="container dir-col">
        <h2 className="section-title">Hear it from our clients</h2>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((t, i) => (
              <div className="embla__slide" key={i}>
                <div className="testimonial">
                  <div className="testimonial-inner">
                    <ScaledImage
                      src={t.image}
                      width={430}
                      height={430}
                      alt={`${t.author} testimonial image`}
                      min={200}
                    />
                    <div className="testimonial-content">
                      <QuotesIcon color={t.quotesColor} />
                      <p className="testimonial-text">{t.text}</p>
                      <div className="testimonial-author">
                        -{t.author}
                        <span className="role" style={{ color: t.roleColor }}>
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`embla__dot ${
                i === selectedIndex ? "is-selected" : ""
              }`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
