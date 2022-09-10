import React, { useState } from "react";
import instructorStyles from "./instructorStyles.module.css";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

function CourseDescription(props) {
  const [showMore, setShowMore] = useState(true);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const arrow = showMore ? (
    <MdOutlineKeyboardArrowDown />
  ) : (
    <MdOutlineKeyboardArrowUp />
  );
  const showbutton = (
    <button
      className={instructorStyles[showMore ? "show-more" : "show-less"]}
      onClick={handleShowMore}
    >
      {showMore ? "show more " : "show less "}
      {arrow}
    </button>
  );
  return (
    <div>
      <h2>Description</h2>
      <p className={instructorStyles[showMore ? "p-show-more" : "p"]}>
        {props.desc}
        {props.desc.length > 500 ? showbutton : ""}
      </p>
    </div>
  );
}

export default CourseDescription;
