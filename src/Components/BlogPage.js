import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import PreWork from './PreWork'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import FullStack from './FullStack'

import BlogNav from './BlogNav'

export default function BlogPage() {
    const location = useLocation()
    return (
        <div className="blog text-center">
            <BlogNav />
            {location.pathname === '/blog' ? <img className='image-fluid' src='./penandquill.jpeg' /> : null}
            <Switch>
                <Route exact path='/blog/prework'>
                    <PreWork />
                </Route>
                <Route exact path='/blog/frontend'>
                    <FrontEnd />
                </Route>
                <Route exact path='/blog/backend'>
                    <BackEnd />
                </Route>
                <Route exact path='/blog/fullstack'>
                    <FullStack />
                </Route>
            </Switch>
        </div>
    )
}
