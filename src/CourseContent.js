import React from "react";

import CourseDescription from "./CourseDescription";
import CourseRequirements from "./CourseRequirements";
import WhoFor from "./WhoFor";
import courseContentStyles from "./courseContentStyles.module.css";
import MyAccordion from "./MyAccordion";
import Instructors from "./Instructors";
import StudentFeedback from "./StudentFeedback";
import Reviews from "./Reviews";

function CourseContent() {
  return (
    <div className={courseContentStyles["container"]}>
      <div className={courseContentStyles["width-container"]}>
        <div className={courseContentStyles["border-container"]}>
          <h2>Course Content</h2>
          <div className={courseContentStyles["stats"]}>
            <span>15 Lectures • 146 sections • 14h 42m total length</span>
            <button className={courseContentStyles["expand"]}>
              Expand All Sections
            </button>
          </div>
          <div className={courseContentStyles["sections"]}>
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
            <MyAccordion />
          </div>
          <CourseRequirements />
          <CourseDescription />
          <WhoFor />
          <Instructors />
          <StudentFeedback />
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
