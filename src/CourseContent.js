import React, { useContext } from "react";

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
function CourseContent() {
  const params = useParams();
  const cid = params.courseid;
  const detailsContext = useContext(CoursePageContext);
  const homeContext = useContext(HomePageContext);

  return (
    <div className={courseContentStyles["container"]}>
      <div className={courseContentStyles["width-container"]}>
        <div className={courseContentStyles["border-container"]}>
          <h2>Course Content</h2>
          <div className={courseContentStyles["stats"]}>
            <span>
              {
                detailsContext[cid].curriculum_context.data
                  .num_of_published_lectures
              }{" "}
              Lectures •{" "}
              {detailsContext[cid].curriculum_context.data.sections.length}{" "}
              sections •{" "}
              {Math.round(
                detailsContext[cid].curriculum_context.data
                  .estimated_content_length_in_seconds / 3600
              )}
              h{" "}
              {Math.round(
                (detailsContext[cid].curriculum_context.data
                  .estimated_content_length_in_seconds /
                  60) %
                  60
              )}
              m total length
            </span>
            <button className={courseContentStyles["expand"]}>
              Expand All Sections
            </button>
          </div>
          <div className={courseContentStyles["sections"]}>
            {detailsContext[cid].curriculum_context.data.sections.map(
              (section) => {
                return <MyAccordion data={section} />;
              }
            )}
          </div>
          <CourseRequirements list={detailsContext[cid].details.Requirements} />
          <CourseDescription desc={detailsContext[cid].details.description} />
          <WhoFor text={detailsContext[cid].details.for_who} />
          <Instructors instructorsData={homeContext[cid].visible_instructors} />
          <StudentFeedback />
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
