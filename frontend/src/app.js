import React, { useState } from "react";
import { fetchRandomSerie } from "./RestClient";
import "./App.css";

class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      randomSerie: "",
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchRandomSerie. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    let data = await fetchRandomSerie();
    this.setState({ data });
  }

  // this is displayed on the screen
  render() {
    return (
      <div>
        <div id="title">Random Serie and Movie Suggestion </div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Click me
        </button>
        <div className="data">
          <h1>Random Serie</h1>
          <p>{this.state.data}</p>
        </div>
      </div>
    );
  }
}

export default App;
