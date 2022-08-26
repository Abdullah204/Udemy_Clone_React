import React from "react";
import "./index.css";
import tabStyles from "./tabStyles.module.css";
import Course from "./Course.js";

// description :
// props : coursesData : array of course data ,
//each object im array is containing , imgurl , title rating .. etc
function LearningTab(props) {
  let courses = props.coursesData.map((course) => (
    <Course courseData={course}></Course>
  ));

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
