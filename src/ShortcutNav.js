import React, { useState, useEffect } from "react";
import shortcutNavStyles from "./shortcutNavStyles.module.css";

function ShortcutNav(props) {
  const [clickedIndex, setClickedIndex] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        props.refparams[0].current.offsetTop -
          window.scrollY +
          props.refparams[0].current.offsetHeight <
        150
      ) {
        setClickedIndex(1);
      }
      if (
        props.refparams[1].current.offsetTop -
          window.scrollY +
          props.refparams[1].current.offsetHeight <
        150
      ) {
        setClickedIndex(2);
      }
      if (
        props.refparams[2].current.offsetTop -
          window.scrollY +
          props.refparams[2].current.offsetHeight <
        150
      ) {
        setClickedIndex(3);
      }
      if (
        props.refparams[0].current.offsetTop -
          window.scrollY +
          props.refparams[0].current.offsetHeight >
        150
      ) {
        setClickedIndex(0);
      }

      // return () => {
      //   window.removeEventListener("scroll", () => {
      //     if (props.refparams[0].current.offsetTop - 100 > 0) {
      //       setClickedIndex(0);
      //     } else if (props.refparams[1].current.offsetTop - 100 > 0) {
      //       setClickedIndex(1);
      //     } else if (props.refparams[2].current.offsetTop - 100 > 0) {
      //       setClickedIndex(2);
      //     } else {
      //       setClickedIndex(3);
      //     }
      //   });
      // };
    });
  });
  let arr = ["Overview", "Curriculum", "Instructor", "Reviews"];
  function handleClick(key) {
    setClickedIndex(key);

    let pos = props.refparams[key].current.offsetTop - 100;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
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
