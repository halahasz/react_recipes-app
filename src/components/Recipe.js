import React, { Component } from "react";
import "./Recipe.css";

class Recipe extends Component {
  render() {
    const { title, href, thumbnail, ingredients } = this.props;
    return (
      <a
        href={href}
        className="recipe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="recipe__content">
          {thumbnail ? (
            <div
              className="recipe__img"
              style={{
                backgroundImage: "url(" + thumbnail + ")",
                color: "black"
              }}
            ></div>
          ) : null}

          <div className="recipe__text">
            <a
              href={href}
              className="recipe__title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
            <p className="recipe__ingredients">
              <span>Ingredients:</span> - {ingredients}
            </p>
          </div>
        </div>
      </a>
    );
  }
}

export default Recipe;
