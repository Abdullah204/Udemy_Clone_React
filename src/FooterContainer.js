import React from "react";
import Tabs from "./Tabs";
import LearningTab from "./LearningTab";
import footerContainerStyles from "./footerContainerStyles.module.css";

function FooterContainer() {
  return (
    <div className={footerContainerStyles["container"]}>
      <Tabs />
      <LearningTab coursesData={courseArray} title={tabTitle} paragraph={par} />
    </div>
  );
}

export default FooterContainer;

const courseArray = [
  {
    id: 1,
    imgurl: "imgs/python1.jpeg",
    title: "Learn Python: The Complete Python Programming Course",
    author: "Avinash Jain , The Codex",
    rating: "4.4",
    raters_no: "1284",
    newPrice: "199.99",
    oldPrice: "679.99",
    isBestSeller: "True",
  },
  {
    id: 2,
    imgurl: "imgs/python2.jpeg",
    title: "Learning Python for Data Analysis and Visualization",
    author: "Jose Portilla",
    rating: "5",
    raters_no: "1284",
    newPrice: "179.99",
    oldPrice: "579.99",
    isBestSeller: "True",
  },
  {
    id: 3,
    imgurl: "imgs/python3.jpeg",
    title: "Python for Beginners - Learn Programming from scratch",
    author: "Edwin Diaz",
    rating: "3.4",
    raters_no: "1284",
    newPrice: "399.99",
    oldPrice: "479.99",
    isBestSeller: "False",
  },
  {
    id: 4,
    imgurl: "imgs/python4.jpeg",
    title: "Learn Python: Python for Beginners",
    author: "Abrar Hussain",
    rating: "3.8",
    raters_no: "1284",
    newPrice: "159.99",
    oldPrice: "699.99",
    isBestSeller: "True",
  },
  {
    id: 5,
    imgurl: "imgs/python5.jpeg",
    title: "Python Beyond the Basics - Object-Oriented Programming",
    author: "Infinite Skills",
    rating: "4.2",
    raters_no: "1284",
    newPrice: "199.99",
    oldPrice: "679.99",
    isBestSeller: "False",
  },
  {
    id: 6,
    imgurl: "imgs/python6.jpeg",
    title: "Python From Scratch & Selenium WebDriver QA Automation 2022",
    author: "Admas Kinfu",
    rating: "4.4",
    raters_no: "1284",
    newPrice: "199.99",
    oldPrice: "679.99",
    isBestSeller: "True",
  },
  {
    id: 7,
    imgurl: "imgs/python7.jpeg",
    title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
    author: "Bryson Paune",
    rating: "4.3",
    raters_no: "1284",
    newPrice: "199.99",
    oldPrice: "679.99",
    isBestSeller: "False",
  },
];
const tabTitle = "Expand your career opportunities with Python";
const par =
  "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.";