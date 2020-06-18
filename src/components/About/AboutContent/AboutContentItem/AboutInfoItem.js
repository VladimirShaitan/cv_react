import React from "react";

class AboutInfoItem extends React.Component {
    render() {
        return (
            <li>
                <strong>{this.props.name}:</strong>
                <span>{this.props.value}</span>
            </li>
        )
    }
}

export default AboutInfoItem