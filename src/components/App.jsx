class App extends React.Component {
  
  constructor(props) {
    super(props); 
    this.state = { 
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      value: null, 
    };
    
    
  }
  
  onVideoClick(input) {
    this.setState({ 
      video: input
    });
    
  }
  
  onSearchClick(input) {
    this.setState({ 
      value: input.target.value
    });
    
    // searchYouTube({key: window.YOUTUBE_API_KEY, query: input.target.value, max: 5}); 
  }

  callback(input) { 
    this.setState({ 
      video: input[0],
      videos: input
    });
  }
  
  onClickButton() { 
    searchYouTube({key: window.YOUTUBE_API_KEY, query: this.state.value, max: 5}, this.callback.bind(this));
  }
  
  render() {  
    console.log(this.state.value); 
    return (
      <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search onClickFun = {this.onSearchClick.bind(this)} onClickButton = {this.onClickButton.bind(this)} /> 
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <VideoPlayer video = {this.state.video} />
            </div>
            <div className="col-md-5">
              <VideoList onClick = { this.onVideoClick.bind(this) } videos = {this.state.videos}/>
            </div>
          </div>
      </div> 
    );
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
