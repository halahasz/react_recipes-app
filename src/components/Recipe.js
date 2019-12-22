import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    return (
      <li>
        <h2 className="heading">{this.props.title}</h2>
        <img src={this.props.thumbnail} alt="" />
        <span
          style={{ display: "block", fontWeight: "bold", fontSize: "18px" }}
        >
          {this.props.ingredients}
        </span>
      </li>
    );
  }
}
