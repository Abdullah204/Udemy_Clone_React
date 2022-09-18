import React from "react";
import Tabs from "./Tabs";
import LearningTab from "./LearningTab";
import footerContainerStyles from "./footerContainerStyles.module.css";

function FooterContainer() {
  return (
    <div className={footerContainerStyles["container"]}>
      <Tabs />
      <LearningTab title={tabTitle} paragraph={par} />
    </div>
  );
}

export default FooterContainer;

const tabTitle = "Expand your career opportunities with Python";
const par =
  "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.";
