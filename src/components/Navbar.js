import React from 'react';

function Navbar() {
    return (
        <aside>
            <figure>
                <img class="profile-pic" src="./resources/images/zack_full_stack_dev.jpg"/>
            </figure>
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
        </aside>
    )
}

export default Navbar;