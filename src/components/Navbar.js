import React from 'react';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <button className="nav-btn"
                        type="button"
                        name="home"
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button className="nav-btn"
                        type="button"
                        name="about-me"
                    >
                        About Me
                    </button>
                </li>
                <li>
                    <button className="nav-btn"
                        type="button"
                        name="projects"
                    >
                        Projects
                    </button>
                </li>
                <li>
                    <button className="nav-btn"
                        type="button"
                        name="contact-me"
                    >
                        Contact Me
                    </button>
                </li>
                <li>
                    <button className="nav-btn"
                        type="button"
                        name="resume"
                    >
                        Resume
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;