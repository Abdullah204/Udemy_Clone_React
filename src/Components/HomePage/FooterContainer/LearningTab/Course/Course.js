import React, { useState, useRef } from "react";
import "/Users/abdullahahmad/my-app/src/index.css";
import courseStyles from "./Course.module.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
import CourseHover from "./CourseHover/CourseHover";
// description :
// props : one Object (courseData) including all data related to course
// like title , image , rating . .etc
function Course(props) {
  const myRef = useRef();
  let bs;
  if (props.courseData.bestseller_badge_content !== null) {
    bs = (
      <div className={courseStyles["best-seller-container"]}>
        <span className={courseStyles["best-seller"]}>Best Seller</span>
      </div>
    );
  }

  let stars = generateStars(props.courseData.rating); // generate stars depending on rating
  const [hoverCard, setHoverCard] = useState("");
  const handleHover = () => {
    let sw = window.innerWidth;
    let pos = myRef.current.offsetLeft;
    if (sw - pos < 600) {
      setHoverCard(
        <CourseHover cName="course-hover-right" data={props.courseData} />
      );
    } else {
      setHoverCard(
        <CourseHover cName="course-hover-left" data={props.courseData} />
      );
    }
  };
  const handleLeave = () => setHoverCard("");
  return (
    <div ref={myRef} className={courseStyles["course"]}>
      <Link
        to={`course/${props.courseData.id}`}
        className={courseStyles["link"]}
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        <img
          src={props.courseData.image_304x171}
          className={courseStyles["course-image"]}
          alt="course"
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
            ({props.courseData.num_reviews})
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
        {hoverCard}
      </Link>
    </div>
  );
}
export default Course;

// description : takes course rating and
//returns number of stars depending on course rating
function generateStars(rating) {
  let stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<FaStar className={courseStyles["fa-star"]}></FaStar>);
  }

  if (rating - Math.floor(rating >= 0.2))
    stars.push(<FaStarHalf className={courseStyles["fa-star"]}></FaStarHalf>);
  return stars;
}
