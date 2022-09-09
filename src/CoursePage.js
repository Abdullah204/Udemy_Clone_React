import React, { useState, useEffect } from "react";
import TopContainer from "./TopContainer";
import ShortcutNav from "./ShortcutNav";
import WhatLearn from "./WhatLearn";
import CourseContent from "./CourseContent";
import CourseFooter from "./CourseFooter";
import FixedCard from "./FixedCard";
import BehindNav from "./BehindNav";
import { useParams } from "react-router-dom";
import CoursePageStyles from "./CoursePageStyles.module.css";
function CoursePage() {
  const [shortcutNavClass, setShortcutNavClass] = useState("container");
  const [topCard, setTopCard] = useState(true);
  const [midCard, setMidCard] = useState(false);
  const [botCard, setBotCard] = useState(false);
  const params = useParams();
  const cid = params.courseid;

  //  useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     // let componentHeight = document.querySelector(".compA").clientHeight;
  //     let scrolled = window.scrollY;

  //     console.log(scrolled);

  //     if (scrolled >= 430) {
  //       setShortcutNavClass("container-sticky");
  //       setFixedImage(false);
  //     } else if (scrolled < 430) {
  //       setShortcutNavClass("container");
  //       setFixedImage(true);
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", () => {
  //       // let componentHeight = document.querySelector(".compA").clientHeight;
  //       let scrolled = window.scrollY;

  //       console.log(scrolled);

  //       if (scrolled >= 430) {
  //         setShortcutNavClass("container-sticky");
  //         setFixedImage(false);
  //       } else if (scrolled < 430) {
  //         setShortcutNavClass("container");
  //         setFixedImage(true);
  //       }
  //     });
  //   };
  // }, [shortcutNavClass]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // let componentHeight = document.querySelector(".compA").clientHeight;
      let scrolled = window.scrollY;

      if (scrolled >= 430) {
        setShortcutNavClass("container-sticky");
      } else {
        setShortcutNavClass("container");
      }

      if (scrolled < 430) {
        setBotCard(false);
        setMidCard(false);
        setTopCard(true);
      } else {
        setTopCard(false);
        if (document.documentElement.offsetHeight - scrolled < 1275) {
          setBotCard(true);
          setMidCard(false);
        } else {
          setBotCard(false);
          setMidCard(true);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        // let componentHeight = document.querySelector(".compA").clientHeight;
        let scrolled = window.scrollY;
        console.log(document.documentElement.offsetHeight - scrolled);

        if (scrolled >= 430) {
          setShortcutNavClass("container-sticky");
        } else {
          setShortcutNavClass("container");
        }

        if (scrolled < 430) {
          setBotCard(false);
          setMidCard(false);
          setTopCard(true);
        } else {
          setTopCard(false);
          if (document.documentElement.offsetHeight - scrolled < 1275) {
            setBotCard(true);
            setMidCard(false);
          } else {
            setBotCard(false);
            setMidCard(true);
          }
        }
      });
    };
  }, [shortcutNavClass]);

  return (
    <div className={CoursePageStyles["container"]}>
      <FixedCard viewImage={true} view={topCard} cardClassName="fixed-card" />
      <FixedCard viewImage={false} view={midCard} cardClassName="fixed-card" />

      <TopContainer />

      <ShortcutNav myClassName={shortcutNavClass} />
      <WhatLearn />
      <CourseContent />
      <FixedCard
        viewImage={true}
        view={botCard}
        cardClassName="fixed-card-bottom"
      />
      <CourseFooter />
      <BehindNav />
    </div>
  );
}

export default CoursePage;
