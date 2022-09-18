import React, { useContext, useRef, useState } from "react";

import CourseDescription from "./CourseDescription";
import CourseRequirements from "./CourseRequirements";
import WhoFor from "./WhoFor";
import courseContentStyles from "./courseContentStyles.module.css";
import MyAccordion from "./MyAccordion";
import Instructors from "./Instructors";
import StudentFeedback from "./StudentFeedback";
import Reviews from "./Reviews";
import { CoursePageContext, HomePageContext } from "./App";
import { useParams } from "react-router-dom";
//num_published_lectures
export const ContentRefContext = React.createContext();

function CourseContent() {
  const params = useParams();
  const cid = params.courseid;
  const detailsContext = useContext(CoursePageContext);
  const contentRef = useRef();
  const [extended, setExtended] = useState(false);
  const handleShowMoreSections = () => {
    setExtended(true);
  };
  const sections = detailsContext[cid].curriculum_context.data.sections.map(
    (section) => {
      return <MyAccordion data={section} />;
    }
  );
  let hours = Math.round(
    detailsContext[cid].curriculum_context.data
      .estimated_content_length_in_seconds / 3600
  );
  let minutes = Math.round(
    (detailsContext[cid].curriculum_context.data
      .estimated_content_length_in_seconds /
      60) %
      60
  );

  const button = (
    <button
      className={
        sections.length > 10
          ? courseContentStyles["button"]
          : courseContentStyles["button-hidden"]
      }
      onClick={handleShowMoreSections}
    >
      {sections.length - 10} more sections
    </button>
  );
  return (
    <div className={courseContentStyles["container"]}>
      <div className={courseContentStyles["width-container"]}>
        <div
          ref={contentRef}
          className={courseContentStyles["border-container"]}
        >
          <h2>Course Content</h2>
          <div className={courseContentStyles["stats"]}>
            <span>
              {
                detailsContext[cid].curriculum_context.data
                  .num_of_published_lectures
              }{" "}
              Lectures •{" "}
              {detailsContext[cid].curriculum_context.data.sections.length}{" "}
              sections • {hours}h {minutes}m total length
            </span>
            <button className={courseContentStyles["expand"]}>
              Expand All Sections
            </button>
          </div>
          <div className={courseContentStyles["sections"]}>
            {sections.length > 10 ? sections.slice(0, 10) : sections}
            {extended
              ? sections.slice(10, sections.length)
              : sections.length > 10
              ? button
              : ""}
          </div>
          <CourseRequirements list={detailsContext[cid].details.Requirements} />
          <CourseDescription desc={detailsContext[cid].details.description} />
          <WhoFor text={detailsContext[cid].details.for_who} />
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
