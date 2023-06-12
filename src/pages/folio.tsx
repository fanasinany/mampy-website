import React from "react";
import Layout from "../components/Layout";
import { HeadFC } from "gatsby";
import "../styles/folio.scss";

const FolioPage: React.FC = () => {
  return (
    <Layout>
      <section className="portfolio-page">
        <div className="wrapper_folio">
          <div className="overlay"></div>
          <div className="home_container">
            <h1>Mampionona RAKOTOJAONA</h1>
            <span className="sixCaps">PORTFOLIO - GALLERY</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FolioPage;

export const Head: HeadFC = () => (
  <title>Portfolio - Mampionona Rakotojaona</title>
);
