import React from "react";
import whoForStyles from "./WhoFor.module.css";
function WhoFor(props) {
  return (
    <div>
      <h2>Who this course is for:</h2>
      <ul className={whoForStyles["list"]}>
        {props.text.split("\n").map((item) => {
          return <li className={whoForStyles["item"]}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default WhoFor;
