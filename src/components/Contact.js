import React from 'react';

function Contact() {
    return (
        <main>
            <section className="contact-me hide" id="contact-me">
                <h2>Contact Me</h2>
                <form className="email-form" id="email-form"
                    action="mailto: zreggert@gmail.com"
                    method="POST">
                    <div className="form-column" id="left-column">
                        <div className="form-input">
                            <label for="name">Name</label>
                            <br/>
                            <input type="text" name="name"></input>
                        </div>
                        <br/>
                        <div className="form-input">
                            <label for="email">Email</label>
                            <br/>
                            <input type="email" name="email"></input>
                        </div>
                        <br/>
                        <div className="form-input">
                            <button type="submit">Send</button>
                        </div>
                        </div>
                    <div className="form-column" id="right-column">
                        <div className="form-input">
                            <label for="email-message">Message Me:</label>
                            <br/>
                            <textarea className="email-message" name="email-message"></textarea>
                        </div>
                        <br/>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Contact;