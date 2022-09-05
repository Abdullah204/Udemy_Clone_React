import React from "react";
import courseFooterStyles from "./courseFooterStyles.module.css";
function CourseFooter() {
  return (
    <div className={courseFooterStyles["container"]}>
      <h5 className={courseFooterStyles["text"]}>
        Top companies choose
        <span className={courseFooterStyles["business"]}> Udemy Business</span>{" "}
        to build in-demand career skills.
      </h5>
      <div className={courseFooterStyles["company-images"]}>
        <img
          alt="Nasdaq"
          height="44"
          width="115"
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
        />
        <img
          alt="Volkswagen"
          height="44"
          width="44"
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
        />
        <img
          alt="Box"
          height="44"
          width="67"
          src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
        />
        <img
          alt="NetApp"
          height="44"
          width="115"
          src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
        />
        <img
          alt="Eventbrite"
          height="44"
          width="115"
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
        />
      </div>
    </div>
  );
}

export default CourseFooter;
