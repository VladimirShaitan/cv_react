import React from "react";
import avatar from '../../images/vovan_shaitan.jpg';
import about from '../../data/about.json';

class AboutHeading extends React.Component {
    render() {
        return (
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>
                    <div className="intro-info">
                        <img alt="Profile" src={avatar} />
                        <p className="lead">{about.bio}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutHeading;