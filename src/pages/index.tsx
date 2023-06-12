import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/globals.scss";
import Home from "../components/Home";
import About from "../components/About";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import PortfolioSection from "../components/PortfolioSection";
import AOS from "aos";
import "aos/dist/aos.css";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <Home />
      <PortfolioSection />
      <About />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Mampionona Rakotojaona | Photographe</title>
);
