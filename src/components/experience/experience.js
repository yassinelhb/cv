import React from "react";
class Experience extends React.Component {
  render() {
    return (
      <div className="block-content" id="experience">
        <h1 className="yl-title">Expériences professionnelles</h1>
        <div className="yl-experience">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/experience.png"}
            alt=""
            className="experience-img"
          />

          <div className="item-experience">
            <h1 className="experience-title">Développeur Front-end</h1>
            <p className="experience-date"> Sept 2021 - Oct 2021</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              FeelCity
            </p>
            <p className="experience-desc">
              Développement et intégration des templates dans une plateforme (
              <a href="https://coq-trotteur.com/" target="_blank">
                Coq-trotteur
              </a>
              ).
            </p>
            <p className="experience-language">
              <span>React</span>
              <span>SCSS</span>
              <span>Slack</span>
              <span>Git</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
