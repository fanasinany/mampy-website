import React from "react";
import "./style.scss";
import { graphql, useStaticQuery } from "gatsby";

const About = () => {
  const twoLastPhotos = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { eq: "two-last-homepage" } } }
          }
        }
        sort: {date: ASC}
      ) {
        edges {
          node {
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);

  const imagesTwoPhotos = twoLastPhotos.allWpPost.edges.map(
    ({ node }: any) => node.featuredImage?.node?.mediaItemUrl
  );

  return (
    <section className="aboutwrapper" id="about">
      <div>
        <h2 className="sixCaps" data-aos="fade-down">
          MAMPIONONA RAKOTOJAONA
        </h2>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          asperiores quam magni animi error autem fuga doloremque at, ad facere!
        </p>
        {/* <SocialLink color="white" /> */}
      </div>
      <div>
        <img
          src={imagesTwoPhotos[0]}
          alt="Last Photo"
          data-aos="fade-down"
        />
        <div className="text">
          <h3 data-aos="fade-down">About me</h3>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
            praesentium aspernatur?
          </p>
        </div>
      </div>
      <div>
        <div className="text">
          <h3 data-aos="fade-down">I love what I do</h3>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
            praesentium aspernatur? Amet provident quibusdam recusandae tenetur
          </p>
        </div>
        <img
          src={imagesTwoPhotos[1]}
          alt="Last Photo"
          data-aos="fade-up"
        />
      </div>
    </section>
  );
};

export default About;
