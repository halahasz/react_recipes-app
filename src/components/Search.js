import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    title: "",
    ingredients: ""
  };

  onTitleInputChange = event => {
    this.setState({
      title: event.target.value
    });
  };
  onIngredientsInputChange = event => {
    this.setState({
      ingredients: event.target.value
    });
  };

  onFormSubmit = (e, title, ingredients) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.ingredients, this.state.title);
    this.setState({
      title: "",
      ingredients: ""
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onFormSubmit}>
        <label className="search-bar__label">
          Search {this.props.labels[0]}
        </label>
        <input
          className="input"
          value={this.state.title}
          onChange={this.onTitleInputChange}
          placeholder="Search"
          type="text"
        />
        <label className="search-bar__label">
          Search {this.props.labels[1]}
        </label>
        <input
          className="input"
          value={this.state.ingredients}
          onChange={this.onIngredientsInputChange}
          placeholder="Search"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Search;
