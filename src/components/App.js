import React from "react";
import RecipeList from "./RecipeList";
import "./RecipeList.css";
import Search from "./Search";
import recipes from "../API/recipepuppy";

class App extends React.Component {
  state = {
    recipes: [],
    ingredients: "",
    title: "",
    numberOfPages: 0
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
      recipes: response.data.results,
      ingredients,
      title
    });
  };

  fetchMoreRecipes = async numberOfPages => {
    numberOfPages = this.state.numberOfPages + 1;

    const response = await recipes.get("/", {
      params: {
        i: this.state.ingredients,
        q: this.state.title,
        p: numberOfPages
      }
    });
    this.setState({
      recipes: [...this.state.recipes, ...response.data.results],
      numberOfPages
    });
    console.log(response);
  };

  render() {
    return (
      <div style={{ minHeight: "100px" }}>
        <Search
          labels={["titles:", "ingredients:"]}
          onFormSubmit={this.fetchRecipes}
        />
        <p>
          Results for: {this.state.title} {this.state.ingredients}
        </p>
        <p>Found {this.state.recipes.length} recipes</p>
        <RecipeList recipes={this.state.recipes} />
        <button type="button" onClick={this.fetchMoreRecipes}>
          See more
        </button>
      </div>
    );
  }
}

export default App;
