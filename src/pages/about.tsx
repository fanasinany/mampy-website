import React from "react";
import Layout from "../components/Layout";
import { HeadFC } from "gatsby";
import AOS from "aos";
import "../styles/aboutpage.scss";
import img from "../images/aboutpage/mampy.webp";

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    var overlay = document.querySelector(".overlay-loading");
    var bodyTag = document.querySelector("body");
    overlay?.classList.add("loaded");
    bodyTag?.classList.remove("hidebody");
  }, []);
  return (
    <Layout>
      <section className="aboutpage-wrapper">
        <div>
          <img src={img} alt="Mampy"/>
          <div className="textabout">
            <h2 className="sixCaps">Mampionona Rakotojaona</h2>
            <p>
              Professional photographer from Madagascar, passionate and
              creative, with a particular preference for portrait but still
              versatile. Experiences with multiple collaboration with companies
              and personalities from different fields.
            </p>

            <div className="they-trust">
              <h2 className="sixCaps">They trust me.</h2>
              <ul>
                <li>
                  <img src="https://img.logoipsum.com/298.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/299.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/282.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/283.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/290.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/295.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/289.svg" alt="Logo" />
                </li>
                <li>
                  <img src="https://img.logoipsum.com/226.svg" alt="Logo" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About - Mampionona Rakotojaona</title>;
