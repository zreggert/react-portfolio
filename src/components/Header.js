import React from 'react';

function Header() {
    return (
        <header className="header">
            <h1>Zachary Eggert</h1>
            <h3>Full Stack Web Developer</h3>
            <div class="mobile">
            <nav>
                <ul>
                    <li>
                        <button className="nav-btn-mobile" type="button" name="home-mobile">Home</button>
                    </li>
                    <li>
                        <button className="nav-btn-mobile" type="button" name="about-me">About Me</button>
                    </li>
                    <li>
                        <button className="nav-btn-mobile" type="button" name="projects">Projects</button>
                    </li>
                    <li>
                        <button className="nav-btn-mobile" type="button" name="contact-me">Contact Me</button>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
    );
}

export default Header;