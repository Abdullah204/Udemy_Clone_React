import React from "react";
import CourseRequirementsStyles from "./CourseRequirements.module.css";

function CourseRequirements(props) {
  return (
    <div>
      <h2>Requirements</h2>

      <ul className={CourseRequirementsStyles["list"]}>
        {props.list.map((item) => {
          return <li className={CourseRequirementsStyles["item"]}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default CourseRequirements;
