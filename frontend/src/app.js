import React from "react";
import {
  fetchRandomSerie,
  fetchRandomCinemaMovie,
  fetchRandomClassic,
} from "./RestClient";
import "./App.css";

class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      randomSerie: {},
      randomCinema: {},
      randomClassic: {},
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchRandomSerie. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    let dataSerie = await fetchRandomSerie();
    let dataCinema = await fetchRandomCinemaMovie();
    let dataClassic = await fetchRandomClassic();
    this.setState({
      randomSerie: dataSerie,
      randomCinema: dataCinema,
      randomClassic: dataClassic,
    });
  }

  // this is displayed on the screen
  render() {
    return (
      <div>
        <div id="title">Random Serie and Movie Suggestion </div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Get Random Serie and Movies
        </button>
        <div className="data">
          <h1>Random Serie</h1>
          <p> {this.state.randomSerie.name} </p>
          <p> {this.state.randomSerie.genre} </p>
          <p> {this.state.randomSerie.seasons} </p>
          <p> {this.state.randomSerie.episodes} </p>
        </div>
        <div className="data">
          <h1>Random Cinema Movie</h1>
          <p> {this.state.randomCinema.name} </p>
          <p> {this.state.randomCinema.genre} </p>
          <p> {this.state.randomCinema.seasons} </p>
          <p> {this.state.randomCinema.episodes} </p>
        </div>
        <div className="data">
          <h1>Random Classic Movie</h1>
          <p> {this.state.randomClassic.name} </p>
          <p> {this.state.randomClassic.genre} </p>
          <p> {this.state.randomClassic.seasons} </p>
          <p> {this.state.randomClassic.episodes} </p>
        </div>
      </div>
    );
  }
}

export default App;
