import React from "react";

class ResumeTimelineItem extends React.Component {
    render() {
        return (
            <div className="timeline-block">
                <div className="timeline-ico">
                    <i className="fa fa-briefcase" />
                </div>
                <div className="timeline-header">
                    <h3>{this.props.itemData.position}</h3>
                    <p>{this.props.itemData.start} - {this.props.itemData.end}</p>
                </div>
                <div className="timeline-content">
                    <h4>{this.props.itemData.name}</h4>
                    <p>{this.props.itemData.description}</p>
                </div>
            </div>
        );
    }
}

export default ResumeTimelineItem;