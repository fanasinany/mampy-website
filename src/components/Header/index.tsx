import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "gatsby";
import MaterialSymbolsLinkedCameraOutline from "../Icons/MaterialSymbolsLinkedCameraOutline";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Email from "../Icons/Email";
import SolarHamburgerMenuBroken from "../Icons/SolarHamburgerMenuBroken";
import IconoirCancel from "../Icons/IconoirCancel";

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
  return (
    <header>
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
            <Link to="/" className="contact-button">
              Contact
            </Link>
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
