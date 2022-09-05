import React, { useState, useEffect } from "react";
import "./index.css";
import learningTabStyles from "./learningTabStyles.module.css";
import Course from "./Course.js";
function LearningTab(props) {
  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch("http://localhost:3000/python");

      if (response.status === 200) {
        const res = await response.json();
        setCoursesData(res);
      } else {
        throw new Error("Unable to fetch data");
      }
    };

    getInfo();
  }, []);

  const [coursesData, setCoursesData] = useState([]);
  let courses = coursesData.map((cData) => (
    <Course courseData={cData}></Course>
  ));
  // let courses = props.coursesData.map((course) => (
  //   <Course courseData={course}></Course>
  // ));

  return (
    <div className={learningTabStyles["learning-tab"]}>
      <h2 className={learningTabStyles["tab-title"]}>{props.title}</h2>
      <p className={learningTabStyles["tab-description"]}>{props.paragraph}</p>
      <button className={learningTabStyles["explore-button"]}>
        Explore Python
      </button>
      <div className={learningTabStyles["course-list"]}>{courses}</div>
    </div>
  );
}

export default LearningTab;
