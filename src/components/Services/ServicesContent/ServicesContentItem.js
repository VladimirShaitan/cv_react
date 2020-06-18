import React from "react";

class ServicesContentItem extends React.Component {
    render() {
        return (
            <div className="service">
                <span className="icon">
                    <i className={this.props.icon} />
                </span>
                <div className="service-content">
                    <h3>{this.props.name}</h3>
                    <p className="desc">{this.props.value}</p>
                </div>
            </div>
        );
    }
}

export default ServicesContentItem;