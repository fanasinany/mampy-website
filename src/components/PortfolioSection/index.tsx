import React from "react";
import "./style.scss";
import photocategory1 from "../../images/homepage/portfolio-category/1.webp";
import photocategory2 from "../../images/homepage/portfolio-category/2.webp";
import photocategory3 from "../../images/homepage/portfolio-category/3.webp";
import photocategory4 from "../../images/homepage/portfolio-category/4.webp";
import photocategory5 from "../../images/homepage/portfolio-category/5.webp";

import { Link, graphql, navigate, useStaticQuery } from "gatsby";

const PortfolioSection = () => {
  const ninePhotos = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { eq: "nine-square-homepage" } } }
          }
        }
        sort: { fields: date, order: ASC }
      ) {
        edges {
          node {
            featuredImage {
              node {
                mediaItemUrl
                title
              }
            }
          }
        }
      }
    }
  `);

  const imagesNinePhotos = ninePhotos.allWpPost.edges.map(({ node }: any) => ({
    mediaItemUrl: node.featuredImage?.node?.mediaItemUrl,
    title: node.featuredImage?.node?.title,
  }));

  return (
    <section id="portfolio">
      <h2 className="sixCaps" data-aos="fade-down">
        Mampy's Portfolio
      </h2>
      <p data-aos="fade-up">The great work that I do.</p>
      <div className="phototype-wrapper">
        <div className="item-wrapper">
          <div className="item">
            <div
              onClick={() => navigate("/folio")}
              style={{ backgroundImage: `url(${photocategory3})` }}
            >
              <div data-aos="fade-up" className="title-desc">
                <span className="sixCaps">Landscape</span>
                <p className="description-photo">
                  Mountains, forests, oceans, fields and other natural
                  landscapes.
                </p>
              </div>
            </div>
            <div
              onClick={() => navigate("/folio")}
              style={{ backgroundImage: `url(${photocategory2})` }}
            >
              <div data-aos="fade-up" className="title-desc">
                <span className="sixCaps">Culinary</span>
                <p className="description-photo">
                  Aesthetic and appetizing presentation of food and dishes.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              onClick={() => navigate("/folio")}
              style={{ backgroundImage: `url(${photocategory1})` }}
            >
              <div data-aos="fade-up" className="title-desc">
                <span className="sixCaps">Portrait</span>
                <p className="description-photo">
                  Capture people's characteristics and emotions.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              onClick={() => navigate("/folio")}
              style={{ backgroundImage: `url(${photocategory4})` }}
            >
              <div data-aos="fade-up" className="title-desc">
                <span className="sixCaps">Real estate</span>
                <p className="description-photo">Real estate photography.</p>
              </div>
            </div>
            <div
              onClick={() => navigate("/folio")}
              style={{ backgroundImage: `url(${photocategory5})` }}
            >
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
          {imagesNinePhotos.map((imagesninephoto: any, index: any) => {
            return (
              <img
                src={imagesninephoto.mediaItemUrl}
                alt={imagesninephoto.title}
                key={index}
              />
            );
          })}
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
};

export default PortfolioSection;
