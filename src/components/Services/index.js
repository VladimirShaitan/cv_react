import React from "react";
import ServicesHeader from "./ServicesHeader";
import ServicesContent from "./ServicesContent";

class Services extends React.Component {
    render() {
        return (
            <section id="services">
                <div className="overlay" />
                <ServicesHeader />
                <ServicesContent />
            </section>
        );
    }
}

export default Services;