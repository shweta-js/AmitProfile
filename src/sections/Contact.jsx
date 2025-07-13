import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-text">
        <h1 className="headline">Let's<br />Connect & Chat</h1>
        <p className="subtext">Feel free to reach out via any platform. I'm just a click away!</p>
      </div>
<hr className='divider-line'/>
      <div className="contact-icons">
        <div className="icon github"><FaGithub /></div>
        <div className="icon linkedin"><FaLinkedin /></div>
        <div className="icon whatsapp"><FaWhatsapp /></div>
        <div className="icon email"><FaEnvelope /></div>
        <div className="icon phone"><FaPhoneAlt /></div>
      </div>
    </section>
  );
};

export default Contact;
