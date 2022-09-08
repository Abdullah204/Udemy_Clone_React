import React from "react";
import shortcutNavStyles from "./shortcutNavStyles.module.css";
function ShortcutNav(props) {
  return (
    <div className={shortcutNavStyles[props.myClassName]}>
      <div className={shortcutNavStyles["width-container"]}>
        <ul className={shortcutNavStyles["list"]}>
          <li className={shortcutNavStyles["button"]}>Overview</li>
          <li className={shortcutNavStyles["button"]}>Curriculum</li>
          <li className={shortcutNavStyles["button"]}>Instructor</li>
          <li className={shortcutNavStyles["button"]}>Reviews</li>
        </ul>
      </div>
    </div>
  );
}

export default ShortcutNav;
