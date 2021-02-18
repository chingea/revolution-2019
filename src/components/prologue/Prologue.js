import React from "react";
import "../../css/Prologue.css";
import {Link} from "react-router-dom";
import SceneZero from "./SceneZero";
import SceneOne from "./SceneOne";
import SceneTwo from "./SceneTwo";
import SceneThree from "./SceneThree";

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
    else if (this.props.scene == 3) {
      return (
        <div className="controls">
          <a className="control-link" onClick={() => this.props.setScene(2)}>&lt; Back</a>
          <Link className="control-link" to="/">Next &gt;</Link>
        </div>
      );
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
      case 3:
        return (<SceneThree />);
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
  }
  setScene(i) {
    this.setState({
      scene: i
    })
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
