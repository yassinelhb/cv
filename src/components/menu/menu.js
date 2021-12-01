import React from "react";

class Menu extends React.Component {
  toggleMenu = () => {
    document.getElementById("toggle-menu").classList.toggle("show");
  };

  onItemClick = (section) => {
    if (
      !document
        .getElementById("main-content")
        .classList.contains("minimize-content")
    )
      document.getElementById("main-content").classList.add("minimize-content");
    if (document.getElementById("toggle-menu").classList.contains("show")) {
      document.getElementById("toggle-menu").classList.remove("show");
    }

    window.requestAnimationFrame(() => {
      document.getElementById(section).scrollIntoView({
        behavior: "smooth",
      });
    });
  };

  onCloseMenu = () => {
    document
      .getElementById("main-content")
      .classList.remove("minimize-content");
  };

  render() {
    return (
      <div className="nav-menu" id="toggle-menu">
        <span className="btn_toggle" onClick={this.toggleMenu}></span>
        <div className="list-menu">
          <span onClick={() => this.onItemClick("about")} className="nav-link">
            à propos
          </span>
          <span
            onClick={() => this.onItemClick("education")}
            className="nav-link"
          >
            Formations
          </span>
          <span
            onClick={() => this.onItemClick("experience")}
            className="nav-link"
          >
            expériences
          </span>
          <span onClick={() => this.onItemClick("projet")} className="nav-link">
            Projets
          </span>
          <span onClick={() => this.onItemClick("skills")} className="nav-link">
            Compétences
          </span>
          <span
            onClick={() => this.onItemClick("portfolio")}
            className="nav-link"
          >
            portfolio
          </span>
          <span
            onClick={() => this.onItemClick("contact")}
            className="nav-link"
          >
            contact
          </span>
          <span onClick={this.onCloseMenu} className="nav-link link-close">
            <i className="fa fa-close"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Menu;
