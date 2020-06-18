import React from "react";
import about from '../data/about.json'

class Intro extends React.Component{
    render() {
        const positions = about.positions.map((position, index) => {
            return (<span key={index}>{position}</span>)
        });
        const socials = about.socials.map((social, index) => {
           return (
               <li key={index}>
                    <a href={social.href}>
                        <i className={"fa fa-" + social.name} />
                    </a>
                </li>
           );
        });

        return (
            <section id="intro">
                <div className="intro-overlay" />
                <div className="intro-content">
                    <div className="row">
                        <div className="col-twelve">
                            <h5>Hello, World.</h5>
                            <h1>I'm {about.name}</h1>
                            <p className="intro-position">
                                {positions}
                            </p>
                            <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
                        </div>
                    </div>
                </div>
                <ul className="intro-social" >
                    {socials}
                </ul>
            </section>
        )
    }
}

export default Intro