import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-field">
                <button
                    className="submitform"
                    onClick={this.props.submit}
                    type={"submit"}
                >Submit</button>
                <div id="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Button;