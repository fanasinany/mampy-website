import React, { FC } from "react";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Email from "../Icons/Email";
import "./style.scss";

type SocialLinkProps = {
  color: string;
};

const SocialLink: FC<SocialLinkProps> = ({ color }) => {
  return (
    <ul
      className={`socialLinkWrapper ${color === "white" ? "white" : "black"}`}
    >
      <li>
        <a href="#">
          <Facebook />
        </a>
      </li>
      <li>
        <a href="#">
          <Instagram />
        </a>
      </li>
      <li>
        <a href="#">
          <Email />
        </a>
      </li>
    </ul>
  );
};

export default SocialLink;
