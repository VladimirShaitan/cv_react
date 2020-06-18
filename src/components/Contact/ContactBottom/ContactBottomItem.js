import React from "react";

class ContactBottomItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.classNames.join(' ')}>
                <div className="icon">
                    <i className={this.props.icon} />
                </div>
                <h5>{this.props.title}</h5>
                <p>{this.props.value}</p>
            </div>
        )
    }

}

export default ContactBottomItem;