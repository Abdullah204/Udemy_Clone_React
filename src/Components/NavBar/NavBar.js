import React, { useState } from "react";
import navBarStyles from "./NavBar.module.css";
import { useSearchParams } from "react-router-dom";
import { BsCart3, BsGlobe, BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
function NavBar() {
  const [searchString, setSearchString] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));
  const handleChange = (event) => {
    setSearchString(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ query: searchString });
  };
  return (
    <nav>
      <FaBars className={navBarStyles["bars"]} />
      <Link to="/" className={navBarStyles["link-image"]}>
        <img
          src={"imgs/udemylogo.png"}
          alt="udemyLogo"
          className={navBarStyles["logo"]}
        />
      </Link>

      <span className={navBarStyles["categories"]}>Categories</span>
      <form className={navBarStyles["search-bar"]}>
        <BsSearch className={navBarStyles["search-icon"]} />
        <input
          placeholder="search for anything"
          value={searchString}
          onChange={handleChange}
        ></input>
        <button
          className={navBarStyles["search-button"]}
          onClick={handleSearch}
        >
          search
        </button>
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
