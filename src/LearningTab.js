import React from "react";
import "./index.css";
import tabStyles from "./tabStyles.module.css";
import Course from "./Course.js";

function LearningTab(props) {
  let courses = [];

  let arr = props.coursesData;
  for (let course of arr) {
    courses.push(<Course courseData={course}></Course>);
  }

  return (
    <div className={tabStyles["learning-tab"]}>
      <h2 className={tabStyles["tab-title"]}>{props.title}</h2>
      <p className={tabStyles["tab-description"]}>{props.paragraph}</p>
      <button className={tabStyles["explore-button"]}>Explore Python</button>
      <div className={tabStyles["course-list"]}>{courses}</div>
    </div>
  );
}

export default LearningTab;
