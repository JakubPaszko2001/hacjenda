import './App.css';
// import Main from './components/homePage/Main'
import About from './components/About/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route extact path="/" component={Main} /> */}
          <Route extact path="/" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
