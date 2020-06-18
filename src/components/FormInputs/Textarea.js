import React from "react";

class Textarea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="form-field">
                <textarea
                    rows={this.props.rows ? this.props.rows : '10'}
                    cols={this.props.cols ? this.props.cols : '50'}
                    style={{
                        margin: '0px',
                        maxWidth: '738px',
                        height: '255px',
                        resize: 'none'
                    }}
                    name={this.props.name}
                    required={this.props.required ? this.props.required : ''}
                    id={this.props.id ? this.props.id : ''}
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                    onChange={this.props.inputChange}
                />
            </div>
        )
    }
}

export default Textarea;