import React, { useState } from "react";
import reviewsStyling from "./reviewsStyling.module.css";
import { BiLike, BiDislike } from "react-icons/bi";

function Review(props) {
  let el = props.param;
  const [helpful, setHelpful] = useState("Was this review helpful?");
  const [likeClass, setLikeClass] = useState("like-container");
  const [dislikeClass, setDislikeClass] = useState("like-container");

  function handleLike() {
    if (likeClass === "like-container") {
      setHelpful("Thank you for your feedback");
      setLikeClass("like-clicked");
      setDislikeClass("like-container");
    } else {
      setHelpful("Was this review helpful?");
      setLikeClass("like-container");
    }
  }

  function handleDislike() {
    if (dislikeClass === "like-container") {
      setHelpful("Thank you for your feedback");
      setLikeClass("like-container");
      setDislikeClass("like-clicked");
    } else {
      setHelpful("Was this review helpful?");
      setDislikeClass("like-container");
    }
  }
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
        <div className={reviewsStyling["helpful"]}>{helpful}</div>
        <div className={reviewsStyling["feedback"]}>
          <button
            className={reviewsStyling[`${likeClass}`]}
            onClick={handleLike}
          >
            <BiLike className={reviewsStyling["like"]} />
          </button>
          <button
            className={reviewsStyling[`${dislikeClass}`]}
            onClick={handleDislike}
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
