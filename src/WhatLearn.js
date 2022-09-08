import { useContext } from "react";
import React from "react";
import whatLearn from "./whatLearn.module.css";
import { BsCheck2 } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { CoursePageContext, HomePageContext } from "./App";

function WhatLearn() {
  let params = useParams();
  const cid = params.courseid;
  const detailsContext = useContext(CoursePageContext);
  const homeContext = useContext(HomePageContext);
  let objectives = homeContext[cid].objectives_summary.map((el) => {
    return (
      <li className={whatLearn["list-item"]}>
        <BsCheck2 className={whatLearn["check"]} />
        <span>{el}</span>
      </li>
    );
  });
  //objectives.className = `{whatLearn["check"]}`;
  return (
    <div className={whatLearn["container"]}>
      <div className={whatLearn["width-container"]}>
        <div className={whatLearn["border-container"]}>
          <h2>What you'll learn</h2>
          <ul className={whatLearn["list"]}>{objectives} </ul>
          {/* <ul className={whatLearn["list"]}>
            <li className={whatLearn["list-item"]}>
              <BsCheck2 className={whatLearn["check"]} />
              <span>Create their own Python Programs</span>
            </li>
            <li className={whatLearn["list-item"]}>
              <BsCheck2 className={whatLearn["check"]} />{" "}
              <span>Become an experienced Python Programmer</span>
            </li>
            <li className={whatLearn["list-item"]}>
              <BsCheck2 className={whatLearn["check"]} />{" "}
              <span>Parse the Web and Create their own Games</span>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default WhatLearn;
