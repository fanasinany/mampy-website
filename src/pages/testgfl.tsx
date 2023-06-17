import React from "react";
import { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";

const TestgflPage: React.FC = () => {
  React.useEffect(() => {
    var overlay = document.querySelector(".overlay-loading");
    var bodyTag = document.querySelector("body");
    overlay?.classList.add("loaded");
    bodyTag?.classList.remove("hidebody");
  }, []);

  const data = useStaticQuery(graphql`
    query {
      allWpPage {
        edges {
          node {
            title
            slug
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

  const images = data.allWpPage.edges.map(({ node }: any) => ({
    title: node.title,
    slug: node.slug,
    url: node.featuredImage?.node?.mediaItemUrl,
  }));

  console.log(images);
  return <Layout>
    tEST
  </Layout>;
};

export default TestgflPage;

export const Head: HeadFC = () => <title>Test GFL</title>;
