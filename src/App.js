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

export default function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/prologue" render={() => <Prologue />} />
        </Switch>
      </Router>
    </div>
  );
}
