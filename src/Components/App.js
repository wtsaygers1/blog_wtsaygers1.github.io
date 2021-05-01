import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import '../App.css'

function App() {  
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
