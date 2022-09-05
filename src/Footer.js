import React from "react";
import footerStyles from "./footerStyles.module.css";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={footerStyles["container"]}>
      <div className={footerStyles["smaller-container"]}>
        <ul className={footerStyles["list"]}>
          <li>Udemy Business</li>
          <li>Careers</li>
          <li>Terms</li>
          <li>Teach on Udemy</li>
          <li>Blog</li>
          <li>Privacy policy</li>
          <li> Get the app</li>
          <li>Help and Support</li>
          <li>Cookie settings</li>
          <li>About us</li>
          <li>Affiliate</li>
          <li>Sitemap</li>
          <li>Contact us</li>
          <li>Investors</li>
          <li>Accessibility statement </li>
        </ul>
        <div className={footerStyles["button-container"]}>
          <button className={footerStyles["button"]}>
            <FaGlobe />
            <span className={footerStyles["english"]}> English</span>
          </button>
        </div>
      </div>
      <div className={footerStyles["smaller-container"]}>
        <Link to="/">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt="udemylogoinverted"
            className={footerStyles["logo"]}
          />
        </Link>
        <span className={footerStyles["copyright"]}>© 2022 Udemy, Inc.</span>
      </div>
    </div>
  );
}

export default Footer;
