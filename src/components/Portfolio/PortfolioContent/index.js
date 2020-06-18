import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from '../../../data/portfolio.json'

class PortfolioContent extends React.Component {
    constructor(props) {
        super(props);
        this.portfolioItems = null;
        this.fillPortfolio();
    }

    fillPortfolio() {
        this.portfolioItems = portfolio.map((item, index) => {
            let style = index % 2 !== 0 &&  index !== 1 ?  'translateY(-138px)' : 'initial';
            return <PortfolioItem data={item} style={style} key={index} />;
        } )
    }


    render() {
        return (
            <div className="row portfolio-content">
                <div className="col-twelve">
                    <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
                        {this.portfolioItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioContent;