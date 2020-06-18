import React from "react";
import ServicesContentItem from "./ServicesContentItem";
import services from '../../../data/services.json'

class ServicesContent extends React.Component {
    constructor(props) {
        super(props);
        this.services = null;
        this.fillServices();
    }

    fillServices() {
        this.services = services.map((item, index) => {
            return (
                <ServicesContentItem
                icon={item.icon}
                name={item.name}
                value={item.description}
                key={index}
                />
            )
        });
    }

    render() {
        return (
            <div className="row services-content">
                <div className="services-list">
                    {this.services}
                </div>
            </div>
        )
    }
}

export default ServicesContent;