import React from 'react'

import { Link } from 'react-router-dom'

export default function BlogNav() {
    return (
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

    )
}
