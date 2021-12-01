import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div className="block-content" id="skills">
        <h1 className="yl-title">Compétences</h1>
        <div className="yl-skills">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h4 className="item-skills-title">Langages de programmation</h4>
              <div className="skills-bar-h">
                <p className="skills-label">HTML / CSS</p>
                <div className="progress">
                  <div className="percentage p-90"></div>
                </div>
              </div>
              <div className="skills-bar-h">
                <p className="skills-label">JavaScript</p>
                <div className="progress">
                  <div className="percentage p-80"></div>
                </div>
              </div>
              <div className="skills-bar-h">
                <p className="skills-label">PHP</p>
                <div className="progress">
                  <div className="percentage p-75"></div>
                </div>
              </div>
              <div className="skills-bar-h">
                <p className="skills-label">JAVA</p>
                <div className="progress">
                  <div className="percentage p-75"></div>
                </div>
              </div>
              <h4 className="item-skills-title">Frameworks & CMS </h4>
              <div className="skills-bar-h">
                <p className="skills-label">React</p>
                <div className="progress">
                  <div className="percentage p-85"></div>
                </div>
              </div>
              <div className="skills-bar-h">
                <p className="skills-label">NodeJs</p>
                <div className="progress">
                  <div className="percentage p-80"></div>
                </div>
              </div>
              <div className="skills-bar-h">
                <p className="skills-label">ExpressJs</p>
                <div className="progress">
                  <div className="percentage p-80"></div>
                </div>
              </div>
              <div className="skills-bar-h">
                <p className="skills-label">Angular / Vue.js</p>
                <div className="progress">
                  <div className="percentage p-80"></div>
                </div>
              </div>
              <div className="skills-bar-h">
                <p className="skills-label">Symfony / Laravel</p>
                <div className="progress">
                  <div className="percentage p-75"></div>
                </div>
              </div>

              <div className="skills-bar-h">
                <p className="skills-label">SpringBoot</p>
                <div className="progress">
                  <div className="percentage p-75"></div>
                </div>
              </div>
              <h4 className="item-skills-title">Base de données</h4>

              <div className="skills-bar-h">
                <p className="skills-label">Mysql / SQL</p>
                <div className="progress">
                  <div className="percentage p-80"></div>
                </div>
              </div>

              <div className="skills-bar-h">
                <p className="skills-label">MongoDB</p>
                <div className="progress">
                  <div className="percentage p-75"></div>
                </div>
              </div>

              <h4 className="item-skills-title">Méthodologies & Conception</h4>


              <div className="skills-bar-h">
                <p className="skills-label">
                  Scrum
                </p>
                <div className="progress">
                  <div className="percentage p-80"></div>
                </div>
              </div>
              <div className="skills-bar-h">
                <p className="skills-label">
                  UML
                </p>
                <div className="progress">
                  <div className="percentage p-75"></div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="skills-bar-circle">
                <div className="progress-circle p70">
                  <span>70%</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
                <p className="skills-label">Project Management</p>
              </div>
              <div className="skills-bar-circle">
                <div className="progress-circle p90">
                  <span>90%</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
                <p className="skills-label">Team Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
