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
  fetchRecipes = async (ingredients, title) => {
    const response = await recipes.get("/", {
      params: {
        i: ingredients,
        q: title
      }
    });
    console.log(response);
    this.setState({
      recipes: response.data.results
    });
  };

  render() {
    return (
      <div>
        <Search
          labels={["Search titles:", "Search ingredients:"]}
          onFormSubmit={this.fetchRecipes}
        />
        <p>Found {this.state.recipes.length} recipes</p>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
