import React from "react";
import "./CoreConcepts.css";
const CoreConcepts = (props) => {
  return (
    <div id="container">
      <div>{props.title}</div>
      <div>{props.desc}</div>
    </div>
  );
};

export default CoreConcepts;
