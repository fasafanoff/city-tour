import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import TourList from "./components/TourList/TourList";
import About from './components/AboutPage/About';
import Home from './components/HomePage/Home';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";


function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact>
            <NavBar active={0} />
          </Route>
          <Route path="/about" exact>
            <NavBar active={1} />
          </Route>
          <Route path="/list" exact>
            <NavBar active={2} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" component={TourList} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
