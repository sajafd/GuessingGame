import React, { Component } from "react";

class GuessedNumGetter extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const guessedNumber = event.target.value;
    this.setState({ query: +guessedNumber });
    console.log("handle change is being called");
    //this.state.changeHandler({ query: +event.target.value });
    this.getView(guessedNumber);
  }

  getView(num) {
    if (typeof num === "number" && num > 0 && num < 100) {
      console.log(`The number you picked was: ${num}`);
    }
    //return num;
    //else {
    //  return alert("Your input must be a number");
    //}
  }

  render() {
    //const guessedNumber = this.props.query;
    return (
      <div className="input-group">
        <input
          className="form-control"
          type="number"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>The number you picked is: {this.state.query}</p>
      </div>
    );
  }
}

export default GuessedNumGetter;
