import React, { useState, useEffect, useRef, useContext } from "react";
import TopContainer from "./TopContainer";
import ShortcutNav from "./ShortcutNav";
import WhatLearn from "./WhatLearn";
import CourseContent from "./CourseContent";
import CourseFooter from "./CourseFooter";
import FixedCard from "./FixedCard";
import BehindNav from "./BehindNav";
import { useParams } from "react-router-dom";
import CoursePageStyles from "./CoursePageStyles.module.css";
import Instructors from "./Instructors";
import StudentFeedback from "./StudentFeedback";
import HomePageContext from "./App";
import Reviews from "./Reviews";
export const RefContext = React.createContext();
function CoursePage() {
  const [shortcutNavClass, setShortcutNavClass] = useState("container");
  const [topCard, setTopCard] = useState(true);
  const [midCard, setMidCard] = useState(false);
  const [botCard, setBotCard] = useState(false);
  const params = useParams();
  const cid = params.courseid;
  const whatLearnRef = useRef();
  const contentRef = useRef();
  const instructorsRef = useRef();
  const reviewsRef = useRef();
  const homeContext = useContext(HomePageContext);
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
    };
  }, [shortcutNavClass]);

  return (
    <div className={CoursePageStyles["container"]}>
      <FixedCard viewImage={true} view={topCard} cardClassName="fixed-card" />
      <FixedCard viewImage={false} view={midCard} cardClassName="fixed-card" />

      <TopContainer />

      <ShortcutNav
        myClassName={shortcutNavClass}
        refparams={[whatLearnRef, contentRef, instructorsRef, reviewsRef]}
      />

      <div ref={whatLearnRef}>
        <WhatLearn />
      </div>
      <div ref={contentRef}>
        <CourseContent />
      </div>
      <div ref={instructorsRef}>
        <Instructors />
      </div>

      <StudentFeedback />
      <FixedCard
        viewImage={true}
        view={botCard}
        cardClassName="fixed-card-bottom"
      />
      <div ref={reviewsRef}>
        <Reviews />
      </div>

      <CourseFooter />
      <BehindNav />
    </div>
  );
}

export default CoursePage;
