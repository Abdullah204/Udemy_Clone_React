import React, { useReducer } from "react";
import reviewsStyling from "./reviewsStyling.module.css";
import { BiLike, BiDislike } from "react-icons/bi";

function Review(props) {
  let el = props.param;

  const initialState = {
    helpful: "Was this review helpful?",
    likeClass: "like-container",
    dislikeClass: "like-container",
  };
  const reducer = (state, action) => {
    if (action.type === "like") {
      if (state.likeClass === "like-container") {
        return {
          helpful: "Thank you for your feedback",
          likeClass: "like-clicked",
          dislikeClass: "like-container",
        };
      } else {
        return {
          helpful: "Was this review helpful?",
          likeClass: "like-container",
          dislikeClass: "like-container",
        };
      }
    } else {
      if (state.dislikeClass === "like-container") {
        return {
          helpful: "Thank you for your feedback",
          dislikeClass: "like-clicked",
          likeClass: "like-container",
        };
      } else {
        return {
          helpful: "Was this review helpful?",
          dislikeClass: "like-container",
          likeClass: "like-container",
        };
      }
    }
  };

  const [componentState, dispatch] = useReducer(reducer, initialState);

  return (
    <li className={reviewsStyling["item"]}>
      <div className={reviewsStyling["left-container"]}>
        <span className={reviewsStyling["left"]}>
          <img
            src={el.user.image_50x50}
            alt="userimg
          "
          ></img>
        </span>
      </div>

      <div className={reviewsStyling["right"]}>
        <div className={reviewsStyling["name"]}>
          {el.user.public_display_name}
        </div>
        <div className={reviewsStyling["rating-container"]}>
          <span className={reviewsStyling["stars"]}>{props.stars}</span>
          <span className={reviewsStyling["time"]}>
            {el.created_formatted_with_time_since}
          </span>
        </div>
        <div className={reviewsStyling["review"]}>{el.content}</div>
        <div className={reviewsStyling["helpful"]}>
          {componentState.helpful}
        </div>
        <div className={reviewsStyling["feedback"]}>
          <button
            className={reviewsStyling[`${componentState.likeClass}`]}
            onClick={() => dispatch({ type: "like" })}
          >
            <BiLike className={reviewsStyling["like"]} />
          </button>
          <button
            className={reviewsStyling[`${componentState.dislikeClass}`]}
            onClick={() => dispatch({ type: "dislike" })}
          >
            <BiDislike className={reviewsStyling["like"]} />
          </button>
          <span className={reviewsStyling["report"]}>Report</span>
        </div>
      </div>
    </li>
  );
}

export default Review;
