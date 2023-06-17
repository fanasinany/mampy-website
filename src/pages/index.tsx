import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/globals.scss";
import Home from "../components/Home";
import About from "../components/About";
import Layout from "../components/Layout";
import PortfolioSection from "../components/PortfolioSection";
import AOS from "aos";
import "aos/dist/aos.css";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  React.useEffect(() => {
    var overlay = document.querySelector(".overlay-loading");
    var bodyTag = document.querySelector("body");
    overlay?.classList.add("loaded");
    bodyTag?.classList.remove("hidebody");
    bodyTag?.classList.remove("main-full-h");
  }, []);

  return (
    <Layout>
      <Home />
      <PortfolioSection />
      <About />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Mampionona Rakotojaona | Photographe</title>
);
