import React from "react";

class PortfolioItem extends React.Component {
    render() {
        return (
            <div className="bgrid folio-item" style={{transform: this.props.style}}>
                <div className="item-wrap">
                    <img
                        src={this.props.data.img}
                        alt={this.props.data.name}
                        title={this.props.data.name}
                    />

                    <a href='#modal-1' className="overlay">
                        <div className="folio-item-table">
                            <div className="folio-item-cell">
                                <h3 className="folio-title">{this.props.data.name}</h3>
                                <span className="folio-types">
                                    {this.props.data.subName}
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default PortfolioItem;