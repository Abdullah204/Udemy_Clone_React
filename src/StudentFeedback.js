import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import studentFeedbackStyles from "./studentFeedbackStyles.module.css";
function StudentFeedback() {
  return (
    <div>
      <h2>Student feedback</h2>
      <div className={studentFeedbackStyles["flex"]}>
        <div className={studentFeedbackStyles["left"]}>
          <div className={studentFeedbackStyles["overall"]}>4.4</div>
          <div>
            <BsStarFill className={studentFeedbackStyles["star"]} />
            <BsStarFill className={studentFeedbackStyles["star"]} />
            <BsStarFill className={studentFeedbackStyles["star"]} />
            <BsStarFill className={studentFeedbackStyles["star"]} />
            <BsStarHalf className={studentFeedbackStyles["star"]} />
          </div>
          <div className={studentFeedbackStyles["course-rating"]}>
            Course Rating
          </div>
        </div>
        <div className={studentFeedbackStyles["right"]}>
          <div className={studentFeedbackStyles["row-container"]}>
            <div className={studentFeedbackStyles["bar-container"]}>
              <span className={studentFeedbackStyles["bar"]}>
                <span className={studentFeedbackStyles["ratio"]}></span>
              </span>
              <span className={studentFeedbackStyles["stars"]}>
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
              </span>
              <span className={studentFeedbackStyles["score"]}>43%</span>
            </div>
          </div>
          <div className={studentFeedbackStyles["row-container"]}>
            <div className={studentFeedbackStyles["bar-container"]}>
              <span className={studentFeedbackStyles["bar"]}>
                <span className={studentFeedbackStyles["ratio"]}></span>
              </span>
              <span className={studentFeedbackStyles["stars"]}>
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
              </span>
              <span className={studentFeedbackStyles["score"]}>37%</span>
            </div>
          </div>
          <div className={studentFeedbackStyles["row-container"]}>
            <div className={studentFeedbackStyles["bar-container"]}>
              <span className={studentFeedbackStyles["bar"]}>
                <span className={studentFeedbackStyles["ratio"]}></span>
              </span>
              <span className={studentFeedbackStyles["stars"]}>
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
              </span>
              <span className={studentFeedbackStyles["score"]}>15%</span>
            </div>
          </div>
          <div className={studentFeedbackStyles["row-container"]}>
            <div className={studentFeedbackStyles["bar-container"]}>
              <span className={studentFeedbackStyles["bar"]}>
                <span className={studentFeedbackStyles["ratio"]}></span>
              </span>
              <span className={studentFeedbackStyles["stars"]}>
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
              </span>
              <span className={studentFeedbackStyles["score"]}>3%</span>
            </div>
          </div>
          <div className={studentFeedbackStyles["row-container"]}>
            <div className={studentFeedbackStyles["bar-container"]}>
              <span className={studentFeedbackStyles["bar"]}>
                <span className={studentFeedbackStyles["ratio"]}></span>
              </span>
              <span className={studentFeedbackStyles["stars"]}>
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
              </span>
              <span className={studentFeedbackStyles["score"]}>2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentFeedback;
