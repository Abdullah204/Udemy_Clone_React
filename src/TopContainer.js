import React, { useContext } from "react";
import TopContainerStyles from "./topContainerStyles.module.css";
import { CoursePageContext, HomePageContext } from "./App";
import {
  MdStar,
  MdStarHalf,
  MdKeyboardArrowRight,
  MdClosedCaptionOff,
} from "react-icons/md";
import { BsExclamationOctagon, BsGlobe } from "react-icons/bs";
import { MdAccessAlarms } from "react-icons/md";
import { useParams } from "react-router-dom";

function TopContainer() {
  const params = useParams();
  const cid = params.courseid;
  const detailsContext = useContext(CoursePageContext);
  const homeContext = useContext(HomePageContext);

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
            src={homeContext[cid].image_240x135}
            alt="video"
            className={TopContainerStyles["sm-img"]}
          ></img>
          <h1 className={TopContainerStyles["title"]}>
            {homeContext[cid].title}
          </h1>
          <h2 className={TopContainerStyles["description"]}>
            {homeContext[cid].headline}
          </h2>
          <div className={TopContainerStyles["feats-row"]}>
            <span></span>
            <span className={TopContainerStyles["rating"]}>
              {homeContext[cid].avg_rating}
              {"     "}
            </span>

            <span className={TopContainerStyles["stars"]}>
              {"  "} {generateStars(homeContext[cid].avg_rating)}
            </span>
            <span className={TopContainerStyles["purple"]}>
              ({homeContext[cid].num_reviews}) ratings
            </span>
            <span className={TopContainerStyles["white"]}>
              {homeContext[cid].num_subscribers} students
            </span>
          </div>
          <div className={TopContainerStyles["feats-row"]}>
            <span className={TopContainerStyles["white"]}>Created by</span>
            <span className={TopContainerStyles["purple"]}>
              {homeContext[cid].visible_instructors
                .map((el) => el.title)
                .join(", ")}
            </span>
          </div>
          <div className={TopContainerStyles["feats-row"]}>
            <div className={TopContainerStyles["sm-row"]}>
              <BsExclamationOctagon className={TopContainerStyles["white"]} />
              <span className={TopContainerStyles["white"]}>
                last updated {homeContext[cid].last_update_date}
              </span>
            </div>
            <div className={TopContainerStyles["sm-row"]}>
              <BsGlobe className={TopContainerStyles["white"]} />
              <span className={TopContainerStyles["white"]}>English</span>
            </div>
            <div className={TopContainerStyles["sm-row"]}>
              <MdClosedCaptionOff className={TopContainerStyles["white"]} />
              <span className={TopContainerStyles["white"]}>
                {homeContext[cid].caption_languages.join(", ")}
              </span>
            </div>
          </div>

          <div className={TopContainerStyles["price-container"]}>
            <div className={TopContainerStyles["new-price"]}>
              E£{homeContext[cid].newPrice}
            </div>
            <div className={TopContainerStyles["old-price"]}>
              E£{homeContext[cid].oldPrice}
            </div>
            <div className={TopContainerStyles["discount"]}>
              {Math.round(
                ((homeContext[cid].oldPrice - homeContext[cid].newPrice) /
                  homeContext[cid].oldPrice) *
                  100
              )}
              % off
            </div>
          </div>
          <div className={TopContainerStyles["time-left"]}>
            <MdAccessAlarms className={TopContainerStyles["alarm"]} />
            <strong>{homeContext[cid].time_left_discount}</strong>left at this
            price!
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

function generateStars(rating) {
  let stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<MdStar className={TopContainerStyles["star"]}></MdStar>);
  }

  if (rating - Math.floor(rating >= 0.2))
    stars.push(
      <MdStarHalf className={TopContainerStyles["star"]}></MdStarHalf>
    );
  return stars;
}

export default TopContainer;
