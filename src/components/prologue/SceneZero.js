import React from "react";
import prologue from "../../media/prologue/Prologue.mp4";
import $ from "jquery";

class SceneZero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      firstTime: true,
      canPlay: false
    }
    this.play = this.play.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
    this.handleCanPlayThrough = this.handleCanPlayThrough.bind(this);
  }
  play() {
    if (this.state.canPlay) {
      $("video")[0].play();
      this.setState({
        playing: true
      });
    }
  }
  handleEnded() {
    this.setState({
      playing: false,
      firstTime: false
    });
  }
  handleCanPlayThrough() {
    this.setState({
      canPlay: true
    });
  }
  render() {
    return (
      <div>
        <div className="video-container">
          <video className="fullscreen" onEnded={this.handleEnded} onCanPlayThrough={this.handleCanPlayThrough}>
            <source src={prologue} type="video/mp4" />
          </video>
        </div>
        <a
        className={this.state.playing ? "display-none" : this.state.canPlay ? "button play-button" : "button-disabled play-button"}
        onClick={this.play}>{this.state.canPlay ? this.state.firstTime ? "Play" : "Replay" : "Loading"}</a>
      </div>
    );
  }
}

export default SceneZero;
