import React from "react";

class Home extends React.Component {

    render() {
        return (
            <div className="yl-home">
                <div className="home-content">
                    <div className="h-content-desc">
                        <p>
                            <i className="fa fa-minus"></i>
                            <i className="fa fa-minus"></i>
                            bienvenue dans mon portfolio
                        </p>
                        <h1>Curieux & Autonome</h1>
                        <h2>le travail est ma première priorité</h2>
                        <h3>Développeur web full stack</h3>
                        <a className="btn-download" href={ process.env.PUBLIC_URL + '/assets/file/CV_YASSINE_LAHBIB.pdf' } download="CV_YASSINE_LAHBIB.pdf">
                            Télécharger CV
                        </a>
                    </div>
                    <div className="h-content-img">
                        <img src={ process.env.PUBLIC_URL + '/assets/img/ysl.png' } alt="" />
                    </div>
                </div>
                <div className="h-content-social">
                    <a href="https://github.com/yassinelhb" target="_blank"><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/yassine-lahbib-7b32b617a" target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a href="https://www.youtube.com/channel/UCLY2ADtJjsfrrdEtilniAtA" target="_blank"><i className="fa fa-youtube"></i></a>
                </div>
            </div>
        )
    }
}

export default Home;
