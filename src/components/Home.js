import React from "react";
import "../css/Home.css";
import {Link} from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="column">
        <h1>Revolution 2019</h1>
        <h6>an interactive documentary</h6>
        <div className="buttons">
          <Link className="button" to="/prologue">Start</Link>
          <Link className="button" to="/about">About</Link>
        </div>
      </div>
    );
  }
}
export default Home;
