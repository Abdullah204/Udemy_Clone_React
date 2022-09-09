import React, { forwardRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsStar, BsStarFill } from "react-icons/bs";
import reviewsStyling from "./reviewsStyling.module.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ReviewsContext } from "./App";
import Review from "./Review";
const Reviews = forwardRef((props, ref) => {
  const params = useParams();
  const cid = params.courseid;
  const reviewsContext = useContext(ReviewsContext);
  const [rating, setRating] = useState(0);
  const displayedReviews = (rating) => {
    let filtered = reviewsContext[cid].results.filter(
      (el) => rating == 0 || Math.round(el.rating == rating)
    );
    return (
      <ul ref={ref} className={reviewsStyling["list"]}>
        {filtered.map((el) => {
          let stars = [];
          let i = 0;
          while (i < el.rating) {
            stars.push(<BsStarFill />);
            i++;
          }
          while (i < 5) {
            stars.push(<BsStar />);
            i++;
          }
          return <Review param={el} stars={stars} />;
        })}
      </ul>
    );
  };
  const handleSelect = (event) => {
    let chosen = event.target.value;
    setRating(chosen);
  };
  return (
    <div>
      <h2>Reviews</h2>
      <div className={reviewsStyling["search-container"]}>
        <form className={reviewsStyling["form"]}>
          <input
            placeholder="Search reviews"
            className={reviewsStyling["input"]}
          ></input>
          <button className={reviewsStyling["button"]}>
            <FaSearch className={reviewsStyling["icon"]} />
          </button>
        </form>
        <select
          placeholder="All stars"
          name="ratings-filter"
          id="ratings-filter"
          className={reviewsStyling["select"]}
          onChange={handleSelect}
        >
          <option value="0">All ratings</option>
          <option value="5">Five Stars</option>
          <option value="4">Four Stars</option>
          <option value="3">Three Stars</option>
          <option value="2">Two Stars</option>
          <option value="1">One Stars</option>
        </select>
      </div>
      {displayedReviews(rating)}
    </div>
  );
});

export default Reviews;
