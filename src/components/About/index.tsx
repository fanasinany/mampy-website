import React from "react";
import "./style.scss";
import SocialLink from "../SocialLink";
import img from "../../images/mampy.webp";
import img1 from "../../images/mampy1.webp";

const About = () => {
  return (
    <section className="aboutwrapper" id="about">
      <div>
        <h2 className="sixCaps" data-aos="fade-down">
          MAMPIONONA
          RAKOTOJAONA
        </h2>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          asperiores quam magni animi error autem fuga doloremque at, ad facere!
        </p>
        {/* <SocialLink color="white" /> */}
      </div>
      <div>
        <img src={img} alt="Mampy" data-aos="fade-down"/>
        <div className="text">
          <h3 data-aos="fade-down">About me</h3>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
            praesentium aspernatur? Amet provident quibusdam recusandae tenetur
            libero veritatis iste harum ipsa.
          </p>
        </div>
      </div>
      <div>
        <div className="text">
          <h3 data-aos="fade-down">I love what I do</h3>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
            praesentium aspernatur? Amet provident quibusdam recusandae tenetur
          </p>
        </div>
        <img src={img1} alt="Mampy"  data-aos="fade-up"/>
      </div>
    </section>
  );
};

export default About;
