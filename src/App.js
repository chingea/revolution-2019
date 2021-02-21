import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Prologue from "./components/prologue/Prologue";
import ChapterSelection from "./components/ChapterSelection";
import ChapterOne from "./components/chapter_one/ChapterOne";
import ChapterTwo from "./components/chapter_two/ChapterTwo";

export default function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/prologue" render={() => <Prologue />} />
          <Route exact path="/chapter-selection" render={() => <ChapterSelection />} />
          <Route exact path="/the-protesters-handbook" render={() => <ChapterOne />} />
          <Route exact path="/the-revolution-is-female" render={() => <ChapterTwo />} />
        </Switch>
      </Router>
    </div>
  );
}
