import './App.css';
import Main from './components/homePage/Main'
import About from './components/About/About'
import Galery from './components/Galery/Galery'
import Wedding from './components/Wedding/Wedding'
import Contact from './components/Contact/Contact'
import Menu from './components/Menu/Menu'
import Accommodation from './components/Accommodation/Accommodation'
import Party from './components/Party/Party'
import Catering from './components/Catering/Catering'
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/galery" component={Galery} />
        <Route exact path="/wedding" component={Wedding} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/accommodation" component={Accommodation} />
        <Route exact path="/party" component={Party} />
        <Route exact path="/catering" component={Catering} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
