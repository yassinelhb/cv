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
            <h1 className="experience-title">Intégrateur Web</h1>
            <p className="experience-date"> Sept 2021 - Oct 2021</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              FeelCity - Freelance
            </p>
            <p className="experience-desc">
              Développement et intégration des templates dans la plateforme{" "}
              <a href="https://coq-trotteur.com/" target="_blank">Coq-trotteur</a>.
            </p>
            <p className="experience-language">
              <span>React</span>
              <span>SCSS</span>
              <span>Figma</span>
            </p>
          </div>
          <div className="item-experience">
            <h1 className="experience-title">Projet de fin d'études</h1>
            <p className="experience-date"> Fév 2021 - Août 2021</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Web-Mobiles
            </p>
            <p className="experience-desc">
              Conception et réalisation d'une plateforme de gestion de
              transport.
            </p>
            <p className="experience-language">
              <span>Symfony</span>
              <span>Api Platform</span>
              <span>React</span>
              <span>React Native</span>
            </p>
          </div>
          <div className="item-experience">
            <h1 className="experience-title">Projet de fin d'année</h1>
            <p className="experience-date"> Jui 2020 - Sep 2020</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Web-Mobiles
            </p>
            <p className="experience-desc">
              Développement et mise en place d'un ERP.
            </p>
            <p className="experience-language">
              <span>SpringBoot</span>
              <span>Angular 7</span>
            </p>
          </div>
          <div className="item-experience">
            <h1 className="experience-title">Projet de fin d'études</h1>
            <p className="experience-date"> Fév 2018 - Mai 2018</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Arabsoft
            </p>
            <p className="experience-desc">
              Conception et la réalisation d'un système d'integration
            </p>
            <p className="experience-language">
              <span>Laravel</span>
              <span>Vue.js</span>
              <span>Pusher.js</span>
            </p>
          </div>
          <div className="item-experience">
            <h1 className="experience-title">Projet de fin d'année</h1>
            <p className="experience-date"> Jui 2017 - Sep 2017</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              OzaliseTechnologie
            </p>
            <p className="experience-desc">
              Conception et la réalisation d'un site web e-commerce.
            </p>
            <p className="experience-language">
              <span>PHP</span>
              <span>JQuery</span>
              <span>Ajax</span>
              <span>Mysql</span>
              <span>HTML</span>
              <span>CSS</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
