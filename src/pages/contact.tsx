import React from "react";
import Layout from "../components/Layout";
import { HeadFC } from "gatsby";
import Contact from "../components/Contact";

const ContactPage: React.FC = () => {
  React.useEffect(() => {
    var overlay = document.querySelector(".overlay-loading");
    var bodyTag = document.querySelector("body");
    overlay?.classList.add("loaded");
    bodyTag?.classList.remove("hidebody");
    bodyTag?.classList.add("inject-head");
  }, []);
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => (
  <title>Contact - Mampionona Rakotojaona</title>
);