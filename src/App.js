import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CoursePage from "./CoursePage";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="course" element={<CoursePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
