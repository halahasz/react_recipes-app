import React, { Component } from "react";
import Recipe from "./Recipe";

class RecipeList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.recipes.map(recipe => (
            <Recipe key={recipe.href} {...recipe} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeList;
