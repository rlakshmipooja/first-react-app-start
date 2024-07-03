import React from "react";
import reactCoreConcepts from "./assets/react-core-concepts.png";
import reactLogoXs from "./assets/react-logo-xs.png";

const reactDescriptions = ["Fundamentals", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header style={{ display: "flex", flexDirection: "column" }}>
      <img src={reactCoreConcepts} />
      <img src={reactLogoXs} />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any New app you
        are going to build!
      </p>
    </header>
  );
};

export default Header;
