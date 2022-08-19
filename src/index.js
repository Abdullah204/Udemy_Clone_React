import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import courseStyles from "./courseStyles.module.css";
import tabStyles from "./tabStyles.module.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

// ========================================

class Course extends React.Component {
  render() {
    let bs;
    if (this.props.courseData.isBestSeller == "True") {
      bs = (
        <div className={courseStyles["best-seller-container"]}>
          <span className={courseStyles["best-seller"]}>Best Seller</span>
        </div>
      );
    }
    var stars = [];
    for (let i = 0; i < Math.floor(this.props.courseData.rating); i++) {
      stars.push(<FaStar className={courseStyles["fa-star"]}></FaStar>);
    }
    let x = this.props.courseData.rating;
    if (x - Math.floor(x) >= 0.2)
      stars.push(<FaStarHalf className={courseStyles["fa-star"]}></FaStarHalf>);
    return (
      <div className={courseStyles["course"]}>
        <img
          src={this.props.courseData.imgurl}
          className={courseStyles["course-image"]}
        ></img>
        <h3 className={courseStyles["course-title"]}>
          {this.props.courseData.title}{" "}
        </h3>
        <div className={courseStyles["course-author"]}>
          {this.props.courseData.author}
        </div>
        <div className={courseStyles["rating-container"]}>
          <span className={courseStyles["course-rating"]}>
            {this.props.courseData.rating}
          </span>
          {stars}
          <span className={courseStyles["course-raters"]}>
            ({this.props.courseData.raters_no})
          </span>
          <div className={courseStyles["price-container"]}>
            <span className={courseStyles["new-price"]}>
              E£{this.props.courseData.newPrice}{" "}
            </span>
            <span className={courseStyles["old-price"]}>
              E£{this.props.courseData.oldPrice}
            </span>
          </div>
          {bs}
        </div>
      </div>
    );
  }
}

class LearningTab extends React.Component {
  render() {
    let courses = [];

    let arr = this.props.coursesData;
    for (let course of arr) {
      courses.push(<Course courseData={course}></Course>);
    }
    return (
      <div className={tabStyles["learning-tab"]}>
        <h2 className={tabStyles["tab-title"]}>{this.props.title}</h2>
        <p className={tabStyles["tab-description"]}>{this.props.paragraph}</p>
        <button className={tabStyles["explore-button"]}>Explore Python</button>
        <div className={tabStyles["course-list"]}>{courses}</div>
      </div>
    );
  }
}

// ==========================================
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LearningTab coursesData={courseArray} paragraph={par} title={tabTitle}>
    {" "}
  </LearningTab>
);
