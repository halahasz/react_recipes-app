import React from "react";
import RecipeList from "./RecipesList";
import SearchBar from "./SearchBar";
import recipes from "../API/recipepuppy";
import "./App.css";
import icon from "../assets/tab-icon.png";
import SavedRecipesModal from "./SavedRecipesModal";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

class App extends React.Component {
  state = {
    recipes: [],
    savedRecipes: [],
    ingredients: "",
    title: "",
    numberOfPages: 1,
    isModalOpen: false
  };

  componentDidMount() {
    this.fetchRecipes();
    document.querySelector(".modal-container").className = "modal-container";
  }
  fetchRecipes = async (ingredients, title) => {
    document.querySelector(".more").style.display = "none";
    this.setState({
      recipes: [],
      loading: true
    });
    await axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api",
        {
          params: {
            i: ingredients,
            q: title
          }
        }
      )
      .then(response =>
        this.setState({
          loading: false,
          recipes: response.data.results,
          ingredients,
          title
        })
      );

    if (this.state.recipes.length < 10) {
      document.querySelector(".more").style.display = "none";
    } else {
      document.querySelector(".more").style.display = "block";
    }
  };

  fetchMoreRecipes = async numberOfPages => {
    numberOfPages = this.state.numberOfPages + 1;
    this.setState({ loading: true });
    try {
      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api",
        {
          params: {
            i: this.state.ingredients,
            q: this.state.title,
            p: numberOfPages
          }
        }
      );
      this.setState({
        loading: false,
        recipes: [...this.state.recipes, ...response.data.results],
        numberOfPages
      });
      if (
        this.state.recipes.length % 10 !== 0 ||
        response.data.results.length === 0
      ) {
        document.querySelector(".more").style.display = "none";
      } else {
        document.querySelector(".more").style.display = "block";
      }
      console.log(response);
    } catch {
      document.querySelector(".more").style.display = "none";
    }
  };

  onSaveRecipe = savedRecipe => {
    this.setState(prevState => ({
      savedRecipes: [
        ...prevState["savedRecipes"].filter(a => a.href !== savedRecipe.href),
        savedRecipe
      ]
    }));
  };
  onRemoveRecipe = removedRecipe => {
    this.setState(prevState => ({
      savedRecipes: [
        ...prevState["savedRecipes"].filter(a => a.href !== removedRecipe.href)
      ]
    }));
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
    document.body.style.overflow = "hidden";
  };

  closeModal = () => {
    document.body.style.overflow = "auto";
    document.querySelector(".modal-container").className =
      "modal-container out";
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { isModalOpen, loading } = this.state;
    console.log(this.state.savedRecipes);
    return (
      <div className="app">
        <header>
          <div className="header-container">
            <div className="search-bar-container">
              <div className="search-bar">
                <SearchBar
                  labels={["titles:", "ingredients:"]}
                  onFormSubmit={this.fetchRecipes}
                />
                <div className="recipe__save" onClick={this.openModal}>
                  <div
                    className="recipe__save-icon"
                    style={{ backgroundImage: "url(" + icon + ")" }}
                    title="Show saved recipes"
                  ></div>
                  <div className="recipe__save-number">
                    {this.state.savedRecipes.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="results">
            <p>
              Results for title: <span>{this.state.title}</span>
            </p>
            <p>
              ingredients:
              <span>{this.state.ingredients}</span>
            </p>
            <p className="results__found">
              Found <span> {this.state.recipes.length}</span> recipes
            </p>
          </div>

          <RecipeList
            onSaveRecipe={this.onSaveRecipe}
            recipes={this.state.recipes}
          />
          {loading && <LoadingSpinner />}
          {!loading && (
            <button
              className="form__button more"
              type="button"
              onClick={this.fetchMoreRecipes}
            >
              See more
            </button>
          )}
        </main>
        <SavedRecipesModal
          onRemoveRecipe={this.onRemoveRecipe}
          isModalOpen={isModalOpen}
          recipes={this.state.savedRecipes}
          closeModalFn={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
