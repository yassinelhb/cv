import React from "react";
class About extends React.Component {
  render() {
    return (
      <div className="block-content" id="about">
        <h1 className="yl-title">À Propos</h1>
        <p className="desc-about">
          Développeur Web Full-Stack. Je suis très passionné et dévoué à mon
          travail. Je suis motivé, actif, dynamique. J’ai une riche expérience
          durant mes études, mes stages et mes projets freelance.
        </p>
        <div className="yl-info-list">
          <p className="list-item">
            <span>Age.....</span>25 ans
          </p>
          <p className="list-item">
            <span>Adresse.....</span>92220 Bagneux, France
          </p>
          <p className="list-item">
            <span>Email.....</span> yassinelhb1@gmail.com
          </p>
          <p className="list-item">
            <span>Téléphone.....</span> +33 766 858 507
          </p>
          <p className="list-item">
            <span>Skype.....</span> lhb.yassine
          </p>
          <p className="list-item">
            <span>Freelance.....</span>Available
          </p>
        </div>
      </div>
    );
  }
}

export default About;
