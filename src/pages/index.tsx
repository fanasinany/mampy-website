import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/globals.scss";
import Home from "../components/Home";
import Header from "../components/Header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header/>
      <Home />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Mampionona Rakotojaona | Photographe</title>
);
