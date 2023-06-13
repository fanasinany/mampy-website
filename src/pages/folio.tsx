import React from "react";
import Layout from "../components/Layout";
import { HeadFC } from "gatsby";
import "../styles/folio.scss";
import GalleryPhotos from "../components/GalleryPhotos";

const FolioPage: React.FC = () => {
  React.useEffect(() => {
    var overlay = document.querySelector(".overlay-loading");
    var bodyTag = document.querySelector("body");
    overlay?.classList.add("loaded");
    bodyTag?.classList.remove("hidebody");
  }, []);
  return (
    <Layout>
      <section className="portfolio-page">
        <div className="wrapper_folio">
          <div className="overlay"></div>
          <div className="home_container">
            <h1 data-aos="fade-down">Mampionona RAKOTOJAONA</h1>
            <span data-aos="fade-up" className="sixCaps">
              PORTFOLIO - GALLERY
            </span>
          </div>
        </div>
      </section>
      <GalleryPhotos />
    </Layout>
  );
};

export default FolioPage;

export const Head: HeadFC = () => (
  <title>Portfolio - Mampionona Rakotojaona</title>
);
