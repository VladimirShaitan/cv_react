import React from "react";

class ResumeContentHeader extends React.Component{
    render() {
        return (
            <div className="col-twelve resume-header">
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

export default ResumeContentHeader;