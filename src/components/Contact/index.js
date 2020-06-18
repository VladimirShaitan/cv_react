import React from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactBottom from "./ContactBottom";

class Contact extends React.Component{
    render() {
        return(
            <section id="contact">
                <ContactHeader />
                <ContactForm />
                <ContactBottom />
            </section>
        )
    }
}

export default Contact;