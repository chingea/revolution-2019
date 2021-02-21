import React from "react";
import "../css/ChapterSelection.css";
import {Link} from "react-router-dom";

class ChapterSelection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Revolution 2019</h1>
        <h2>Chapter selection</h2>
        <div id="chapters">
          <div id="chapter-1" className="chapter">
            <Link to="/the-protesters-handbook">
              <div className="image-placeholder"></div>
              The protester's handbook
            </Link>
          </div>
          <div id="chapter-2" className="chapter">
            <Link to="/the-revolution-is-female">
              <div className="image-placeholder"></div>
              The revolution is female
            </Link>
          </div>
          <div id="chapter-3" className="chapter link-disabled">
            <a href="#">
              <div className="image-placeholder"></div>
              Cacerolazo
            </a>
          </div>
        </div>
        <div className="controls">
          <Link className="control-link" to="/prologue">&lt; Back to prologue</Link>
          <Link className="control-link" to="/">Skip to epilogue &gt;</Link>
        </div>
      </div>
    );
  }
}

export default ChapterSelection;
