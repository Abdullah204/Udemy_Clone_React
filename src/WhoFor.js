import React from "react";
import whoForStyles from "./whoForStyles.module.css";
function WhoFor(props) {
  return (
    <div>
      <h2>Who this course is for:</h2>
      <ul className={whoForStyles["list"]}>
        {props.text.split("\n").map((item) => {
          return <li className={whoForStyles["item"]}>{item}</li>;
        })}
        {/* <li className={whoForStyles["item"]}>
          If you want to learn to code through building fun and useful projects,
          then take this course.
        </li>
        <li className={whoForStyles["item"]}>
          If you want to start your own startup by building your own websites
          and web apps.
        </li>
        <li className={whoForStyles["item"]}>
          If you are a seasoned programmer, then take this course to to get up
          to speed quickly with the latest frameworks and NodeJS
        </li>
        <li className={whoForStyles["item"]}>
          If you want to take ONE COURSE and learn everything you need to know
          about web development, take this course
        </li> */}
      </ul>
    </div>
  );
}

export default WhoFor;
