import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import BlogNav from './BlogNav'

export default function BlogPage() {
    return (
        <div className="blog">           
               <BlogNav />
        </div>
    )
}
