import React from "react";
import AboutInfoItem from "./AboutInfoItem";
import AboutSkillsItem from "./AboutSkillsItem";

class AboutContentItem extends React.Component {
    constructor(props) {
        super(props);
        this.items = null;
        this.fillItems();
    }

    fillItems() {
        if(this.props.listClName === 'info-list') {
            this.items = this.props.items.map((item, index) => {
                return <AboutInfoItem name={item.name} value={item.value} key={index} />
            });
        }

        if(this.props.listClName === 'skill-bars') {
            let skills = [...this.props.items];
            skills.length = 5;
            this.items = skills.map((skill, index) => <AboutSkillsItem name={skill.name} value={skill.percentage} key={index} />);
        }
    }

    render() {
        return (
            <div className="col-six tab-full">
                <h3>{this.props.title}</h3>
                <ul className={this.props.listClName}>
                    {this.items}
                </ul>
            </div>
        )
    }


}

export default AboutContentItem