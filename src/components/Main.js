import React from 'react';
import '../scripts/script'

function Main() {
    return (
        <div>
            <main>
                <figure className="mobile-img">
                    <img className="mobile-img" src="./resources/images/zack_full_stack_dev.jpg" />
                    <figcaption>Hi! I'm Zack a Full Stack Developer! Check out my resume <span className="res-span"><a className="res-link-mobile" href="resources/_Zachary Eggert full stack dev (10).pdf">here</a></span>!</figcaption>
                </figure>
                <section className="about-me hide" id="about-me">
                    <h2>About Me</h2>
                    <p>
                        Hi! I'm Zack and I am a full stack developer from Atlanta, Georgia.
                        I began learning code after the 2020 corona virus pandemic left me without a job
                        for months and I became determined to learn a skill that would allow me to
                        contribute to the world without being in physical contact with it. Since then
                        I have loved my journey to become a developer and can't wait to build and
                        design more wonderful projects with the online community.
                    </p>
                </section>
                <section className="projects hide" id="projects">
                    <h2>Projects</h2>
                    <div className="key-projects">
                        <div className="project-container">
                            <p>Limited Footwear</p>
                            <div className="project-links">
                                <a href="https://limited-footwear.herokuapp.com/"><i className="fas fa-globe"></i></a>
                                <a href="https://github.com/Limnation/limited"><i className="fab fa-github-square"></i></a>
                            </div>
                            <a href="https://limited-footwear.herokuapp.com/"><img src="./resources/images/limited_footwear_landing_page.png" alt="image from the Limited Footwear website" /></a>
                        </div>
                        <div className="project-container">
                            <p>getMovieInfo(){}</p>
                            <div className="project-links">
                                <a href="https://zreggert.github.io/get-movie-information/"><i className="fas fa-globe"></i></a>
                                <a href="https://github.com/zreggert/get-movie-information"><i className="fab fa-github-square"></i></a>
                            </div>
                            <a href="https://zreggert.github.io/get-movie-information/"><img src="./resources/images/getmovieinfo.png" alt="image from the getMovieInfo website" /></a>
                        </div>
                        <div className="project-container">
                            <p>Team Generator</p>
                            <div className="project-links">
                                <a href="https://zreggert.github.io/team_generator/"><i className="fas fa-globe"></i></a>
                                <a href="https://github.com/zreggert/team_generator"><i className="fab fa-github-square"></i></a>
                            </div>
                            <a href="https://zreggert.github.io/team_generator/"><img src="./resources/images/team_gen_markdown_generated.png" alt="image of generated markdown" /></a>
                        </div>
                        <div className="project-container">
                            <p>Weather Dashboard</p>
                            <div className="project-links">
                                <a href="https://zreggert.github.io/weather_forecast/"><i className="fas fa-globe"></i></a>
                                <a href="https://github.com/zreggert/weather_forecast"><i className="fab fa-github-square"></i></a>
                            </div>
                            <a href="https://zreggert.github.io/weather_forecast/"><img src="./resources/images/weather_dash.png" alt="image of the Weather Dashboard website" /></a>
                        </div>
                        <div className="project-container">
                            <p>JavaScript Quiz</p>
                            <div className="project-links">
                                <a href="https://zreggert.github.io/JavaScript_Quiz/"><i className="fas fa-globe"></i></a>
                                <a href="https://github.com/zreggert/JavaScript_Quiz"><i className="fab fa-github-square"></i></a>
                            </div>
                            <a href="https://zreggert.github.io/JavaScript_Quiz/"><img src="./resources/images/quiz_start.png" alt="image of JavaScript Quiz landing page" /> </a> 
                        </div>
                    </div>
                </section>
                <section className="contact-me hide" id="contact-me">
                    <h2>Contact Me</h2>
                    <ul>
                        <li>Email: zreggert@gmail.com</li>
                        <li>Phone: (404)626-9854</li>
                        <li>
                            <a href="https://www.linkedin.com/in/zachary-eggert/">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/zreggert">GitHub</a>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Main;