import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/aboutpage.scss";
import { SEO } from "../components/Seo";

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    var overlay = document.querySelector(".overlay-loading");
    var bodyTag = document.querySelector("body");
    overlay?.classList.add("loaded");
    bodyTag?.classList.add("main-full-h");
    bodyTag?.classList.remove("hidebody");
  }, []);

  const aboutphotoQuery = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "about-photo" } } } }
        }
        sort: { date: ASC }
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

  const aboutphoto = aboutphotoQuery.allWpPost.edges
    .map(({ node }: any) => node.featuredImage?.node?.mediaItemUrl)
    .filter(Boolean);
  return (
    <Layout>
      <SEO title="Mampii - About" pathname="about" />
      <section className="aboutpage-wrapper">
        <div>
          <img src={aboutphoto[0]} alt="Mampy" />
          <div className="textabout">
            <h2 className="sixCaps">Mampionona Rakotojaona</h2>
            <p>
            My name is Rakotojaona Mampionona, photographer and entrepreneur. With a passion for colour and expertise in commercial, culinary, portrait and event photography, I began my journey alongside my studies at INSCAE. After graduating, I founded my own company, Mampii, in 2021. As a professional photographer, I offer a wide range of services, from corporate to image banks, including photo packshots, products and reports. Explore my portfolio to discover my captivating work and contact me to bring your photographic vision to life.
            </p>

            <div className="they-trust">
              <h2 className="sixCaps">They trust me.</h2>
              <ul>
                <li>
                  <img src="https://img.logoipsum.com/298.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/299.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/282.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/283.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/290.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/295.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/289.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/226.svg" alt="Logo" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
