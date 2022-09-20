import './App.css';
import Main from './components/homePage/Main'
import About from './components/About/About'
import Galery from './components/Galery/Galery'
import Wedding from './components/Wedding/Wedding'
import Contact from './components/Contact/Contact'
import Menu from './components/Menu/Menu'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/galery" component={Galery} />
        <Route exact path="/wedding" component={Wedding} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </div>
  );
}

export default App;
