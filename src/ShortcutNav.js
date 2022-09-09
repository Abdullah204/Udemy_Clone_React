import React, { useState } from "react";
import shortcutNavStyles from "./shortcutNavStyles.module.css";

function ShortcutNav(props) {
  const [clickedIndex, setClickedIndex] = useState(0);
  let arr = ["Overview", "Curriculum", "Instructor", "Reviews"];
  function handleClick(key) {
    setClickedIndex(key);
  }
  return (
    <div className={shortcutNavStyles[props.myClassName]}>
      <div className={shortcutNavStyles["width-container"]}>
        <ul className={shortcutNavStyles["list"]}>
          {arr.map((el, index) => {
            return (
              <li
                className={
                  index == clickedIndex
                    ? shortcutNavStyles["button-clicked"]
                    : shortcutNavStyles["button"]
                }
                onClick={() => handleClick(index)}
                key={index}
              >
                {" "}
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ShortcutNav;
