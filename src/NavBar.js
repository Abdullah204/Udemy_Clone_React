import React from "react";
import navBarStyles from "./navBarStyles.module.css";
import { BsCart3, BsGlobe, BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <FaBars className={navBarStyles["bars"]} />
      <Link to="/">
        <img
          src={"imgs/udemylogo.png"}
          alt="udemyLogo"
          className={navBarStyles["logo"]}
        />
      </Link>

      <span className={navBarStyles["categories"]}>Categories</span>
      <form className={navBarStyles["search-bar"]}>
        <BsSearch className={navBarStyles["search-icon"]} />
        <input placeholder="search for anything"></input>
        <button className={navBarStyles["search-button"]}>search</button>
      </form>
      <span className={navBarStyles["business"]}>Udemy Business</span>
      <span className={navBarStyles["teach"]}>Teach on Udemy</span>
      <BsCart3 className={navBarStyles["cart"]} />

      <button className={navBarStyles["login"]}>Log in</button>
      <button className={navBarStyles["sign-up"]}>Sign up</button>
      <BsGlobe className={navBarStyles["globe"]} />
    </nav>
  );
}

export default NavBar;
