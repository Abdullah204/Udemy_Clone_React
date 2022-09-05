import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsStar, BsStarFill } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import reviewsStyling from "./reviewsStyling.module.css";
function Reviews() {
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
        >
          <option value="all">All ratings</option>
          <option value="5">Five Stars</option>
          <option value="4">Four Stars</option>
          <option value="3">Three Stars</option>
          <option value="2">Two Stars</option>
          <option value="1">One Stars</option>
        </select>
      </div>
      <ul className={reviewsStyling["list"]}>
        <li className={reviewsStyling["item"]}>
          <div className={reviewsStyling["left-container"]}>
            <span className={reviewsStyling["left"]}>PG</span>
          </div>

          <div className={reviewsStyling["right"]}>
            <div className={reviewsStyling["name"]}>Prajakta G.</div>
            <div className={reviewsStyling["rating-container"]}>
              <span className={reviewsStyling["stars"]}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar />
                <BsStar />
              </span>
              <span className={reviewsStyling["time"]}>5 days ago</span>
            </div>
            <div className={reviewsStyling["review"]}>
              The course is absolutely phenomenal and I cannot be more thankful
              to Angela for teaching in such an awesome way. However, there are
              a few places where the lessons are broken (not at all complaining,
              it is still more worth a million times than what it costs) and it
              gets too difficult to follow along, such as the mongoose module
              and the web3 sections. The only reason for 4 stars
            </div>
            <div className={reviewsStyling["helpful"]}>
              Was this review helpful?
            </div>
            <div className={reviewsStyling["feedback"]}>
              <span className={reviewsStyling["like-container"]}>
                <BiLike className={reviewsStyling["like"]} />
              </span>
              <span className={reviewsStyling["like-container"]}>
                <BiDislike className={reviewsStyling["like"]} />
              </span>
              <span className={reviewsStyling["report"]}>Report</span>
            </div>
          </div>
        </li>
        <li className={reviewsStyling["item"]}>
          <div className={reviewsStyling["left-container"]}>
            <span className={reviewsStyling["left"]}>PG</span>
          </div>

          <div className={reviewsStyling["right"]}>
            <div className={reviewsStyling["name"]}>Prajakta G.</div>
            <div className={reviewsStyling["rating-container"]}>
              <span className={reviewsStyling["stars"]}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar />
                <BsStar />
              </span>
              <span className={reviewsStyling["time"]}>5 days ago</span>
            </div>
            <div className={reviewsStyling["review"]}>
              The course is absolutely phenomenal and I cannot be more thankful
              to Angela for teaching in such an awesome way. However, there are
              a few places where the lessons are broken (not at all complaining,
              it is still more worth a million times than what it costs) and it
              gets too difficult to follow along, such as the mongoose module
              and the web3 sections. The only reason for 4 stars
            </div>
            <div className={reviewsStyling["helpful"]}>
              Was this review helpful?
            </div>
            <div className={reviewsStyling["feedback"]}>
              <span className={reviewsStyling["like-container"]}>
                <BiLike className={reviewsStyling["like"]} />
              </span>
              <span className={reviewsStyling["like-container"]}>
                <BiDislike className={reviewsStyling["like"]} />
              </span>
              <span className={reviewsStyling["report"]}>Report</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Reviews;
