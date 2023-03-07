import React from "react";
import {
  fetchRandomSerie,
  fetchRandomCinemaMovie,
  fetchRandomClassic,
} from "./RestClient";
import "./App.css";
/*
This is the main component of the application
It is responsible for fetching data from the backend
and displaying it on the screen
*/
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
    // bind the fetchDisplayData method to the component
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  /*
  This method is called when the component is mounted
  It calls the fetchDisplayData method to fetch data from the backend.
  */
  async fetchDisplayData() {
    let dataSerie = await fetchRandomSerie();
    let dataCinema = await fetchRandomCinemaMovie();
    let dataClassic = await fetchRandomClassic();
    if (dataSerie === "No data found") {
      dataSerie = {
        name: "No data found",
        genre: "No data found",
        seasons: "No data found",
        episodes: "No data found",
      };
    }
    if (dataCinema === "No data found") {
      dataCinema = {
        name: "No data found",
        genre: "No data found",
        duration: "No data found",
        mainActor: "No data found",
      };
    }
    if (dataClassic === "No data found") {
      dataClassic = {
        name: "No data found",
        genre: "No data found",
        publishingYear: "No data found",
        duration: "No data found",
        director: "No data found",
      };
    }
    this.setState({
      randomSerie: dataSerie,
      randomCinema: dataCinema,
      randomClassic: dataClassic,
    });
  }

  /*
   This is displayed on the screen
   it calls the fetchDisplayData method when the button is clicked
   it displays the data from the backend
   */
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
