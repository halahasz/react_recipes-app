import React, { Component } from "react";
import "./Recipe.css";

class Recipe extends Component {
  render() {
    const { title, href, thumbnail, ingredients } = this.props;
    return (
      <div className="recipe">
        <a href={href} className="heading">
          {title}
        </a>
        <img src={thumbnail} alt="" />
        <span
          style={{ display: "block", fontWeight: "bold", fontSize: "18px" }}
        >
          {ingredients}
        </span>
      </div>
    );
  }
}

export default Recipe;
