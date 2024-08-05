import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Pokemon from './components/Pokemon';

function App() {
  return (
<Router>
      <Navbar/>
   
    <Switch>
          <Route exact path="/">
            <Pokemon/>  
          </Route>
          <Route exact path='/about'>
          <About/>
          </Route>
          </Switch>
      </Router>
  );
}

export default App;
