
import './App.css';
import Home from './Home';
import Navbar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
