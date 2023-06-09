import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import MaterialSymbolsLinkedCameraOutline from "../Icons/MaterialSymbolsLinkedCameraOutline";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Email from "../Icons/Email";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <MaterialSymbolsLinkedCameraOutline />
          Mampi.
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li className="social-link">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Email />
            </a>
          </li>
          <li>
            <Link to="/" className="contact-button">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
