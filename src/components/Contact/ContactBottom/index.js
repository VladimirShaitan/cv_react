import React from "react";
import ContactBottomItem from "./ContactBottomItem";

class ContactBottom extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            {
                classNames: ["col-four", "tab-full"],
                icon: 'icon-pin',
                title: 'Where to find me',
                value: 'Odessa, Ukraine'
            },
            {
                classNames: ["col-four", "tab-full", 'collapse'],
                icon: 'icon-mail',
                title: 'Email Me At',
                value: 'shaitan.vladimir@gmail.com'
            },
            {
                classNames: ["col-four", "tab-full"],
                icon: 'icon-phone',
                title: 'Telegram:',
                value: '@vlad_sha2'
            }
        ]
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.setState({
            data: this.items.map((item, index) => {
                return (
                    <ContactBottomItem
                        classNames={item.classNames}
                        icon={item.icon}
                        title={item.title}
                        value={item.value}
                        key={index}
                    />
                )
            })
        })
    }


    render() {
        return (
            <div className="row contact-info">
                {this.state.data}
            </div>
        )
    }
}

export default ContactBottom;