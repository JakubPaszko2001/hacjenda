import './App.css';
// import Main from './components/homePage/Main'
// import About from './components/About/About'
// import Galery from './components/Galery/Galery'
// import Wedding from './components/Wedding/Wedding'
// import Contact from './components/Contact/Contact'
import Menu from './components/Menu/Menu'
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
          {/* <Route extact path="/" component={About} /> */}
          {/* <Route extact path="/" component={Galery} /> */}
          {/* <Route extact path="/" component={Wedding} /> */}
          {/* <Route extact path="/" component={Contact} /> */}
          <Route extact path="/" component={Menu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
