import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
const API_KEY = "AIzaSyAmvA_sACIFT9v6T1iWnsK6IXyb6XSN4Eo";

// Create a new component. This component should produce
// some HTML
// "Fat Arrow" aka => replaces function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboard" }, (videos) => {
      this.setState({ videos });
      // this.setState({videos: videos}); ES6 replacement
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
