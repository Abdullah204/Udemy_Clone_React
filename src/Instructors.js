import React, { forwardRef, useContext } from "react";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { GiRibbonMedal } from "react-icons/gi";
import instructorStyles from "./instructorStyles.module.css";
import { HomePageContext } from "./App";
import { useParams } from "react-router-dom";
import courseContentStyles from "./courseContentStyles.module.css";

function Instructors() {
  const homeContext = useContext(HomePageContext);
  const params = useParams();
  const cid = params.courseid;
  return (
    <div className={courseContentStyles["container"]}>
      <div className={courseContentStyles["width-container"]}>
        <div className={courseContentStyles["border-container"]}>
          <h2>Instructors</h2>
          <ul className={instructorStyles["list"]}>
            {homeContext[cid].visible_instructors.map((item) => {
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
                        <AiFillPlayCircle
                          className={instructorStyles["icon"]}
                        />
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
      </div>
    </div>
  );
}

export default Instructors;
