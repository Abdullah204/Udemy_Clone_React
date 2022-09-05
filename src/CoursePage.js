import React, { useState, useEffect } from "react";
import TopContainer from "./TopContainer";
import ShortcutNav from "./ShortcutNav";
import WhatLearn from "./WhatLearn";
import CourseContent from "./CourseContent";
import CourseFooter from "./CourseFooter";
import FixedCard from "./FixedCard";
import BehindNav from "./BehindNav";
function CoursePage() {
  const [shortcutNavClass, setShortcutNavClass] = useState("container");
  const [fixedImage, setFixedImage] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // let componentHeight = document.querySelector(".compA").clientHeight;
      let scrolled = window.scrollY;

      console.log(scrolled);

      if (scrolled >= 430) {
        setShortcutNavClass("container-sticky");
        setFixedImage(false);
      } else if (scrolled < 430) {
        setShortcutNavClass("container");
        setFixedImage(true);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        // let componentHeight = document.querySelector(".compA").clientHeight;
        let scrolled = window.scrollY;

        console.log(scrolled);

        if (scrolled >= 430) {
          setShortcutNavClass("container-sticky");
          setFixedImage(false);
        } else if (scrolled < 430) {
          setShortcutNavClass("container");
          setFixedImage(true);
        }
      });
    };
  }, [shortcutNavClass]);

  return (
    <>
      <TopContainer />
      <ShortcutNav myClassName={shortcutNavClass} />
      <WhatLearn />
      <CourseContent />
      <CourseFooter />
      <FixedCard viewImage={fixedImage} />
      <BehindNav />
    </>
  );
}

export default CoursePage;
