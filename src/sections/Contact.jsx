import React from "react";
import "./Contact.css";
import contactImg from "../assets/contact.png";

import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaDownload } from 'react-icons/fa';


export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-left">
        <h2>Let's <br /> connect <br /> and chat</h2>
        <div className="contact-icons">
          <div className="icon"><a href="https://github.com/amit-js"><FaGithub /></a></div>
        <div className="icon"><a href="https://linkedin.com/in/amit-s-51593714a "><FaLinkedin /></a></div>
        <div className="icon"><a href="https://wa.me/9591092412"><FaWhatsapp /></a></div>
        <div className="icon"><a href="mailto:work.amit.s@gmail.com"><FaEnvelope /></a></div>
              </div>
      </div>
      <div className="contact-right">
        <img src={contactImg} alt="Contact illustration" />
      </div>
    </section>
  );
}
