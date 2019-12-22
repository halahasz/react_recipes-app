import React, { Component } from "react";
import "./Search.css";

export default class Search extends Component {
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
        <input
          className="input"
          value={this.state.phrase}
          onChange={this.onInputChange}
          placeholder="Search"
          type="text"
        />
      </form>
    );
  }
}
