import React, { useContext } from "react";
import { MdAccessAlarms } from "react-icons/md";
import fixedCardStyles from "./FixedCard.module.css";
import {
  CoursePageContext,
  HomePageContext,
} from "/Users/abdullahahmad/my-app/src/App.js";

import { useParams } from "react-router-dom";
function FixedCard(props) {
  let params = useParams();
  let cid = params.courseid;

  const detailsContext = useContext(CoursePageContext);
  const homeContext = useContext(HomePageContext);

  let img = "";
  if (props.viewImage) {
    img = (
      <img
        src={homeContext[cid].image_240x135}
        alt="course logo"
        className={fixedCardStyles["image"]}
      ></img>
    );
  }

  return props.view ? (
    <div className={fixedCardStyles[props.cardClassName]}>
      {img}
      <div className={fixedCardStyles["below-image"]}>
        <div className={fixedCardStyles["price-container"]}>
          <div className={fixedCardStyles["new-price"]}>
            E£{homeContext[cid].newPrice}
          </div>
          <div className={fixedCardStyles["old-price"]}>
            E£{homeContext[cid].oldPrice}
          </div>
          <div className={fixedCardStyles["discount"]}>
            {Math.round(
              ((homeContext[cid].oldPrice - homeContext[cid].newPrice) /
                homeContext[cid].oldPrice) *
                100
            )}
            % off
          </div>
        </div>
        <div className={fixedCardStyles["time-left"]}>
          <MdAccessAlarms className={fixedCardStyles["alarm"]} />
          <strong>{homeContext[cid].time_left_discount} </strong>left at this
          price!
        </div>
        <button className={fixedCardStyles["cart"]}>Add to cart</button>
        <button className={fixedCardStyles["buy"]}>Buy now</button>
        <div className={fixedCardStyles["guarantee"]}>
          30-day Money-back guarantee
        </div>
        {/* "on_demand_video": "7 hours",
      "article_count": 23,
      "downloadable_resource": 5, */}
        <div className={fixedCardStyles["includes"]}>This course includes:</div>
        <ul className={fixedCardStyles["list"]}>
          <li className={fixedCardStyles["item"]}>
            {homeContext[cid].on_demand_video} hours on-demand video
          </li>
          <li className={fixedCardStyles["item"]}>
            {homeContext[cid].article_count} article
          </li>
          <li className={fixedCardStyles["item"]}>
            {homeContext[cid].downloadable_resource} downloadable resources
          </li>
          <li className={fixedCardStyles["item"]}>Full lifetime access</li>
          <li className={fixedCardStyles["item"]}>Access on mobile and TV</li>
          <li className={fixedCardStyles["item"]}>Certificate of completion</li>
        </ul>

        <div className={fixedCardStyles["gift-container"]}>
          <div className={fixedCardStyles["share"]}>Share</div>
          <div className={fixedCardStyles["share"]}>Gift the course</div>
          <div className={fixedCardStyles["share"]}>Apply coupon</div>
        </div>
        <div className={fixedCardStyles["training"]}>
          Training 5 or more people?
        </div>
        <div className={fixedCardStyles["offer"]}>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </div>
        <button className={fixedCardStyles["business"]}>
          Try Udemy Business
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default FixedCard;
