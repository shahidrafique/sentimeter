import Image from "next/image";
export default function Banner() {
  return (
    <div className="hero section-title">
      <div className="container">
        <div className="col">
          <div className="content">
            <h1>
              <div className="row">
                <span>Unlock</span>
              </div>
              <div className="row">
                <span className="yellow">95%</span>
                <span>of Hidden Customer Insights</span>
              </div>
              <div className="row">
                <span>to Drive Immediate</span>
                <span className="yellow">Revenue </span>
              </div>
              <div className="row">
                <span>Gains</span>
              </div>
            </h1>
          </div>
        </div>
        <div className="col">
          <div className="image-holder">
            <Image
              src="/images/laptop.png"
              width={844}
              height={511}
              alt="Laptop"
              quality={98}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
