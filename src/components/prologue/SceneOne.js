import React from "react";
import $ from "jquery";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import catalonia from "../../media/prologue/News Catalonia.mp4";
import chile from "../../media/prologue/News Chile.mp4";
import colombia from "../../media/prologue/News Colombia.mp4";
import haiti from "../../media/prologue/News Haiti.mp4";
import hongkong from "../../media/prologue/News Hong Kong.mp4";
import iraq from "../../media/prologue/News Iraq.mp4";
import lebanon from "../../media/prologue/News Lebanon.mp4";
import sudan from "../../media/prologue/News Sudan.mp4";
import usa from "../../media/prologue/News USA.mp4";
import emptyAudio from "../../media/prologue/empty-audio.mp3";
import captionsCatalonia from "../../media/prologue/catalonia.vtt";
import captionsSudan from "../../media/prologue/sudan.vtt";
import captionsColombia from "../../media/prologue/colombia.vtt";
import captionsHaiti from "../../media/prologue/haiti.vtt";
import captionsHongKong from "../../media/prologue/hongkong.vtt";
import captionsIraq from "../../media/prologue/iraq.vtt";
import captionsLebanon from "../../media/prologue/lebanon.vtt";
import captionsChile from "../../media/prologue/chile.vtt";
import captionsUSA from "../../media/prologue/usa.vtt";

const channels = [catalonia, sudan, colombia, haiti, hongkong, iraq, lebanon, chile, usa];

const countries = ["Catalonia", "Sudan", "Colombia", "Haiti", "Hong Kong", "Iraq", "Lebanon", "Chile", "USA"]

const captions = [captionsCatalonia, captionsSudan, captionsColombia, captionsHaiti, captionsHongKong, captionsIraq, captionsLebanon, captionsChile, captionsUSA];

class CaptionsButton extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    tippy('#captions-button', {
        content: 'Toggle subtitles',
      });
  }
  render() {
    return (
      <div>
        <div
        id="captions-button"
        className={this.props.captionsOn ? "captions-button captions-active" : "captions-button"}
        onClick={this.props.toggleCaptions}><i className="far fa-closed-captioning"></i></div>
      </div>

    );
  }
}

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a
      className={this.props.playing ? "display-none" : this.props.canPlay ? "button play-button" : "button-disabled play-button"}
      onClick={this.props.handleClick}>{this.props.canPlay ? this.props.firstTime ? "Play" : "Replay" : "Loading"}</a>
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
        preload="auto"
        onCanPlayThrough={() => this.props.onCanPlayThrough(this.props.index)}
        className={"grid-video".concat(this.props.isActive ? " active" : "")}
        onMouseEnter={() => this.props.handleMouseEnter(this.props.index)}
        onMouseLeave={this.props.handleMouseLeave}
        onProgress={(e) => this.props.onProgress(e, this.props.index)}
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
    this.renderChannel = this.renderChannel.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.props.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.props.handleKeyPress);
  }
  renderChannel(i) {
    return (
      <Channel
      onCanPlayThrough={this.props.onCanPlayThrough}
      index={i}
      channel={channels[i]}
      isActive={this.props.activeIndex == i}
      handleMouseEnter={this.props.handleMouseEnter}
      handleMouseLeave={this.props.handleMouseLeave}
      handleEnded={this.props.handleEnded}
      onProgress={this.props.onProgress}/>
    );
  }
  render() {
    return (
      <div>
        <div className="grid-header">Move cursor or use keyboard arrows to change channels.</div>
        <div className="country-name">{countries[this.props.activeIndex]}</div>
        <div className="grid-container">
          <div className="grid">
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
        </div>
      </div>
    );
  }
}

class Captions extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('audio')[0].textTracks[0].oncuechange = function() {
      if (this.activeCues[0]) {
        $("#captions").html(this.activeCues[0].text);
      } else {
        $("#captions").html("");
      }
    }
  }
  render() {
    return (
      <div>
        <audio src={emptyAudio}>
          <track src={captions[this.props.activeIndex]} kind="subtitles" srcLang="en" default />
        </audio>
        <div
        id="captions"
        className={this.props.captionsOn ? this.props.activeIndex != null ? "captions" : "display-none" : "display-none"}></div>
      </div>

    );
  }
}

class SceneOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      firstTime: true,
      canBePlayed: [false, false, false, false, false, false, false, false, false],
      canPlay: false,
      activeIndex: null,
      captionsOn: true,
      percentageLoaded: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      totalLoaded: 0
    };
    this.play = this.play.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
    this.handleCanPlayThrough = this.handleCanPlayThrough.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleKeyPress= this.handleKeyPress.bind(this);
    this.toggleCaptions = this.toggleCaptions.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
  }
  handleMouseEnter(index) {
    if (this.state.playing) {
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
  play() {
    if (this.state.canPlay) {
      $("video").each((i, vid) => {
        vid.play();
      });
      $("audio")[0].play();
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
  handleCanPlayThrough(index) {
    var canBePlayed = this.state.canBePlayed;
    var trueArray = new Array(9).fill(true);
    canBePlayed[index] = true;
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    let canPlay = countOccurrences(canBePlayed, true) === 9;
    this.setState({
      canBePlayed: canBePlayed,
      canPlay: canPlay
    });
  }
  handleProgress(e, index) {
    if (e.target.buffered.length > 0) {
      var percentageLoaded = this.state.percentageLoaded;
      percentageLoaded[index] = Math.round(e.target.buffered.end(0) / e.target.duration * 100.0);
      var totalLoaded = Math.round(percentageLoaded.reduce((a, b) => a + b, 0) / 9.0);
      this.setState({
        percentageLoaded: percentageLoaded,
        totalLoaded: totalLoaded
      });
      console.log(this.state.totalLoaded);
    }
  }
  toggleCaptions() {
    var captions = this.state.captionsOn;
    this.setState({
      captionsOn: !captions
    });
  }
  render() {
    return (
      <div>
        <div className="loading-bar-container">
          <div className={this.state.canPlay ? "display-none" : "loading-bar"} style={{width: this.state.totalLoaded + "%"}}></div>
        </div>
        <CaptionsButton
        captionsOn={this.state.captionsOn}
        toggleCaptions={this.toggleCaptions} />
        <PlayButton
        handleClick={this.play}
        playing={this.state.playing}
        firstTime={this.state.firstTime}
        canPlay={this.state.canPlay}/>
        <Grid
        handleMouseEnter={this.handleMouseEnter}
        handleMouseLeave={this.handleMouseLeave}
        handleKeyPress={this.handleKeyPress}
        activeIndex={this.state.activeIndex}
        onCanPlayThrough={this.handleCanPlayThrough}
        onProgress={this.handleProgress}
        playing={this.state.playing}
        handleEnded={this.handleEnded}/>
        <Captions
        activeIndex={this.state.activeIndex}
        captionsOn={this.state.captionsOn} />
      </div>
    );
  }
}

export default SceneOne;
