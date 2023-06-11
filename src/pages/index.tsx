import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/globals.scss";
import Home from "../components/Home";
import About from "../components/About";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Home />
      <Portfolio/> 
      <About />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Mampionona Rakotojaona | Photographe</title>
);
