import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBv4rGzl-kWpDUvQBA1PukDjBUAjGJ9KP8';

// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
//   console.log(data);
// });

// Create a new functional based component. This component should produce some HTML
// const App = () => {
//   return(
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

// Class Based Component
class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: []};
    // Running a search so user can see data immediately
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //console.log(data);
      //this.setState({videos: videos});
      // when key value pair is the same like above, in ES6 can be written like below
      this.setState({ videos });
    });
  }
  render(){
    return(
      <div>
        <SearchBar />
        {/* Passing data into videos with attributes is considered "props" */}
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('#App'));
