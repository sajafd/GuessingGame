import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Components

//import GuessedNumGetter from "./GuessedNumGetter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      guessedNumber: "",
      randomNum: Math.floor(Math.random() * 100)
    };
    this.handleChange = this.handleChange.bind(this);
    this.compareValues = this.compareValues.bind(this);
  }

  handleChange(event) {
    const guessedNumber = event.target.value;
    this.setState({ query: +guessedNumber });
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

  compareValues(guess1) {
    //let message;
    if (typeof guess1 !== "number") {
      return alert("Your input must be a number. It is a " + typeof guess1);
    }
    let difference = Math.abs(this.state.query - this.state.randomNum);
    console.log("random number is: " + this.state.randomNum);
    console.log("guessed number is: " + this.state.query);
    if (this.state.randomNum === guess1) {
      return true;
    } else if (difference > 50) {
      alert("You're waaaay off");
      //message = "You're waaaay off";
      return false;
    } else if (difference < 50 && difference > 25) {
      alert("You're close");
      //message = "You're close";
      return false;
    } else if (difference < 25) {
      alert("You're super close!");
      // message = "You're super close";
      return false;
    } else {
      return false;
    }
  }

  tryGuesses(guess) {
    let message;
    for (let i = 5; i > 1; i--) {
      let testResult = this.compareValues(guess);
      if (testResult === true) {
        alert("YOU GOT IT!");
        message = "YOU GOT IT!";
        return message;
      } else {
        alert(`Guess again. You have ${i - 1} guesses remaining`);
        return;
      }
    }
  }

  render() {
    //let guessedNumber = this.guessNumber();
    // let message = this.tryGuesses();
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Welcome to GuessinGame</h3>
            <h5>
              The computer has randomly generated a number between 0 and 100
              <p>You have 5 tries to guess the random number</p>
              <p>Insert your guess in the field below: </p>
            </h5>
            <input
              className="form-control"
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <h5>The number you guessed is: {this.state.query}</h5>
            <button
              onClick={() => {
                this.tryGuesses(+this.state.query);
              }}
            >
              Compare Values
            </button>
            {/* <h5> print message: {this.message} </h5> */}
          </header>
        </div>
      </div>
    );
  }
}

export default App;
