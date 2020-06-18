import React from "react";
import ResumeHeader from "./ResumeHeader";
import ResumeContent from "./ResumeContent";


class Resume extends React.Component{
    render() {
        return (
            <section id="resume" className="grey-section">
                <ResumeHeader />
                <ResumeContent />
            </section>
        )
    }
}

export default Resume