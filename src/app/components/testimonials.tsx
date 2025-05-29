import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="section has-bg testimonials">
      <div className="container">
        <h2 className="section-title">Hear it from our clients</h2>
      </div>
      <div className="card">
        <div className="container">
          <div className="testimonial">
            <div className="testimonial-inner">
              <Image
                src="/images/testimonials/testimonial-image-1.png"
                width={478}
                height={439}
                alt="Mcdonalds testimonial image"
              />
              <div className="testimonial-content">
                <p className="testimonial-text">
                  With Sentimeter our customer engagement jumped by 10 folds in
                  the first quarter alone. And helped reduce our complaint
                  processing time from days to seconds.
                </p>
                <div className="testimonial-author">-Aamir Malik</div>
                <div className="testimonial-role">Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
