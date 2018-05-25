import React, { Component } from 'react';
import YTsearch from 'youtube-api-search';
import lodash from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './index.css';

const API_KEY ='AIzaSyBtH3Ts8HaxlT3MXZITfS0iMCfTLbPxXwA';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      input : ''
    }
    this._videoSearch = this._videoSearch.bind(this);
    }
    _videoSearch(term) {
      YTsearch({ key: API_KEY, term: term }, videos => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0],
        });
      });
    }
  render() {
    const videoInput = lodash.debounce(input => this._videoSearch(input),500);
    console.log(this.state.input);
    return (
      <div className="Video_Main">
        <div className="search_Bar">
          <div className="outer-container">
            <SearchBar onInput= { videoInput }/>
          </div>
        </div>
        <div className="user_result">
          <div className="outer-container">
            <div className="container">
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList onVideoSelect={
                selectedVideo => this.setState({ selectedVideo })
              }
              videos= { this.state.videos } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
