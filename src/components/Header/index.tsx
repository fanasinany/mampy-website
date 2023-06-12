import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "gatsby";
import MaterialSymbolsLinkedCameraOutline from "../Icons/MaterialSymbolsLinkedCameraOutline";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Email from "../Icons/Email";
import SolarHamburgerMenuBroken from "../Icons/SolarHamburgerMenuBroken";
import IconoirCancel from "../Icons/IconoirCancel";
import Linkedin from "../Icons/Linkedin";
import Youpic from "../Icons/Youpic";

/* get windows width */
function getCurrentDimension() {
  return window.innerWidth;
}

const Header = () => {
  const [widthSize, setWidthSize] = useState(1000);
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  useEffect(() => {
    const updateDimension = () => {
      setWidthSize(getCurrentDimension());
    };
    updateDimension(); // Set initial value

    // Only add event listener in the browser environment
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDimension);

      return () => {
        window.removeEventListener("resize", updateDimension);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        document.querySelector(".header-wrapper")?.classList.add("active");
      } else {
        document.querySelector(".header-wrapper")?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-wrapper">
      <nav>
        <Link to="/">
          <MaterialSymbolsLinkedCameraOutline />
          Mampi.
        </Link>
        <ul
          className={`nav-menu ${widthSize < 768 && "mobileActive"} ${
            showMenuMobile && "active"
          }`}
        >
          <li>
            <Link onClick={() => setShowMenuMobile(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMenuMobile(false)} to="/folio">
              Portfolio
            </Link>
          </li>
          {/* <li>
            <a onClick={() => setShowMenuMobile(false)} href="#about">
              About
            </a>
          </li> */}
          <li className="social-link">
            <a
              href="https://www.facebook.com/MampiononaRakotojaonaPhotography"
              target="_blank"
            >
              <Facebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <Instagram />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <Linkedin />
            </a>
            <a href="https://youpic.com/rakotomampionona12" target="_blank">
              <Youpic />
            </a>
            <a href="mailto:rakotomampionona12@gmail.com">
              <Email />
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowMenuMobile(false)}
              href="#contact"
              className="contact-button"
            >
              Contact
            </a>
          </li>
        </ul>
        {widthSize < 768 && (
          <button
            className="menu-burger"
            onClick={() => setShowMenuMobile((current) => !current)}
          >
            {showMenuMobile ? <IconoirCancel /> : <SolarHamburgerMenuBroken />}
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
