import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [ { id: "xT9IgDEI1iZyb2wqo8"},
      { id: "fHsweg1kp5uzU3G1D4"}],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    }

    this.search("homer thinking");
  }

  search = (query) => {
    giphy('3UfkDax0kB1HeBYimrYRlBjitxRqh2p0').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error,result) => {
      this.setState({
        gifs: result.data
      });
    });

  }


  render() {
    return (
      <div>
        <div className ="left-scene">
          <SearchBar searchFunction = {this.search}/>
          <div className = "selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className ="right-scene">
          <GifList gifs = {this.state.gifs} />
        </div>
      </div>

    );
  }
}
export default App;
