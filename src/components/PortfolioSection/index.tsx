import React from "react";
import "./style.scss";
import photocategory1 from "../../images/homepage/portfolio-category/1.webp";
import photocategory2 from "../../images/homepage/portfolio-category/2.webp";
import photocategory3 from "../../images/homepage/portfolio-category/3.webp";
import photocategory4 from "../../images/homepage/portfolio-category/4.webp";
import photocategory5 from "../../images/homepage/portfolio-category/5.webp";

import photothumbnail1 from "../../images/homepage/9-photos/1.webp";
import photothumbnail2 from "../../images/homepage/9-photos/2.webp";
import photothumbnail3 from "../../images/homepage/9-photos/3.webp";
import photothumbnail4 from "../../images/homepage/9-photos/4.webp";
import photothumbnail5 from "../../images/homepage/9-photos/5.webp";
import photothumbnail6 from "../../images/homepage/9-photos/6.webp";
import photothumbnail7 from "../../images/homepage/9-photos/7.webp";
import photothumbnail8 from "../../images/homepage/9-photos/8.webp";
import photothumbnail9 from "../../images/homepage/9-photos/9.webp";

import { Link, navigate } from "gatsby";

function PortfolioSection() {
  return (
    <section id="portfolio">
      <h2 className="sixCaps" data-aos="fade-down">Mampy's Portfolio</h2>
      <p data-aos="fade-up">The great work that I do.</p>
      <div className="phototype-wrapper">
        <div className="item-wrapper">
          <div className="item">
            <div onClick={() => navigate('/folio')} style={{ backgroundImage: `url(${photocategory3})` }}>
              <div data-aos="fade-up"  className="title-desc">
                <span className="sixCaps">Landscape</span>
                <p className="description-photo">
                  Mountains, forests, oceans, fields and other natural
                  landscapes.
                </p>
              </div>
            </div>
            <div onClick={() => navigate('/folio')} style={{ backgroundImage: `url(${photocategory2})` }}>
              <div data-aos="fade-up" className="title-desc">
                <span className="sixCaps">Culinary</span>
                <p className="description-photo">
                  Aesthetic and appetizing presentation of food and dishes.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div onClick={() => navigate('/folio')} style={{ backgroundImage: `url(${photocategory1})` }}>
              <div data-aos="fade-up" className="title-desc">
                <span className="sixCaps">Portrait</span>
                <p className="description-photo">
                  Capture people's characteristics and emotions.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div onClick={() => navigate('/folio')} style={{ backgroundImage: `url(${photocategory4})` }}>
              <div data-aos="fade-up" className="title-desc">
                <span className="sixCaps">Real estate</span>
                <p className="description-photo">Real estate photography.</p>
              </div>
            </div>
            <div onClick={() => navigate('/folio')} style={{ backgroundImage: `url(${photocategory5})` }}>
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
          <img src={photothumbnail1} alt="Photo thumbnail" />
          <img src={photothumbnail2} alt="Photo thumbnail" />
          <img src={photothumbnail3} alt="Photo thumbnail" />
          <img src={photothumbnail4} alt="Photo thumbnail" />
          <img src={photothumbnail5} alt="Photo thumbnail" />
          <img src={photothumbnail6} alt="Photo thumbnail" />
          <img src={photothumbnail7} alt="Photo thumbnail" />
          <img src={photothumbnail8} alt="Photo thumbnail" />
          <img src={photothumbnail9} alt="Photo thumbnail" />
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
