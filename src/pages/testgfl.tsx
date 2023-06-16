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
      allWpPost {
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

  const images = data.allWpPost.edges.map(({ node }:any) => node.featuredImage?.node?.mediaItemUrl).filter(Boolean);


  console.log(images);
  return (
    <Layout>
       <div>
      {images.map((imageUrl:any, index:any) => (
        <img src={imageUrl} alt={`Image ${index}`} key={index} />
      ))}
    </div>
    </Layout>
  );
};

export default TestgflPage;

export const Head: HeadFC = () => <title>Test GFL</title>;
