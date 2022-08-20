import React from "react";
import "./index.css";
import courseStyles from "./courseStyles.module.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

function Course(props) {
  let bs;
  if (props.courseData.isBestSeller == "True") {
    bs = (
      <div className={courseStyles["best-seller-container"]}>
        <span className={courseStyles["best-seller"]}>Best Seller</span>
      </div>
    );
  }
  var stars = [];
  for (let i = 0; i < Math.floor(props.courseData.rating); i++) {
    stars.push(<FaStar className={courseStyles["fa-star"]}></FaStar>);
  }
  let x = props.courseData.rating;
  if (x - Math.floor(x) >= 0.2)
    stars.push(<FaStarHalf className={courseStyles["fa-star"]}></FaStarHalf>);
  return (
    <div className={courseStyles["course"]}>
      <img
        src={props.courseData.imgurl}
        className={courseStyles["course-image"]}
      ></img>
      <h3 className={courseStyles["course-title"]}>
        {props.courseData.title}{" "}
      </h3>
      <div className={courseStyles["course-author"]}>
        {props.courseData.author}
      </div>
      <div className={courseStyles["rating-container"]}>
        <span className={courseStyles["course-rating"]}>
          {props.courseData.rating}
        </span>
        {stars}
        <span className={courseStyles["course-raters"]}>
          ({props.courseData.raters_no})
        </span>
        <div className={courseStyles["price-container"]}>
          <span className={courseStyles["new-price"]}>
            E£{props.courseData.newPrice}{" "}
          </span>
          <span className={courseStyles["old-price"]}>
            E£{props.courseData.oldPrice}
          </span>
        </div>
        {bs}
      </div>
    </div>
  );
}
export default Course;
