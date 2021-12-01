import React from "react";
import { Data } from "./data";
import NotFound from "../404/notFound";

class PortfolioModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolios : Data,
            portfolio : '',
            _index: props._index
        }
    }

    componentDidMount() {
        this.setState({
            portfolio : this.state.portfolios.find((portfolio, index) => index === this.state._index )
        })
    }

    previousClick = () => {
        this.setState({
            _index : this.state._index - 1,
            portfolio : this.state.portfolios.find((portfolio, index) => index === this.state._index - 1 )
        })
    }

    nextClick = () => {
        this.setState({
            _index : this.state._index + 1,
            portfolio : this.state.portfolios.find((portfolio, index) => index === this.state._index + 1 )
        })
    }

    handleClose = () => {
        this.props.hide();
    }

    render() {
        const { portfolio, portfolios, _index } =  this.state
        const language = portfolio && portfolio.language?.map((language, index ) =>
                <span key={index}> { language } </span>
        )
        return (
            <div className="portfolio-modal">
                <span className="btn-close" onClick={ this.handleClose }>
                    <i className="fa fa-close"></i>
                </span>
                {
                    portfolio ?
                        <div className="portfolio-content">
                            <div className="row">
                                <div className="col-xs-12 col-sm-5">
                                    <h1 className="modal-title">
                                        { portfolio.title }
                                    </h1>
                                    <p className="modal-date"> { portfolio.date  } </p>
                                    <p className="modal-description">
                                        { portfolio.description }
                                    </p>
                                    <p className="modal-company">
                                        <i className="fa fa-building-o"></i>
                                        { portfolio.company }
                                    </p>
                                    <p className="modal-link">
                                        <span>Lien:</span>
                                        <span>
                                            <a href={ portfolio.link.url } >
                                                { portfolio.link.name }
                                            </a>
                                            {
                                                portfolio.link_2 &&
                                                <a href={portfolio.link_2.url}>
                                                    {portfolio.link_2.name}
                                                </a>
                                            }
                                        </span>
                                    </p>
                                    <div className="modal-language">
                                        { language }
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-7">
                                    <div className="modal-video">
                                        <iframe
                                            src={ portfolio.youtube } >
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-social">
                                <a href="https://github.com/yassinelhb"><i className="fa fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/yassine-lahbib-7b32b617a"><i className="fa fa-linkedin"></i></a>
                            </div>
                            <div className = { _index === 0 ? "modal-navigate navigate-right" : "modal-navigate" }>
                                {
                                    _index !== 0 &&
                                    <span onClick={ this.previousClick }>
                                        <i className="fa fa-long-arrow-left"></i>
                                        Previous Project
                                    </span>
                                }
                                {
                                    _index !== portfolios.length - 1 &&
                                    <span onClick={ this.nextClick }>
                                        Next Project
                                        <i className="fa fa-long-arrow-right"></i>
                                    </span>
                                }
                            </div>
                        </div>
                        :
                        <NotFound/>
                }
            </div>
        )
    }
}

export default PortfolioModal;
