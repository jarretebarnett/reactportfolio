// import logo from './logo.svg';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL}>
      <Nav />
        <Switch>
          <Route component = {Home} path = "/" exact />
          <Route component = {Portfolio} path = "/projects" />
          <Route component = {Contact} path = "/bio" />
        </Switch>
    </Router>
  );
}

export default App;
