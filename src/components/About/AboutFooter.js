import React from "react";

class AboutFooter extends React.Component {
    render() {
        return (
            <div className="row button-section">
                <div className="col-twelve">
                    <a href="#contact" title="Contact me" className="button stroke smoothscroll">Contact me</a>
                    <a
                        href="https://drive.google.com/uc?authuser=0&id=1MPCsB9DTjUPEcWODXHufUN4ufZHw5QCO&export=download"
                       title="Download CV"
                        className="button button-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Download CV</a>
                </div>
            </div>
        )
    }
}

export default AboutFooter;