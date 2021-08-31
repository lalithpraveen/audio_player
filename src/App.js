import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import Home from './components/Home'
import SpecificSong from './components/SpecificSong'
import NotFound from './components/NotFound'
import './App.css';

const App = () => (
  <BrowserRouter>
  
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/song/:name" component={SpecificSong} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
  
  </BrowserRouter>
    
)
export default App;
