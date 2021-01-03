import React, { Component } from "react";
import "./Recipe.css";
import saveIcon from "../assets/tab-icon.png";

class Recipe extends Component {
  state = {
    title: this.props.title,
    href: this.props.href,
    thumbnail: this.props.thumbnail,
    ingredients: this.props.ingredients
  };

  saveRecipe = e => {
    this.props.onSaveRecipe(this.state);
  };
  removeRecipe = e => {
    e.stopPropagation();
    this.props.onRemoveRecipe(this.state);
    console.log(this.state);
  };
  render() {
    const { title, href, thumbnail, ingredients, isModalOpen } = this.props;
    return (
      <div className="recipe">
        <div className="recipe__content">
          {!isModalOpen ? (
            <div className="recipe__save" onClick={this.saveRecipe}>
              <div
                className="recipe__save-icon"
                style={{ backgroundImage: "url(" + saveIcon + ")" }}
                title="Save recipe"
              ></div>
            </div>
          ) : (
            <div className="recipe__remove" onClick={this.removeRecipe}>
              <div className="recipe__remove-icon" title="Remove recipe">
                x
              </div>
            </div>
          )}

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="recipe__link"
          >
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
              <h2 className="recipe__title">{title}</h2>
              <p className="recipe__ingredients">
                <span>Ingredients:</span> - {ingredients}
              </p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Recipe;
