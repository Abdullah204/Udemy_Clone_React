import React from "react";
import CourseRequirementsStyles from "./CourseRequirementsStyles.module.css";
function CourseRequirements(props) {
  return (
    <div>
      <h2>Requirements</h2>

      <ul className={CourseRequirementsStyles["list"]}>
        {props.list.map((item) => {
          return <li className={CourseRequirementsStyles["item"]}>{item}</li>;
        })}
        {/* <li className={CourseRequirementsStyles["item"]}>
          Macintosh (OSX)/ Windows(Vista and higher) Machine
        </li>
        <li className={CourseRequirementsStyles["item"]}>
          Internet Connection
        </li> */}
      </ul>
    </div>
  );
}

export default CourseRequirements;
