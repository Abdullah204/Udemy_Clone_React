import React from "react";
import TopContainerStyles from "./topContainerStyles.module.css";
import {
  MdStar,
  MdStarHalf,
  MdKeyboardArrowRight,
  MdClosedCaptionOff,
} from "react-icons/md";
import { BsExclamationOctagon, BsGlobe } from "react-icons/bs";
import { MdAccessAlarms } from "react-icons/md";
function TopContainer() {
  return (
    <div className={TopContainerStyles["top-container"]}>
      <div className={TopContainerStyles["width-container"]}>
        <div className={TopContainerStyles["top-text"]}>
          <span className={TopContainerStyles["learning-filter"]}>
            Development
          </span>
          <MdKeyboardArrowRight className={TopContainerStyles["arrow"]} />
          <span className={TopContainerStyles["learning-filter"]}>
            Programming Languages
          </span>
          <MdKeyboardArrowRight className={TopContainerStyles["arrow"]} />
          <span className={TopContainerStyles["learning-filter"]}>Python</span>
          <img
            src="https://img-c.udemycdn.com/course/480x270/394676_ce3d_5.jpg"
            alt="video"
            className={TopContainerStyles["sm-img"]}
          ></img>
          <h1 className={TopContainerStyles["title"]}>
            Learn Python: The Complete Python Programming Course
          </h1>
          <h2 className={TopContainerStyles["description"]}>
            Learn A-Z everything about Python, from the basics, to advanced
            topics like Python GUI, Python Data Analysis, and more!
          </h2>
          <div className={TopContainerStyles["feats-row"]}>
            <span className={TopContainerStyles["rating"]}>4.4</span>
            {/* #f3ca8c */}
            <MdStar className={TopContainerStyles["star"]} />
            <MdStar className={TopContainerStyles["star"]} />
            <MdStar className={TopContainerStyles["star"]} />
            <MdStar className={TopContainerStyles["star"]} />
            <MdStarHalf className={TopContainerStyles["star"]} />
            <span className={TopContainerStyles["purple"]}>
              (3,146) ratings
            </span>
            <span className={TopContainerStyles["white"]}>19,237 students</span>
          </div>
          <div className={TopContainerStyles["feats-row"]}>
            <span className={TopContainerStyles["white"]}>Created by </span>
            <span className={TopContainerStyles["purple"]}>
              Avinash Jain , The Codex
            </span>
          </div>
          <div className={TopContainerStyles["feats-row"]}>
            <div className={TopContainerStyles["sm-row"]}>
              <BsExclamationOctagon className={TopContainerStyles["white"]} />
              <span className={TopContainerStyles["white"]}>
                Last updated 9/2015
              </span>
            </div>
            <div className={TopContainerStyles["sm-row"]}>
              <BsGlobe className={TopContainerStyles["white"]} />
              <span className={TopContainerStyles["white"]}>English</span>
            </div>
            <div className={TopContainerStyles["sm-row"]}>
              <MdClosedCaptionOff className={TopContainerStyles["white"]} />
              <span className={TopContainerStyles["white"]}>English</span>
            </div>
          </div>

          <div className={TopContainerStyles["price-container"]}>
            <div className={TopContainerStyles["new-price"]}>E£149.99</div>
            <div className={TopContainerStyles["old-price"]}>E£199.99</div>
            <div className={TopContainerStyles["discount"]}>78% off</div>
          </div>
          <div className={TopContainerStyles["time-left"]}>
            <MdAccessAlarms className={TopContainerStyles["alarm"]} />
            <strong>1 day </strong>left at this price!
          </div>
          <button className={TopContainerStyles["cart"]}>Add to cart</button>
          <div className={TopContainerStyles["guarantee"]}>
            30-day Money-back guarantee
          </div>
          <div className={TopContainerStyles["guarantee"]}>
            Full Lifetime access
          </div>
          <div className={TopContainerStyles["gift-container"]}>
            <div className={TopContainerStyles["share"]}>Share</div>
            <div className={TopContainerStyles["share"]}>Gift the course</div>
            <div className={TopContainerStyles["share"]}>Apply coupon</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
