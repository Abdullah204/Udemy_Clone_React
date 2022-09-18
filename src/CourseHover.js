import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import courseHoverStyles from "./courseHoverStyles.module.css";
import { BsCheck2 } from "react-icons/bs";
function CourseHover(props) {
  return (
    <div className={courseHoverStyles[props.cName]}>
      <h2 className={courseHoverStyles["title"]}>{props.data.title}</h2>
      <div className={courseHoverStyles["updated"]}>
        Updated <strong>{props.data.last_update_date}</strong>
      </div>
      <div className={courseHoverStyles["hours"]}>
        {props.data.content_info} • All Levels • subtitles
      </div>
      <div className={courseHoverStyles["desc"]}>{props.data.headline}</div>
      <ul className={courseHoverStyles["list"]}>
        {props.data.objectives_summary.map((item) => {
          return (
            <li className={courseHoverStyles["item"]}>
              <BsCheck2 className={courseHoverStyles["check"]} />
              {item}
            </li>
          );
        })}
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
