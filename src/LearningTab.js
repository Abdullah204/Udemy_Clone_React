import React, { useContext, useState, useEffect } from "react";
import { DataContext, HomePageContext } from "./App";
import "./index.css";
import learningTabStyles from "./learningTabStyles.module.css";
import Course from "./Course.js";
import MoonLoader from "react-spinners/MoonLoader";
import { useSearchParams } from "react-router-dom";
function LearningTab(props) {
  const context = useContext(HomePageContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

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

  //let courses = context.map((cData) => <Course courseData={cData}></Course>);
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
      {/* {loading ? (
        <MoonLoader className={learningTabStyles["loader"]} />
      ) : (
        <div className={learningTabStyles["course-list"]}>{courses}</div>
      )} */}
      {loaded ? (
        <div className={learningTabStyles["course-list"]}>{courses}</div>
      ) : (
        <MoonLoader className={learningTabStyles["loader"]} />
      )}
    </div>
  );
}

export default LearningTab;
