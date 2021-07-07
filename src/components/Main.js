import React from 'react';
import '../scripts/script'

function Main() {
    return (
        <div>
            <main>
                <figure class="mobile-img">
                    <img class="mobile-img" src="./resources/images/zack_full_stack_dev.jpg" />
                    <figcaption>Hi! I'm Zack a Full Stack Developer! Check out my resume <span class="res-span"><a class ="res-link-mobile" href="resources/_Zachary Eggert full stack dev (10).pdf">here</a></span>!</figcaption>
                </figure>
                <section class="about-me hide" id="about-me">
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
                <section class="projects hide" id="projects">
                    <h2>Projects</h2>
                    <div class="key-projects">
                        <div class="project-container">
                            <p>Limited Footwear</p>
                            <div class="project-links">
                                <a href="https://limited-footwear.herokuapp.com/"><i class="fas fa-globe"></i></a>
                                <a href="https://github.com/Limnation/limited"><i class="fab fa-github-square"></i></a>
                            </div>
                            <a href="https://limited-footwear.herokuapp.com/"><img src="resources/images/limited_footwear_landing_page.png" alt="image from the Limited Footwear website" /></a>
                        </div>
                        <div class="project-container">
                            <p>getMovieInfo(){}</p>
                            <div class="project-links">
                                <a href="https://zreggert.github.io/get-movie-information/"><i class="fas fa-globe"></i></a>
                                <a href="https://github.com/zreggert/get-movie-information"><i class="fab fa-github-square"></i></a>
                            </div>
                            <a href="https://zreggert.github.io/get-movie-information/"><img src="resources/images/getmovieinfo.png" alt="image from the getMovieInfo website" /></a>
                        </div>
                        <div class="project-container">
                            <p>Team Generator</p>
                            <div class="project-links">
                                <a href="https://zreggert.github.io/team_generator/"><i class="fas fa-globe"></i></a>
                                <a href="https://github.com/zreggert/team_generator"><i class="fab fa-github-square"></i></a>
                            </div>
                            <a href="https://zreggert.github.io/team_generator/"><img src="resources/images/team_gen_markdown_generated.png" alt="image of generated markdown" /></a>
                        </div>
                        <div class="project-container">
                            <p>Weather Dashboard</p>
                            <div class="project-links">
                                <a href="https://zreggert.github.io/weather_forecast/"><i class="fas fa-globe"></i></a>
                                <a href="https://github.com/zreggert/weather_forecast"><i class="fab fa-github-square"></i></a>
                            </div>
                            <a href="https://zreggert.github.io/weather_forecast/"><img src="resources/images/weather_dash.png" alt="image of the Weather Dashboard website" /></a>
                        </div>
                        <div class="project-container">
                            <p>JavaScript Quiz</p>
                            <div class="project-links">
                                <a href="https://zreggert.github.io/JavaScript_Quiz/"><i class="fas fa-globe"></i></a>
                                <a href="https://github.com/zreggert/JavaScript_Quiz"><i class="fab fa-github-square"></i></a>
                            </div>
                            <a href="https://zreggert.github.io/JavaScript_Quiz/"><img src="resources/images/quiz_start.png" alt="image of JavaScript Quiz landing page" /> </a> 
                        </div>
                        <div class="project-container">
                            <p>Password Generator</p>
                            <div class="project-links">
                                <a href="https://zreggert.github.io/zack_passgen_repo/"><i class="fas fa-globe"></i></a>
                                <a href="https://github.com/zreggert/zack_passgen_repo"><i class="fab fa-github-square"></i></a>
                            </div>
                            <a href="https://zreggert.github.io/zack_passgen_repo/"><img src="resources/images/passgen_webpage.png" alt="image of password generator page" /></a>
                        </div>
                    </div>
                </section>
                <section class="contact-me hide" id="contact-me">
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