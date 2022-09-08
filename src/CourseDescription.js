import React from "react";

function CourseDescription(props) {
  return (
    <div>
      <h2>Description</h2>
      <p>{props.desc}</p>
    </div>
  );
}

export default CourseDescription;
