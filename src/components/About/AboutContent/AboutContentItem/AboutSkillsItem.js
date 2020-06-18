import React from "react";

class AboutSkillsItem extends React.Component {

    render() {
        return (
            <li>
                <div className={'progress percent'+this.props.value}>
                    <span>{this.props.value}</span>
                </div>
                <strong>{this.props.name}</strong>
            </li>
        );
    }
}

export default AboutSkillsItem