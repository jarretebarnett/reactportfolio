// import logo from './logo.svg';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Catalog from "./components/Catalog";
import About from "./components/About";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <HashRouter 
    //basename = {process.env.PUBLIC_URL}
    >
      <Nav />
        <Switch>
          <Route component = {Home} path = "/" exact />
          <Route component = {Catalog} path = "/catalog" />
          <Route component = {About} path = "/about" />
        </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
