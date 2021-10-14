import React, { useContext } from "react";
import { context } from "./ContextManager.jsx"
function Contact() {
    const usingContext = useContext(context);
    const handleContact = (e) => {
        usingContext.setContactForm({ ...usingContext.contactForm, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
	let check = usingContext.contactForm.email.toLowerCase();
        if (check.endsWith("@gmail.com") === false || usingContext.contactForm.email.indexOf("@") !== usingContext.contactForm.email.lastIndexOf("@")) {
            alert("Enter a valid Email.");
            e.preventDefault();
        }
    }
    return (
        <>
            <h1 className="contact-heading" id="contact">
                Get in touch
            </h1>
            <div className="contact-form">
                <form method="post" action="https://portfolio-servers-data.herokuapp.com/contact" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputName" placeholder="Name" name="name" onChange={handleContact} required />
                        <label htmlFor="floatingInputName">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Email Address" name="email" onChange={handleContact} required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Message" id="floatingTextarea2" style={{ height: "220px" }} name="message" onChange={handleContact} required></textarea>
                        <label htmlFor="floatingTextarea2">Message</label>
                    </div>
                    <button type="submit" className="btn" >Send</button>
                </form>
            </div>
        </>
    )
}
export default Contact;