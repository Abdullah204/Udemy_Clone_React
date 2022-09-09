import React, { forwardRef } from "react";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { GiRibbonMedal } from "react-icons/gi";
import instructorStyles from "./instructorStyles.module.css";
const Instructors = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h2>Instructors</h2>
      <ul className={instructorStyles["list"]}>
        {props.instructorsData.map((item) => {
          return (
            <li>
              <h3 className={instructorStyles["name"]}>{item.title}</h3>
              <div className={instructorStyles["position"]}>
                {item.job_title}
              </div>
              <div className={instructorStyles["header"]}>
                <div>
                  <img
                    className={instructorStyles["image"]}
                    src={item.image_100x100}
                    alt="instructor"
                  ></img>
                </div>
                <div className={instructorStyles["beside-image"]}>
                  <div className={instructorStyles["beside-element"]}>
                    <AiFillStar className={instructorStyles["icon"]} />
                    {item.rating} Instructor Rating
                  </div>
                  <div className={instructorStyles["beside-element"]}>
                    <GiRibbonMedal className={instructorStyles["icon"]} />
                    {item.reviews} Reviews
                  </div>
                  <div className={instructorStyles["beside-element"]}>
                    <BsPeopleFill className={instructorStyles["icon"]} />
                    {item.students} Students
                  </div>
                  <div className={instructorStyles["beside-element"]}>
                    <AiFillPlayCircle className={instructorStyles["icon"]} />
                    {item.courses} Courses
                  </div>
                </div>
              </div>
              <p className={instructorStyles["p"]}>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Instructors;
