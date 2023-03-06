import React from "react";
import { fetchRandomSerie } from "./RestClient";
import "./App.css";

class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      randomSerie: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchAllBooks. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    let data = await fetchRandomSerie();
    this.setState({ randomSerie: data });
  }

  // this is displayed on the screen
  render() {
    return (
      <div>
        <div id="title">Random Series And Movies Suggestions 📚📚 </div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Fetch Random Series And Movies
        </button>
        <div className="data">
          <h1>Random Serie</h1>
          {/* generates a div for every entry */}
          {this.state.randomSerie.map((randomSerie, key) => (
            <div key={key}>
              {randomSerie.name} Genre: {randomSerie.genre}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
