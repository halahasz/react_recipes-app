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

  render() {
    return (
      <form
        className="form"
        onSubmit={e => this.props.onFormSubmit(e, this.state.phrase)}
      >
        <label className="search-bar__label">{this.props.label}</label>
        <input
          className="input"
          value={this.state.phrase}
          onChange={this.onInputChange}
          placeholder="Search"
          type="text"
        />
        <div>Result word is: {this.state.pharse}</div>
      </form>
    );
  }
}

export default Search;
