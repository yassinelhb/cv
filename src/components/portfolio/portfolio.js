import React from "react";
import PortfolioModal from "./portfolio-modal";
import { Data } from "./data";

class Portfolio extends React.Component {

    constructor() {
        super();
        this.state = {
            modal : false,
            portfolios : Data,
            portfolio : ''
        }
    }

    portfolioClick = (index) => {
        this.setState({
            portfolio : index,
            modal : true
        })
    }

    hideModal = () => {
        this.setState({
            modal: false,
            portfolio: ''
        })
    }

    render() {

        const { modal, portfolio } = this.state
        const portfolios = this.state.portfolios.map((portfolio,index) =>
            <div className="portfolio-item" onClick={ () => this.portfolioClick(index) } key={index}>
                <img src={  process.env.PUBLIC_URL + '/assets/img/'+ portfolio.img } className="portfolio-img" alt=""/>
                <div className="portfolio-overlay">
                    <span>{ portfolio.title }</span>
                </div>
            </div>
        )

        return (
            <div className="block-content" id="portfolio">
                <h1 className="yl-title">Portfolio</h1>
                <div className="yl-portfolio">
                    <div className="portfolio-column">
                        { portfolios }
                    </div>
                </div>
                {
                    modal &&
                    <PortfolioModal _index = { portfolio }  hide={ this.hideModal } />
                }
            </div>
        )

    }
}

export default Portfolio;
