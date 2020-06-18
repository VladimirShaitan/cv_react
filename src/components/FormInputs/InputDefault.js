import React from "react";

class InputDefault extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-field">
                <input
                    name={this.props.name}
                    required={this.props.required ? this.props.required : ''}
                    type={this.props.type}
                    id={this.props.id ? this.props.id : ''}
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                    onChange={this.props.inputChange}
                />
            </div>
        )
    }
}

export default InputDefault;