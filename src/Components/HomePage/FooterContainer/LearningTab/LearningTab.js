import React, { useContext, useState, useEffect } from "react";
import { DataContext, HomePageContext } from "../../../../App";
import "/Users/abdullahahmad/my-app/src/index.css";
import learningTabStyles from "./learningTabStyles.module.css";
import Course from "./Course/Course.js";
import MoonLoader from "react-spinners/MoonLoader";
import { useSearchParams } from "react-router-dom";
function LearningTab(props) {
  const context = useContext(HomePageContext);

  const loaded = useContext(DataContext);
  const [searchParams, setSearchParams] = useSearchParams();
  let searchString = searchParams.get("query");

  let courses = [];
  Object.keys(context).forEach(function (key, index) {
    if (
      searchString == null ||
      context[key].title.toLowerCase().includes(searchString.toLowerCase())
    ) {
      courses.push(<Course courseData={context[key]} />);
    }
  });

  return (
    <div className={learningTabStyles["learning-tab"]}>
      <h2 className={learningTabStyles["tab-title"]}>{props.title}</h2>
      <p className={learningTabStyles["tab-description"]}>{props.paragraph}</p>
      <button className={learningTabStyles["explore-button"]}>
        Explore Python
      </button>

      {loaded ? (
        <div className={learningTabStyles["course-list"]}>{courses}</div>
      ) : (
        <MoonLoader className={learningTabStyles["loader"]} />
      )}
    </div>
  );
}

export default LearningTab;
