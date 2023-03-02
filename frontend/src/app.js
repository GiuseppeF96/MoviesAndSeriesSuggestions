import React from "react";
import {
  fetchRandomCinemaMovie,
  fetchRandomClassic,
  fetchRandomSerie,
} from "./RestClient.js";
class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      serie: {},
      cinemaMovie: {},
      classic: {},
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchAllBooks. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    const serie = await fetchRandomSerie();
    const cinemaMovie = await fetchRandomCinemaMovie();
    const classic = await fetchRandomClassic();
    this.setState({ serie, cinemaMovie, classic });
  }

  // this is displayed on the screen
  render() {
    return (
      <div>
        <button onClick={this.fetchDisplayData}>Fetch Random Data</button>
        <div>
          <h1>Random Serie</h1>
          <p>{this.state.serie.name}</p>
          <p>{this.state.serie.genre}</p>
          <p>{this.state.serie.seasons}</p>
          <p>{this.state.serie.episodes}</p>
        </div>
        <div>
          <h1>Random Cinema Movie</h1>
          <p>{this.state.cinemaMovie.name}</p>
          <p>{this.state.cinemaMovie.genre}</p>
          <p>{this.state.cinemaMovie.duration}</p>
          <p>{this.state.cinemaMovie.mainActor}</p>
        </div>
        <div>
          <h1>Random Classic</h1>
          <p>{this.state.classic.name}</p>
          <p>{this.state.classic.genre}</p>
          <p>{this.state.classic.publishingYear}</p>
          <p>{this.state.classic.duration}</p>
          <p>{this.state.classic.director}</p>
        </div>
      </div>
    );
  }
}

export default App;
