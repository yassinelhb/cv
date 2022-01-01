import React from "react";
import Menu from "../components/menu/menu";
import Home from "../components/home/home";
import About from "../components/about/about";
import Education from "../components/education/education";
import Experience from "../components/experience/experience";
import Skills from "../components/skills/skills";
import Portfolio from "../components/portfolio/portfolio";
import Contact from "../components/contact/contact";
import Projet from "../components/projet/projet";

class Index extends React.Component {
  render() {
    return (
      <div className="yl-content" id="main-content">
        <Menu />
        <Home />
        <div className="yl-blocks">
          <About />
          <Education />
          <Experience />
          <Projet />
          <Skills />
          <Portfolio />
          <Contact />
          <div className="yl-logo-img">
            <img src={process.env.PUBLIC_URL + "/assets/img/img.png"} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
