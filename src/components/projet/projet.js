import React from "react";
class Projet extends React.Component {
  render() {
    return (
      <div className="block-content" id="projet">
        <h1 className="yl-title">Projets Personnels & Accadémiques</h1>
        <div className="yl-experience">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/experience.png"}
            alt=""
            className="experience-img"
          />
          <div className="item-experience">
            <h1 className="experience-title">Site web e-commerce.</h1>
            <p className="experience-date"> Juil 2021 - Août 2021</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Web-Mobiles
            </p>
            <p className="experience-desc">
              Conception et réalisation d'un site web e-commerce{" "}
              <a
                href="https://shop.pharmacielevilvorde.fr/login"
                target="_blank"
              >
                Pharmacie le vilvorde
              </a>
              .
            </p>
            <p className="experience-language">
              <span>Symfony</span>
              <span>Api Plaform</span>
              <span>Vue.js</span>
            </p>
          </div>

          <div className="item-experience">
            <h1 className="experience-title">Projet de fin d’études</h1>
            <p className="experience-date"> Fév 2021 - Juil 2021</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Web-Mobiles
            </p>
            <p className="experience-desc">
              Conception et réalisation d'une application de gestion de
              transport.
            </p>
            <p className="experience-language">
              <span>Symfony</span>
              <span>Api Plaform</span>
              <span>React</span>
              <span>React Native</span>
              <span>UML</span>
              <span>Git</span>
            </p>
          </div>

          <div className="item-experience">
            <h1 className="experience-title">
              Projet d'intégration Full Stack Js - MERN STACK.
            </h1>
            <p className="experience-date"> Fév 2020 - Mai 2020</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Netcapital
            </p>
            <p className="experience-desc">
              Conception et réalisation d'un système de gestion de contenu
              centralisé des produits (P2CMS).
            </p>
            <p className="experience-language">
              <span>MongoDB</span>
              <span>ExpressJs</span>
              <span>React</span>
              <span>Nodejs</span>
              <span>Git</span>
            </p>
          </div>
          <div className="item-experience">
            <h1 className="experience-title">
              Projet d'intégration et de développement - PIDEV.
            </h1>
            <p className="experience-date"> Oct 2019 - Jan 2020</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Esprit
            </p>
            <p className="experience-desc">
              Conception et réalisation d'une application de gestion des projets
              de fin d'études pour les universités.
            </p>
            <p className="experience-language">
              <span>JavaEE</span>
              <span>Angular</span>
              <span>JPA</span>
              <span>Hibernate</span>
              <span>REST API</span>
              <span>Mysql</span>
              <span>UML</span>
            </p>
          </div>
          <div className="item-experience">
            <h1 className="experience-title">
              Projet d'intégration et de développement - PIDEV.
            </h1>
            <p className="experience-date"> Jan 2019 - Mai 2019</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Esprit
            </p>
            <p className="experience-desc">
              Conception et réalisation 3 applications (desktop, web, mobile)
              qui visent à fournir une plateforme de communication pour les
              passionnés de camping.
            </p>
            <p className="experience-language">
              <span>Java</span>
              <span>JavaFx</span>
              <span>Symfony 3.4</span>
              <span>CodenameOne</span>
            </p>
          </div>
          <div className="item-experience">
            <h1 className="experience-title">
              Projet de fin d'études (Licence).
            </h1>
            <p className="experience-date"> Fév 2018 - Mai 2018</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Arabsoft
            </p>
            <p className="experience-desc">
              Conception et réalisation d'une application qui gère l'ensemble
              des processus de la société.
            </p>
            <p className="experience-language">
              <span>Laravel</span>
              <span>Vue.js</span>
              <span>Pusher.js</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projet;
