import React from "react";
import {
  fetchRandomCinemaMovie,
  fetchRandomClassic,
  fetchRandomSerie,
} from "./RestClient";
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
        <button onClick={this.fetchDisplayData}>Fetch Data</button>
        <div>
          <h1>Random Serie</h1>
          <p>{this.state.serie.title}</p>
          <p>{this.state.serie.description}</p>
          <p>{this.state.serie.genre}</p>
          <p>{this.state.serie.rating}</p>
        </div>
        <div>
          <h1>Random Cinema Movie</h1>
          <p>{this.state.cinemaMovie.title}</p>
          <p>{this.state.cinemaMovie.description}</p>
          <p>{this.state.cinemaMovie.genre}</p>
          <p>{this.state.cinemaMovie.rating}</p>
        </div>
        <div>
          <h1>Random Classic</h1>
          <p>{this.state.classic.title}</p>
          <p>{this.state.classic.description}</p>
          <p>{this.state.classic.genre}</p>
          <p>{this.state.classic.rating}</p>
        </div>
      </div>
    );
  }
}

export default App;
