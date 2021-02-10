import React from "react";
import "../../css/Prologue.css";
import {Link} from "react-router-dom";
import SceneZero from "./SceneZero";
import SceneOne from "./SceneOne";
import SceneTwo from "./SceneTwo";

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.scene == 0) {
      return (
        <div className="controls">
          <Link className="control-link" to="/">&lt; Back</Link>
          <a className="control-link" onClick={() => this.props.setScene(1)}>Next &gt;</a>
        </div>
      )
    }
    else {
      return (
        <div className="controls">
          <a className="control-link" onClick={() => this.props.setScene(this.props.scene - 1)}>&lt; Back</a>
          <a className="control-link" onClick={() => this.props.setScene(this.props.scene + 1)}>Next &gt;</a>
        </div>
      )
    }
  }
}

class Scene extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    switch (this.props.scene) {
      case 0:
        return (<SceneZero />);
        break;
      case 1:
        return (<SceneOne />);
      case 2:
        return (<SceneTwo />);
      default:
        return (<SceneZero />);
    }
  }
}

class Prologue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: 0
    }
    this.setScene = this.setScene.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }
  setScene(i) {
    this.setState({
      scene: i
    })
  }
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
    console.log('Component did mount');
  }
  componentWillUnmount() {
   window.removeEventListener('load', this.handleLoad);
  }
  handleLoad() {
    alert('Prologue has loaded');
    console.log('handle has loaded');
  }
  render() {
    return (
      <div>
        <Scene scene={this.state.scene} />
        <Controls scene={this.state.scene} setScene={this.setScene} />
      </div>
    );
  }
}
export default Prologue;
