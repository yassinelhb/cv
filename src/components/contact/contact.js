import React from "react";
import ContactForm from "./contact-form";

class Contact extends React.Component {
  render() {
    return (
      <div className="block-content" id="contact">
        <h1 className="yl-title">Contact</h1>
        <div className="yl-contact">
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
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
