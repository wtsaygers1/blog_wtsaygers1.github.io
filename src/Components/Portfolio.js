// container, row, col
// col will be 3 for breathing space between projects
// col will be 12 on smaller screens
// will use a card with an image of project, description, and link to project

import React from 'react'

export default function Portfolio() {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                <img src="under_construct.jpeg" className="img-fluid" alt="under construction" />
                </div>
            </div>
        </div>
    )
}
