import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Nav from './Nav'
import Footer from './Footer'
import '../App.css'

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>  
  ); 
}