import React from "react";
import imageHeaderStyles from "./imageHeaderStyles.module.css";

function ImageHeader() {
  return (
    <div className={imageHeaderStyles["container"]}>
      <img
        src={"imgs/clocksmaller.jpeg"}
        alt="header responsive"
        className={imageHeaderStyles["small-img"]}
      />
      <div className={imageHeaderStyles["header-text"]}>
        <h2>New to Udemy? Lucky You.</h2>
        <p>
          Last day to get courses on just about anything starting at only
          E£129.99.
        </p>
      </div>
      <img
        src={"imgs/clockimg.jpeg"}
        alt="header"
        className={imageHeaderStyles["clock-img"]}
      />
    </div>
  );
}

export default ImageHeader;
