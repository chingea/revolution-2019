import React from "react";
import $ from "jquery";
import catalonia from "../../media/prologue/News Catalonia.mp4";
import chile from "../../media/prologue/News Chile.mp4";
import colombia from "../../media/prologue/News Colombia.mp4";
import haiti from "../../media/prologue/News Haiti.mp4";
import hongkong from "../../media/prologue/News Hong Kong.mp4";
import iraq from "../../media/prologue/News Iraq.mp4";
import lebanon from "../../media/prologue/News Lebanon.mp4";
import sudan from "../../media/prologue/News Sudan.mp4";
import usa from "../../media/prologue/News USA.mp4";

const channels = [catalonia, chile, colombia, haiti, hongkong, iraq, lebanon, sudan, usa];

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a className={this.props.playing ? "display-none" : "button play-button"} onClick={this.props.handleClick}>{this.props.firstTime ? "Play" : "Replay"}</a>
    );
  }
}

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <video
      className={"grid-video".concat(this.props.isActive ? " active" : "")}
      onMouseEnter={() => this.props.handleMouseEnter(this.props.index)}
      onMouseLeave={this.props.handleMouseLeave}
      onEnded={this.props.handleEnded}
      muted={this.props.isActive ? false : "muted"}>
        <source src={this.props.channel} type="video/mp4"/>
      </video>
    );
  }
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    }
    this.renderChannel = this.renderChannel.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleMouseEnter(index) {
    if (this.props.playing) {
      this.setState({
        activeIndex: index
      });
    }
  }
  handleMouseLeave() {
    this.setState({
      activeIndex: null
    });
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(e) {
    switch (e.keyCode) {
      case 37:
        if (![0, 3, 6].includes(this.state.activeIndex)) {
          this.setState({
            activeIndex: this.state.activeIndex - 1
          });
        }
        break;
      case 38:
        if (![0, 1, 2].includes(this.state.activeIndex)) {
          this.setState({
          activeIndex: this.state.activeIndex - 3
        });
      }
        break;
      case 39:
        if (![2, 5, 8].includes(this.state.activeIndex)) {
          this.setState({
          activeIndex: this.state.activeIndex + 1
        });
      }
        break;
      case 40:
        if (![6, 7, 8].includes(this.state.activeIndex)) {
          this.setState({
          activeIndex: this.state.activeIndex + 3
        });
      }
        break;
      default:
        return;
          }
          e.preventDefault();
  }
  renderChannel(i) {
    return (
      <Channel
      index={i}
      channel={channels[i]}
      isActive={this.state.activeIndex == i}
      handleMouseEnter={this.handleMouseEnter}
      handleMouseLeave={this.handleMouseLeave}
      handleEnded={this.props.handleEnded}/>
    );
  }
  render() {
    return (
      <div className="grid">
        <div className="grid-header">Move cursor or use keyboard arrows to change channels.</div>
        {this.renderChannel(0)}
        {this.renderChannel(1)}
        {this.renderChannel(2)}
        {this.renderChannel(3)}
        {this.renderChannel(4)}
        {this.renderChannel(5)}
        {this.renderChannel(6)}
        {this.renderChannel(7)}
        {this.renderChannel(8)}
      </div>

    );
  }
}

class SceneOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      firstTime: true
    };
    this.play = this.play.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
  }
  play() {
    $("video").each((i, vid) => {
      vid.play();
    });
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
        <PlayButton
        handleClick={this.play}
        playing={this.state.playing}
        firstTime={this.state.firstTime}/>
        <Grid
        playing={this.state.playing}
        handleEnded={this.handleEnded}/>
      </div>
    );
  }
}

export default SceneOne;
