import React from "react";
import "../App.css";
export default function Item({ value }) {
  // A component that renders a single item for example (HTML with a logo)
  const logo = require(`../assets/img/${value}icon.png`);
  return (
    <div className="item-skill">
      <img src={logo} alt="Image" style={{ width: "2rem", height: "2rem" }} />
      <h6>{value}</h6>
    </div>
  );
}
