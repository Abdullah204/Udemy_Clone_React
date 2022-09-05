import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import courseHoverStyles from "./courseHoverStyles.module.css";
import { BsCheck2 } from "react-icons/bs";
function CourseHover(props) {
  return (
    <div className={courseHoverStyles[props.cName]}>
      <h2 className={courseHoverStyles["title"]}>
        Learn Python: The Complete Python Programming Course
      </h2>
      <div className={courseHoverStyles["updated"]}>
        Updated <strong>september 2015</strong>
      </div>
      <div className={courseHoverStyles["hours"]}>
        14.5 total hours • All Levels • subtitles
      </div>
      <div className={courseHoverStyles["desc"]}>
        Learn A-Z everything about Python, from the basics, to advanced topics
        like Python GUI, Python Data Analysis, and more!
      </div>
      <ul className={courseHoverStyles["list"]}>
        <li className={courseHoverStyles["item"]}>
          <BsCheck2 className={courseHoverStyles["check"]} />
          Create their own Python Programs
        </li>
        <li className={courseHoverStyles["item"]}>
          <BsCheck2 className={courseHoverStyles["check"]} />
          Become an experienced Python Programmer
        </li>
        <li className={courseHoverStyles["item"]}>
          <BsCheck2 className={courseHoverStyles["check"]} />
          Parse the Web and Create their own Games
        </li>
      </ul>
      <div className={courseHoverStyles["bottom"]}>
        <button className={courseHoverStyles["button"]}>Add to Cart</button>
        <span className={courseHoverStyles["heart-container"]}>
          <AiOutlineHeart className={courseHoverStyles["heart"]} />
        </span>
      </div>
    </div>
  );
}

export default CourseHover;
