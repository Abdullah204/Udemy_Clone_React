import React from "react";
import { BsStarFill } from "react-icons/bs";
import behindNavStyles from "./BehindNav.module.css";
function BehindNav() {
  return (
    <div className={behindNavStyles["behind-nav"]}>
      <div className={behindNavStyles["title"]}>
        Learn Python: The Complete Python Programming Course{" "}
      </div>
      <div className={behindNavStyles["row-two"]}>
        <div className={behindNavStyles["rating"]}>
          4.4 <BsStarFill className={behindNavStyles["star"]} />
        </div>
        <div className={behindNavStyles["raters"]}>(3,192 ratings) </div>{" "}
        <div className={behindNavStyles["students"]}>19,430 students</div>
      </div>
    </div>
  );
}

export default BehindNav;
