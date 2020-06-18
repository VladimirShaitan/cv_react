import React from "react";
import AboutContentItem from "./AboutContentItem";
import about from "../../../data/about.json";
import skills from "../../../data/skills.json";


class AboutContent extends React.Component {
    constructor(props) {
        super(props);
        this.bioData = [
            {name: 'Full name', value: about.fullName},
            {name: 'Birth Date', value: about.birthDate},
            {name: 'Job', value: about.currentPosition},
            {name: 'Website', value: about.website},
            {name: 'Email', value: about.email},
        ];
        this.skills = [...skills];
    }

    render() {

        return (
            <div className="row about-content">
                <AboutContentItem
                    items={this.bioData}
                    listClName={'info-list'}
                    title={'Profile'}
                />

                <AboutContentItem
                    items={this.skills}
                    listClName={'skill-bars'}
                    title={'Skills'}
                />
            </div>
        )
    }
}

export default AboutContent;