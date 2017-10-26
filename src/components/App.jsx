class App extends React.Component {
  
  constructor(props) {
    super(props); 
    this.state = { 
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      value: null
    };  
    
  }
  
  onVideoClick(input) {
    this.setState({ 
      video: input
    });
    
  }
  
  onSearchClick(input) {
    
    // console.log('user typed in:', input.target.value);
  
  }
  
  render() {  
    return (
      <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search onClickFun = {this.onSearchClick.bind(this)} /> 
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
