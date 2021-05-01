import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Footer from './Footer'
import '../App.css'

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  ); 
}   

