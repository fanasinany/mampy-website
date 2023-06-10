import React from "react";
import "./style.scss";
import SocialLink from "../SocialLink";

function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div>
          <SocialLink color="black"/>
          <span>
            © Copyright 2023 Mampi - Made with ❤ by{" "}
            <a href="https://ny-nivoarijaona.space">Ny Nivoarijaona</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
