import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div className="block-content" id="education">
        <h1 className="yl-title">Formations</h1>
        <div className="yl-education">
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/education.png"}
            alt=""
            className="education-img"
          />
          <div className="item-education">
            <h1 className="education-title">
              Diplôme national d'ingénieur en informatique
            </h1>
            <p className="education-date">
              2018-2021 - Ecole supérieure d'ingénierie et de
              technologies, Tunis.
            </p>
            <p className="education-desc">
              Spécialisation dans les technologies du web et de l'internet.
            </p>
          </div>
          <div className="item-education">
            <h1 className="education-title">
              Licence appliquée en technologiques de l'informatique
            </h1>
            <p className="education-date">
              2015-2018 - Institut supérieure des études technologiques de
              Bizerte
            </p>
            <p className="education-desc">
              Développement des systèmes d'information.
            </p>
          </div>
          <div className="item-education">
            <h1 className="education-title">
              Baccalauréat en sciences de l'informatique
            </h1>
            <p className="education-date">2015 - Lycée El alia</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
