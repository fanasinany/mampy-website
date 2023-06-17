import React from "react";
import "./style.scss";
import { Link, graphql, useStaticQuery } from "gatsby";
import ExtraitCategory from "../ExtraitCategory";

const PortfolioSection = () => {
  /* Query for 9 photos */
  const ninePhotos = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { eq: "nine-square-homepage" } } }
          }
        }
        sort: { date: ASC }
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
      <ExtraitCategory />
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
