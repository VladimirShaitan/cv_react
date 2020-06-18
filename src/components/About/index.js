import React from "react";
import AboutHeading from "./AboutHeading";
import AboutContent from "./AboutContent";
import AboutFooter from "./AboutFooter";

class About extends React.Component{
    render () {
        return (
            <section id="about">
                <AboutHeading />
                <AboutContent />
                <AboutFooter />
            </section>
        )
    }
}

export default About;
