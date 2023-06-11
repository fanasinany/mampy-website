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


function Portfolio() {
  return (
    <section>
      <div className="portfolio-wrapper">
        <div className="images">
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
        <div className="textDescription">
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
          <Link to="#" className="view-more">View more</Link>
        </div>
        <Link to="#" className="view-more mobile-v">View more</Link>
      </div>
    </section>
  );
}

export default Portfolio;
