import React from "react";
import Maps from "../maps/maps";
import Fade from "react-reveal/Fade";
import * as emailjs from "emailjs-com";

class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            valid: false,
            response : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },() => {

            if (this.state.email && this.state.message) {
                this.setState({valid: true})

            } else {
                this.setState({valid: false})
            }

        })
    }

    handleSubmit = () => {

        const { name, email, message } = this.state
        let templateParams = {
            from_name: email,
            to_name: 'yassinelahbib1111@gmail.com',
            message_html: name + '<br/>' +message,
        }

        emailjs.send(
            'gmail',
            'template_hF6CdePR',
            templateParams,
            'user_PgSSSYWJU5VGYk4kQQK7z'
        ).then((response) =>
            response.status == 200 &&
                 this.setState({
                     response: 'Votre message à bien été envoyé ...',
                     name: '',
                     email: '',
                     message: ''
                 })
        ).catch(e =>
            this.setState({
                response: 'Vérifier votre connexion ...'
            })
        ).finally(() =>
            setTimeout(() => this.setState({ response: ''}),4000)
        );

    }


    render() {
        return (
            <div className="contact-form">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="form-group">
                            <input type="text" placeholder="Name*" value={this.state.name} name="name" onChange={ (e) => this.handleChange(e)  }/>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <div className="form-group">
                            <input type="text" placeholder="email*" value={this.state.email} name="email" onChange={ (e) => this.handleChange(e)  }/>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12">
                        <div className="form-group">
                            <textarea placeholder="Your message" value={this.state.message} name="message" onChange={ (e) => this.handleChange(e)  }></textarea>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <button className={ this.state.valid ? "btn-submit" : "btn-submit disabled"} onClick={ this.handleSubmit } disabled = { ! this.state.valid }>Envoie</button>
                        {
                            this.state.response &&
                            <span className="alert-response"> {this.state.response}</span>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm;
