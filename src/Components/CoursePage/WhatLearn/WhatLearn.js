import { useContext } from "react";
import React, { forwardRef } from "react";
import whatLearn from "./WhatLearn.module.css";
import { BsCheck2 } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { CoursePageContext, HomePageContext } from "../../../App";

const WhatLearn = forwardRef((props, ref) => {
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
  return (
    <div ref={ref} className={whatLearn["container"]}>
      <div className={whatLearn["width-container"]}>
        <div className={whatLearn["border-container"]}>
          <h2>What you'll learn</h2>
          <ul className={whatLearn["list"]}>{objectives} </ul>
        </div>
      </div>
    </div>
  );
});
export default WhatLearn;
