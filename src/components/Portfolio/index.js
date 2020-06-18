import React from "react";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioContent from "./PortfolioContent";

class Portfolio extends React.Component {
    render() {
        return (
            <section id="portfolio">
                <PortfolioHeader />
                <PortfolioContent />
            </section>
        )
    }
}

export default Portfolio;