import React from "react";
import Layout from "../components/Layout";
import { HeadFC } from "gatsby";
import About from "../components/About";
import AOS from "aos";

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  React.useEffect(() => {
    var overlay = document.querySelector(".overlay-loading");
    var bodyTag = document.querySelector("body");
    overlay?.classList.add("loaded");
    bodyTag?.classList.remove("hidebody");
  }, []);
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About - Mampionona Rakotojaona</title>;
