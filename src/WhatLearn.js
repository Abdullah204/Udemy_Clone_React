import React from "react";
import whatLearn from "./whatLearn.module.css";
import { BsCheck2 } from "react-icons/bs";
function WhatLearn() {
  return (
    <div className={whatLearn["container"]}>
      <div className={whatLearn["width-container"]}>
        <div className={whatLearn["border-container"]}>
          <h2>What you'll learn</h2>
          <ul class={whatLearn["list"]}>
            <li class={whatLearn["list-item"]}>
              <BsCheck2 className={whatLearn["check"]} />
              <span>Create their own Python Programs</span>
            </li>
            <li class={whatLearn["list-item"]}>
              <BsCheck2 className={whatLearn["check"]} />{" "}
              <span>Become an experienced Python Programmer</span>
            </li>
            <li class={whatLearn["list-item"]}>
              <BsCheck2 className={whatLearn["check"]} />{" "}
              <span>Parse the Web and Create their own Games</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhatLearn;
