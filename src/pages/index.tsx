import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/globals.scss";
import Home from "../components/Home";
import About from "../components/About";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import PortfolioSection from "../components/PortfolioSection";

const LoadingComponent = () => {
  return (
    <div className="overlay-loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    const overlay = document.querySelector(".overlay-loading") as HTMLElement;

    const handleLoad = () => {
      overlay.classList.add("loaded");
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <LoadingComponent />
      <Layout>
        <Home />
        <PortfolioSection />
        <About />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Mampionona Rakotojaona | Photographe</title>
);
