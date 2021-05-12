import React from 'react';
import { Linkedin, Instagram, Twitter } from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <div className="row">
            <div className="footer">
                <div className="card fixed-bottom">
                    <div className="card-body social">
                        {/* <a href="https://github.com/wtsaygers1"
                            target="_blank"
                            rel="noreferrer"
                            className="GitHub">
                            <GitHub />
                        </a> */}
                        <a href="https://www.linkedin.com/in/walter-saygers-2928b2a8/"
                            target="_blank"
                            rel="noreferrer"
                            className="linkedin">
                            <Linkedin />
                        </a>
                        <a href="https://www.instagram.com/wallysenders/"
                            target="_blank"
                            rel="noreferrer"
                            className="insta">
                            <Instagram />
                        </a>
                        <a href="https://twitter.com/wallysyndrs"
                            target="_blank"
                            rel="noreferrer"
                            className="twitter">
                            <Twitter />
                        </a>
                        {/* <a href="https://www.youtube.com"
                            target="_blank"
                            rel="noreferrer"
                            className="youtube">
                            <Youtube />
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}