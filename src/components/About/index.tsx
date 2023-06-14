import React from "react";
import "./style.scss";
import SocialLink from "../SocialLink";
import lastphoto1 from "../../images/homepage/2-last-photos/1.webp";
import lastphoto2 from "../../images/homepage/2-last-photos/2.webp";

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
        <img src={lastphoto1} alt="Last Photo" data-aos="fade-down"/>
        <div className="text">
          <h3 data-aos="fade-down">About me</h3>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
            praesentium aspernatur?
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
        <img src={lastphoto2} alt="Last Photo"  data-aos="fade-up"/>
      </div>
    </section>
  );
};

export default About;
