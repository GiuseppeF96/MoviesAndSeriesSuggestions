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
      <div id="page_content">
        <div id="title">What should you watch today? 🍿📺</div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Suggest me something!
        </button>
        <div className="cards">
          <div className="card">
            <div className="card_content">
              <h1>Random Serie</h1>
              <p>Name: {this.state.randomSerie.name} </p>
              <p>Genre: {this.state.randomSerie.genre} </p>
              <p>Seasons: {this.state.randomSerie.seasons} </p>
              <p>Episodes: {this.state.randomSerie.episodes} </p>
            </div>
          </div>
          <div className="card">
            <div className="card_content">
              <h1>Random Cinema Movie</h1>
              <p>Name: {this.state.randomCinema.name} </p>
              <p>Genre: {this.state.randomCinema.genre} </p>
              <p>duration: {this.state.randomCinema.duration} </p>
              <p>Main Actor: {this.state.randomCinema.mainActor} </p>
            </div>
          </div>
          <div className="card">
            <div className="card_content">
              <h1>Random Classic Movie</h1>
              <p>Name: {this.state.randomClassic.name} </p>
              <p>Genre: {this.state.randomClassic.genre} </p>
              <p>Publishing Year: {this.state.randomClassic.publishingYear} </p>
              <p>Duration: {this.state.randomClassic.duration} </p>
              <p>Director: {this.state.randomClassic.director} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
