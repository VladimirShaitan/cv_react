import React from "react";
import modal from "../../scripts/modal";

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.closePop = this.closePop.bind(this);
    }

    closePop(){
        modal.close('imagesPop');
    }


    render() {
        return (
            <div id="popups">
                <div className="overlay" onClick={this.closePop} />
                <div className="popupsWrapper">
                    <div id="imagesPop" className="pop-content">
                        <div className="close-pop">
                                <a target="_blank" download>
                                    <i className="fa fa-download" />
                                </a>

                                <i onClick={this.closePop} className="fa fa-times" />
                        </div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup;