import React from "react";
import ResumeContentHeader from "./ResumeContentHeader";
import ResumeTimelineContainer from "./ResumeTimelineContainer";
import data from '../../../data/experience_and_education.json'

class ResumeContent extends React.Component {
    constructor(props) {
        super(props);
        this.experience = data.experience;
        this.education = data.education;
    }

    render() {
        return (
            <div className="row resume-timeline">
                <ResumeContentHeader title={'Work Experience'} />
                <ResumeTimelineContainer data={this.experience} />
                <ResumeContentHeader title={'Education'} />
                <ResumeTimelineContainer data={this.education} />
            </div>
        )
    }
}

export default ResumeContent