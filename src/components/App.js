import React from "react";
import RecipeList from "./RecipeList";
import "./RecipeList.css";
import Search from "./Search";
import recipes from "../API/recipepuppy";

class App extends React.Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    this.fetchRecipes();
  }
  fetchRecipes = async phrase => {
    const response = await recipes.get("/", {
      params: {
        i: phrase
      }
    });
    this.setState({
      recipes: response.data.results
    });
  };
  onFormSubmit = (e, phrase) => {
    e.preventDefault();
    this.fetchRecipes(phrase);
  };
  render() {
    return (
      <div>
        <Search label="Search recipes:" onFormSubmit={this.onFormSubmit} />
        <p>Found {this.state.recipes.length} recipes</p>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
