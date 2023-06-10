import React from "react";
import "./style.scss";
import SocialLink from "../SocialLink";
import IcSharpFavorite from "../Icons/IcSharpFavorite";

function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div>
          <SocialLink color="white"/>
          <span>
            © Copyright 2023 Mampi - Made with <IcSharpFavorite/> by{" "}
            <a href="https://ny-nivoarijaona.space" target="_blank">Ny Nivoarijaona</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
