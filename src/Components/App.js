import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Nav from './Nav'
import BlogPage from './BlogPage'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import '../App.css'
import PreWork from './PreWork'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import FullStack from './FullStack'

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>


          <Route exact path='/blog'>
            <BlogPage />
          </Route>


          <Route path='/blog/prework'>
            <PreWork />
          </Route>
          <Route path='/blog/frontend'>
            <FrontEnd />
          </Route>
          <Route path='/blog/backend'>
            <BackEnd />
          </Route>
          <Route path='/blog/fullstack'>
            <FullStack />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}