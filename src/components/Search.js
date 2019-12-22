import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    phrase: ""
  };

  onInputChange = event => {
    this.setState({
      phrase: event.target.value
    });
  };

  onFormSubmit = (e, phrase) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.phrase);
  };

  render() {
    return (
      <form className="form" onSubmit={this.onFormSubmit}>
        <label className="search-bar__label">{this.props.label}</label>
        <input
          className="input"
          value={this.state.phrase}
          onChange={this.onInputChange}
          placeholder="Search"
          type="text"
        />
        <div>Result word is: {this.state.phrase}</div>
      </form>
    );
  }
}

export default Search;
