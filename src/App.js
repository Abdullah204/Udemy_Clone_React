import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import CoursePage from "./Components/CoursePage/CoursePage";
import axios from "axios";
export const HomePageContext = React.createContext();
export const CoursePageContext = React.createContext();
export const ReviewsContext = React.createContext();
export const DataContext = React.createContext();
function App() {
  const [homePageData, setHomePageData] = useState({});
  const [coursePageData, setCoursePageData] = useState({});
  const [reviewsData, setReviewsData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/homepage").then((response) => {
      setHomePageData(response.data);
      setDataLoaded(true);
    });
    axios.get("http://localhost:3000/coursepage").then((response) => {
      setCoursePageData(response.data);
    });
    axios.get("http://localhost:3000/reviews").then((response) => {
      setReviewsData(response.data);
    });
  }, []);

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <DataContext.Provider value={dataLoaded}>
              <HomePageContext.Provider value={homePageData}>
                <HomePage />
              </HomePageContext.Provider>
            </DataContext.Provider>
          }
        />
        <Route
          path="course/:courseid"
          element={
            <HomePageContext.Provider value={homePageData}>
              <CoursePageContext.Provider value={coursePageData}>
                <ReviewsContext.Provider value={reviewsData}>
                  <CoursePage />
                </ReviewsContext.Provider>
              </CoursePageContext.Provider>
            </HomePageContext.Provider>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
