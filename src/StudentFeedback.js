import React, { useContext } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useParams } from "react-router-dom";
import studentFeedbackStyles from "./studentFeedbackStyles.module.css";
import { ReviewsContext } from "./App";

function StudentFeedback() {
  const params = useParams();
  const cid = params.courseid;
  const reviewsContext = useContext(ReviewsContext);
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;
  for (let x of reviewsContext[cid].results) {
    if (Math.round(x.rating) == 1) {
      one++;
    }
    if (Math.round(x.rating) == 2) {
      two++;
    }
    if (Math.round(x.rating) == 3) {
      three++;
    }
    if (Math.round(x.rating) == 4) {
      four++;
    }
    if (Math.round(x.rating) == 5) {
      five++;
    }
  }
  let onew = Math.round((one / reviewsContext[cid].results.length) * 100);
  let twow = Math.round((two / reviewsContext[cid].results.length) * 100);
  let threew = Math.round((three / reviewsContext[cid].results.length) * 100);
  let fourw = Math.round((four / reviewsContext[cid].results.length) * 100);
  let fivew = Math.round((five / reviewsContext[cid].results.length) * 100);

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
                <span
                  className={studentFeedbackStyles["ratio"]}
                  style={{ width: fivew + "%" }}
                ></span>
              </span>
              <span className={studentFeedbackStyles["stars"]}>
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
              </span>
              <span className={studentFeedbackStyles["score"]}>{fivew}%</span>
            </div>
          </div>
          <div className={studentFeedbackStyles["row-container"]}>
            <div className={studentFeedbackStyles["bar-container"]}>
              <span className={studentFeedbackStyles["bar"]}>
                <span
                  className={studentFeedbackStyles["ratio"]}
                  style={{ width: fourw + "%" }}
                ></span>
              </span>
              <span className={studentFeedbackStyles["stars"]}>
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
              </span>
              <span className={studentFeedbackStyles["score"]}>{fourw}%</span>
            </div>
          </div>
          <div className={studentFeedbackStyles["row-container"]}>
            <div className={studentFeedbackStyles["bar-container"]}>
              <span className={studentFeedbackStyles["bar"]}>
                <span
                  className={studentFeedbackStyles["ratio"]}
                  style={{ width: threew + "%" }}
                ></span>
              </span>
              <span className={studentFeedbackStyles["stars"]}>
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
              </span>
              <span className={studentFeedbackStyles["score"]}>{threew}%</span>
            </div>
          </div>
          <div className={studentFeedbackStyles["row-container"]}>
            <div className={studentFeedbackStyles["bar-container"]}>
              <span className={studentFeedbackStyles["bar"]}>
                <span
                  className={studentFeedbackStyles["ratio"]}
                  style={{ width: twow + "%" }}
                ></span>
              </span>
              <span className={studentFeedbackStyles["stars"]}>
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
              </span>
              <span className={studentFeedbackStyles["score"]}>{twow}%</span>
            </div>
          </div>
          <div className={studentFeedbackStyles["row-container"]}>
            <div className={studentFeedbackStyles["bar-container"]}>
              <span className={studentFeedbackStyles["bar"]}>
                <span
                  className={studentFeedbackStyles["ratio"]}
                  style={{ width: onew + "%" }}
                ></span>
              </span>
              <span className={studentFeedbackStyles["stars"]}>
                <BsStarFill className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
                <BsStar className={studentFeedbackStyles["star"]} />
              </span>
              <span className={studentFeedbackStyles["score"]}>{onew}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentFeedback;
