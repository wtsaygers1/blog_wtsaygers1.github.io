import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PreWork from './PreWork'
import FrontEnd from './FrontEnd'

export default function BlogPage() {
    return (
        <div className="blog">
            <Router>
                <ul className="d-inline-flex">
                    <h6 className="px-4">
                        <Link to='/blog/prework'>PreWork</Link>
                    </h6>
                    <h6 className="px-4">
                        <Link to='/blog/frontend'>Front End</Link>
                    </h6>
                    <h6 className="px-4">
                        <Link to='/blog/backend'>Back End</Link>
                    </h6>
                    <h6 className="px-4">
                        <Link to='/blog/fullstack'>Full Stack</Link>
                    </h6>
                </ul>
                <Switch>
                    <Route path='/blog/prework'>
                        <PreWork />
                    </Route>
                    <Route path='/blog/frontend'>
                        <FrontEnd />
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}
