import React from "react";

class Service extends React.Component {
    render() {
        return (
            <div className="yl-block">
                <h1 className="yl-title">My Services</h1>
                <div className="yl-services row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="item-service">
                            <img src={ process.env.PUBLIC_URL + '/assets/icons/design.png' } className="service-img" alt="" />
                            <h1 className="service-title">Web Design</h1>
                            <p className="service-desc">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <div className="item-service">
                            <img src={ process.env.PUBLIC_URL + '/assets/icons/code.png' } className="service-img" alt=""/>
                            <h1 className="service-title">Web Development</h1>
                            <p className="service-desc">
                                Modern and mobile-ready website that will help you reach all of your marketing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;
