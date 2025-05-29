import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="col">
            <Image
              src="/images/sentimeter-logo-white.svg"
              width={388}
              height={97}
              className="sentimeter-footer-logo"
              alt="sentimeter footer logo"
            />
            <h3 className="footer-section-title">
              Master Sentiment.
              <br />
              Maximize Impact.
            </h3>
            <ul className="contact-list">
              <li>
                <Image
                  src="/images/mail-icon.svg"
                  width={21}
                  height={16}
                  alt="mail icon"
                />
                <a href="mailto: contact@sentimeter.io">contact@sentimeter.io</a>
              </li>
              <li>
                <Image
                  src="/images/phone-icon.svg"
                  width={21}
                  height={16}
                  alt="phone icon"
                />
                <a href="tell: +923008477741">+92 300 8477741</a>
              </li>
            </ul>
          </div>
          <div className="col offices-container">
            <h3 className="footer-section-title">Arbisoft's Global Offices</h3>
            <div className="row">
              <div className="row-cell">
                <div className="address-wrapper">
                  <h4 className="city">Lahore</h4>
                  <div className="address">
                    <Image
                      src="/images/location-pin-icon.svg"
                      width={18}
                      height={23}
                      alt="map icon"
                    />
                    <span>25 Canal Rd, Westwood Colony Lahore, Punjab 54000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row-cell">
                <div className="address-wrapper">
                  <h4 className="city">Texas</h4>
                  <div className="address">
                    <Image
                      src="/images/location-pin-icon.svg"
                      width={18}
                      height={23}
                      alt="map icon"
                    />
                    <span>1700 Alma Dr Suite 102, Plano TX 75075</span>
                  </div>
                </div>
              </div>
              <div className="row-cell">
                <div className="address-wrapper">
                  <h4 className="city">Berlin</h4>
                  <div className="address">
                    <Image
                      src="/images/location-pin-icon.svg"
                      width={18}
                      height={23}
                      alt="map icon"
                    />
                    <span>Köpenicker Str. 40, Berlin, Germany 10179</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row-cell">
                <div className="address-wrapper">
                  <h4 className="city">KSA</h4>
                  <div className="address">
                    <Image
                      src="/images/location-pin-icon.svg"
                      width={18}
                      height={23}
                      alt="map icon"
                    />
                    <span>3141, Anas bin Malik, 8292 Riyadh, KSA</span>
                  </div>
                </div>
              </div>
              <div className="row-cell">
                <div className="address-wrapper">
                  <h4 className="city">Islamabad</h4>
                  <div className="address">
                    <Image
                      src="/images/location-pin-icon.svg"
                      width={18}
                      height={23}
                      alt="map icon"
                    />
                    <span>Chambers Fazl-ul-Haq Road, Blue Area Islamabad 44010</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom">
            <div className="legal-section">
              <Image
                src="/images/sentimeter-footer-logo-small.svg"
                width={156}
                height={24}
                alt="Sentimeter logo small"
              />
              <p>
                Copyright 2025 © All rights reserved to <b>Sentimeter</b>
              </p>
            </div>
            <div className="socialmedia-section">
              <ul className="socialmedia-list">
                <li>
                  <a href="#">
                    <Image
                      src="/images/instagram-icon.svg"
                      width={22}
                      height={22}
                      alt="instagram icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/images/twitter-icon.svg"
                      width={22}
                      height={22}
                      alt="twitter icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/images/linkedin-icon.svg"
                      width={22}
                      height={22}
                      alt="linkedin icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
