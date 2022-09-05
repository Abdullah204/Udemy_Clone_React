import React from "react";
import CourseRequirementsStyles from "./CourseRequirementsStyles.module.css";
function CourseRequirements() {
  return (
    <div>
      <h2>Requirements</h2>
      <ul>
        <li className={CourseRequirementsStyles["item"]}>
          Macintosh (OSX)/ Windows(Vista and higher) Machine
        </li>
        <li className={CourseRequirementsStyles["item"]}>
          Internet Connection
        </li>
      </ul>
    </div>
  );
}

export default CourseRequirements;
