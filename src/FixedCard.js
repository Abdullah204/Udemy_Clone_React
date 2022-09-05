import React from "react";
import { MdAccessAlarms } from "react-icons/md";
import fixedCardStyles from "./fixedCardStyles.module.css";

function FixedCard(props) {
  let img = "";
  if (props.viewImage) {
    img = (
      <img
        src="https://img-c.udemycdn.com/course/480x270/394676_ce3d_5.jpg"
        alt="course logo"
        className={fixedCardStyles["image"]}
      ></img>
    );
  }

  return (
    <div className={fixedCardStyles["fixed-card"]}>
      {img}
      <div className={fixedCardStyles["below-image"]}>
        <div className={fixedCardStyles["price-container"]}>
          <div className={fixedCardStyles["new-price"]}>E£149.99</div>
          <div className={fixedCardStyles["old-price"]}>E£199.99</div>
          <div className={fixedCardStyles["discount"]}>78% off</div>
        </div>
        <div className={fixedCardStyles["time-left"]}>
          <MdAccessAlarms className={fixedCardStyles["alarm"]} />
          <strong>1 day </strong>left at this price!
        </div>
        <button className={fixedCardStyles["cart"]}>Add to cart</button>
        <button className={fixedCardStyles["buy"]}>Buy now</button>
        <div className={fixedCardStyles["guarantee"]}>
          30-day Money-back guarantee
        </div>
        <div className={fixedCardStyles["includes"]}>This course includes:</div>
        <ul className={fixedCardStyles["list"]}>
          <li className={fixedCardStyles["item"]}>14 hours on-demand video</li>
          <li className={fixedCardStyles["item"]}>1 article</li>
          <li className={fixedCardStyles["item"]}>3 downloadable resources</li>
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
  );
}

export default FixedCard;
