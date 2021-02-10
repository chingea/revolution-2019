import React from "react";
import prologue from "../../media/prologue/Prologue.mp4";
import $ from "jquery";

class SceneZero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      firstTime: true
    }
    this.play = this.play.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
  }
  play() {
    $("video")[0].play();
    this.setState({
      playing: true
    });
  }
  handleEnded() {
    this.setState({
      playing: false,
      firstTime: false
    });
  }
  render() {
    return (
      <div>
        <div className="video-container">
          <video className="fullscreen" onEnded={this.handleEnded}>
            <source src={prologue} type="video/mp4" />
          </video>
        </div>
        <a className={this.state.playing ? "display-none" : "button play-button"} onClick={this.play}>{this.state.firstTime ? "Play" : "Replay"}</a>
      </div>
    );
  }
}

export default SceneZero;
