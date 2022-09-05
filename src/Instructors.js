import React from "react";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { GiRibbonMedal } from "react-icons/gi";
import instructorStyles from "./instructorStyles.module.css";
function Instructors() {
  return (
    <div>
      <h2>Instructors</h2>
      <ul className={instructorStyles["list"]}>
        <li>
          <h3 className={instructorStyles["name"]}>Avinash Jain</h3>
          <div className={instructorStyles["position"]}>
            CEO of TheCodex.me - Teaching 500,000+ Students how to code
          </div>
          <div className={instructorStyles["header"]}>
            <div>
              <img
                className={instructorStyles["image"]}
                src="https://img-c.udemycdn.com/user/200_H/10260436_946b_6.jpg"
                alt="instructor"
              ></img>
            </div>
            <div className={instructorStyles["beside-image"]}>
              <div className={instructorStyles["beside-element"]}>
                <AiFillStar className={instructorStyles["icon"]} />
                4.4 Instructor Rating
              </div>
              <div className={instructorStyles["beside-element"]}>
                <GiRibbonMedal className={instructorStyles["icon"]} />
                73,767 Reviews
              </div>
              <div className={instructorStyles["beside-element"]}>
                <BsPeopleFill className={instructorStyles["icon"]} />
                890,867 Students
              </div>
              <div className={instructorStyles["beside-element"]}>
                <AiFillPlayCircle className={instructorStyles["icon"]} />
                16 Courses
              </div>
            </div>
          </div>
          <p className={instructorStyles["p"]}>
            {" "}
            Avinash Jain is currently a senior at UC Berkeley majoring in
            Electrical Engineering and Computer Science. He's the CEO and
            Founder of TheCodex, an online educational platform focused on
            bringing the best programming content to hundreds of thousands of
            students around the world.
          </p>

          <p className={instructorStyles["p"]}>
            {" "}
            His programming journey began at the age of 10, starting off with
            simple Python scripts to crawl the weather. Since then, he's worked
            at numerous companies and is professionally experienced in Python,
            iOS Development and Web Development. He's launched a plethora of
            applications in the App Store amassing thousands of downloads.
            Additionaly, he's competed and won in several hackathons around the
            world including PennApps and NWHacks.
          </p>

          <p className={instructorStyles["p"]}>
            {" "}
            Avinash has a passion to teach - his enthusiasm and love for
            programming is evident in every video. For the past 7 years he's
            been an instructor on Udemy and he loves motivating and enabling
            others to pursue their programming dreams. He hopes to help students
            realize the power of programming and jumpstart their careers through
            his courses.
          </p>

          <p className={instructorStyles["p"]}>
            {" "}
            Checkout TheCodex for all of his courses, fantastic discounts, and
            any guidance or help.{" "}
          </p>
        </li>
        <li>
          <h3 className={instructorStyles["name"]}>Avinash Jain</h3>
          <div className={instructorStyles["position"]}>
            CEO of TheCodex.me - Teaching 500,000+ Students how to code
          </div>
          <div className={instructorStyles["header"]}>
            <div>
              <img
                className={instructorStyles["image"]}
                src="https://img-c.udemycdn.com/user/200_H/10260436_946b_6.jpg"
                alt="instructor"
              ></img>
            </div>
            <div className={instructorStyles["beside-image"]}>
              <div className={instructorStyles["beside-element"]}>
                <AiFillStar className={instructorStyles["icon"]} />
                4.4 Instructor Rating
              </div>
              <div className={instructorStyles["beside-element"]}>
                <GiRibbonMedal className={instructorStyles["icon"]} />
                73,767 Reviews
              </div>
              <div className={instructorStyles["beside-element"]}>
                <BsPeopleFill className={instructorStyles["icon"]} />
                890,867 Students
              </div>
              <div className={instructorStyles["beside-element"]}>
                <AiFillPlayCircle className={instructorStyles["icon"]} />
                16 Courses
              </div>
            </div>
          </div>
          <p className={instructorStyles["p"]}>
            {" "}
            Avinash Jain is currently a senior at UC Berkeley majoring in
            Electrical Engineering and Computer Science. He's the CEO and
            Founder of TheCodex, an online educational platform focused on
            bringing the best programming content to hundreds of thousands of
            students around the world.
          </p>

          <p className={instructorStyles["p"]}>
            {" "}
            His programming journey began at the age of 10, starting off with
            simple Python scripts to crawl the weather. Since then, he's worked
            at numerous companies and is professionally experienced in Python,
            iOS Development and Web Development. He's launched a plethora of
            applications in the App Store amassing thousands of downloads.
            Additionaly, he's competed and won in several hackathons around the
            world including PennApps and NWHacks.
          </p>

          <p className={instructorStyles["p"]}>
            {" "}
            Avinash has a passion to teach - his enthusiasm and love for
            programming is evident in every video. For the past 7 years he's
            been an instructor on Udemy and he loves motivating and enabling
            others to pursue their programming dreams. He hopes to help students
            realize the power of programming and jumpstart their careers through
            his courses.
          </p>

          <p className={instructorStyles["p"]}>
            {" "}
            Checkout TheCodex for all of his courses, fantastic discounts, and
            any guidance or help.{" "}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Instructors;
