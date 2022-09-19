import React from "react";
import tabsStyles from "./Tabs.module.css";
function Tabs() {
  return (
    <div className={tabsStyles["container"]}>
      <h2>A broad Selection of Courses</h2>
      <p>
        Choose from 185,000 online video courses with new additions published
        every month
      </p>
      <ul className={tabsStyles["tab-list"]}>
        <li className={tabsStyles["python"]}>Python</li>
        <li>Excel</li>
        <li>Web Development</li>
        <li>JavaScript</li>
        <li>Data Science</li>
        <li>AWS Certification</li>
        <li>Drawing</li>
      </ul>
    </div>
  );
}

export default Tabs;
