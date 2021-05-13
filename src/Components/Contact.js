import React from 'react'

export default function Contact() {
    return (
        <div className="contact">
            <h1>Contact Me!</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.21192798512!2d-84.49469018494356!3d38.04214797971169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e842d5acf7%3A0x92c7783d2b2a2d15!2sAwesome%20Inc!5e0!3m2!1sen!2sus!4v1620596037345!5m2!1sen!2sus" 
            title="location"
            frameBorder="0" 
            allowFullScreen=""
            aria-hidden="false" 
            loading="lazy"
            tabIndex="0"
            ></iframe>

            <h4>Email</h4>
            <p>businessinquries4walter@gmail.com</p>

            <h4>GitHub</h4>
            <p><a href="https://github.com/wtsaygers1" target="_blank" rel="noreferrer">https://github.com/wtsaygers1</a></p>

            <h4>Address</h4>
            <p>Awesome Inc<br />
            348 E Main St, Lexington, KY 40507</p>
        </div>
    )
}
