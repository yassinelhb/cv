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
            <p className="experience-date"> Juin 2021 - Août 2021</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Web-Mobiles
            </p>
            <p className="experience-desc">
              Conception et la réalisation d'un site web e-commerce <a href="https://shop.pharmacielevilvorde.fr/login" target="_blank">Pharmacie le vilvorde</a>.
            </p>
            <p className="experience-language">
              <span>Symfony</span>
              <span>Api Plaform</span>
              <span>Vue.js</span>
            </p>
          </div>
          <div className="item-experience">
            <h1 className="experience-title">
              Projet d'Intégration Full Stack Js - MERN STACK.
            </h1>
            <p className="experience-date"> Fév 2020 - Mai 2020</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Netcapital
            </p>
            <p className="experience-desc">
              Conception et Réalisation d'un Système de gestion de contenu
              centralisé des produits (P2CMS).
            </p>
            <p className="experience-language">
              <span>MongoDB</span>
              <span>ExpressJs</span>
              <span>React</span>
              <span>Nodejs</span>
            </p>
          </div>
          <div className="item-experience">
            <h1 className="experience-title">
              Projet d'Intégration et de Développement - PIDEV.
            </h1>
            <p className="experience-date"> Oct 2019 - Jan 2020</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Esprit
            </p>
            <p className="experience-desc">
              Conception et Développement d'une Plateforme de Projet de Fin
              d'Études.
            </p>
            <p className="experience-language">
              <span>JEE</span>
              <span>Angular Js</span>
              <span>JPA</span>
              <span>Hibernate</span>
              <span>REST</span>
              <span>Mysql</span>
            </p>
          </div>
          <div className="item-experience">
            <h1 className="experience-title">
              Projet d'Intégration et de Développement - PIDEV.
            </h1>
            <p className="experience-date"> Jan 2019 - Mai 2019</p>
            <p className="experience-company">
              <i className="fa fa-building-o"></i>
              Esprit
            </p>
            <p className="experience-desc">
              Conception et Développement d'une Plateforme de Randonnée.
            </p>
            <p className="experience-language">
              <span>Java</span>
              <span>JavaFx</span>
              <span>Symfony 3.4</span>
              <span>CodenameOne</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projet;
