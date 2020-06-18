import React from "react";
import ResumeTimelineItem from "./ResumeTimelineItem";

class ResumeTimelineContainer extends React.Component{
    constructor(props) {
        super(props);
        this.data = null;
        this.fillData();
    }

    fillData() {
        this.data = this.props.data.map((item, index) => {
            return <ResumeTimelineItem itemData={item} key={index} />
        })
    }


    render() {
        return (
            <div className="col-twelve">
                <div className="timeline-wrap">
                    {this.data}
                </div>
            </div>
        )
    }

}

export default ResumeTimelineContainer;