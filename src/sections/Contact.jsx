import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaDownload } from 'react-icons/fa';

const Contact = () => {

  return (
    <section className="contact-container">
      <div className="contact-text">
        <h1 className="headline">Let's<br />Connect & Chat</h1>
        <p className="subtext">Feel free to reach out via any platform. I'm just a click away!</p>
        <a 
          href="../../public/Shweta_Sure_Resume.pdf"
          download
          target="_blank" 
type="application/octet-stream" 
          className="download-resume-button"
        >
          Download Resume <FaDownload/> </a>
      </div>

      <hr className='divider-line' />
      <div className="contact-icons">
        <div className="icon github"><a href="https://github.com/shweta-js"><FaGithub /></a></div>
        <div className="icon linkedin"><a href="https://in.linkedin.com/in/shweta-sure-308879193"><FaLinkedin /></a></div>
        <div className="icon whatsapp"><a href="https://wa.me/8310767082"><FaWhatsapp /></a></div>
        <div className="icon email"><a href="mailto:shwetajs.wrk@gmail.com"><FaEnvelope /></a></div>
      </div>
    </section>
  );
};

export default Contact;
