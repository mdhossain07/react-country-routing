import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Country from './Components/Country/Country';
import NoMatch from './Components/NoMatch/NoMatch';
import Countrydetails from './Components/CountryDetails/Countrydetails';

function App() {
  return (
    <Router>
      <Switch>

      <Route path='/name/:common'>
          <Countrydetails/>
        </Route>

      <Route path exact='/'>
          <Home/>
        </Route>

        <Route path='/home'>
          <Home/>
        </Route>

        <Route path='*'>
          <NoMatch/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
