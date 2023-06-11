import React from "react";
import "./style.scss";
import SocialLink from "../SocialLink";
import img from "../../images/mampy.webp";
import img1 from "../../images/mampy1.webp";

const About = () => {
  return (
    <section className="aboutwrapper" id="about">
      <div>
        <h2 className="sixCaps">
          MAMPIONONA
          RAKOTOJAONA
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          asperiores quam magni animi error autem fuga doloremque at, ad facere!
        </p>
        <SocialLink color="white" />
      </div>
      <div>
        <img src={img} alt="Mampy" />
        <div className="text">
          <h3>About me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
            praesentium aspernatur? Amet provident quibusdam recusandae tenetur
            libero veritatis iste harum ipsa.
          </p>
        </div>
      </div>
      <div>
        <div className="text">
          <h3>I love what I do</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
            praesentium aspernatur? Amet provident quibusdam recusandae tenetur
          </p>
        </div>
        <img src={img1} alt="Mampy" />
      </div>
    </section>
  );
};

export default About;
