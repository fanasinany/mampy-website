import React from "react";
import "./style.scss";
import photo from "../../images/wallpaper-2.webp";
import photo0 from "../../images/wallpaper-1.webp";
import photo1 from "../../images/portfolio-thumbnail/1.webp";
import photo2 from "../../images/portfolio-thumbnail/2.webp";
import photo3 from "../../images/portfolio-thumbnail/3.webp";
import photo4 from "../../images/portfolio-thumbnail/4.webp";
import photo5 from "../../images/portfolio-thumbnail/5.webp";
import photo6 from "../../images/portfolio-thumbnail/6.webp";
import photo7 from "../../images/portfolio-thumbnail/7.webp";
import { Link } from "gatsby";

function PortfolioSection() {
  return (
    <section id="portfolio">
      <h2 className="sixCaps" data-aos="fade-down">Mampy's Portfolio</h2>
      <p data-aos="fade-up">The great work that I do.</p>
      <div className="phototype-wrapper">
        <div className="item-wrapper">
          <div className="item">
            <div style={{ backgroundImage: `url(${photo0})` }}>
              <div data-aos="fade-up"  className="title-desc">
                <span className="sixCaps">Landscape</span>
                <p className="description-photo">
                  Mountains, forests, oceans, fields and other natural
                  landscapes.
                </p>
              </div>
            </div>
            <div style={{ backgroundImage: `url(${photo5})` }}>
              <div data-aos="fade-up" className="title-desc">
                <span className="sixCaps">Culinary</span>
                <p className="description-photo">
                  Aesthetic and appetizing presentation of food and dishes.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div style={{ backgroundImage: `url(${photo2})` }}>
              <div data-aos="fade-up" className="title-desc">
                <span className="sixCaps">Portrait</span>
                <p className="description-photo">
                  Capture people's characteristics and emotions.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div style={{ backgroundImage: `url(${photo})` }}>
              <div data-aos="fade-up" className="title-desc">
                <span className="sixCaps">Real estate</span>
                <p className="description-photo">Real estate photography.</p>
              </div>
            </div>
            <div style={{ backgroundImage: `url(${photo7})` }}>
              <div data-aos="fade-up" className="title-desc">
                <span className="sixCaps">Wedding</span>
                <p className="description-photo">
                  Photography specializing in capturing the moments and events
                  of a wedding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-wrapper">
        <div className="images" data-aos="zoom-in">
          <img src={photo3} alt="Photos" />
          <img src={photo7} alt="Photos" />
          <img src={photo2} alt="Photos" />
          <img src={photo4} alt="Photos" />
          <img src={photo6} alt="Photos" />
          <img src={photo5} alt="Photos" />
          <img src={photo} alt="Photos" />
          <img src={photo0} alt="Photos" />
          <img src={photo1} alt="Photos" />
        </div>
        <div className="textDescription" data-aos="zoom-in">
          <h2 className="sixCaps">Photography</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            omnis debitis. Voluptates vel quis corporis ad. Cumque veritatis at
            eius?
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla
            quia qui veniam velit quidem blanditiis inventore possimus.
            Molestiae, est.
          </p>
          <Link to="/folio" className="view-more">
            View more
          </Link>
        </div>
        <Link to="/folio" className="view-more mobile-v">
          View more
        </Link>
      </div>
    </section>
  );
}

export default PortfolioSection;
